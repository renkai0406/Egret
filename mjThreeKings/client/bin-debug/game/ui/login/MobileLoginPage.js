//**手机登录 */
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
var MobileLoginPage = (function (_super) {
    __extends(MobileLoginPage, _super);
    function MobileLoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileLoginPage.prototype.GetSkinFile = function () {
        return "exml/mobileloginpage.exml";
    };
    MobileLoginPage.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.passwordToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickPasswordToggle, this);
        this.authToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickAuthToggle, this);
        this.loginPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickClose, this);
        this.registBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnChickRegist, this);
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickLogin, this);
        /*//[离线测试注释]
        this.getcodeBtn.addEventListener( egret.TouchEvent.TOUCH_TAP, this.OnClickGetCode, this);
       */
        this.forgetBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnClickForget, this);
        this.viewStack.selectedIndex = 0;
    };
    MobileLoginPage.prototype.OnClickPasswordToggle = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.authToggle.selected = false;
        this.viewStack.selectedIndex = 0;
    };
    MobileLoginPage.prototype.OnClickAuthToggle = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.passwordToggle.selected = false;
        this.viewStack.selectedIndex = 1;
    };
    MobileLoginPage.prototype.OnClickClose = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    MobileLoginPage.prototype.OnChickRegist = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        // 打开注册界面
        UIManager.Instance.OpenWindow("Register");
    };
    MobileLoginPage.prototype.OnClickLogin = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        /*//[离线测试注释]
        let loginRequest = new lobby.LoginRequestMessage();
        loginRequest.setAppid(App.AppID);
        loginRequest.setChannel(App.Channel);
        loginRequest.setPlatform(1);
        loginRequest.setTimestamp(new Date().getTime());
        loginRequest.setVersion(App.Version);
        loginRequest.setDeviceid("");
        loginRequest.setLocation("");
        loginRequest.setReconnect(0);

        if(this.viewStack.selectedIndex == 0)
        {
            loginRequest.setToken(this.loginPassword.text);
            loginRequest.setOpenid(this.loginPhoneNum.text);
        }
        else if(this.viewStack.selectedIndex == 1)
        {
            loginRequest.setToken(this.verifyCode.text);
            loginRequest.setOpenid(this.verifyPhoneNum.text);
        
        }


        NetManager.Instance.SendMsg(loginRequest, this.LoginCallBack.bind(this));
        */
        //[离线测试]
        //[begin]
        SceneManager.Instance.ReplaceScene("HomeScene");
        //[end]
    };
    MobileLoginPage.prototype.LoginCallBack = function (msgSend, msgRec) {
        var loginResponse = msgRec;
    };
    MobileLoginPage.prototype.OnClickGetCode = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var phoneNum = this.verifyPhoneNum.text;
        if (phoneNum.length == 0) {
            console.log("电话号码错误.");
            return;
        }
        var verificationCodeRequest = new lobby.VerificationCodeRequestMessage();
        verificationCodeRequest.setRequestType(2);
        verificationCodeRequest.setMobile(phoneNum);
        NetManager.Instance.SendMsg(verificationCodeRequest, this.GetCodeCallBack.bind(this));
        this.getcodeBtn.enabled = false;
    };
    MobileLoginPage.prototype.GetCodeCallBack = function (msgSend, msgRec) {
        var verifyCodeResponse = msgRec;
        var status = verifyCodeResponse.getRequestStatus();
        var limitTime = verifyCodeResponse.getExpireTime();
    };
    MobileLoginPage.prototype.OnClickForget = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        // 打开忘记密码页面
        UIManager.Instance.OpenWindow("Retrieve");
    };
    return MobileLoginPage;
}(UIWindow));
__reflect(MobileLoginPage.prototype, "MobileLoginPage");
