// TypeScript file

class LonghuReward extends UIWindow{

    private totalBonus: eui.Label;
    private mainPanel:eui.Panel;
    
    public GetSkinFile() : string {
        return "exml/longhureward.exml";
    }


    protected OnOpen(args? : any){
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        this.totalBonus.text = "" + 123;
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

}