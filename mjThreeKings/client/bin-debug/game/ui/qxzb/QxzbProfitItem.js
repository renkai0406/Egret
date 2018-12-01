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
var QxzbProfitItem = (function (_super) {
    __extends(QxzbProfitItem, _super);
    function QxzbProfitItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/QxzbProfitItem.exml";
        return _this;
    }
    QxzbProfitItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    QxzbProfitItem.prototype.dataChanged = function () {
    };
    return QxzbProfitItem;
}(eui.ItemRenderer));
__reflect(QxzbProfitItem.prototype, "QxzbProfitItem");
