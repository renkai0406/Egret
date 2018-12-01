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
var FriendItem_Show = (function (_super) {
    __extends(FriendItem_Show, _super);
    function FriendItem_Show() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/FriendItem_Show.exml";
        return _this;
    }
    FriendItem_Show.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.btn_info.addEventListener(egret.TouchEvent.TOUCH_TAP, this.info_callback, this);
        this.btn_delete.addEventListener(egret.TouchEvent.TOUCH_TAP, this.delete_callback, this);
    };
    FriendItem_Show.prototype.dataChanged = function () {
    };
    FriendItem_Show.prototype.info_callback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    FriendItem_Show.prototype.delete_callback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var index = this.parent.getChildIndex(this);
        this.base.del_child(index);
    };
    return FriendItem_Show;
}(FriendItemI));
__reflect(FriendItem_Show.prototype, "FriendItem_Show");
