// TypeScript file
class QXZBHistoryDetailsItem  extends eui.ItemRenderer {


    private matchTime: eui.Label;

    private playerName: eui.Label;

    private textMojing: eui.Label;

    private redbg: eui.Image;

    private bluebg: eui.Image;

    private win: eui.Image;

    private lose: eui.Image;

    public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/HistoryQXZBDetailItem.exml";
	}


    protected dataChanged() {
      
    
       this.playerName.text = this.data.playerName;
       this.textMojing.text = this.data.textMojing;
       this.matchTime.text = this.data.matchTime;

       if(this.data.isWin){
         this.redbg.visible =true;
         this.bluebg.visible =false;
         this.win.visible =true;
         this.lose.visible =false;
       }
       else{
         this.redbg.visible =false;
         this.bluebg.visible =true;
         this.win.visible =false;
         this.lose.visible =true;
       }
       
    }

}
