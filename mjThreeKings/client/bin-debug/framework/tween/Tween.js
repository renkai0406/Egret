// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Tween = (function () {
    function Tween() {
    }
    Tween.float = function (obj, distance, duration) {
        return egret.Tween.get(obj, { loop: true })
            .to({ y: obj.y + distance }, duration / 2)
            .to({ y: obj.y }, duration / 2)
            .to({ y: obj.y - distance }, duration / 2)
            .to({ y: obj.y }, duration / 2);
    };
    Tween.shake = function (obj, distance, duration) {
        if (distance === void 0) { distance = 15; }
        if (duration === void 0) { duration = 1500; }
        return egret.Tween.get(obj).to({ x: obj.x - distance }, duration / 10).to({ x: obj.x }, duration / 3, egret.Ease.elasticOut);
    };
    Tween.breath = function (obj, scale, duration) {
        if (obj.anchorOffsetX == 0 || obj.anchorOffsetY == 0) {
            nano.Log.Warn("[Tween] breath tween obj anchorOffsetX or anchorOffsetY not in center");
        }
        return egret.Tween.get(obj, { loop: true }).to({ scaleX: scale, scaleY: scale }, duration / 2).to({ scaleX: obj.scaleX, scaleY: obj.scaleY }, duration / 2);
    };
    Tween.breath2 = function (obj, scale, duration) {
        if (obj.anchorOffsetX == 0 || obj.anchorOffsetY == 0) {
            nano.Log.Warn("[Tween] breath tween obj anchorOffsetX or anchorOffsetY not in center");
        }
        return egret.Tween.get(obj, { loop: true }).to({ scaleX: obj.scaleX - scale, scaleY: obj.scaleY + scale }, duration / 4, egret.Ease.sineOut)
            .to({ scaleX: obj.scaleX + scale, scaleY: obj.scaleY - scale }, duration / 2, egret.Ease.sineInOut)
            .to({ scaleX: obj.scaleX, scaleY: obj.scaleY }, duration / 4, egret.Ease.sineIn);
    };
    Tween.attack = function (obj, target) {
        return null;
    };
    Tween.click = function (obj, scale) {
        if (scale === void 0) { scale = 0.9; }
        return egret.Tween.get(obj).to({ scaleX: scale, scaleY: scale }, 100).to({ scaleX: obj.scaleX, scaleY: obj.scaleY }, 100, egret.Ease.backOut);
    };
    Tween.moveToX = function (obj, x, duration, ease) {
        return egret.Tween.get(obj).to({ x: x }, duration, ease);
    };
    Tween.moveToY = function (obj, y, duration, ease) {
        return egret.Tween.get(obj).to({ y: y }, duration, ease);
    };
    Tween.moveTo = function (obj, x, y, duration, ease) {
        return egret.Tween.get(obj).to({ x: x, y: y }, duration, ease);
    };
    Tween.scaleToX = function (obj, scaleX, duration, ease) {
        return egret.Tween.get(obj).to({ scaleX: scaleX }, duration, ease);
    };
    Tween.scaleToY = function (obj, scaleY, duration, ease) {
        return egret.Tween.get(obj).to({ scaleY: scaleY }, duration, ease);
    };
    Tween.scaleTo = function (obj, scale, duration, ease) {
        return egret.Tween.get(obj).to({ scaleX: scale, scaleY: scale }, duration, ease);
    };
    return Tween;
}());
__reflect(Tween.prototype, "Tween");
