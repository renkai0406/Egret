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
var Longhudou = (function (_super) {
    __extends(Longhudou, _super);
    function Longhudou() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Longhudou.prototype.GetSkinFile = function () {
        return "exml/longhudoupage.exml";
    };
    Longhudou.prototype.OnOpen = function (args) {
        this.merit.init(1000, 9999);
        this.reward.addEventListener(egret.TouchEvent.TOUCH_TAP, this.rewardCallback, this);
        this.history.addEventListener(egret.TouchEvent.TOUCH_TAP, this.historyCallback, this);
        this.help.addEventListener(egret.TouchEvent.TOUCH_TAP, this.helpCallback, this);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        var data = [
            {
                cost: 1000,
                limit: 10000,
                exp: 1000,
                merit: 500,
                lineup: "关羽/张飞",
                skill: "梦龙过江",
                income: 5000
            },
            {
                cost: 10000,
                limit: 100000,
                exp: 10000,
                merit: 5000,
                lineup: "关羽/张飞",
                skill: "梦龙过江",
                income: 50000
            },
        ];
        var eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = LonghudouItem;
    };
    Longhudou.prototype.rewardCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    Longhudou.prototype.historyCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    Longhudou.prototype.helpCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    Longhudou.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return Longhudou;
}(UIWindow));
__reflect(Longhudou.prototype, "Longhudou");
