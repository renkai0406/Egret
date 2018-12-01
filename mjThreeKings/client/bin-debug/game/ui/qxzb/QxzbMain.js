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
var QxzbMain = (function (_super) {
    __extends(QxzbMain, _super);
    function QxzbMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QxzbMain.prototype.GetSkinFile = function () {
        return "exml/qxzb_main.exml";
    };
    QxzbMain.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SoundManager.Instance.PlayEffect("tuch_mp3");
            var btn_name = e.target.name;
            switch (btn_name) {
                case "btn0":
                    UIManager.Instance.OpenWindow("QxzbAward");
                    break;
                case "btn1":
                    UIManager.Instance.OpenWindow("QxzbRaceDetail");
                    break;
                case "btn2":
                    break;
                case "btn3":
                    UIManager.Instance.OpenWindow("QxzbCreateRace");
                    break;
            }
        }, this);
    };
    return QxzbMain;
}(UIWindow));
__reflect(QxzbMain.prototype, "QxzbMain");
