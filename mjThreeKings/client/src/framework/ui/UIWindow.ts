// TypeScript file

abstract class UIWindow extends UIPanel {

    private m_mask : egret.Shape;

    protected OnOpen(args? : any) : void {
        super.OnOpen(args)
    }

    public Close() : void {
        super.Close();
        if(!this.PlayCloseAnimation()){
            UIManager.Instance.CloseWindow(this.Id);
        }
    }

    protected OnCloseAnimationEnd() : void {
        super.OnCloseAnimationEnd();
        UIManager.Instance.CloseWindow(this.Id);
    }

    public OnMaskClick() : void {
        this.Close();
    }
    
}