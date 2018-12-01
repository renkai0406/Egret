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
var GeneralsUp = (function (_super) {
    __extends(GeneralsUp, _super);
    function GeneralsUp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list_data_low = new Array();
        _this.list_data_up = new Array();
        return _this;
    }
    GeneralsUp.prototype.GetSkinFile = function () {
        return "exml/generalsuppage.exml";
    };
    GeneralsUp.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        egret.log("args:" + args);
        this.init(args[0]);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    };
    GeneralsUp.prototype.init = function (data) {
        data.enabled = false;
        egret.log("data.img:" + data.img);
        this.list_data_low.push(data);
        this.lvb_low.SetData(this.list_data_low);
        this.lvb_low.SetItemClass(GeneralsItem);
        var data_copy = { star: -1 };
        for (var p in data) {
            data_copy[p] = data[p];
        }
        data_copy.star += 1;
        egret.log("data.star:" + data.star);
        this.list_data_up.push(data_copy);
        this.lvb_high.SetData(this.list_data_up);
        this.lvb_high.SetItemClass(GeneralsItem);
    };
    GeneralsUp.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return GeneralsUp;
}(UIWindow));
__reflect(GeneralsUp.prototype, "GeneralsUp");
