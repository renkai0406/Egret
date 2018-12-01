var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ErrorCode;
(function (ErrorCode) {
    ErrorCode[ErrorCode["CLOSE_BY_CHECK_PING"] = 1] = "CLOSE_BY_CHECK_PING";
    ErrorCode[ErrorCode["CLOSE_BY_CHECK_ARGS"] = 2] = "CLOSE_BY_CHECK_ARGS";
    ErrorCode[ErrorCode["CLOSE_BY_CHECK_VERSION"] = 3] = "CLOSE_BY_CHECK_VERSION";
    ErrorCode[ErrorCode["CLOSE_BY_CHECK_SEQUENCE"] = 4] = "CLOSE_BY_CHECK_SEQUENCE";
    ErrorCode[ErrorCode["CLOSE_BY_CHECK_DUPLICATE"] = 5] = "CLOSE_BY_CHECK_DUPLICATE";
    ErrorCode[ErrorCode["CLOSE_BY_LOGIN_TIMEOUT"] = 6] = "CLOSE_BY_LOGIN_TIMEOUT";
    ErrorCode[ErrorCode["CLOSE_BY_SERVER_SHUTDOWN"] = 7] = "CLOSE_BY_SERVER_SHUTDOWN";
})(ErrorCode || (ErrorCode = {}));
var CallBackHelper = (function () {
    function CallBackHelper() {
        this.msg = null;
        this.callBack = null;
    }
    return CallBackHelper;
}());
__reflect(CallBackHelper.prototype, "CallBackHelper");
var NetManager = (function () {
    function NetManager(url, openId) {
        this._callBackList = null;
        this._socket = null;
        this._url = "";
        this._openId = "";
        this._sendSeq = 0;
        this._reciveSeq = 0;
        this._dataParser = null;
        this._callBackMap = null;
        this._callBackList = new Array();
        this._callBackMap = new nano.Map();
        this._dataParser = new DataParser(this.ResivePack.bind(this));
        this._socket = new WebSocketClient(this);
        this._url = url;
        this._openId = openId;
        this._sendSeq = 0;
        this._reciveSeq = 0;
        NetManager._instance = this;
    }
    Object.defineProperty(NetManager, "Instance", {
        get: function () {
            return NetManager._instance;
        },
        enumerable: true,
        configurable: true
    });
    NetManager.prototype.Connect = function () {
        this._socket.Connect(this._url, this._openId, false);
    };
    NetManager.prototype.Reconnect = function () {
        console.log("[socket] start reconnect");
        this._socket.Connect(this._url, this._openId, true);
        this._callBackList = new Array();
    };
    NetManager.prototype.Close = function () {
        if (this._socket) {
            this._socket.Close();
        }
    };
    /*
    发送一个网络消息
    */
    NetManager.prototype.SendMsg = function (msg, callBack) {
        if (callBack) {
            var helper = new CallBackHelper();
            helper.msg = msg;
            helper.callBack = callBack;
            this._callBackList.push(helper);
        }
        var msgName = msg.getMessageProtoName() + "Message";
        var protoId = ProtoMng.Instance.GetProtoIdByName(msgName);
        var spaceId = Math.floor(protoId / 10000);
        var cmdId = protoId % 10000;
        var bodyBuff = msg.serialize();
        var bodySize = bodyBuff.byteLength;
        var beginPack = new ByteArray();
        beginPack.WriteInt(bodySize + 10);
        beginPack.WriteShort(this._sendSeq);
        beginPack.WriteShort(spaceId);
        beginPack.WriteShort(cmdId);
        console.log("[socket] send sequence " + this._sendSeq);
        this._sendSeq++;
        var headerBuff = beginPack.getbytes();
        var sendBuff = headerBuff;
        if (bodyBuff) {
            sendBuff = DataParser.MergeArrayBuffer(headerBuff, bodyBuff);
        }
        this._socket.SendData(sendBuff);
    };
    /**
     * 添加一个消息接收回调，用于 服务端响应类型消息
     */
    NetManager.prototype.AddCallBack = function (protoId, callBack) {
        if (this._callBackMap.Contains(protoId)) {
            console.log("[socket] 只能设置一个回调");
            return;
        }
        this._callBackMap.Add(protoId, callBack);
    };
    /**
     * 移除一个回调
     */
    NetManager.prototype.RemoveCallBack = function (protoId) {
        this._callBackMap.Remove(protoId);
    };
    NetManager.prototype.ResivePack = function (pack) {
        if (pack.seq == this._reciveSeq) {
            this._reciveSeq++;
        }
        else {
            this.ErrorClose();
            return;
        }
        var protoId = pack.spaceId * 10000 + pack.cmd;
        var protoName = ProtoMng.Instance.GetProtoNameById(protoId, false);
        if (protoName == null) {
            console.log("[socket] proto ID error:" + protoId);
        }
        if (this._callBackMap.Contains(protoId)) {
            var msg = ProtoMng.Instance.GetResponseProtoById(pack.spaceId, pack.cmd);
            msg.deserialize(pack.data);
            this._callBackMap[protoId](msg);
        }
        else {
            var sendProtoName = ProtoMng.Instance.GetProtoNameById(protoId, true);
            var removed = false;
            for (var i = 0; i < this._callBackList.length; i++) {
                var msgInfo = this._callBackList[i];
                if (msgInfo.msg.getMessageProtoName() + "Message" == sendProtoName) {
                    var msg = ProtoMng.Instance.GetResponseProtoById(pack.spaceId, pack.cmd);
                    msg.deserialize(pack.data);
                    msgInfo.callBack(msgInfo.msg, msg);
                    this._callBackList.splice(i, 1);
                    removed = true;
                    break;
                }
            }
            if (!removed) {
                console.log("[socket] proto has not callBack:" + protoId);
            }
        }
    };
    NetManager.prototype.OnOpen = function (ev) {
        console.log("[socket] socket connect success");
    };
    NetManager.prototype.OnMessage = function (ev) {
        this._dataParser.Parse(ev.data);
    };
    NetManager.prototype.OnError = function (ev) {
        console.log("[socket] socket connect error " + ev.error);
        egret.setTimeout(this.Reconnect, this, 5000);
    };
    NetManager.prototype.OnClose = function (evt) {
        var errPop = function (errMsg) {
            console.log("[socket] socket close by server：" + errMsg);
        };
        switch (evt.code) {
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
    };
    NetManager.prototype.ErrorClose = function () {
        console.log("[socket] 错误导致客户端关闭链接");
        this.Close();
        egret.setTimeout(this.Reconnect, this, 5000);
    };
    NetManager._instance = null;
    return NetManager;
}());
__reflect(NetManager.prototype, "NetManager", ["IHandler"]);
