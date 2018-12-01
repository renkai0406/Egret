// TypeScript file


class HomePage extends UIPage {

    
   private img_avatar : eui.Image;
   private img_avatar_mask : eui.Image;
   private label_name : eui.Label;
   private label_id : eui.Label;
   private label_office : eui.Label;
   private btn_settings : eui.Button;
   private label_grade : eui.Label;
   private label_message : eui.Label;
   private rbtn_controller : eui.RadioButton;
   private rbtn_game : eui.RadioButton;
   private rbtn_main:eui.RadioButton;
   private group_controller: eui.Group;
   private group_game : eui.Group;
   private group_main : eui.Group;

    public GetSkinFile() : string {
        return "exml/homepage.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        SoundManager.Instance.PlayMusic("zhujiemian_mp3");
        this.img_avatar.mask = this.img_avatar_mask;
        this.btn_settings.addEventListener(egret.TouchEvent.TOUCH_TAP, this.settingsClick, this);
        for(var i = 0; i < this.group_controller.numChildren; i++){
            this.group_controller.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.controller_btn_click, this);
        }
        for(var i = 0; i < this.group_game.numChildren; i++){
            this.group_game.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.game_btn_click, this);
        }
         for(var i = 0; i < this.group_main.numChildren; i++){
            this.group_main.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.main_btn_click, this);
        }
    }

    private controller_btn_click(e){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var index = Number(this.rbtn_controller.group.selectedValue);
        switch(index){
            case 0:
            break;
            case 1:
            break;
            case 2:
                UIManager.Instance.OpenWindow("Task");
            break;
            case 3:
                
            break;
            default:
            break;
        }
    }

    private game_btn_click(e):void {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var index = Number(this.rbtn_game.group.selectedValue);
        switch(index){
            case 0:
            break;
            case 1:
            break;
            case 2:
                UIManager.Instance.OpenWindow("QxzbMain");
            break;
            default:
            break;
        }
    }

    private main_btn_click(e:eui.UIEvent){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var target = e.target as eui.Button;
        var group = target.parent as eui.Group;
        for(var i = 0; i < group.numChildren; i++){
            var child = group.getChildAt(i) as eui.RadioButton;
            child.selected = true;
        }

        var index = Number(this.rbtn_main.group.selectedValue);
        switch(index){
            case 0:
                UIManager.Instance.OpenWindow("GeneralsList");
            break;
            case 1:
                //UIManager.Instance.OpenWindow("");
            break;
            case 2:
                UIManager.Instance.OpenWindow("FriendBase");
            break;
            default:
            break;
        }
    }

    private settingsClick(e){
        SoundManager.Instance.PlayEffect("tuch_mp3");
        UIManager.Instance.OpenWindow("Settings");
    }

    /*private onPlayMusic() : void {
        //SoundManager.Instance.PlayMusic("bgm0_mp3")

        // let spine : Spine = SpineManager.Instance.CreateSpine("paodekuai","armatureName");
        // spine.x = nano.MathUtils.Random(-100 + this.stage.stageWidth/2,100 + this.stage.stageWidth/2);
        // spine.y = nano.MathUtils.Random(-100 + this.stage.stageHeight/2,100 + this.stage.stageHeight/2);
        // this.addChild(spine);
        // spine.Play("animation",1,null,true);

        // // 数据表测试
        // let petConfig = ConfigMng.Instance.GetPetModeConfig(1000023); 
        // let petName = petConfig.Name;
    }

    private onPlayEffect() : void {
        //Tween.click(this.playEffect);
        SoundManager.Instance.PlayEffect("open_mp3")
    }

    private onPlayMusicFromUrl() : void {
        SoundManager.Instance.PlayMusicFromUrlAsync("assets/sound/bgm2.mp3");
    }

    private onPlayMusicFromNet() : void {
        SoundManager.Instance.PlayMusicFromNetAsync("http://192.168.40.111:20005/music/bgm3.mp3");
    }

    private onPlayMusic1() : void {
        SoundManager.Instance.PlayMusic("bgm1_mp3")
    }*/

    private onShowMsg() : void {
        //UIManager.Instance.OpenWindow("MessageBox");
        SceneManager.Instance.ReplaceScene("BattleScene");
    }

    private onCreate() : void {
        //Tween.click(this.createBtn);
        UIManager.Instance.OpenWindow("MessageBox");
    }
}