// TypeScript file
class QXZBHistoryPageItem  extends eui.ItemRenderer {

    private details: eui.Button;

    private share: eui.Button;

    private roomID: eui.Label;

    private roomName: eui.Label;

    private time: eui.Label;

    private playerName: eui.Label;

    private playerID: eui.Label;

    private organizerName: eui.Label;

    private matchTime: eui.Label;

    private income1: eui.Label;

    private income2: eui.Label;

    public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/HistoryQXZBItem.exml";
	}


    protected dataChanged() {
       this.details.addEventListener(egret.TouchEvent.TOUCH_TAP, this.datailsCallback, this);
       this.share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareCallback, this);
  
       this.roomID.text = this.data.roomid;
       this.roomName.text = this.data.roomName;
       this.time.text = this.data.time;
      
       this.playerName.text = this.data.playerName;
       this.playerID.text = this.data.playerID;
       this.organizerName.text = this.data.organizerName;
       this.matchTime.text = this.data.matchTime;
       this.income1.text = this.data.income1;
       this.income2.text = "-"+this.data.income2;
    }


  private datailsCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

  private shareCallback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}



}
