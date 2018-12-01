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
// TypeScript file
var QXZBHistoryPageItem = (function (_super) {
    __extends(QXZBHistoryPageItem, _super);
    function QXZBHistoryPageItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/HistoryQXZBItem.exml";
        return _this;
    }
    QXZBHistoryPageItem.prototype.dataChanged = function () {
        this.details.addEventListener(egret.TouchEvent.TOUCH_TAP, this.datailsCallback, this);
        this.share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareCallback, this);
        this.roomID.text = this.data.roomid;
        this.roomName.text = this.data.roomName;
        this.time.text = this.data.time;
        this.playerName.text = this.data.playerName;
        this.playerID.text = this.data.playerID;
        this.organizerName.text = this.data.organizerName;
        this.matchTime.text = this.data.matchTime;
        this.income1.text = this.data.income1;
        this.income2.text = "-" + this.data.income2;
    };
    QXZBHistoryPageItem.prototype.datailsCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    QXZBHistoryPageItem.prototype.shareCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    return QXZBHistoryPageItem;
}(eui.ItemRenderer));
__reflect(QXZBHistoryPageItem.prototype, "QXZBHistoryPageItem");
