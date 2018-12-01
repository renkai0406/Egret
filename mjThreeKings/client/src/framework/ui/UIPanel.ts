// TypeScript file


abstract class UIPanel extends eui.Component {

    private m_data : any;

    protected get m_tween() : UITweenInterface {
        return UIManager.Instance.DefaultTween;
    }
    
    public Id : number;

    public abstract GetSkinFile() : string;

    public constructor() {
        super();
        this.skinName = UIManager.Instance.SkinPath + this.GetSkinFile();
    }

    public SetId(id : number) : void {
        this.Id = id;
    }

    public Open(args : any) : void{
        this.m_data = args;
    }

    public Close() : void {
        this.OnClose();
    }

    protected childrenCreated() : void {
        super.childrenCreated();
        this.OnOpen(this.m_data);
        if(this.m_tween){
            this.PlayOpenAnimation();
        }
    }

    protected OnOpen(args? : any) : void {
        SoundManager.Instance.PlayEffect("ui_open_mp3");
    }

    protected OnClose() : void {
        SoundManager.Instance.PlayEffect("ui_close_mp3");
    }

      /**
     * UI开发动画配置函数，在之类复写实现具体的窗口动画函数，这里是用了UIDefaultTween中的动画
     * 取消窗口动画则在子类中覆写该方法为空内容即可，或者将m_tween覆写返回null
     */
    protected PlayOpenAnimation() : void {
        if(this.m_tween){
            this.m_tween.OpenTween(this,this.OnOpenAnimationEnd.bind(this));
        }
    }

    /**
     * UI关闭动画配置函数，在之类复写实现具体的窗口动画函数，这里是用了UIDefaultTween中的动画
     * 返回true将执行不会执行窗口关闭函数，需要在自定义的窗口动画回调函数中调用OnCloseAnimationEnd，执行关闭UI操作，参见：UIWindow.OnCloseAnimationEnd
     * 返回false则没有动画
     */
    protected PlayCloseAnimation() : boolean {
        if(this.m_tween){
            this.m_tween.CloseTween(this,this.OnCloseAnimationEnd.bind(this));
            return true;
        }else{
            return false;
        }
    }

    /**
     * 窗口关闭动画默认回调执行函数，可以在子类中重写实现其他逻辑
     */
    protected OnCloseAnimationEnd() : void {

    }

    protected OnOpenAnimationEnd() : void {

    }


}