var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Pack = (function () {
    function Pack() {
        this.cmd = 0;
        this.bodySize = 0;
        this.data = null;
        this.seq = 0;
        this.spaceId = 0;
        this.cmd = 0;
        this.bodySize = 0;
        this.data = null;
        this.seq = 0;
        this.spaceId = 0;
    }
    return Pack;
}());
__reflect(Pack.prototype, "Pack");
var WebSocketClient = (function () {
    function WebSocketClient(handler) {
        var _this = this;
        this._socket = null;
        this._url = "";
        this._openId = "";
        this._handler = null;
        this.OnOpen = function (ev) {
            _this._handler.OnOpen(ev);
        };
        this.OnMessage = function (ev) {
            _this._handler.OnMessage(ev);
        };
        this.OnError = function (ev) {
            _this._handler.OnError(ev);
        };
        this.OnClose = function (ev) {
            _this._handler.OnClose(ev);
        };
        this._socket = null;
        this._openId = "";
        this._url = "";
        this._handler = handler;
    }
    WebSocketClient.prototype.Connect = function (url, openId, isReconnect) {
        this._openId = openId;
        this._url = url;
        this.StartConnect(isReconnect);
    };
    WebSocketClient.prototype.StartConnect = function (isReconnect) {
        if (this._socket != null) {
            if (this._socket.readyState == WebSocket.OPEN) {
                console.log("socket is open with no need for connect repeat");
                return;
            }
            this.Close();
        }
        var secret = SystemUtils.GenerateKey(App.Channel * 1000 + App.AppID, 16);
        var pid = 2;
        var connecttionData = "appid=" + App.AppID +
            "&openid=" + this._openId +
            "&channel=" + App.Channel +
            "&deviceid=" + App.DeviceId +
            "&platform=" + pid +
            "&timestamp=" + (new Date().getSeconds()) +
            "&version=" + App.Version +
            "&reconnect=" + isReconnect;
        var key = new MD5().hex_md5(connecttionData + secret);
        var url = this._url + "?" + connecttionData + "&token=" + key;
        //url = url + "&location=" + dt.ModelCenter.userInf.location;
        this._socket = new WebSocket(url, []);
        console.log("[socket] Connect " + url);
        this._socket.binaryType = 'arraybuffer';
        this._socket.onopen = this.OnOpen;
        this._socket.onmessage = this.OnMessage;
        this._socket.onerror = this.OnError;
        this._socket.onclose = this.OnClose;
    };
    Object.defineProperty(WebSocketClient.prototype, "IsConnected", {
        get: function () {
            if (this._socket && this._socket.readyState == WebSocket.OPEN)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    WebSocketClient.prototype.Close = function () {
        if (this._socket != null) {
            if (this._socket.readyState == WebSocket.OPEN) {
                console.log("[socket] close socket");
                this._socket.close();
            }
            else {
                console.log("[socket]socket not run");
            }
            this._socket = null;
        }
    };
    WebSocketClient.prototype.SendData = function (data) {
        if (this._socket == null) {
            console.log("[socket]socket:is null, socket maybe can not connect");
            return;
        }
        if (this._socket.readyState == WebSocket.OPEN) {
            this._socket.send(data);
        }
    };
    return WebSocketClient;
}());
__reflect(WebSocketClient.prototype, "WebSocketClient");
