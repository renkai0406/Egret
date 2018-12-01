var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MessageBase = (function () {
    function MessageBase() {
    }
    MessageBase.prototype.getMessageProtoName = function () {
        return "";
    };
    MessageBase.prototype.setData = function (data) {
        this._data = data;
    };
    MessageBase.prototype.getData = function () {
        return this._data;
    };
    MessageBase.prototype.initData = function () {
        this._data = new this._classType();
    };
    MessageBase.prototype.deserialize = function (buff) {
        this._data = this._classType.decode(buff);
    };
    MessageBase.prototype.serialize = function () {
        var arraybuffer = this._data.toArrayBuffer();
        return arraybuffer;
    };
    return MessageBase;
}());
__reflect(MessageBase.prototype, "MessageBase");
