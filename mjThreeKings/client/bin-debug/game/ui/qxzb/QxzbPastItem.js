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
var QxzbPastItem = (function (_super) {
    __extends(QxzbPastItem, _super);
    function QxzbPastItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/QxzbPastItem.exml";
        return _this;
    }
    QxzbPastItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.img_avator.mask = this.img_avator_mask;
    };
    QxzbPastItem.prototype.dataChanged = function () {
    };
    return QxzbPastItem;
}(eui.ItemRenderer));
__reflect(QxzbPastItem.prototype, "QxzbPastItem");
