var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ValidateUtil = (function () {
    function ValidateUtil() {
    }
    ValidateUtil.WAITING = "请稍等";
    ValidateUtil.IN_IDENTITY = "验证中";
    ValidateUtil.IDENTITY = "验证";
    return ValidateUtil;
}());
__reflect(ValidateUtil.prototype, "ValidateUtil");
