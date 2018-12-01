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
var PageTurning1 = (function (_super) {
    __extends(PageTurning1, _super);
    function PageTurning1() {
        return _super.call(this) || this;
    }
    PageTurning1.prototype.setMax = function (value) {
        this.max = value;
    };
    PageTurning1.prototype.setCurrent = function (value) {
        this.current = value;
    };
    PageTurning1.prototype.init = function (current, max) {
        this.current = current;
        this.max = max;
        this.setText();
    };
    PageTurning1.prototype.addLeftTouchListener = function (callback) {
        this.img_left.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, this);
    };
    PageTurning1.prototype.addRightTouchListener = function (callback) {
        this.img_right.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, this);
    };
    PageTurning1.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PageTurning1.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.img_left.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundManager.Instance.PlayEffect("tuch_mp3");
            if (_this.current < 2) {
                return;
            }
            _this.current--;
            _this.setText();
        }, this);
        this.img_right.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SoundManager.Instance.PlayEffect("tuch_mp3");
            if (_this.current >= _this.max) {
                return;
            }
            _this.current++;
            _this.setText();
        }, this);
    };
    PageTurning1.prototype.setText = function () {
        this.label_page.text = this.current + "/" + this.max;
    };
    PageTurning1.prototype.getPage = function () {
        return this.current;
    };
    PageTurning1.prototype.getMax = function () {
        return this.max;
    };
    return PageTurning1;
}(eui.Component));
__reflect(PageTurning1.prototype, "PageTurning1", ["eui.UIComponent", "egret.DisplayObject"]);
