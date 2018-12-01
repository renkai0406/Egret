// TypeScript file
class HistoryPage extends  UIWindow {

    private check: eui.Button;

    private recordZB: eui.Button;

    private recordLHD: eui.Button;

    private list_data: eui.List;

    private mainPanel:eui.Panel;

    public GetSkinFile() : string {
        return "exml/historypage.exml";
    }

    protected OnOpen(args? : any){
        
        this.check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkCallback, this);
		this.recordZB.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recordZBCallback, this);
        this.recordLHD.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recordLHDCallback, this);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        // let data : any[] = 
        // [
        //   {
        //      roomid:588866,

        //      roomName:"初露锋芒",
              
        //      time:"2018-08-05  14:56:12",
             
        //      winerplayerName:"玩家逗逗",

        //      winerplayerID: 142536,

        //      loserplayerName:"玩家兔子",

        //      loserplayerID: 142546,

        //      income:500
                        
        //   },
        // ];

        let data : any[] = 
        [
          {
             roomid:588866,

             roomName:"初露锋芒",
              
             time:"2018-08-05  14:56:12",
             
             playerName:"玩家逗逗",

             playerID: 142536,

             organizerName:"玩家兔子",

             matchTime: 142546,

             income1:500,

             income2:700
                        
          },
        
        ];
        let eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = QXZBHistoryPageItem;
    }

    private checkCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}


    private recordZBCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}


    private recordLHDCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

}
