// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Spine = (function (_super) {
    __extends(Spine, _super);
    function Spine(factory, armatureName, name) {
        var _this = _super.call(this) || this;
        _this.SpineName = name;
        _this.display = factory.buildArmatureDisplay(armatureName);
        _this.addChild(_this.display);
        return _this;
    }
    Object.defineProperty(Spine.prototype, "animation", {
        get: function () {
            return this.display.animation;
        },
        enumerable: true,
        configurable: true
    });
    Spine.prototype.Play = function (animation, times, completeCallback, autoRemove) {
        if (autoRemove === void 0) { autoRemove = false; }
        this.m_autoRemove = autoRemove;
        this.m_completeCallBack = completeCallback;
        this.display.addEventListener(dragonBones.AnimationEvent.COMPLETE, this.OnAnimationComplete, this);
        if (this.animation.hasAnimation(animation)) {
            this.animation.play(animation, times);
        }
        else {
            nano.Log.Error("[Spine] Spine " + name + " can not found animation " + animation);
        }
    };
    Spine.prototype.Reset = function () {
        console.log("reuse animation");
        this.m_completeCallBack = null;
        this.m_autoRemove = false;
        this.display.removeEventListener(dragonBones.AnimationEvent.COMPLETE, this.OnAnimationComplete, this);
        this.animation.reset();
    };
    Spine.prototype.OnAnimationComplete = function () {
        if (this.m_completeCallBack) {
            this.m_completeCallBack();
        }
        if (this.m_autoRemove) {
            SpineManager.Instance.RecyleSpine(this);
        }
    };
    return Spine;
}(egret.DisplayObjectContainer));
__reflect(Spine.prototype, "Spine");
