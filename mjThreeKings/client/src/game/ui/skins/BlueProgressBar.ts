class BlueProgressBar extends eui.Component implements  eui.UIComponent {

    private img_front : eui.Image;
    private label_progress : eui.Label; 
    private mask_front : egret.Rectangle;

    private max_progress : number;
    private cur_progress : number;

    private max_front_width : number;

    public constructor(){
        super();
        this.skinName = "resource/eui_skins/MoJing/BlueProgressBarSkin.exml";
    }

    public setMax(max : number):void{
        this.max_progress = max;
    }

    public setCurrent(current : number):void{
        this.cur_progress = current;
    }

    protected partAdded(partName:string,instance:any):void{
		super.partAdded(partName,instance);
	}

    protected childrenCreated():void
	{
		super.childrenCreated();
        this.max_front_width = this.img_front.width;
    }

    public init(current : number, max : number):void{
        this.max_progress = max;
        this.cur_progress = current;
        this.mask_front = new egret.Rectangle(this.img_front.x, this.img_front.y, this.calcuProgress(), this.img_front.height);
        this.img_front.mask = this.mask_front;
        this.label_progress.text = this.cur_progress + "/" + this.max_progress;
    }

    private calcuProgress():number{
        return this.cur_progress/this.max_progress * this.max_front_width;
    }
}