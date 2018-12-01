var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var MathUtils = (function () {
        function MathUtils() {
        }
        MathUtils.Random = function (a, b) {
            var Range = b - a;
            var Rand = Math.random();
            return (a + Math.round(Rand * Range));
        };
        return MathUtils;
    }());
    nano.MathUtils = MathUtils;
    __reflect(MathUtils.prototype, "nano.MathUtils");
})(nano || (nano = {}));
