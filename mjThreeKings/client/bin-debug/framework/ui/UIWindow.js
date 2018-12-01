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
var UIWindow = (function (_super) {
    __extends(UIWindow, _super);
    function UIWindow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIWindow.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
    };
    UIWindow.prototype.Close = function () {
        _super.prototype.Close.call(this);
        if (!this.PlayCloseAnimation()) {
            UIManager.Instance.CloseWindow(this.Id);
        }
    };
    UIWindow.prototype.OnCloseAnimationEnd = function () {
        _super.prototype.OnCloseAnimationEnd.call(this);
        UIManager.Instance.CloseWindow(this.Id);
    };
    UIWindow.prototype.OnMaskClick = function () {
        this.Close();
    };
    return UIWindow;
}(UIPanel));
__reflect(UIWindow.prototype, "UIWindow");
