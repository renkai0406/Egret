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
var AchievementItem = (function (_super) {
    __extends(AchievementItem, _super);
    function AchievementItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/exml/achievementitem.exml";
        _this.starList = [];
        _this.starList.push(_this.star0);
        _this.starList.push(_this.star1);
        _this.starList.push(_this.star2);
        _this.starList.push(_this.star3);
        _this.starList.push(_this.star4);
        return _this;
    }
    AchievementItem.prototype.OnDataChange = function () {
        var configID = this.data.templateId;
        var config = ConfigMng.Instance.GetAchievementConfig(configID);
        this.SetStar(config.Star);
        this.nameTxt.text = config.Name;
        this.conditionTxt.text = config.Describe;
        this.getButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGetAwardClick, this);
        this.yilingquImg.visible = false;
        this.jinxingzhongImg.visible = false;
    };
    AchievementItem.prototype.OnGetAwardClick = function (event) {
    };
    AchievementItem.prototype.SetStar = function (starCount) {
        for (var i = 0; i < 5; i++) {
            if (i < starCount) {
                this.starList[i].source = "Common_json.cm_WuJiang_xingxing1";
            }
            else {
                this.starList[i].source = "Common_json.cm_WuJiang_xingxing2";
            }
        }
    };
    return AchievementItem;
}(ListItemBase));
__reflect(AchievementItem.prototype, "AchievementItem");
