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
var MessageItem = (function (_super) {
    __extends(MessageItem, _super);
    function MessageItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/MessageItem.exml";
        return _this;
    }
    MessageItem.prototype.dataChanged = function () {
        this.origin.text = this.data.title;
        if (this.data.type == 1) {
            this.income.text = this.data.count + "魔晶";
        }
        else {
            this.income.text = this.data.count + "绑晶";
        }
        this.time.text = this.data.time;
    };
    return MessageItem;
}(eui.ItemRenderer));
__reflect(MessageItem.prototype, "MessageItem");
