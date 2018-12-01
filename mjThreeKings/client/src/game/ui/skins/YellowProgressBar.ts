class YellowProgressBar extends eui.Component implements  eui.UIComponent {
	
	private img_front : eui.Image;
	private vs_state : eui.ViewStack;
	private label_progress : eui.Label;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
	}

	public init(percent : number, state : number){
		this.vs_state.selectedIndex = state;
		if(state== QxzbUtil.RACE_STATE.RACE_WILL){
			let mask = new egret.Rectangle(this.img_front.x, this.img_front.y, this.img_front.width * percent, this.img_front.height);
			this.img_front.mask = mask;
			this.label_progress.text = percent * 100 + '%';
		}
	}
	
}