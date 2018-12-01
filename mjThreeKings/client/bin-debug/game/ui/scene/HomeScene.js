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
var HomeScene = (function (_super) {
    __extends(HomeScene, _super);
    function HomeScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(HomeScene.prototype, "SceneName", {
        get: function () {
            return "Task";
        },
        enumerable: true,
        configurable: true
    });
    HomeScene.prototype.OnEnterScene = function () {
        UIManager.Instance.OpenPage("HomePage");
    };
    return HomeScene;
}(SceneBase));
__reflect(HomeScene.prototype, "HomeScene");
