// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SceneManager = (function () {
    function SceneManager() {
        this.m_sceneStack = new Array();
    }
    Object.defineProperty(SceneManager.prototype, "CurrentScene", {
        get: function () {
            return this.m_currentScene;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SceneManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new SceneManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.ReplaceScene = function (sceneName) {
        UIManager.Instance.CloseAllPage();
        var scene = this.GetScene(sceneName);
        scene = eval("new " + sceneName + "()");
        this.m_currentScene = scene;
        if (this.m_sceneStack.length > 0) {
            var oldScene = this.m_sceneStack.pop();
            this.m_sceneStack.push(scene);
            oldScene.ExitScene();
        }
        else {
            this.m_sceneStack.push(scene);
        }
        this.m_currentScene.EnterScene();
    };
    SceneManager.prototype.GetScene = function (sceneName) {
        for (var i = 0; i < this.m_sceneStack.length; i++) {
            if (this.m_sceneStack[i].SceneName == sceneName) {
                return this.m_sceneStack[i];
            }
        }
        return null;
    };
    return SceneManager;
}());
__reflect(SceneManager.prototype, "SceneManager");
