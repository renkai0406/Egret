// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SystemUtils = (function () {
    function SystemUtils() {
    }
    Object.defineProperty(SystemUtils, "IsMobile", {
        get: function () {
            return egret.Capabilities.isMobile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemUtils, "Language", {
        get: function () {
            return egret.Capabilities.language;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SystemUtils, "Os", {
        get: function () {
            return egret.Capabilities.os;
        },
        enumerable: true,
        configurable: true
    });
    SystemUtils.Random = function (mt, min, max) {
        return Math.floor(mt.rand() * (max - min + 1) + min);
    };
    SystemUtils.GenerateKey = function (k, n) {
        var mt = new RandMersenne(k);
        var g = "";
        for (var i = 0; i < n; i++) {
            var j = SystemUtils.Random(mt, 1, 3);
            switch (j) {
                case 1:
                    var c = SystemUtils.Random(mt, 48, 58);
                    g += (c + "");
                    break;
                case 2:
                    var d = SystemUtils.Random(mt, 65, 90);
                    g += String.fromCharCode(d);
                    break;
                case 3:
                    var e = SystemUtils.Random(mt, 97, 122);
                    g += String.fromCharCode(e);
                    break;
            }
        }
        return g;
    };
    return SystemUtils;
}());
__reflect(SystemUtils.prototype, "SystemUtils");
