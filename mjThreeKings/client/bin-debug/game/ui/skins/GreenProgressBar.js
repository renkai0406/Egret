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
var GreenProgressBar = (function (_super) {
    __extends(GreenProgressBar, _super);
    function GreenProgressBar() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/GreenProgressBarSkin.exml";
        return _this;
    }
    GreenProgressBar.prototype.setMax = function (max) {
        this.max_progress = max;
    };
    GreenProgressBar.prototype.setCurrent = function (current) {
        this.cur_progress = current;
    };
    GreenProgressBar.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GreenProgressBar.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.max_front_width = this.img_front.width;
    };
    GreenProgressBar.prototype.init = function (current, max) {
        this.max_progress = max;
        this.cur_progress = current;
        this.mask_front = new egret.Rectangle(this.img_front.x, this.img_front.y, this.calcuProgress(), this.img_front.height);
        this.img_front.mask = this.mask_front;
        this.label_progress.text = this.cur_progress + "/" + this.max_progress;
    };
    GreenProgressBar.prototype.calcuProgress = function () {
        return this.cur_progress / this.max_progress * this.max_front_width;
    };
    return GreenProgressBar;
}(eui.Component));
__reflect(GreenProgressBar.prototype, "GreenProgressBar", ["eui.UIComponent", "egret.DisplayObject"]);
