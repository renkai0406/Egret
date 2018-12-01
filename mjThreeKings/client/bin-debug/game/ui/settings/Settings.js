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
var Settings = (function (_super) {
    __extends(Settings, _super);
    function Settings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Settings.prototype.GetSkinFile = function () {
        return "exml/settingspage.exml";
    };
    Settings.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        this.set_img(this.img_amp, this.slider_amp);
        this.set_img(this.img_effect, this.slider_effect);
        this.slider_amp.setVolume(SoundManager.Instance.GetMusicVolume());
        this.slider_amp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.amp_move_callback, this);
        this.slider_amp.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.amp_move_callback, this);
        this.slider_effect.setVolume(SoundManager.Instance.GetEffectVolume());
        this.slider_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.effect_move_callback, this);
        this.slider_effect.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.effect_move_callback, this);
    };
    Settings.prototype.effect_move_callback = function (e) {
        this.slider_move_callback(e);
        egret.log("音效：" + this.slider_effect.getVolume());
        SoundManager.Instance.SetEffectVolume(this.slider_effect.getVolume());
    };
    Settings.prototype.amp_move_callback = function (e) {
        this.slider_move_callback(e);
        egret.log("音量：" + this.slider_amp.getVolume());
        SoundManager.Instance.SetMusicVolume(this.slider_amp.getVolume());
    };
    Settings.prototype.slider_move_callback = function (e) {
        var slider = e.currentTarget;
        var img;
        if (slider == this.slider_amp) {
            img = this.img_amp;
        }
        else {
            img = this.img_effect;
        }
        this.set_img(img, slider);
    };
    Settings.prototype.set_img = function (img, slider) {
        var volume = slider.getVolume();
        if (volume == 0) {
            img.source = "sz_Btn_SoundOn_png";
        }
        else {
            img.source = "sz_Btn_SoundOff_png";
        }
    };
    Settings.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return Settings;
}(UIWindow));
__reflect(Settings.prototype, "Settings");
