// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var LangManager = (function () {
    function LangManager() {
        this.m_langDict = null;
    }
    Object.defineProperty(LangManager, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new LangManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    LangManager.prototype.LoadConig = function (langDescFilePath) {
        this.m_langDict = RES.getRes(langDescFilePath);
    };
    LangManager.prototype.Get = function (key) {
        if (this.m_langDict == null) {
            nano.Log.Error("[LangManager] Please load language description file first");
            return;
        }
        if (!this.m_langDict[key]) {
            nano.Log.Error("[LangManager] Can not found " + key + " in language description file");
            return "";
        }
        return this.m_langDict[key];
    };
    return LangManager;
}());
__reflect(LangManager.prototype, "LangManager");
