var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var QxzbUtil = (function () {
    function QxzbUtil() {
    }
    QxzbUtil.RACE_CREATOR = {
        OFFICIAL: 0,
        PERSONAL: 1
    };
    QxzbUtil.RACE_STATE = {
        RACE_WILL: 0,
        RACE_ING: 1,
        RACE_END: 2
    };
    return QxzbUtil;
}());
__reflect(QxzbUtil.prototype, "QxzbUtil");
