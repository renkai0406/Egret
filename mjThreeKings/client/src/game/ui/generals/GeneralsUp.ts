class GeneralsUp extends UIWindow{

    private lvb_low : ListViewBase;
    private lvb_high : ListViewBase;    
    private label_jianghun : eui.Label;
    private btn_cancel : eui.Button;
    private btn_submit : eui.Button;
    private mainPanel:eui.Panel;

    private list_data_low : any[] = new Array();
    private list_data_up : any[] = new Array();

    public GetSkinFile() : string {
        return "exml/generalsuppage.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        egret.log("args:" + args);
        this.init(args[0]);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    }

    private init(data){
        data.enabled = false;
        egret.log("data.img:" + data.img);
        this.list_data_low.push(data);
        this.lvb_low.SetData(this.list_data_low);
        this.lvb_low.SetItemClass(GeneralsItem);
        
        var data_copy = {star:-1};
        for(var p in data){
            data_copy[p] = data[p];
        }
        data_copy.star += 1;
        egret.log("data.star:" + data.star);
        this.list_data_up.push(data_copy);
        this.lvb_high.SetData(this.list_data_up);
        this.lvb_high.SetItemClass(GeneralsItem);
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }

}