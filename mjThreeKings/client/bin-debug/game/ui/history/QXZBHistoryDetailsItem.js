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
var QXZBHistoryDetailsItem = (function (_super) {
    __extends(QXZBHistoryDetailsItem, _super);
    function QXZBHistoryDetailsItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/HistoryQXZBDetailItem.exml";
        return _this;
    }
    QXZBHistoryDetailsItem.prototype.dataChanged = function () {
        this.playerName.text = this.data.playerName;
        this.textMojing.text = this.data.textMojing;
        this.matchTime.text = this.data.matchTime;
        if (this.data.isWin) {
            this.redbg.visible = true;
            this.bluebg.visible = false;
            this.win.visible = true;
            this.lose.visible = false;
        }
        else {
            this.redbg.visible = false;
            this.bluebg.visible = true;
            this.win.visible = false;
            this.lose.visible = true;
        }
    };
    return QXZBHistoryDetailsItem;
}(eui.ItemRenderer));
__reflect(QXZBHistoryDetailsItem.prototype, "QXZBHistoryDetailsItem");
