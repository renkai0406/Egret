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
var LHDHistoryDetailsItem = (function (_super) {
    __extends(LHDHistoryDetailsItem, _super);
    function LHDHistoryDetailsItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/HistoryLHDDetailItem.exml";
        return _this;
    }
    LHDHistoryDetailsItem.prototype.dataChanged = function () {
        if (this.data.isWin == 1) {
            this.redbg.visible = true;
            this.bluebg.visible = false;
            this.winer.visible = true;
            this.loser.visible = false;
        }
        else {
            this.redbg.visible = false;
            this.bluebg.visible = true;
            this.winer.visible = false;
            this.loser.visible = true;
        }
        this.playerName.text = this.data.playerName;
        this.level.text = "主公等级:" + this.data.level;
        this.grade.text = this.data.grade;
        this.textMojing.text = this.data.incomemojing;
        this.textbangjing.text = this.data.incomebangjing;
        this.textExp.text = this.data.exp;
        if (this.data.relationship == 1) {
            this.relation1.visible = true;
            this.relation0.visible = false;
        }
        else {
            this.relation1.visible = false;
            this.relation0.visible = true;
        }
    };
    return LHDHistoryDetailsItem;
}(eui.ItemRenderer));
__reflect(LHDHistoryDetailsItem.prototype, "LHDHistoryDetailsItem");
