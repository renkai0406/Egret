class FriendBase extends UIWindow{

    //公共组件
    private rbtn_base : eui.RadioButton;
    private vs_view:eui.ViewStack;
    
    //当前好友组件
    private list_show : ListViewBase;
    private pt1_show : PageTurning1;
    private btn_refresh_show : eui.Button;
    private btn_edit_show : eui.Button;

    //编辑好友组件
    private list_edit : ListViewBase;
    private pt1_edit : PageTurning1;
    private btn_cancel_edit : eui.Button;
    private btn_submit_edit : eui.Button;

    //添加好友组件
    private list_add : ListViewBase;

    //申请好友组件
    private list_apply : ListViewBase;
    private pt1_apply : PageTurning1;

    //公共变量
    private lv_current : ListViewBase;
    private list_data : any[] = new Array();
    private max_child_count : number = 4;
    

    public GetSkinFile() : string {
        return "exml/friendpage_cur_base.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        this.rbtn_base.group.selectedValue = 0;
        this.vs_view.selectedIndex = 0;
        this.lv_current = this.list_show;
        this.initShow();
        this.rbtn_base.group.addEventListener(eui.UIEvent.CHANGE, this.radio_changed_callback ,this);
        this.btn_refresh_show.addEventListener(egret.TouchEvent.TOUCH_TAP, this.refresh_show_callback, this);
        this.btn_edit_show.addEventListener(egret.TouchEvent.TOUCH_TAP, this.edit_show_callback, this);
        this.btn_cancel_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.edit_cancel_callback, this);
        this.btn_submit_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.edit_submit_callback, this);

    }

    //从网络加载资源
    private load_friend_data(page : number, count : number){
        let temp_data : any[] = 
        [
            {name:"刘一", id:"023451", grade:"90",office:"平民",img:"",invite:"1111101"},
            {name:"陈二", id:"023452", grade:"91",office:"平民",img:"",invite:"1111102"},
            {name:"张三", id:"023453", grade:"92",office:"宰相",img:"",invite:"1111103"},
            {name:"李四", id:"023454", grade:"93",office:"平民",img:"",invite:"1111104"},
            {name:"李5", id:"023454", grade:"93",office:"平民",img:"",invite:"1111105"},
            {name:"李6", id:"023454", grade:"93",office:"平民",img:"",invite:"1111106"},
            {name:"李7", id:"023454", grade:"93",office:"平民",img:"",invite:"1111107"},
            {name:"李8", id:"023454", grade:"93",office:"平民",img:"",invite:"1111108"},
            {name:"刘9", id:"023454", grade:"93",office:"平民",img:"",invite:"1111109"},
            {name:"刘10", id:"023454", grade:"93",office:"平民",img:"",invite:"1111110"},
            {name:"刘11", id:"023454", grade:"93",office:"平民",img:"",invite:"1111111"},
            {name:"刘12", id:"023454", grade:"93",office:"平民",img:"",invite:"1111112"},

        ];
        this.list_data.splice(0);
        for(var i =(page - 1) * count;i<page * count;i++){
            this.list_data.push(temp_data[i]);
        }
    }

    private list_added_callback(e : egret.Event){
        
        var list = this.lv_current.GetList();
        var child = list.getChildAt(list.numChildren - 1) as FriendItemI;
        egret.log(child);
        child.setBase(this);
    }

    private radio_changed_callback(e:eui.UIEvent){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        let group:eui.RadioButtonGroup = e.target;
        
        switch(group.selectedValue){
            case "0":
                this.vs_view.selectedIndex = 0;
                this.lv_current = this.list_show;
                this.initShow();
            break;
            case "1":
                this.vs_view.selectedIndex = 2;
                this.lv_current = this.list_add;
                this.initAdd();
            break;
            case "2":
                this.vs_view.selectedIndex =3;
                this.lv_current = this.list_apply;
                this.initApply();
            break;
            default:
            break;
        }
        egret.log("radio id:" + group.selectedValue + ";view_stack id:" + this.vs_view.selectedIndex);
    }

    public del_child(index : number){
        egret.log("删除元素,下标：" + index);
        this.list_data.splice(index, 1);
        this.lv_current.SetData(this.list_data);
    }

    private initShow(){
        this.load_friend_data(1, 4);
        this.list_show.SetData(this.list_data);
        this.list_show.SetItemClass(FriendItem_Show);
        this.pt1_show.init(1, 22);
        this.list_show.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    }

    private refresh_show_callback(e):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.load_friend_data(this.pt1_show.getPage(), 4);
        this.list_show.SetData(this.list_data);
        this.list_show.SetItemClass(FriendItem_Show);
        this.list_show.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    }

    private edit_show_callback(e){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var current_page = this.pt1_show.getPage();
        var max_page = this.pt1_show.getMax();
        this.vs_view.selectedIndex = 1;
        this.load_friend_data(current_page, 4);
        this.pt1_edit.init(current_page, max_page);
        this.list_edit.SetData(this.list_data);
        this.list_edit.SetItemClass(FriendItem_Edit);
        this.list_edit.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    }

    private edit_cancel_callback(e){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.vs_view.selectedIndex = 0;
    }
    
    private edit_submit_callback(e){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.vs_view.selectedIndex = 0;
    }

    private initAdd(){
        this.load_friend_data(1, 3);
        this.list_add.SetData(this.list_data);
        this.list_add.SetItemClass(FriendItem_Add);
        this.list_add.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    }

    private initApply(){
        this.load_friend_data(1, 4);
        this.list_apply.SetData(this.list_data);
        this.list_apply.SetItemClass(FriendItem_Apply);
        this.pt1_apply.init(1, 22);
        this.list_apply.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    }
}