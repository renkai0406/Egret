// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var StringUtils = (function () {
        function StringUtils() {
        }
        StringUtils.LimitStringLength = function (str, maxLen) {
            if (!str || 0 >= str.length)
                return "";
            var newNick = str;
            var len = (maxLen) ? maxLen : 5;
            if (len < str.length) {
                newNick = str.substring(0, len);
                newNick = newNick + "...";
            }
            return newNick;
        };
        return StringUtils;
    }());
    nano.StringUtils = StringUtils;
    __reflect(StringUtils.prototype, "nano.StringUtils");
})(nano || (nano = {}));
