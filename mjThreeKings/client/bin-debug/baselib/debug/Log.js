// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var Log = (function () {
        function Log() {
        }
        Log.Msg = function (log) {
            if (!this.ShowLog) {
                return;
            }
            console.log(this.prefix + this.getTimeString() + " " + log);
        };
        Log.Error = function (log) {
            if (!this.ShowLog) {
                return;
            }
            console.error(this.prefix + this.getTimeString() + " " + log);
        };
        Log.Warn = function (log) {
            if (!this.ShowLog) {
                return;
            }
            console.warn(this.prefix + this.getTimeString() + " " + log);
        };
        Log.getTimeString = function () {
            var now = new Date();
            return now.toLocaleString();
        };
        Log.prefix = "> ";
        Log.ShowLog = true;
        return Log;
    }());
    nano.Log = Log;
    __reflect(Log.prototype, "nano.Log");
})(nano || (nano = {}));
