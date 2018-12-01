class LoadingBar1 extends eui.Component implements  eui.UIComponent {
	
	private mask_egret : egret.Rectangle;
	private img_back : eui.Image;
	private img_front : eui.Image;
	private label_progress : eui.Label;

	private cur_progress : number;
	private max_progress : number;
	private max_mask_width : number;
	private mcFactory:egret.MovieClipDataFactory;
	private clip_move : egret.MovieClip;
	
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

		//加载动画
        var data = RES.getRes("load_anim_json");
        var texture = RES.getRes("load_anim_png");
        this.mcFactory = new egret.MovieClipDataFactory( data, texture);
		this.clip_move = new egret.MovieClip( this.mcFactory.generateMovieClipData("loadanimation") ); 
		
		this.clip_move.anchorOffsetX = this.clip_move.width - 15;
		
		this.clip_move.y = this.img_front.y + 5;
		this.addChild( this.clip_move );
		this.clip_move.gotoAndPlay(1,-1);
	}

	public init(current : number, max : number):void{
		
		this.max_mask_width = this.img_front.width - 100;
		this.update(current, max);
		
    }

	public update(current : number, max : number):void{
		this.mask_egret = new egret.Rectangle(this.img_front.x + 15, this.img_front.y, this.calcuProgress(current, max), this.img_front.height)
        this.img_front.mask = this.mask_egret;
		
		
		var progress = Math.round(current / max * 100);
		if(progress >= 100){
			this.clip_move.stop();
			egret.log("动画暂停");
		}else{
			this.clip_move.x = this.img_front.x + this.mask_egret.width + 10;
		}
		this.label_progress.text = "加载中…" + progress + "%";
	}

	private calcuProgress(current, max):number{
        return current/max * this.max_mask_width;
    }
	
}