class Regulator extends eui.Component implements  eui.UIComponent {
	
	private btn_reduce 		: eui.Button;
	private btn_add 		: eui.Button;
	private label_volume	: eui.Label;

	private volume : number;
	
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
		this.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addClickCallback, this);
		this.btn_reduce.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reduceClickCallback, this);
	}

	public setVolume(value : number) : void{
		this.volume = value;
		this.label_volume.text = String(value);
	}

	public getVolume():number{
		return this.volume;
	}

	public addClickCallback(e){
		SoundManager.Instance.PlayEffect("tuch_mp3");
		this.volume++;
		this.label_volume.text = String(this.volume);
	}

	public reduceClickCallback(e){
		SoundManager.Instance.PlayEffect("tuch_mp3");
		if(this.volume <=0)
			return;
		this.volume--;
		this.label_volume.text = String(this.volume);
	}
	
}