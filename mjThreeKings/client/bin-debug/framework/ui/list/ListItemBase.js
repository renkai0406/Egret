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
var ListItemBase = (function (_super) {
    __extends(ListItemBase, _super);
    function ListItemBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItemBase.prototype.dataChanged = function () {
        var list = this.parent;
        if (this.itemIndex == 0) {
            if (list.itemSizeMeasured) {
                this.OnDataChange();
            }
            else {
                list.itemSizeMeasured = true;
            }
        }
        else {
            this.OnDataChange();
        }
    };
    ListItemBase.prototype.OnDataChange = function () {
    };
    return ListItemBase;
}(eui.ItemRenderer));
__reflect(ListItemBase.prototype, "ListItemBase");
