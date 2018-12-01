// TypeScript file

class Message extends UIWindow {

    private list_data : eui.List;

    private time: eui.Label;
    private todayBangJing: eui.Label;
    private todayMojing: eui.Label;
    private yesterdayBangJing: eui.Label;
    private yesterdayMoJing: eui.Label;
    private threeBangJing: eui.Label;
    private threeMoJing: eui.Label;
    private weekBangJing: eui.Label;
    private weekMoJing: eui.Label;
    private mainPanel:eui.Panel;

    public GetSkinFile() : string {
        return "exml/messagepage.exml";
    }

    protected OnOpen(args? : any){
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        let data : any[] = 
        [
          {
             title:"矿区达人1",

             type:"1",
              
             count:"1000",
             
             time:"2008/8/21 14:34:28",
          },

          { 
             title:"矿区达人2",

             type:"1",
              
             count:"1000",
             
             time:"2008/8/21 14:34:28",
          },

          {
             title:"矿区达人3",

             type:"1",
              
             count:"1000",
             
             time:"2008/8/21 14:34:28",
          },

          { 
             title:"矿区达人4",

             type:"1",
              
             count:"1000",
             
             time:"2008/8/21 14:34:28",
          },

          { 
             title:"矿区达人5",

             type:"1",
              
             count:"1000",
             
             time:"2008/8/21 14:34:28",
          },

          { 
             title:"矿区达人6",

             type:"1",
              
             count:"1000",
             
             time:"2008/8/21 14:34:28",
           },
        ];
    
        let eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = MessageItem;

        let tempArray = [100,101,102,103,104,105,106,107,108];
        this.todayMojing.text  = "" + tempArray[0] ;
        this.todayBangJing.text  = "" + tempArray[1] ;
        this.yesterdayMoJing.text  = "" + tempArray[2] ;
        this.yesterdayBangJing.text  = "" + tempArray[3] ;
        this.threeMoJing.text  = "" + tempArray[4] ;
        this.threeBangJing.text  = "" + tempArray[5] ;
        this.weekMoJing.text  = "" + tempArray[6] ;
        this.weekBangJing.text  = "" + tempArray[7] ;  
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }
    
}