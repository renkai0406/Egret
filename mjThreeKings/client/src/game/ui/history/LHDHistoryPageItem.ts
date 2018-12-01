// TypeScript file
class LHDHistoryPageItem  extends eui.ItemRenderer {

    private datails: eui.Button;

    private share: eui.Button;

    private roomID: eui.Label;

    private roomName: eui.Label;

    private time: eui.Label;

    private playerName1: eui.Label;

    private playerID1: eui.Label;

    private playerIncome1: eui.Label;

    private playerName2: eui.Label;

    private playerID2: eui.Label;

    private playerIncome2: eui.Label;

    public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/HistoryLHDItem.exml";
	}


  protected dataChanged() {
       this.datails.addEventListener(egret.TouchEvent.TOUCH_TAP, this.datailsCallback, this);
       this.share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareCallback, this);
       
       this.roomID.text = this.data.roomid;
       this.roomName.text = this.data.roomName;
       this.time.text = this.data.time;
      
       this.playerName1.text = this.data.winerplayerName;
       this.playerID1.text = this.data.winerplayerID;
       this.playerIncome1.text = "+"+this.data.income;
       this.playerName2.text = this.data.loserplayerName;
       this.playerID2.text = this.data.loserplayerID;
       this.playerIncome2.text = "-"+this.data.income;
    }


  private datailsCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

  private shareCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

}
