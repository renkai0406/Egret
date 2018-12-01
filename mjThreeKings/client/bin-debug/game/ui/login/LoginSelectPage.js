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
var LoginSelectPage = (function (_super) {
    __extends(LoginSelectPage, _super);
    function LoginSelectPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginSelectPage.prototype.GetSkinFile = function () {
        return "exml/loginselectpage.exml";
    };
    LoginSelectPage.prototype.OnOpen = function (args) {
        /*let netMng = new NetManager("ws://192.168.40.102:8880/gate",  "aa:bb:cc:dd");
        NetManager.Instance.Connect();*/
        this.btnWechatLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wechatLoginCallback, this);
        this.groupPhoneLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.phoneLoginCallback, this);
        SoundManager.Instance.PlayMusic("denglu_mp3");
    };
    LoginSelectPage.prototype.wechatLoginCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    LoginSelectPage.prototype.phoneLoginCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        UIManager.Instance.OpenWindow("MobileLoginPage");
    };
    return LoginSelectPage;
}(UIPage));
__reflect(LoginSelectPage.prototype, "LoginSelectPage");
