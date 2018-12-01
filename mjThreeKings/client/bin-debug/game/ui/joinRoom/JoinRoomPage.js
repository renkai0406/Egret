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
var JoinRoomPage = (function (_super) {
    __extends(JoinRoomPage, _super);
    function JoinRoomPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoinRoomPage.prototype.GetSkinFile = function () {
        return "exml/checkRoompage.exml";
    };
    JoinRoomPage.prototype.OnOpen = function (args) {
        this.curShowNum = 0;
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        for (var i = 0; i < this.numList.numChildren; i++) {
            var temp = this.numList.getChildAt(i);
            temp.text = "";
        }
        for (var i = 0; i < this.btnList.numChildren; i++) {
            var btnTemp = this.btnList.getChildAt(i);
            btnTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCallback, this);
        }
        for (var i = 0; i < this.labelList.numChildren; i++) {
            var labelTemp = this.labelList.getChildAt(i);
            labelTemp.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClickCallback, this);
        }
    };
    JoinRoomPage.prototype.onClickCallback = function (obj) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var btnIndex = this.btnList.getChildIndex(obj.target);
        var labelIndex = this.labelList.getChildIndex(obj.target);
        var currentIndex = -1;
        if (btnIndex >= 0) {
            currentIndex = btnIndex;
        }
        else {
            currentIndex = labelIndex;
        }
        if (currentIndex >= 0 && currentIndex <= 9) {
            if (this.curShowNum <= 5) {
                var tempNum = this.numList.getChildAt(this.curShowNum);
                tempNum.text = "" + currentIndex;
                this.curShowNum++;
            }
            if (this.curShowNum == 6) {
            }
        }
        if (currentIndex == 10) {
            for (var i = 0; i < this.numList.numChildren; i++) {
                var tempList = this.numList.getChildAt(i);
                tempList.text = "";
            }
            this.curShowNum = 0;
        }
        if (currentIndex == 11) {
            if (this.curShowNum > 0) {
                var tempNumList = this.numList.getChildAt(this.curShowNum - 1);
                tempNumList.text = "";
                this.curShowNum--;
            }
        }
    };
    JoinRoomPage.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    return JoinRoomPage;
}(UIWindow));
__reflect(JoinRoomPage.prototype, "JoinRoomPage");
