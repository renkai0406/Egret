class QxzbRaceDetail extends UIWindow{

    private mainPanel:eui.Panel;
    private vs_main : eui.ViewStack;
    private rbtn_page : eui.RadioButton;

    private reg_times:Regulator;
    private ypb_progress:YellowProgressBar;
    private timer1_award :Timer1;
    private vs_award:eui.ViewStack;
    private group_title:eui.Group;

    private lvb_past :ListViewBase;

    private data:any;
    private list_past : any[];

    public GetSkinFile() : string {
        return "exml/qxzb_racedetail.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        var layout : eui.HorizontalLayout = new eui.HorizontalLayout();
        layout.horizontalAlign = egret.HorizontalAlign.LEFT;
        layout.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.group_title.layout = layout;
        this.getDetailDataFromNet();
        this.getPastDataFromNet();
       
        //RES.getRes("Common_json.Temp_TouXiangZheZhao");
        this.lvb_past.GetList().layout = new eui.TileLayout();
        this.lvb_past.SetData(this.list_past);
        this.lvb_past.SetItemClass(QxzbPastItem);
        this.rbtn_page.parent.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPageBtnClick, this);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

    private onPageBtnClick(e){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.vs_main.selectedIndex = Number(this.rbtn_page.group.selectedValue);
    }

    private getDetailDataFromNet(){
        this.data =  {
            type:QxzbUtil.RACE_CREATOR.PERSONAL, 
            
            name:"大胖子", 
            phase:2, 
            img:"", 
            award:5000,
            progress:0.8,
            state:QxzbUtil.RACE_STATE.RACE_END,
            people_joined:30,
            people_needed:20,
            time_min:30,
            time_sec:9,
            winner:"大胖子",
            profit:100,
            tips:"可单次或多次参与，参与次数越多，竞赛夺得第一的几率越大哦！",
            times:2000
        };
        this.data.official = this.data.type == QxzbUtil.RACE_CREATOR.OFFICIAL? "比赛" : "的比赛";
        this.data.winner = this.data.state == QxzbUtil.RACE_STATE.RACE_END? this.data.winner : "暂无";
        this.ypb_progress.init(this.data.progress, this.data.state);
        this.timer1_award.setTime(this.data.time_min, this.data.time_sec);
        this.timer1_award.startTiming();
        this.reg_times.setVolume(this.data.times);
        this.vs_award.selectedIndex = this.data.type;
    }

    private getPastDataFromNet(){
        this.list_past =  [
            {phase:"五", avator:"", name:"你是大胖子", id:"564888", times:1, award:50, time:"2018.7.20 12:30"},
            {phase:"四", avator:"", name:"你是大胖子", id:"564888", times:1, award:50, time:"2018.7.20 12:30"},
            {phase:"三", avator:"", name:"你是大胖子", id:"564888", times:1, award:50, time:"2018.7.20 12:30"},
            {phase:"二", avator:"", name:"你是大胖子", id:"564888", times:1, award:50, time:"2018.7.20 12:30"},
            {phase:"一", avator:"", name:"你是大胖子", id:"564888", times:1, award:50, time:"2018.7.20 12:30"},
            
        ]
    }

}