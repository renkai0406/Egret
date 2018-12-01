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
var AdviserItem = (function (_super) {
    __extends(AdviserItem, _super);
    //找到父物体中所有其他的子物体.边框visiable = false
    function AdviserItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/AdviserItem.exml";
        return _this;
    }
    AdviserItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch_self_callback, this);
        this.img_frame.visible = false;
    };
    AdviserItem.prototype.OnDataChange = function () {
        this.img_used.visible = this.data.state == AdviserUtil.ADVISER_STATE_USED;
        this.group_locked.visible = this.data.state == AdviserUtil.ADVISER_STATE_LOCKED;
    };
    AdviserItem.prototype.touch_self_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var list = this.parent;
        egret.log("军师项被选中:" + list.selectedIndex);
        for (var i = 0; i < list.numChildren; i++) {
            var child = list.getChildAt(i);
            child.cancelSelected();
        }
        this.img_frame.visible = true;
        var panel_main = list.parent.parent.parent;
        var vs_operate = panel_main.getChildByName("vs_operate");
        var label_info = panel_main.getChildByName("label_info");
        var label_attribute = panel_main.getChildByName("label_attribute");
        vs_operate.selectedIndex = this.data.state;
        label_info.text = this.data.info;
        label_attribute.text = this.data.attribute;
        egret.log("vs_operate:" + vs_operate.name);
    };
    AdviserItem.prototype.cancelSelected = function () {
        this.img_frame.visible = false;
    };
    return AdviserItem;
}(ListItemBase));
__reflect(AdviserItem.prototype, "AdviserItem");
