// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MessageBox = (function (_super) {
    __extends(MessageBox, _super);
    function MessageBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MessageBox.prototype.GetSkinFile = function () {
        return "exml/common/messagewindow.exml";
    };
    MessageBox.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseClick, this);
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onOkClick, this);
    };
    MessageBox.prototype.onCloseClick = function () {
        this.Close();
    };
    MessageBox.prototype.onOkClick = function () {
        UIManager.Instance.OpenWindow("MessageBox");
    };
    return MessageBox;
}(UIWindow));
__reflect(MessageBox.prototype, "MessageBox");
