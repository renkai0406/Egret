class Pack {
	public cmd:number = 0;
	public bodySize:number = 0;
	public data:ArrayBuffer = null;
	public seq:number = 0;
	public spaceId:number = 0;

	public constructor() {
    this.cmd = 0;
    this.bodySize = 0;
    this.data = null;
	this.seq = 0;
	this.spaceId = 0;
	}
}

interface IHandler{

	OnOpen(ev: Event);

	OnMessage(ev:MessageEvent);

	OnError(ev:ErrorEvent);

	OnClose(ev:CloseEvent);
}

class WebSocketClient {
	private _socket:WebSocket = null;

	private _url:string = "";

	private _openId:string = "";

	private _handler:IHandler = null;

	public constructor(handler:IHandler) {
		this._socket = null;
		this._openId = "";
		this._url = "";
		this._handler = handler;
	}

	public Connect(url:string, openId:string, isReconnect:boolean):void{
		this._openId = openId;
		this._url = url;

		this.StartConnect(isReconnect);
	}

	protected StartConnect(isReconnect:boolean):void{
		if(this._socket != null)
		{
			if(this._socket.readyState == WebSocket.OPEN)
			{
				console.log("socket is open with no need for connect repeat");
				return;
			}

			this.Close();
		}

		let secret = SystemUtils.GenerateKey(App.Channel * 1000 + App.AppID, 16);

		let pid = 2;

		let connecttionData = "appid=" + App.AppID +
            "&openid=" + this._openId +
            "&channel=" + App.Channel +
            "&deviceid=" + App.DeviceId +
            "&platform=" + pid +
            "&timestamp=" + (new Date().getSeconds()) +
            "&version=" + App.Version +
            "&reconnect=" + isReconnect;


		let key = new MD5().hex_md5(connecttionData + secret);

		let url = this._url + "?" + connecttionData + "&token=" + key;
        //url = url + "&location=" + dt.ModelCenter.userInf.location;

		this._socket = new WebSocket(url, []);

		console.log("[socket] Connect " + url);
		this._socket.binaryType = 'arraybuffer';
        this._socket.onopen = this.OnOpen;
        this._socket.onmessage = this.OnMessage;
        this._socket.onerror = this.OnError;
        this._socket.onclose = this.OnClose;

	}

	public get IsConnected(){
        if (this._socket && this._socket.readyState == WebSocket.OPEN) return true;
        return false;
	}

	public Close():void{
		if(this._socket != null)
		{
			if(this._socket.readyState == WebSocket.OPEN)
			{
				console.log("[socket] close socket");
				this._socket.close();
			}
			else
			{
				console.log("[socket]socket not run");
			}

			
			this._socket = null;
		}

	}

	public SendData(data:any):void{

		if(this._socket == null)
		{
			console.log("[socket]socket:is null, socket maybe can not connect");
			return;
		}

		if(this._socket.readyState == WebSocket.OPEN)
		{
			this._socket.send(data);
		}
	}
	

	protected OnOpen = (ev:Event) => {
		this._handler.OnOpen(ev);
	}

	protected OnMessage = (ev:MessageEvent) =>{
		this._handler.OnMessage(ev);
	}

	protected OnError = (ev:ErrorEvent) => {
		this._handler.OnError(ev);
	}

	protected OnClose = (ev:CloseEvent) =>{
		this._handler.OnClose(ev);
	}


}