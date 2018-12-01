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
var Regulator = (function (_super) {
    __extends(Regulator, _super);
    function Regulator() {
        return _super.call(this) || this;
    }
    Regulator.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Regulator.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_add.addEventListener(egret.TouchEvent.TOUCH_TAP, this.addClickCallback, this);
        this.btn_reduce.addEventListener(egret.TouchEvent.TOUCH_TAP, this.reduceClickCallback, this);
    };
    Regulator.prototype.setVolume = function (value) {
        this.volume = value;
        this.label_volume.text = String(value);
    };
    Regulator.prototype.getVolume = function () {
        return this.volume;
    };
    Regulator.prototype.addClickCallback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.volume++;
        this.label_volume.text = String(this.volume);
    };
    Regulator.prototype.reduceClickCallback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        if (this.volume <= 0)
            return;
        this.volume--;
        this.label_volume.text = String(this.volume);
    };
    return Regulator;
}(eui.Component));
__reflect(Regulator.prototype, "Regulator", ["eui.UIComponent", "egret.DisplayObject"]);
