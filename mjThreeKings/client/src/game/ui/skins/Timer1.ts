class Timer1 extends eui.Component implements  eui.UIComponent {

	private label_min1 : eui.Label;
	private label_min2 : eui.Label;
	private label_sec1 : eui.Label;
	private label_sec2 : eui.Label;

	private minute : number;
	private second : number;

	private timer:egret.Timer;

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

	public setTime(minute : number, second : number) : void{
		this.minute = minute;
		this.second = second;
		this.setUI();
	}

	private setUI() : void{
		this.label_min1.text = String(Math.floor(this.minute / 10));
		this.label_min2.text = String(this.minute % 10);
		this.label_sec1.text = String(Math.floor(this.second / 10));
		this.label_sec2.text = String(this.second % 10);
	}

	public startTiming(){
		this.timer = new egret.Timer(1000, this.minute * 60 + this.second);
		this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeCallback, this);
        this.timer.start();
	}

	private timeCallback(){
		if(this.second == 0){
			if(this.minute == 0){
				this.timer.stop();
				return;
			}
			this.second = 59;
			this.minute -= 1;
		}else{
			this.second -= 1;
		}
		this.setUI();
	}
}