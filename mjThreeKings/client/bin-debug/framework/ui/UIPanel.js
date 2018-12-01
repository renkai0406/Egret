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
var UIPanel = (function (_super) {
    __extends(UIPanel, _super);
    function UIPanel() {
        var _this = _super.call(this) || this;
        _this.skinName = UIManager.Instance.SkinPath + _this.GetSkinFile();
        return _this;
    }
    Object.defineProperty(UIPanel.prototype, "m_tween", {
        get: function () {
            return UIManager.Instance.DefaultTween;
        },
        enumerable: true,
        configurable: true
    });
    UIPanel.prototype.SetId = function (id) {
        this.Id = id;
    };
    UIPanel.prototype.Open = function (args) {
        this.m_data = args;
    };
    UIPanel.prototype.Close = function () {
        this.OnClose();
    };
    UIPanel.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.OnOpen(this.m_data);
        if (this.m_tween) {
            this.PlayOpenAnimation();
        }
    };
    UIPanel.prototype.OnOpen = function (args) {
        SoundManager.Instance.PlayEffect("ui_open_mp3");
    };
    UIPanel.prototype.OnClose = function () {
        SoundManager.Instance.PlayEffect("ui_close_mp3");
    };
    /**
   * UI开发动画配置函数，在之类复写实现具体的窗口动画函数，这里是用了UIDefaultTween中的动画
   * 取消窗口动画则在子类中覆写该方法为空内容即可，或者将m_tween覆写返回null
   */
    UIPanel.prototype.PlayOpenAnimation = function () {
        if (this.m_tween) {
            this.m_tween.OpenTween(this, this.OnOpenAnimationEnd.bind(this));
        }
    };
    /**
     * UI关闭动画配置函数，在之类复写实现具体的窗口动画函数，这里是用了UIDefaultTween中的动画
     * 返回true将执行不会执行窗口关闭函数，需要在自定义的窗口动画回调函数中调用OnCloseAnimationEnd，执行关闭UI操作，参见：UIWindow.OnCloseAnimationEnd
     * 返回false则没有动画
     */
    UIPanel.prototype.PlayCloseAnimation = function () {
        if (this.m_tween) {
            this.m_tween.CloseTween(this, this.OnCloseAnimationEnd.bind(this));
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * 窗口关闭动画默认回调执行函数，可以在子类中重写实现其他逻辑
     */
    UIPanel.prototype.OnCloseAnimationEnd = function () {
    };
    UIPanel.prototype.OnOpenAnimationEnd = function () {
    };
    return UIPanel;
}(eui.Component));
__reflect(UIPanel.prototype, "UIPanel");
