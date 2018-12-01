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
var YellowProgressBar = (function (_super) {
    __extends(YellowProgressBar, _super);
    function YellowProgressBar() {
        return _super.call(this) || this;
    }
    YellowProgressBar.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    YellowProgressBar.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    YellowProgressBar.prototype.init = function (percent, state) {
        this.vs_state.selectedIndex = state;
        if (state == QxzbUtil.RACE_STATE.RACE_WILL) {
            var mask = new egret.Rectangle(this.img_front.x, this.img_front.y, this.img_front.width * percent, this.img_front.height);
            this.img_front.mask = mask;
            this.label_progress.text = percent * 100 + '%';
        }
    };
    return YellowProgressBar;
}(eui.Component));
__reflect(YellowProgressBar.prototype, "YellowProgressBar", ["eui.UIComponent", "egret.DisplayObject"]);
