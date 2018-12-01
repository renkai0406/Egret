// TypeScript file

class Longhudou extends UIWindow{

    private reward: eui.Button;

    private history: eui.Button;

    private help: eui.Button;

    private merit: BlueProgressBar;

    private list_data: eui.List;

    private mainPanel:eui.Panel;
    
    public GetSkinFile() : string {
        return "exml/longhudoupage.exml";
    }

    protected OnOpen(args? : any){
        this.merit.init(1000,9999);
        this.reward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardCallback, this);
		this.history.addEventListener(egret.TouchEvent.TOUCH_TAP, this.historyCallback, this);
        this.help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.helpCallback, this);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);

        let data : any[] = 
        [
          {
             cost:1000,

             limit:10000,
              
             exp:1000,
             
             merit:500,

             lineup: "关羽/张飞",

             skill:"梦龙过江",

             income:5000
          },

          {
             cost:10000,

             limit:100000,
              
             exp:10000,
             
             merit:5000,

             lineup: "关羽/张飞",

             skill:"梦龙过江",

             income:50000
          },

        ];
    
        let eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = LonghudouItem;

    }

    private rewardCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

    private historyCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

    private helpCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }
}