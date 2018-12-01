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
var LonghudouItem = (function (_super) {
    __extends(LonghudouItem, _super);
    function LonghudouItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/LongHuDouItem.exml";
        return _this;
    }
    LonghudouItem.prototype.dataChanged = function () {
        this.warcost.text = this.data.cost;
        this.warlimit.text = this.data.limit;
        this.exp.text = "官场经验 +" + this.data.exp;
        this.merit.text = "功勋值 +" + this.data.merit;
        this.lineup.text = this.data.lineup;
        this.skill.text = this.data.skill;
        this.income.text = this.data.income;
    };
    return LonghudouItem;
}(eui.ItemRenderer));
__reflect(LonghudouItem.prototype, "LonghudouItem");
