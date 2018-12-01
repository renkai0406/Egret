class AchievementItem extends ListItemBase {
	
	private nameTxt:eui.Label;
	private conditionTxt:eui.Label;
	private countTxt:eui.Label;
	private progress:eui.ProgressBar;

	private getButton:eui.Button;
	private yilingquImg:eui.Image;
	private jinxingzhongImg:eui.Image;
	
	private star0:eui.Image;
	private star1:eui.Image;
	private star2:eui.Image;
	private star3:eui.Image;
	private star4:eui.Image;

	private starList:Array<eui.Image>;
	
	public constructor() {
		super();
		this.skinName = "resource/exml/achievementitem.exml";

		this.starList = [];
		this.starList.push(this.star0);
		this.starList.push(this.star1);
		this.starList.push(this.star2);
		this.starList.push(this.star3);
		this.starList.push(this.star4);

	}
	
	protected OnDataChange() : void {
		let configID:number = this.data.templateId;

		let config:AchievementConfig = ConfigMng.Instance.GetAchievementConfig(configID);

		this.SetStar(config.Star);

		this.nameTxt.text = config.Name;
		this.conditionTxt.text = config.Describe;

		this.getButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGetAwardClick, this);
		this.yilingquImg.visible = false;
		this.jinxingzhongImg.visible = false;
    }   


	private OnGetAwardClick(event:egret.TouchEvent):void
	{

	}

	private SetStar(starCount:number){
		for(let i = 0; i < 5; i++)
		{
			if(i < starCount)
			{
				this.starList[i].source = "Common_json.cm_WuJiang_xingxing1";
			}
			else
			{
				this.starList[i].source = "Common_json.cm_WuJiang_xingxing2";
			}

		}
	}



}