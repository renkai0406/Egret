// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var DateUtils = (function () {
        function DateUtils() {
        }
        DateUtils.GetCurrentTimeStamp = function () {
            var now = new Date();
            return now.getMilliseconds();
        };
        DateUtils.GetCurrentTimeString = function (format) {
            return null;
        };
        DateUtils.GetTimeString = function (format, timeStamp) {
            return null;
        };
        DateUtils.GetDateString = function () {
            var systemDate = new Date();
            var year = systemDate.getFullYear();
            var month = systemDate.getMonth() + 1;
            var day = systemDate.getDate();
            return "" + year + month + day;
        };
        return DateUtils;
    }());
    nano.DateUtils = DateUtils;
    __reflect(DateUtils.prototype, "nano.DateUtils");
})(nano || (nano = {}));
