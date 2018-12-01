class AdviserItem extends ListItemBase{

    private img_frame : eui.Image;
    private img_adviser : eui.Image;
    private img_used : eui.Image;
    private group_locked : eui.Image;

    //找到父物体中所有其他的子物体.边框visiable = false

    public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/AdviserItem.exml";
	}

	protected childrenCreated():void{
		super.childrenCreated();
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_self_callback, this);
        
        this.img_frame.visible = false;
	}

    protected OnDataChange() : void {
        this.img_used.visible = this.data.state == AdviserUtil.ADVISER_STATE_USED;
        this.group_locked.visible = this.data.state == AdviserUtil.ADVISER_STATE_LOCKED;
    }   

    private touch_self_callback(e : eui.ItemTapEvent){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var list : eui.List = this.parent as eui.List;
        egret.log("军师项被选中:" + list.selectedIndex);
        for(var i = 0; i < list.numChildren; i++){
            var child = list.getChildAt(i) as AdviserItem;
            child.cancelSelected();
        }
        this.img_frame.visible = true;
        var panel_main = list.parent.parent.parent;
        var vs_operate = panel_main.getChildByName("vs_operate") as eui.ViewStack;
        var label_info = panel_main.getChildByName("label_info") as eui.Label;
        var label_attribute = panel_main.getChildByName("label_attribute") as eui.Label;
        vs_operate.selectedIndex = this.data.state;
        label_info.text = this.data.info;
        label_attribute.text = this.data.attribute;
        egret.log("vs_operate:" + vs_operate.name);
    }

    public cancelSelected(){
        this.img_frame.visible = false;
    }

}