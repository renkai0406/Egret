class QxzbPastItem extends eui.ItemRenderer{

	private img_avator : eui.Image;
	private img_avator_mask:eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/QxzbPastItem.exml";
	}

	protected childrenCreated():void{
		super.childrenCreated();
		 
        this.img_avator.mask = this.img_avator_mask;
	}


	protected dataChanged() {
		
	}
}