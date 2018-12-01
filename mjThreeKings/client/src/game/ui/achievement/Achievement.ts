enum AchivementType
{
	Battle,		// 战斗
	Social,		// 社交
	Develop,	// 发展
	Other,		// 其他
}

class Achievement extends UIWindow {

	private itemListView:ListViewBase;
	private battleToggle:eui.ToggleButton;
	private socialToggle:eui.ToggleButton;
	private developToggle:eui.ToggleButton;
	private otherToggle:eui.ToggleButton;

	private getAllButton:eui.Button;
	private hideGottenCheck:eui.CheckBox;
	


    public GetSkinFile() : string {
        return "exml/achievementwindow.exml";
    }


	protected OnOpen(args? : any){
        super.OnOpen(args);

		this.getAllButton.addEventListener(egret.TouchEvent.TOUCH_TAP,this.OnGetAllButtonClick,this);

		this.battleToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBattleToggleChange, this);
		this.socialToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnSocialToggleChange, this);
		this.developToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnDevelopToggleChange, this);
		this.otherToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnOtherToggleChange, this);

		this.hideGottenCheck.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnhideGottenClick, this);

		let tempData:any[] = [
			{templateId:1000001},
			{templateId:1000002},
			{templateId:1000003},
			{templateId:1000004},
			{templateId:1000005},
			{templateId:1000006},
			{templateId:1000007},
			{templateId:1000008},
			{templateId:1000009},
			{templateId:1000010},
			{templateId:1000011},
			{templateId:1000012},
		];

		this.itemListView.SetItemClass(AchievementItem);
		this.itemListView.SetData(tempData);
		
    }

	private OnhideGottenClick(event:egret.TouchEvent):void{
		//TODO 筛选是否已经领取的成就
	}

	private OnGetAllButtonClick(event:egret.TouchEvent):void{
		//TODO 领取所有奖励
	}

	private OnBattleToggleChange(event:egret.TouchEvent):void{
		this.OnToggleChange(AchivementType.Battle);
	}

	private OnSocialToggleChange(event:egret.TouchEvent):void{
		this.OnToggleChange(AchivementType.Social);
	}

	private OnDevelopToggleChange(event:egret.TouchEvent):void{
		this.OnToggleChange(AchivementType.Develop);
	}

	private OnOtherToggleChange(event:egret.TouchEvent):void{
		this.OnToggleChange(AchivementType.Other);
	}

	private OnToggleChange(type:AchivementType):void{
		this.battleToggle.selected = false;
		this.socialToggle.selected = false;
		this.developToggle.selected = false;
		this.otherToggle.selected = false;

		switch(type)
		{
			case AchivementType.Battle:
				this.battleToggle.selected = true;
			break;
			case AchivementType.Social:
				this.socialToggle.selected = true;
			break;
			case AchivementType.Develop:
				this.developToggle.selected = true;
			break;
			case AchivementType.Other:
				this.otherToggle.selected = true;
			break;
		}

		//TODO: 发送消息获取数据
	}

}