// TypeScript file
class HistoryDetails extends  UIWindow {

    private playback: eui.Button;

    private list_data: eui.List;

    private mainPanel:eui.Panel;


    public GetSkinFile() : string {
        return "exml/historydetailspage.exml";
    }

    protected OnOpen(args? : any){
        
        this.playback.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playbackCallback, this);
		this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        // let data : any[] = 
        // [
          
        //   {
        //      level:5,

        //      isWin:1,

        //      playerName:"初露锋芒",
              
        //      grade:"平民",
             
        //      relationship:1,

        //      incomebangjing: 123,

        //      incomemojing:456,

        //      exp:500
                        
        //   },
       
        // ];

        let data : any[] = 
        [
          
          {
            
             isWin:1,

             playerName:"初露锋芒",
        
             matchTime: 123,

             textMojing:456,
           
          },
       
        ];
        let eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = QXZBHistoryDetailsItem;
    }

    private playbackCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }



}

 


    

