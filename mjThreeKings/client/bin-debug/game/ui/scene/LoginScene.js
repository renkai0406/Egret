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
var LoginScene = (function (_super) {
    __extends(LoginScene, _super);
    function LoginScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(LoginScene.prototype, "SceneName", {
        get: function () {
            return "Login";
        },
        enumerable: true,
        configurable: true
    });
    LoginScene.prototype.OnEnterScene = function () {
        UIManager.Instance.OpenPage("LoginSelectPage");
        //UIManager.Instance.OpenWindow("GeneralsList");
    };
    return LoginScene;
}(SceneBase));
__reflect(LoginScene.prototype, "LoginScene");
