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
// TypeScript file
var HistoryPage = (function (_super) {
    __extends(HistoryPage, _super);
    function HistoryPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HistoryPage.prototype.GetSkinFile = function () {
        return "exml/historypage.exml";
    };
    HistoryPage.prototype.OnOpen = function (args) {
        this.check.addEventListener(egret.TouchEvent.TOUCH_TAP, this.checkCallback, this);
        this.recordZB.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recordZBCallback, this);
        this.recordLHD.addEventListener(egret.TouchEvent.TOUCH_TAP, this.recordLHDCallback, this);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        // let data : any[] = 
        // [
        //   {
        //      roomid:588866,
        //      roomName:"初露锋芒",
        //      time:"2018-08-05  14:56:12",
        //      winerplayerName:"玩家逗逗",
        //      winerplayerID: 142536,
        //      loserplayerName:"玩家兔子",
        //      loserplayerID: 142546,
        //      income:500
        //   },
        // ];
        var data = [
            {
                roomid: 588866,
                roomName: "初露锋芒",
                time: "2018-08-05  14:56:12",
                playerName: "玩家逗逗",
                playerID: 142536,
                organizerName: "玩家兔子",
                matchTime: 142546,
                income1: 500,
                income2: 700
            },
        ];
        var eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = QXZBHistoryPageItem;
    };
    HistoryPage.prototype.checkCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    HistoryPage.prototype.recordZBCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    HistoryPage.prototype.recordLHDCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    HistoryPage.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return HistoryPage;
}(UIWindow));
__reflect(HistoryPage.prototype, "HistoryPage");
