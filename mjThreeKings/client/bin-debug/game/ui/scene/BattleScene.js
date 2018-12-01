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
var BattleScene = (function (_super) {
    __extends(BattleScene, _super);
    function BattleScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BattleScene.prototype, "SceneName", {
        get: function () {
            return "Battle";
        },
        enumerable: true,
        configurable: true
    });
    BattleScene.prototype.OnEnterScene = function () {
        UIManager.Instance.OpenPage("BattlePage");
    };
    return BattleScene;
}(SceneBase));
__reflect(BattleScene.prototype, "BattleScene");
