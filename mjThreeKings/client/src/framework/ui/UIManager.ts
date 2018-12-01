// TypeScript file


class PageTracker {
        public page : UIPanel;
        public windowStack : Array<UIPanel>;

        public constructor(p : UIPanel){
            this.windowStack = new Array<UIPanel>();
            this.page = p;
        }
}


class UIManager {

    private static _Instance : UIManager;

    public static get Instance () : UIManager {
        if(this._Instance == null || this._Instance == undefined){
            nano.Log.Error("[UIManager] UIManager not initialize");
        }
        return this._Instance;
    }

    private m_stage : egret.DisplayObjectContainer;

    private m_idCounter : number;

    private m_pageStack : Array<PageTracker>;

    private m_currentPage : PageTracker;

    private m_widgetList : Array<UIPanel>;

    private m_mask : egret.Shape;

    private m_root : egret.DisplayObjectContainer;
 
    public SkinPath : string = "resource/";

    public MainPage : string;

    public LoginPage : string;

    public LoadingPage : string;

    public DefaultTween : UITweenInterface = new UIDefaultTween();

    private constructor(stage : egret.Stage){
        this.m_stage = stage;
        this.m_root = new egret.DisplayObjectContainer();
        stage.addChild(this.m_root);
        this.m_idCounter = 0;
        this.m_pageStack = new Array<PageTracker>();

        this.m_mask = new egret.Shape();
        this.m_mask.graphics.beginFill(0x000000,0.7);
        this.m_mask.graphics.drawRect(0,0,stage.stageWidth,stage.stageHeight);
        this.m_mask.graphics.endFill();
        this.m_mask.$setTouchEnabled(true);

        this.m_mask.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnMaskClick,this);
    }

    public static Init(stage : egret.Stage){
        if(this._Instance == null || this._Instance == undefined){
            this._Instance = new UIManager(stage);
     
        }
    }

    public SetResDir(skinDir : string) : void {
        this.SkinPath = skinDir;
    }

    public OpenPage(name : string , data? : any) : UIPanel {
        let page : UIPanel = this.CreatePanel(name);
        page.Open(data);
        this.m_currentPage = new PageTracker(page);
        this.m_pageStack.push(this.m_currentPage);
        this.m_root.addChild(page);
        return page;
    }

    public CloseTopPage() : void {
        if(this.m_pageStack.length > 1){
            let pageTracker : PageTracker = this.m_pageStack.pop();
            this.m_currentPage = this.m_pageStack[this.m_pageStack.length - 1];
            this.RemovePage(pageTracker);
        }else{
            nano.Log.Warn("[UIManager] Can't Remove Bottom Page");
        }
    }

    public ClosePageById(id : number) : void{
        let pageIndex : number = this.GetPageIndex(id);
        let pageTracker : PageTracker = this.m_pageStack[pageIndex];
        this.m_pageStack.splice(pageIndex,1);
        this.RemovePage(pageTracker);
    }

    public CloseAllPage() : void {
        for(let i = 0; i < this.m_pageStack.length; i++) {
            this.RemovePage(this.m_pageStack[i]);
        }
        this.m_pageStack = new Array<PageTracker>();
    }

    private RemovePage(pageTrack : PageTracker) : void {
        if(pageTrack){
            for(let i = 0; i < pageTrack.windowStack.length; i++){
                this.m_root.removeChild(pageTrack.windowStack[i]);
            }
            this.m_root.removeChild(pageTrack.page);
        }
    }

    public OpenWindow(name : string, data? : any) : UIPanel {
        let win : UIPanel = this.CreatePanel(name);
        win.Open(data);
        this.m_currentPage.windowStack.push(win);
        this.m_root.addChild(win);
        let winDepth : number = this.m_root.getChildIndex(win);
        let maskDepth : number = this.m_root.getChildIndex(this.m_mask);
        if(maskDepth > -1 && maskDepth < winDepth){
            this.m_root.addChildAt(this.m_mask,winDepth - 1);
        }else{
            this.m_root.addChildAt(this.m_mask,winDepth);
        }
        return win;
    }

    public CloseWindow(id : number) {
        let winIndex : number = this.GetWindowIndex(id);      
        let winStack : Array<UIPanel> = this.m_currentPage.windowStack;
        let win : UIPanel = winStack[winIndex];
        winStack.splice(winIndex,1);
        this.RemoveWindow(win);
        if(winStack.length > 0){
            let topWin : UIPanel = winStack[winStack.length - 1];
            let topWinDepth : number = this.m_root.getChildIndex(topWin);
            this.m_root.addChildAt(this.m_mask,topWinDepth);
        }else{
            this.m_root.removeChild(this.m_mask);
        }
    }

    private RemoveWindow(win : UIPanel){
        if(win){
            this.m_root.removeChild(win);
        }
    }

    public OpenWidget(name : string, data? : any) : UIPanel {
        return null;
    }

    public CloseWidget(id : number) : UIPanel {
        return null;
    }

    public ClearAll() : void {
        this.m_root.removeChildren();
    }

    public GetWindowIndex(id : number) : number{
        for(let i = 0; i < this.m_currentPage.windowStack.length; i++){
            let win : UIPanel = this.m_currentPage.windowStack[i];
            if(win.Id == id){
                return i;
            }
        }
        return null;
    }

    public GetPageIndex(id : number) : number{
        for(let i : number = 0; i < this.m_pageStack.length; i++){
            let pageTrack : PageTracker = this.m_pageStack[i];
            if(pageTrack.page.Id == id){
                return i;
            }
        }
        return null;
    }

    private CreatePanel(viewName : string) : UIPanel {
        let jsFile : string = viewName;
        let panel : UIPanel = eval("new " + jsFile + "( )");
        panel.SetId(this.GetPanelId());
        return panel;
    }

    private GetPanelId() : number {
        return this.m_idCounter++;
    }

    private OnMaskClick() : void {
        let winStack : Array<UIPanel> = this.m_currentPage.windowStack;
        let topWin : UIWindow = winStack[winStack.length - 1] as UIWindow;
        topWin.OnMaskClick();
    }

}

