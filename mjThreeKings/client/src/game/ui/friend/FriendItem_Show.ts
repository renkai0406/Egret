class FriendItem_Show extends FriendItemI {

	private btn_info:eui.Button;
	private btn_delete:eui.Button;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/FriendItem_Show.exml";
	}

	protected childrenCreated():void{
		super.childrenCreated();
		this.btn_info.addEventListener(egret.TouchEvent.TOUCH_TAP, this.info_callback, this);
		this.btn_delete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.delete_callback, this);
	}


	protected dataChanged() {

	}

	private info_callback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
	}

	protected delete_callback():void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
        var index = this.parent.getChildIndex(this);
        this.base.del_child(index);
	}

	

	
}