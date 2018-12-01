class AdviserList extends UIWindow{

    private list_adviser : ListViewBase;
    private label_info : eui.Label;
    private label_attribute : eui.Label;

    public item_selected : AdviserItem;



    private list_data : any[] = new Array();


    public GetSkinFile() : string {
        return "exml/adviserpage.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        this.list_adviser.GetList().layout = new eui.TileLayout();
        this.init();
    }

    //从网络加载资源
    private load_friend_data(page : number, count : number){
        let temp_data : any[] = 
        [
            {name:"刘1",state:AdviserUtil.ADVISER_STATE_LOCKED,img:"1", info:"大家好，我叫诸葛亮", attribute:"采矿时间：1小时"},
            {name:"刘2",state:AdviserUtil.ADVISER_STATE_USED,img:"2", info:"大家好，我叫刘备", attribute:"采矿时间：2小时"},
            {name:"刘3",state:AdviserUtil.ADVISER_STATE_OWNED,img:"3", info:"大家好，我叫关羽", attribute:"采矿时间：3小时"},
            {name:"刘4",state:AdviserUtil.ADVISER_STATE_LOCKED,img:"2", info:"大家好，我叫张飞", attribute:"采矿时间：4小时"}, 
            {name:"刘5",state:AdviserUtil.ADVISER_STATE_LOCKED,img:"3", info:"大家好，我叫徐庶", attribute:"采矿时间：5小时"},
            {name:"刘6",state:AdviserUtil.ADVISER_STATE_OWNED,img:"1", info:"大家好，我叫张岱", attribute:"采矿时间：6小时"},
            {name:"刘7",state:AdviserUtil.ADVISER_STATE_OWNED,img:"1", info:"大家好，我叫魏延", attribute:"采矿时间：7小时"},
            {name:"刘8",state:AdviserUtil.ADVISER_STATE_LOCKED,img:"3", info:"大家好，我叫陈宫", attribute:"采矿时间：8小时"},
           
        ];
        this.list_data.splice(0);
        for(var i =(page - 1) * count;i<page * count;i++){
            let value = temp_data[i];
            value.img = this.get_adviser_path(value.img);
            this.list_data.push(value);
        }
    }

    private init(){
        this.load_friend_data(1, 8);
        this.list_adviser.SetData(this.list_data);
        this.list_adviser.SetItemClass(AdviserItem);
    }

    private get_adviser_path(name:string){
        switch(name){
            case "1":
                return "10001_png";
            case "2":
                return "10002_png";
            case "3":
                return "10003_png";
            default:
                return "";
        }
    }
}