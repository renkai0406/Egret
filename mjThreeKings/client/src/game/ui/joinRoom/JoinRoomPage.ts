// TypeScript file
class JoinRoomPage extends  UIWindow {

    private numList : eui.Group;

    private btnList : eui.Group;

    private curShowNum : number;

    private labelList : eui.Group;

    private mainPanel:eui.Panel;


    public GetSkinFile() : string {
        return "exml/checkRoompage.exml";
    }

    protected OnOpen(args? : any){
        this.curShowNum = 0;
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        for(let i = 0; i< this.numList.numChildren;i++){
            let temp = this.numList.getChildAt(i) as eui.Label;
            temp.text = "";
        }

        for(let i = 0; i< this.btnList.numChildren;i++){
            let btnTemp = this.btnList.getChildAt(i) as eui.Button;
            btnTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCallback, this);
        }

        for(let i = 0; i< this.labelList.numChildren;i++){
            let labelTemp = this.labelList.getChildAt(i) as eui.Label;
            labelTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCallback, this);
        }
    }

    private onClickCallback(obj):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        let btnIndex = this.btnList.getChildIndex(obj.target);
        let labelIndex = this.labelList.getChildIndex(obj.target);
        let currentIndex = -1;
        if(btnIndex >= 0){
            currentIndex = btnIndex;
        }
        else{
            currentIndex = labelIndex;
        }

        if(currentIndex >= 0 && currentIndex <= 9){
            if(this.curShowNum <= 5){
               let tempNum = this.numList.getChildAt(this.curShowNum) as eui.Label;
               tempNum.text = "" + currentIndex;
               this.curShowNum++;
            }
            if(this.curShowNum == 6){

            }
        }

        if(currentIndex == 10){
             for(let i = 0; i< this.numList.numChildren;i++){
                 let tempList = this.numList.getChildAt(i) as eui.Label;
                 tempList.text = "";
             }
             this.curShowNum = 0;
        }

        if(currentIndex == 11){
             if(this.curShowNum > 0){
                let tempNumList = this.numList.getChildAt(this.curShowNum-1) as eui.Label;
                 tempNumList.text = "";
                 this.curShowNum--;
             }
        }
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

}
