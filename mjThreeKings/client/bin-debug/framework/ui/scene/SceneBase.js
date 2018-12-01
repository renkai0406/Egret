// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneBase = (function () {
    function SceneBase() {
    }
    SceneBase.prototype.EnterScene = function () {
        this.OnEnterScene();
    };
    SceneBase.prototype.ExitScene = function () {
    };
    SceneBase.prototype.OnEnterScene = function () {
    };
    SceneBase.prototype.OnExitScene = function () {
    };
    return SceneBase;
}());
__reflect(SceneBase.prototype, "SceneBase");
