var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AdviserUtil = (function () {
    function AdviserUtil() {
    }
    AdviserUtil.ADVISER_STATE_LOCKED = 0;
    AdviserUtil.ADVISER_STATE_OWNED = 1;
    AdviserUtil.ADVISER_STATE_USED = 2;
    return AdviserUtil;
}());
__reflect(AdviserUtil.prototype, "AdviserUtil");
