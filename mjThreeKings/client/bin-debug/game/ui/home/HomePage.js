// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.GetSkinFile = function () {
        return "exml/homepage.exml";
    };
    HomePage.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        SoundManager.Instance.PlayMusic("zhujiemian_mp3");
        this.img_avatar.mask = this.img_avatar_mask;
        this.btn_settings.addEventListener(egret.TouchEvent.TOUCH_TAP, this.settingsClick, this);
        for (var i = 0; i < this.group_controller.numChildren; i++) {
            this.group_controller.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.controller_btn_click, this);
        }
        for (var i = 0; i < this.group_game.numChildren; i++) {
            this.group_game.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.game_btn_click, this);
        }
        for (var i = 0; i < this.group_main.numChildren; i++) {
            this.group_main.getChildAt(i).addEventListener(egret.TouchEvent.TOUCH_TAP, this.main_btn_click, this);
        }
    };
    HomePage.prototype.controller_btn_click = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var index = Number(this.rbtn_controller.group.selectedValue);
        switch (index) {
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
    };
    HomePage.prototype.game_btn_click = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var index = Number(this.rbtn_game.group.selectedValue);
        switch (index) {
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
    };
    HomePage.prototype.main_btn_click = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var target = e.target;
        var group = target.parent;
        for (var i = 0; i < group.numChildren; i++) {
            var child = group.getChildAt(i);
            child.selected = true;
        }
        var index = Number(this.rbtn_main.group.selectedValue);
        switch (index) {
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
    };
    HomePage.prototype.settingsClick = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        UIManager.Instance.OpenWindow("Settings");
    };
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
    HomePage.prototype.onShowMsg = function () {
        //UIManager.Instance.OpenWindow("MessageBox");
        SceneManager.Instance.ReplaceScene("BattleScene");
    };
    HomePage.prototype.onCreate = function () {
        //Tween.click(this.createBtn);
        UIManager.Instance.OpenWindow("MessageBox");
    };
    return HomePage;
}(UIPage));
__reflect(HomePage.prototype, "HomePage");
