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
var AchivementType;
(function (AchivementType) {
    AchivementType[AchivementType["Battle"] = 0] = "Battle";
    AchivementType[AchivementType["Social"] = 1] = "Social";
    AchivementType[AchivementType["Develop"] = 2] = "Develop";
    AchivementType[AchivementType["Other"] = 3] = "Other";
})(AchivementType || (AchivementType = {}));
var Achievement = (function (_super) {
    __extends(Achievement, _super);
    function Achievement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Achievement.prototype.GetSkinFile = function () {
        return "exml/achievementwindow.exml";
    };
    Achievement.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.getAllButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnGetAllButtonClick, this);
        this.battleToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnBattleToggleChange, this);
        this.socialToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnSocialToggleChange, this);
        this.developToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnDevelopToggleChange, this);
        this.otherToggle.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnOtherToggleChange, this);
        this.hideGottenCheck.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnhideGottenClick, this);
        var tempData = [
            { templateId: 1000001 },
            { templateId: 1000002 },
            { templateId: 1000003 },
            { templateId: 1000004 },
            { templateId: 1000005 },
            { templateId: 1000006 },
            { templateId: 1000007 },
            { templateId: 1000008 },
            { templateId: 1000009 },
            { templateId: 1000010 },
            { templateId: 1000011 },
            { templateId: 1000012 },
        ];
        this.itemListView.SetItemClass(AchievementItem);
        this.itemListView.SetData(tempData);
    };
    Achievement.prototype.OnhideGottenClick = function (event) {
        //TODO 筛选是否已经领取的成就
    };
    Achievement.prototype.OnGetAllButtonClick = function (event) {
        //TODO 领取所有奖励
    };
    Achievement.prototype.OnBattleToggleChange = function (event) {
        this.OnToggleChange(AchivementType.Battle);
    };
    Achievement.prototype.OnSocialToggleChange = function (event) {
        this.OnToggleChange(AchivementType.Social);
    };
    Achievement.prototype.OnDevelopToggleChange = function (event) {
        this.OnToggleChange(AchivementType.Develop);
    };
    Achievement.prototype.OnOtherToggleChange = function (event) {
        this.OnToggleChange(AchivementType.Other);
    };
    Achievement.prototype.OnToggleChange = function (type) {
        this.battleToggle.selected = false;
        this.socialToggle.selected = false;
        this.developToggle.selected = false;
        this.otherToggle.selected = false;
        switch (type) {
            case AchivementType.Battle:
                this.battleToggle.selected = true;
                break;
            case AchivementType.Social:
                this.socialToggle.selected = true;
                break;
            case AchivementType.Develop:
                this.developToggle.selected = true;
                break;
            case AchivementType.Other:
                this.otherToggle.selected = true;
                break;
        }
        //TODO: 发送消息获取数据
    };
    return Achievement;
}(UIWindow));
__reflect(Achievement.prototype, "Achievement");
