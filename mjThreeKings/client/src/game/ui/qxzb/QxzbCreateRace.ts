
class QxzbCreateRace extends UIWindow{

    private mainPanel:eui.Panel;
	private reg_award : Regulator;

    public GetSkinFile() : string {
        return "exml/qxzb_createrace.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
		this.reg_award.setVolume(1000);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

}