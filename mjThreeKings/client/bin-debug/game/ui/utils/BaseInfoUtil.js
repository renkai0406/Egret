var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
var BaseInfoUtil = (function () {
    function BaseInfoUtil() {
    }
    BaseInfoUtil.checkPhone = function (phone) {
        if (phone == null || phone == "" || phone.indexOf(" ") != -1)
            return "手机号码" + this.NOT_NULL_WARN;
        /*if(phone.length != this.PHONE_LENGTH)
            return ;
        
        return "";*/
        var result = phone.match(this.REGEX_PHONE);
        return !result ? this.ILLEGAL_WARN + "手机号！" : null;
    };
    BaseInfoUtil.checkVerCode = function (verCode) {
        if (verCode == null || verCode == "") {
            return "验证码" + this.NOT_NULL_WARN;
        }
        if (verCode.indexOf(" ") != -1 || verCode.length != this.VERCODE_LENGTH) {
            return this.ILLEGAL_WARN + "验证码！";
        }
        return null;
    };
    BaseInfoUtil.checkUserName = function (name) {
        if (name == null || name == "")
            return "昵称" + this.NOT_NULL_WARN;
        if (name.indexOf(" ") != -1)
            return this.ILLEGAL_WARN + "昵称！";
        return null;
    };
    BaseInfoUtil.checkPassword = function (psd) {
        if (psd == null || psd == "")
            return "密码" + this.NOT_NULL_WARN;
        if (psd.indexOf(" ") != -1)
            return this.ILLEGAL_WARN + "密码！";
        return null;
    };
    BaseInfoUtil.checkRepeatPsd = function (psd, psd_repeat) {
        if (psd_repeat == null || psd != psd_repeat)
            return this.DIFF_PSD_WARN;
        return null;
    };
    BaseInfoUtil.isNumber = function (value) {
        return value.match(this.REGET_NUMBER) != null;
    };
    BaseInfoUtil.NOT_NULL_WARN = "不能为空！";
    BaseInfoUtil.ILLEGAL_WARN = "请填写正确的";
    BaseInfoUtil.DIFF_PSD_WARN = "两次输入密码不一致！";
    BaseInfoUtil.PHONE_LENGTH = 11;
    BaseInfoUtil.VERCODE_LENGTH = 4;
    BaseInfoUtil.REGEX_PHONE = "^1(3|5|8)[0-9]{9}$";
    BaseInfoUtil.REGET_NUMBER = "^[0-9]+";
    return BaseInfoUtil;
}());
__reflect(BaseInfoUtil.prototype, "BaseInfoUtil");
