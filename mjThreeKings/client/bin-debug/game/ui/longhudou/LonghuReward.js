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
var LonghuReward = (function (_super) {
    __extends(LonghuReward, _super);
    function LonghuReward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LonghuReward.prototype.GetSkinFile = function () {
        return "exml/longhureward.exml";
    };
    LonghuReward.prototype.OnOpen = function (args) {
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        this.totalBonus.text = "" + 123;
    };
    LonghuReward.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return LonghuReward;
}(UIWindow));
__reflect(LonghuReward.prototype, "LonghuReward");
