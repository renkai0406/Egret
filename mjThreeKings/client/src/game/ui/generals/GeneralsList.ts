class GeneralsList extends UIWindow{

    private lvb_generals : ListViewBase;
    private rbtn_sort : eui.RadioButton;
    private label_grade : eui.Label;
    private label_jianghun : eui.Label;

    private list_data : any[] = new Array();

    public GetSkinFile() : string {
        return "exml/generalspage.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        this.rbtn_sort.group.selectedValue = 0;
        this.rbtn_sort.group.addEventListener(eui.UIEvent.CHANGE, this.radio_changed_callback ,this);
        this.lvb_generals.GetList().layout = new eui.TileLayout();
        this.init();
        
    }

    //从网络加载资源
    private load_friend_data(type:number){
        let generals : nano.Map<number, GeneralConfig> = ConfigMng.Instance.GetAllGeneralConfig();
        let keys = generals.Keys();
        this.list_data.splice(0);
        
        for(let i = 0; i < keys.length; i++){
            
            var value = {name:"", tag:0, img:"", star:0, max:0, enabled:true};
            let general = generals.Get(keys[i]);
            if(type != 0 && general.CountryId != type){
                continue;
            }
            value.name = general.Name;
            value.tag = general.CountryId;
            value.img = general.Res;
            value.star = general.InitStar;
            value.max = general.MaxStar;
            value.enabled = true;
            this.list_data.push(value);
        }
        
    }

    private init(){
        this.load_friend_data(Number(this.rbtn_sort.group.selectedValue));
        this.lvb_generals.SetData(this.list_data);
        this.lvb_generals.SetItemClass(GeneralsItem);
    }
    
    private radio_changed_callback(e):void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        let group:eui.RadioButtonGroup = e.target; 
        this.init();
    }
}