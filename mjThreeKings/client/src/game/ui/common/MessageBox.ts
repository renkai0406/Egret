// TypeScript file


class MessageBox extends UIWindow {

    private closeBtn : eui.Button;

    private okBtn : eui.Button;

    public GetSkinFile() : string {
        return "exml/common/messagewindow.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onCloseClick,this);
        this.okBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onOkClick,this);
    }

    private onCloseClick() : void {
        this.Close();
    }

    private onOkClick() : void {
        UIManager.Instance.OpenWindow("MessageBox");
    }
}