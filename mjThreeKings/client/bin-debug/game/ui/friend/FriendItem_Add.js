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
var FriendItem_Add = (function (_super) {
    __extends(FriendItem_Add, _super);
    function FriendItem_Add() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/FriendItem_Add.exml";
        return _this;
    }
    FriendItem_Add.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    FriendItem_Add.prototype.dataChanged = function () {
    };
    return FriendItem_Add;
}(FriendItemI));
__reflect(FriendItem_Add.prototype, "FriendItem_Add");
