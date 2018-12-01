class SettingSlider extends eui.Component implements  eui.UIComponent {
	
	private img_back : eui.Image;
	private img_front : eui.Image;
	private img_button : eui.Image;

	private mask_front : egret.Rectangle;

	private real_btn_half_width : number;

	private volume : number = 0.00;

	private left_border : number ; 
	private right_border : number;

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
		this.real_btn_half_width = this.img_button.width / 2 - 10;
		this.left_border = this.real_btn_half_width;
		this.right_border = this.img_back.width - this.real_btn_half_width;
		this.img_button.anchorOffsetX = this.img_button.width / 2;
		this.img_button.x = 200;
		this.volume = this.calculate_volume(this.img_button.x);
		egret.log("button x:" + this.img_button.x);
		this.mask_front = new egret.Rectangle(0, this.img_front.y, this.img_button.x , this.img_front.height);
		this.img_front.mask = this.mask_front;
		this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.button_move_callback, this);
		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.button_move_callback, this);
	}

	private button_move_callback(e : egret.TouchEvent){
		var point : egret.Point = this.globalToLocal(e.stageX, e.stageY);
		var x = point.x;
		
		this.set_button_location(x);

		this.volume = this.calculate_volume(x);

	}

	private set_button_location(x:number) : void{
		//出界
		if( x < this.left_border || x >this.right_border){
			return;
		}
		this.img_button.x = x;
		this.mask_front.width = x;
		this.img_front.mask = this.mask_front;
	}

	private calculate_volume(x:number) : number{
		var result = (x - this.left_border) / (this.right_border - this.left_border);
		if(result < 0.01)
			result = 0;
		if(result > 0.99)
			result = 1;
		return result;
	}

	public getVolume() : number{
		return this.volume;
	}

	public setVolume(value:number){
		this.volume = value;
		this.set_button_location(value * (this.right_border - this.left_border) + this.left_border);
		
	}
	
}