// TypeScript file

enum RunEnvironment {
    Dev,
    Test,
    Publish
}

enum ChannelType{
    GuestDebug      =1,
    WeiXinDebug     =2,
    WXAutoDebug     =3,
    GuestRelease    =4,
    WeiXinRelease   =5,
    WXAutoRelease   =6,
};

class App {
    
    public static readonly Version : string = "1.0.252";

    public static Env : RunEnvironment = RunEnvironment.Dev;

    public static AppID:number = 115;

    public static Channel : ChannelType = ChannelType.GuestDebug;

    public static DeviceId : string =  "aa:bb:cc:dd";

    public static readonly DevServerUrl : string = "";

    public static readonly TestServerUrl : string = "";

    public static readonly PublishServerUrl : string = "";

    public static get VersionStr() {
        if(this.Env == RunEnvironment.Dev){
            return this.Version + "_D";
        }else if(this.Env == RunEnvironment.Test){
            return this.Version + "_T";
        }else if(this.Env == RunEnvironment.Publish){
            return this.Version + "_P";
        }
    }

    public static get ServerUrl() {
        if(this.Env == RunEnvironment.Dev){
            return this.DevServerUrl;
        }else if(this.Env == RunEnvironment.Test){
            return this.TestServerUrl;
        }else if(this.Env == RunEnvironment.Publish){
            return this.PublishServerUrl;
        }
    }
}
