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
var LHDHistoryPageItem = (function (_super) {
    __extends(LHDHistoryPageItem, _super);
    function LHDHistoryPageItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/HistoryLHDItem.exml";
        return _this;
    }
    LHDHistoryPageItem.prototype.dataChanged = function () {
        this.datails.addEventListener(egret.TouchEvent.TOUCH_TAP, this.datailsCallback, this);
        this.share.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shareCallback, this);
        this.roomID.text = this.data.roomid;
        this.roomName.text = this.data.roomName;
        this.time.text = this.data.time;
        this.playerName1.text = this.data.winerplayerName;
        this.playerID1.text = this.data.winerplayerID;
        this.playerIncome1.text = "+" + this.data.income;
        this.playerName2.text = this.data.loserplayerName;
        this.playerID2.text = this.data.loserplayerID;
        this.playerIncome2.text = "-" + this.data.income;
    };
    LHDHistoryPageItem.prototype.datailsCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    LHDHistoryPageItem.prototype.shareCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    return LHDHistoryPageItem;
}(eui.ItemRenderer));
__reflect(LHDHistoryPageItem.prototype, "LHDHistoryPageItem");
