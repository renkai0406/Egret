// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIDefaultTween = (function () {
    function UIDefaultTween() {
        this.m_openAnimationTime = 200;
        this.m_closeAnimationTime = 200;
    }
    UIDefaultTween.prototype.OpenTween = function (obj, endCallBack) {
        obj.scaleX = 0;
        obj.scaleY = 0;
        obj.alpha = 0;
        obj.width = obj.stage.width;
        obj.height = obj.stage.height;
        obj.anchorOffsetX = obj.width * 0.5;
        obj.anchorOffsetY = obj.height * 0.5;
        obj.x = obj.stage.width / 2;
        obj.y = obj.stage.height / 2;
        egret.Tween.get(obj).to({ scaleX: 1, scaleY: 1 }, this.m_openAnimationTime, egret.Ease.backOut).call(endCallBack);
        egret.Tween.get(obj).to({ alpha: 1 }, this.m_openAnimationTime);
    };
    UIDefaultTween.prototype.CloseTween = function (obj, endCallBack) {
        egret.Tween.get(obj).to({ scaleX: 0, scaleY: 0 }, this.m_closeAnimationTime, egret.Ease.backIn).call(endCallBack);
        egret.Tween.get(obj).to({ alpha: 0 }, this.m_openAnimationTime);
    };
    return UIDefaultTween;
}());
__reflect(UIDefaultTween.prototype, "UIDefaultTween", ["UITweenInterface"]);
