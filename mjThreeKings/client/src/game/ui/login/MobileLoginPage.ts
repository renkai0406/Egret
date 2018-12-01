//**手机登录 */

class MobileLoginPage extends UIWindow {

    private viewStack:eui.ViewStack;
    private passwordToggle:eui.ToggleButton;
    private authToggle:eui.ToggleButton;
    private loginPanel:eui.Panel;

    // 密码登录
    private loginPhoneNum:eui.TextInput;
    private loginPassword:eui.TextInput;
    private forgetBtn:eui.Button;
    private rememberCheck:eui.CheckBox;

    // 验证码登录
    private verifyPhoneNum:eui.TextInput;
    private verifyCode:eui.TextInput;
    private getcodeBtn:eui.Button;

    private registBtn:eui.Button;
    private loginBtn:eui.Button;

    public GetSkinFile() : string {
        return "exml/mobileloginpage.exml";
    }
    
    protected OnOpen(args? : any){
        super.OnOpen(args);
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
    }


    private OnClickPasswordToggle(event:egret.TouchEvent):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.authToggle.selected = false;
        this.viewStack.selectedIndex = 0;

    }

    private OnClickAuthToggle(event:egret.TouchEvent):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.passwordToggle.selected = false;
        this.viewStack.selectedIndex = 1;
    }

    private OnClickClose(event:egret.TouchEvent):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

    private OnChickRegist(event:egret.TouchEvent):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        // 打开注册界面
        UIManager.Instance.OpenWindow("Register");
    }

    private OnClickLogin(event:egret.TouchEvent):void{
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

    }

    private LoginCallBack(msgSend:MessageBase,msgRec:MessageBase):void{
        let loginResponse = msgRec as lobby.LoginResponseMessage;
        
    }

    private OnClickGetCode(event:egret.TouchEvent):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        let phoneNum = this.verifyPhoneNum.text;
        if(phoneNum.length == 0)
        {
            console.log("电话号码错误.");
            return;
        }
        let verificationCodeRequest = new lobby.VerificationCodeRequestMessage();
        verificationCodeRequest.setRequestType(2);
        verificationCodeRequest.setMobile(phoneNum);

        NetManager.Instance.SendMsg(verificationCodeRequest, this.GetCodeCallBack.bind(this));

        this.getcodeBtn.enabled = false;

    }

    private GetCodeCallBack(msgSend:MessageBase,msgRec:MessageBase)
    {
        let verifyCodeResponse = msgRec as lobby.VerificationCodeResponseMessage;
        let status = verifyCodeResponse.getRequestStatus();
        let limitTime = verifyCodeResponse.getExpireTime();
    }

    private OnClickForget(event:egret.TouchEvent):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        // 打开忘记密码页面
        UIManager.Instance.OpenWindow("Retrieve");
    }
}