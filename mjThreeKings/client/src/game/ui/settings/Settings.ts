

class Settings extends UIWindow {

    private mainPanel : eui.Panel;
    private slider_amp : SettingSlider;
    private slider_effect : SettingSlider;
    private img_amp : eui.Image;
    private img_grade : eui.Image;
    private img_effect : eui.Image;
    

    public GetSkinFile() : string {
        return "exml/settingspage.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        this.set_img(this.img_amp, this.slider_amp);
        this.set_img(this.img_effect, this.slider_effect);
        this.slider_amp.setVolume(SoundManager.Instance.GetMusicVolume());
        this.slider_amp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.amp_move_callback, this);
        this.slider_amp.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.amp_move_callback, this);
        this.slider_effect.setVolume(SoundManager.Instance.GetEffectVolume());
        this.slider_effect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.effect_move_callback, this);
        this.slider_effect.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.effect_move_callback, this);
    }

    private effect_move_callback(e : egret.TouchEvent){
        this.slider_move_callback(e);
        egret.log("音效：" + this.slider_effect.getVolume());
        SoundManager.Instance.SetEffectVolume(this.slider_effect.getVolume());
    }

    private amp_move_callback(e : egret.TouchEvent){
        this.slider_move_callback(e);
        egret.log("音量：" + this.slider_amp.getVolume());
        SoundManager.Instance.SetMusicVolume(this.slider_amp.getVolume());
    }

    private slider_move_callback(e : egret.TouchEvent){
        let slider = e.currentTarget;
        let img : eui.Image;
        if(slider == this.slider_amp){
            img = this.img_amp;
        }else{
            img = this.img_effect;
        }
        this.set_img(img, slider);
       
    } 

    private set_img(img:eui.Image, slider:SettingSlider){
        var volume = slider.getVolume();
        if(volume == 0){
            img.source = "sz_Btn_SoundOn_png";
        }else{
            img.source = "sz_Btn_SoundOff_png";
        }
    }

    protected onCloseButtonClick(event: egret.TouchEvent): void{
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    }
    
}