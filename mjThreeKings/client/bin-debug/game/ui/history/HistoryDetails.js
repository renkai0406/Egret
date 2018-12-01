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
var HistoryDetails = (function (_super) {
    __extends(HistoryDetails, _super);
    function HistoryDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HistoryDetails.prototype.GetSkinFile = function () {
        return "exml/historydetailspage.exml";
    };
    HistoryDetails.prototype.OnOpen = function (args) {
        this.playback.addEventListener(egret.TouchEvent.TOUCH_TAP, this.playbackCallback, this);
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        // let data : any[] = 
        // [
        //   {
        //      level:5,
        //      isWin:1,
        //      playerName:"初露锋芒",
        //      grade:"平民",
        //      relationship:1,
        //      incomebangjing: 123,
        //      incomemojing:456,
        //      exp:500
        //   },
        // ];
        var data = [
            {
                isWin: 1,
                playerName: "初露锋芒",
                matchTime: 123,
                textMojing: 456,
            },
        ];
        var eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = QXZBHistoryDetailsItem;
    };
    HistoryDetails.prototype.playbackCallback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
    };
    HistoryDetails.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return HistoryDetails;
}(UIWindow));
__reflect(HistoryDetails.prototype, "HistoryDetails");
