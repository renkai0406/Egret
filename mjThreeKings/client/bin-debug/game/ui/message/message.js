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
var Message = (function (_super) {
    __extends(Message, _super);
    function Message() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Message.prototype.GetSkinFile = function () {
        return "exml/messagepage.exml";
    };
    Message.prototype.OnOpen = function (args) {
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        var data = [
            {
                title: "矿区达人1",
                type: "1",
                count: "1000",
                time: "2008/8/21 14:34:28",
            },
            {
                title: "矿区达人2",
                type: "1",
                count: "1000",
                time: "2008/8/21 14:34:28",
            },
            {
                title: "矿区达人3",
                type: "1",
                count: "1000",
                time: "2008/8/21 14:34:28",
            },
            {
                title: "矿区达人4",
                type: "1",
                count: "1000",
                time: "2008/8/21 14:34:28",
            },
            {
                title: "矿区达人5",
                type: "1",
                count: "1000",
                time: "2008/8/21 14:34:28",
            },
            {
                title: "矿区达人6",
                type: "1",
                count: "1000",
                time: "2008/8/21 14:34:28",
            },
        ];
        var eui_data = new eui.ArrayCollection(data);
        this.list_data.dataProvider = eui_data;
        this.list_data.itemRenderer = MessageItem;
        var tempArray = [100, 101, 102, 103, 104, 105, 106, 107, 108];
        this.todayMojing.text = "" + tempArray[0];
        this.todayBangJing.text = "" + tempArray[1];
        this.yesterdayMoJing.text = "" + tempArray[2];
        this.yesterdayBangJing.text = "" + tempArray[3];
        this.threeMoJing.text = "" + tempArray[4];
        this.threeBangJing.text = "" + tempArray[5];
        this.weekMoJing.text = "" + tempArray[6];
        this.weekBangJing.text = "" + tempArray[7];
    };
    Message.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return Message;
}(UIWindow));
__reflect(Message.prototype, "Message");
