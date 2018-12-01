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
var ListViewBase = (function (_super) {
    __extends(ListViewBase, _super);
    function ListViewBase() {
        var _this = _super.call(this) || this;
        _this.itemSizeMeasured = false;
        _this.skinName = "resource/framework/skin/ListViewSkin.exml";
        _this.currentState;
        return _this;
    }
    ListViewBase.prototype.childrenCreated = function () {
        this.scroller.width = this.width;
        this.scroller.height = this.height;
        this.list.width = this.scroller.width;
        this.list.height = this.scroller.height;
    };
    ListViewBase.prototype.SetItemSkin = function (skinName) {
        this.list.itemRendererSkinName = skinName;
    };
    ListViewBase.prototype.SetItemClass = function (render) {
        this.list.itemRenderer = render;
    };
    ListViewBase.prototype.SetData = function (data) {
        this.list.dataProvider = new eui.ArrayCollection(data);
    };
    ListViewBase.prototype.SetBounces = function (bounces) {
        this.scroller.bounces = bounces;
    };
    ListViewBase.prototype.GetList = function () {
        return this.list;
    };
    ListViewBase.prototype.GetScoller = function () {
        return this.scroller;
    };
    return ListViewBase;
}(eui.Component));
__reflect(ListViewBase.prototype, "ListViewBase");
