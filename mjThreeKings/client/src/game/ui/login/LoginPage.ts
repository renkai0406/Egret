// TypeScript file

class LoginPage extends UIPage {

    private ykLogin : eui.Button;

    private wxLogin : eui.Button;

    private bg:eui.Image;
    private register_pager : Register;

    public GetSkinFile() : string {
        return "exml/loginpage.exml";
    
    }
        

    protected OnOpen(args? : any){

        this.ykLogin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnYoukeLoginClick,this);
        this.ykLogin.labelDisplay.text = LangManager.Instance.Get("lang2");
        this.wxLogin.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnWeiXinLoginClick,this);

        // 获取GPS位置
        //navigator.geolocation.getCurrentPosition();

        /*let netMng = new NetManager("ws://192.168.40.102:8880/gate",  "aa:bb:cc:dd");
        NetManager.Instance.Connect();*/

        // let param = new WaveParam();
        // param.Amplitude = 0.5;
        // param.Frequency = 0.1;
        // ShaderEffectMng.Instance.AddEffect(EffectType.Wave, this.ykLogin, param);

        Tween.breath2(this.ykLogin, 0.05, 2500);


        // let param = new OutLineParam();
        // param.Breadth = 0.5;
        // param.Frequency = 5;
        // param.Color = 0x0000FFFF;
        
        // ShaderEffectMng.Instance.AddEffect(EffectType.OutLine, this.ykLogin, param);

        // let param = new GrayParam();
        // ShaderEffectMng.Instance.AddEffect(EffectType.Gray, this.ykLogin, param);

        // let param = new FadeParam();
        // ShaderEffectMng.Instance.AddEffect(EffectType.Fade, this.ykLogin, param);

        // let paramFlow = new FlowParam();
        // paramFlow.Color = 0xFF0000FF;
        // paramFlow.Frequency = 5;
        // ShaderEffectMng.Instance.AddEffect(EffectType.Flow, this.bg, paramFlow);

        // let prarmGray = new GrayParam();
        // prarmGray.Frequency = 1;

        // ShaderEffectMng.Instance.AddEffect(EffectType.Gray, this.bg, prarmGray);

        let paramColor = new ColorParam();
        paramColor.Frequency = 5;
        //paramColor.Color = 0xb4cdf6ff;
        paramColor.Color = 0xff0000ff;
        ShaderEffectMng.Instance.AddEffect(EffectType.Color, this.bg, paramColor);


        let timer = new egret.Timer(1000, 1000);
        let temp:number = 0;
        timer.addEventListener(egret.TimerEvent.TIMER, function(){
            Tween.click(this.ykLogin);
        }, this);

        timer.start();

        
    }


    private OnYoukeLoginClick() : void {
        SceneManager.Instance.ReplaceScene("HomeScene");
    }

    private checkVersionCallBack(sendMsg:MessageBase, res:MessageBase){
        let checkVersionResponse = res as lobby.CheckVersionResponseMessage;


        console.log("回调");
    }

    private OnWeiXinLoginClick() : void {

        let checkVersion = new lobby.CheckVersionRequestMessage();
        checkVersion.setVersion(App.Version);
        checkVersion.setPlatform(0);

        NetManager.Instance.SendMsg(checkVersion, this.checkVersionCallBack);

        UIManager.Instance.OpenWindow("MobileLoginPage");

    }

}