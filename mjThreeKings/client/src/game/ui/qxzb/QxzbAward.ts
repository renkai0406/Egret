class QxzbAward extends UIWindow{

	private mainPanel:eui.Panel;
	private lvb_award : ListViewBase;
	 private list_profit : any[];

	public GetSkinFile() : string {
        return "exml/qxzb_award.exml";
    }

	protected OnOpen(args? : any){
		super.OnOpen(args);
		this.getDataFromNet();
		this.lvb_award.SetData(this.list_profit);
        this.lvb_award.SetItemClass(QxzbProfitItem);
		this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
	}

	private getDataFromNet(){
        this.list_profit = [
			{room:"1000000", host:"大胖子", type:"开赛收益", profit:500, time:"2018.7.15 15:31"},
			{room:"1000001", host:"大胖子", type:"开赛收益", profit:500, time:"2018.7.15 15:31"},
			{room:"1000002", host:"大胖子", type:"开赛收益", profit:500, time:"2018.7.15 15:31"},
			{room:"1000003", host:"大胖子", type:"开赛收益", profit:500, time:"2018.7.15 15:31"},
			{room:"1000004", host:"大胖子", type:"开赛收益", profit:500, time:"2018.7.15 15:31"},
		];
    }

	protected onCloseButtonClick(event: egret.TouchEvent): void{
		SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }



	
}