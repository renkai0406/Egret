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
var Timer1 = (function (_super) {
    __extends(Timer1, _super);
    function Timer1() {
        return _super.call(this) || this;
    }
    Timer1.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    Timer1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    Timer1.prototype.setTime = function (minute, second) {
        this.minute = minute;
        this.second = second;
        this.setUI();
    };
    Timer1.prototype.setUI = function () {
        this.label_min1.text = String(Math.floor(this.minute / 10));
        this.label_min2.text = String(this.minute % 10);
        this.label_sec1.text = String(Math.floor(this.second / 10));
        this.label_sec2.text = String(this.second % 10);
    };
    Timer1.prototype.startTiming = function () {
        this.timer = new egret.Timer(1000, this.minute * 60 + this.second);
        this.timer.addEventListener(egret.TimerEvent.TIMER, this.timeCallback, this);
        this.timer.start();
    };
    Timer1.prototype.timeCallback = function () {
        if (this.second == 0) {
            if (this.minute == 0) {
                this.timer.stop();
                return;
            }
            this.second = 59;
            this.minute -= 1;
        }
        else {
            this.second -= 1;
        }
        this.setUI();
    };
    return Timer1;
}(eui.Component));
__reflect(Timer1.prototype, "Timer1", ["eui.UIComponent", "egret.DisplayObject"]);
