// TypeScript file

class ListViewBase extends eui.Component {

    private list : eui.List;

    private scroller : eui.Scroller;

    public itemSizeMeasured : boolean = false;

    public constructor(){
        super();
        this.skinName = "resource/framework/skin/ListViewSkin.exml";
        this.currentState
        
    }

    protected childrenCreated() : void{
        this.scroller.width = this.width;
        this.scroller.height = this.height;
        this.list.width = this.scroller.width;
        this.list.height = this.scroller.height;
        
    }
    

    public SetItemSkin( skinName : string):void {
        this.list.itemRendererSkinName = skinName;
    }

    public SetItemClass( render : any) : void {
        this.list.itemRenderer = render;
    }

    public SetData(data : any[]) : void {
        this.list.dataProvider = new eui.ArrayCollection(data);
    }

    public SetBounces(bounces : boolean){
        this.scroller.bounces = bounces;
    }

    public GetList() : eui.List {
        return this.list;
    }

    public GetScoller() : eui.Scroller {
        return this.scroller;
    }
    
}