class PageTurning1 extends eui.Component implements  eui.UIComponent {
	
	private label_page	:	eui.Label;
	private img_left 	: 	eui.Image;
	private img_right	: 	eui.Image;

	private max : number;
	private current : number;

	public constructor() {
		super();
	}

	public setMax(value : number) : void{
		this.max = value;
	}

	public setCurrent(value : number) : void{
		this.current = value;
	}

	public init(current:number, max:number):void{
		this.current = current;
		this.max = max;
		this.setText();
	}

	public addLeftTouchListener(callback : Function){
		this.img_left.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, this);
	}

	public addRightTouchListener(callback : Function){
		this.img_right.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, this);
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.img_left.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SoundManager.Instance.PlayEffect("tuch_mp3");
			if(this.current < 2){
				return;
			}
			this.current--;
			this.setText();
		}, this);
		this.img_right.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SoundManager.Instance.PlayEffect("tuch_mp3");
			if(this.current >= this.max){
				return;
			}
			this.current++;
			this.setText();
		}, this)
	}

	private setText():void{
		this.label_page.text = this.current + "/" + this.max;
	}

	public getPage():number{
		return this.current;
	}

	public getMax():number{
		return this.max;
	}

	
}