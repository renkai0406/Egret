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
var QxzbCreateRace = (function (_super) {
    __extends(QxzbCreateRace, _super);
    function QxzbCreateRace() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QxzbCreateRace.prototype.GetSkinFile = function () {
        return "exml/qxzb_createrace.exml";
    };
    QxzbCreateRace.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.reg_award.setVolume(1000);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    };
    QxzbCreateRace.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return QxzbCreateRace;
}(UIWindow));
__reflect(QxzbCreateRace.prototype, "QxzbCreateRace");
