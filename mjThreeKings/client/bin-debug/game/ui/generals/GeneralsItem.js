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
var GeneralsItem = (function (_super) {
    __extends(GeneralsItem, _super);
    function GeneralsItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/GeneralsItem.exml";
        return _this;
    }
    GeneralsItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    GeneralsItem.prototype.OnDataChange = function () {
        if (this.data.enabled)
            this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.up_touch_callback, this);
        this.vs_tag.selectedIndex = this.data.tag - 1;
        this.init_star(this.data.star, this.data.max);
    };
    GeneralsItem.prototype.up_touch_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        egret.log("当前等级：" + this.data.star);
        if (this.data.star >= this.data.max) {
            //[uncompleted] 已经满级
            return;
        }
        var args = [
            { name: this.data.name,
                tag: this.data.tag,
                img: this.data.img,
                star: this.data.star,
                max: this.data.max,
                enabled: false },
        ];
        UIManager.Instance.OpenWindow("GeneralsUp", args);
    };
    GeneralsItem.prototype.init_star = function (star, max) {
        var count = this.group_star.numChildren;
        if (star > max || max > count) {
            return;
        }
        for (var i = 0; i < count; i++) {
            var child = this.group_star.getChildAt(i);
            if (i < star) {
                child.visible = true;
                child.enabled = true;
            }
            else if (i >= max) {
                child.visible = false;
            }
            else {
                child.visible = true;
                child.enabled = false;
            }
        }
    };
    return GeneralsItem;
}(ListItemBase));
__reflect(GeneralsItem.prototype, "GeneralsItem");
