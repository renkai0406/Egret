class LoginSelectPage extends UIPage{

	private btnWechatLogin : eui.Button;
	private groupPhoneLogin : eui.Group;

	public GetSkinFile() : string {
        return "exml/loginselectpage.exml";
    }
    
    protected OnOpen(args? : any){
		/*let netMng = new NetManager("ws://192.168.40.102:8880/gate",  "aa:bb:cc:dd");
        NetManager.Instance.Connect();*/
        this.btnWechatLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.wechatLoginCallback, this);
		this.groupPhoneLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.phoneLoginCallback, this);
		SoundManager.Instance.PlayMusic("denglu_mp3");
    }

	private wechatLoginCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}
	private phoneLoginCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
		UIManager.Instance.OpenWindow("MobileLoginPage");
	}
}