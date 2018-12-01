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
var SettingSlider = (function (_super) {
    __extends(SettingSlider, _super);
    function SettingSlider() {
        var _this = _super.call(this) || this;
        _this.volume = 0.00;
        return _this;
    }
    SettingSlider.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    SettingSlider.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.real_btn_half_width = this.img_button.width / 2 - 10;
        this.left_border = this.real_btn_half_width;
        this.right_border = this.img_back.width - this.real_btn_half_width;
        this.img_button.anchorOffsetX = this.img_button.width / 2;
        this.img_button.x = 200;
        this.volume = this.calculate_volume(this.img_button.x);
        egret.log("button x:" + this.img_button.x);
        this.mask_front = new egret.Rectangle(0, this.img_front.y, this.img_button.x, this.img_front.height);
        this.img_front.mask = this.mask_front;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.button_move_callback, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.button_move_callback, this);
    };
    SettingSlider.prototype.button_move_callback = function (e) {
        var point = this.globalToLocal(e.stageX, e.stageY);
        var x = point.x;
        this.set_button_location(x);
        this.volume = this.calculate_volume(x);
    };
    SettingSlider.prototype.set_button_location = function (x) {
        //出界
        if (x < this.left_border || x > this.right_border) {
            return;
        }
        this.img_button.x = x;
        this.mask_front.width = x;
        this.img_front.mask = this.mask_front;
    };
    SettingSlider.prototype.calculate_volume = function (x) {
        var result = (x - this.left_border) / (this.right_border - this.left_border);
        if (result < 0.01)
            result = 0;
        if (result > 0.99)
            result = 1;
        return result;
    };
    SettingSlider.prototype.getVolume = function () {
        return this.volume;
    };
    SettingSlider.prototype.setVolume = function (value) {
        this.volume = value;
        this.set_button_location(value * (this.right_border - this.left_border) + this.left_border);
    };
    return SettingSlider;
}(eui.Component));
__reflect(SettingSlider.prototype, "SettingSlider", ["eui.UIComponent", "egret.DisplayObject"]);
