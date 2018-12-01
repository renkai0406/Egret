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
var QxzbAward = (function (_super) {
    __extends(QxzbAward, _super);
    function QxzbAward() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QxzbAward.prototype.GetSkinFile = function () {
        return "exml/qxzb_award.exml";
    };
    QxzbAward.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.getDataFromNet();
        this.lvb_award.SetData(this.list_profit);
        this.lvb_award.SetItemClass(QxzbProfitItem);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
    };
    QxzbAward.prototype.getDataFromNet = function () {
        this.list_profit = [
            { room: "1000000", host: "大胖子", type: "开赛收益", profit: 500, time: "2018.7.15 15:31" },
            { room: "1000001", host: "大胖子", type: "开赛收益", profit: 500, time: "2018.7.15 15:31" },
            { room: "1000002", host: "大胖子", type: "开赛收益", profit: 500, time: "2018.7.15 15:31" },
            { room: "1000003", host: "大胖子", type: "开赛收益", profit: 500, time: "2018.7.15 15:31" },
            { room: "1000004", host: "大胖子", type: "开赛收益", profit: 500, time: "2018.7.15 15:31" },
        ];
    };
    QxzbAward.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return QxzbAward;
}(UIWindow));
__reflect(QxzbAward.prototype, "QxzbAward");
