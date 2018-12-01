var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GeneralsUtil = (function () {
    function GeneralsUtil() {
    }
    GeneralsUtil.get_adviser_path = function (name) {
        switch (name) {
            case "1":
                return "10001_png";
            case "2":
                return "10002_png";
            case "3":
                return "10003_png";
            default:
                return "";
        }
    };
    GeneralsUtil.MAX_STAR = 5;
    return GeneralsUtil;
}());
__reflect(GeneralsUtil.prototype, "GeneralsUtil");
