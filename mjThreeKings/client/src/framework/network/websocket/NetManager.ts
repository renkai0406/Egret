
enum ErrorCode{
    CLOSE_BY_CHECK_PING = 1  , // 心跳异常
    CLOSE_BY_CHECK_ARGS = 2  , // 登录参数错误
    CLOSE_BY_CHECK_VERSION = 3  , // 检测到更新
    CLOSE_BY_CHECK_SEQUENCE = 4  , // 请求序号错误
    CLOSE_BY_CHECK_DUPLICATE = 5  , // 重复的连接
    CLOSE_BY_LOGIN_TIMEOUT = 6  , // 超时未登录
    CLOSE_BY_SERVER_SHUTDOWN = 7  , // 服务器关闭
}

class CallBackHelper
{
	public msg:MessageBase = null;
	public callBack:(msgSend:MessageBase,msgRec:MessageBase)=>void = null;
}

class NetManager implements IHandler {

	private _callBackList:Array<CallBackHelper> = null;
	private _socket:WebSocketClient = null;
	private _url:string = "";
	private _openId:string = "";

	private _sendSeq:number = 0;
	private _reciveSeq:number = 0;

	private _dataParser:DataParser = null;

	private _callBackMap:nano.Map<number, (msgRec:MessageBase)=>void> = null;

	public constructor(url:string, openId:string) {
		this._callBackList = new Array<CallBackHelper>();
		this._callBackMap = new nano.Map<number, (msgRec:MessageBase)=>void>();
		this._dataParser = new DataParser(this.ResivePack.bind(this));
		this._socket = new WebSocketClient(this);
		this._url = url;
		this._openId = openId;
		this._sendSeq = 0;
		this._reciveSeq = 0;

		NetManager._instance = this;
	}

	private static _instance:NetManager = null;
	public static get Instance()
	{
		return NetManager._instance;
	}

	public Connect(){
		this._socket.Connect(this._url, this._openId, false);
	}

	public Reconnect(){
		console.log("[socket] start reconnect");

		this._socket.Connect(this._url, this._openId, true);
		this._callBackList = new Array<CallBackHelper>();

	}

	public Close(){
		if(this._socket)
		{
			this._socket.Close();
		}
	}

	/*
	发送一个网络消息
	*/
	public SendMsg(msg:MessageBase, callBack?:(msgSend:MessageBase,msgRec:MessageBase)=>void){

		if(callBack)
		{
			let helper = new CallBackHelper();
			helper.msg = msg;
			helper.callBack = callBack;
			this._callBackList.push(helper);
		}

		let msgName = msg.getMessageProtoName() + "Message";
		let protoId = ProtoMng.Instance.GetProtoIdByName(msgName);
		let spaceId = Math.floor(protoId / 10000);
		let cmdId = protoId % 10000;

		let bodyBuff = msg.serialize();
		let bodySize = bodyBuff.byteLength;

		let beginPack = new ByteArray();
		beginPack.WriteInt(bodySize + 10);
		beginPack.WriteShort(this._sendSeq);
		beginPack.WriteShort(spaceId);
		beginPack.WriteShort(cmdId);
		console.log("[socket] send sequence " + this._sendSeq);
		this._sendSeq++;

        var headerBuff = beginPack.getbytes();
        var sendBuff = headerBuff;
        if(bodyBuff) {
			sendBuff = DataParser.MergeArrayBuffer(headerBuff, bodyBuff)
        }

		this._socket.SendData(sendBuff);		
	}

	/**
	 * 添加一个消息接收回调，用于 服务端响应类型消息
	 */
	public AddCallBack(protoId:number, callBack:(msgRec:MessageBase)=>void){

		if(this._callBackMap.Contains(protoId))
		{
			console.log("[socket] 只能设置一个回调")
			return;
		}

		this._callBackMap.Add(protoId, callBack);
	}

	/**
	 * 移除一个回调
	 */
	public RemoveCallBack(protoId:number){
		this._callBackMap.Remove(protoId);
	}

	public ResivePack(pack:Pack){

		if(pack.seq == this._reciveSeq)
		{
			this._reciveSeq++;
		}
		else
		{
			this.ErrorClose();
			return;
		}

		let protoId = pack.spaceId * 10000 + pack.cmd;
		let protoName = ProtoMng.Instance.GetProtoNameById(protoId, false);
		if(protoName == null)
		{
			console.log("[socket] proto ID error:"+ protoId);
		}

		if(this._callBackMap.Contains(protoId)){
			var msg:MessageBase = ProtoMng.Instance.GetResponseProtoById(pack.spaceId, pack.cmd);
			msg.deserialize(pack.data);

			this._callBackMap[protoId](msg);
		}
		else{
			
			let sendProtoName = ProtoMng.Instance.GetProtoNameById(protoId, true);

			let removed = false;

			for(let i = 0; i < this._callBackList.length; i++)
			{
				let msgInfo = this._callBackList[i];
				if(msgInfo.msg.getMessageProtoName() + "Message" == sendProtoName)
				{
					var msg:MessageBase = ProtoMng.Instance.GetResponseProtoById(pack.spaceId, pack.cmd);
					msg.deserialize(pack.data);
					msgInfo.callBack(msgInfo.msg, msg);

					this._callBackList.splice(i,1);
					removed = true;
					break;
				}
			}

			if(!removed)
			{
				console.log("[socket] proto has not callBack:" + protoId);
				
			}
		}
	}


	public OnOpen(ev: Event){
		console.log("[socket] socket connect success");
	}

	public OnMessage(ev:MessageEvent){
		this._dataParser.Parse(ev.data);
	}

	public OnError(ev:ErrorEvent){
      	console.log("[socket] socket connect error " + ev.error);
		egret.setTimeout(this.Reconnect, this, 5000);
	}

	public OnClose(evt:CloseEvent){
        let errPop = function(errMsg){
        	console.log("[socket] socket close by server："+errMsg);
        }


        switch(evt.code){
            case ErrorCode.CLOSE_BY_CHECK_PING:
                errPop("心跳异常");
                break;
            case ErrorCode.CLOSE_BY_CHECK_ARGS:
                errPop("登录参数错误");
                break;
            case ErrorCode.CLOSE_BY_CHECK_VERSION:
                errPop("检测到更新");
                break;
            case ErrorCode.CLOSE_BY_CHECK_SEQUENCE:
                errPop("请求序号错误");
                break;
            case ErrorCode.CLOSE_BY_CHECK_DUPLICATE:
                errPop("重复的连接");
                break;
            case ErrorCode.CLOSE_BY_LOGIN_TIMEOUT:
                errPop("超时未登录");
                break;
            case ErrorCode.CLOSE_BY_SERVER_SHUTDOWN:
                errPop("服务器关闭");
                break;
        }

        egret.setTimeout(this.Reconnect, this, 5000);
	}


	protected ErrorClose(){
		console.log("[socket] 错误导致客户端关闭链接");
		this.Close();
		egret.setTimeout(this.Reconnect, this, 5000);
	}
}