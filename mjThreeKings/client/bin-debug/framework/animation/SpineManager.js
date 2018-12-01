// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SpineManager = (function () {
    function SpineManager() {
        this.m_resDir = "resource/";
        this.m_spinePool = new nano.ListMap();
        this.m_spineFactoryPool = new nano.Map();
    }
    Object.defineProperty(SpineManager, "Instance", {
        get: function () {
            if (this._Instance == null) {
                this._Instance = new SpineManager();
            }
            return this._Instance;
        },
        enumerable: true,
        configurable: true
    });
    SpineManager.prototype.SetResDir = function (resDir) {
        this.m_resDir = resDir;
    };
    SpineManager.prototype.CreateSpine = function (name, armatureName) {
        var factory = this.GetDragonBonesFactory(name);
        if (factory == null) {
            return null;
        }
        var spine = this.GetSpine(name, factory, armatureName);
        return spine;
    };
    SpineManager.prototype.CreateSpineAsync = function (path) {
    };
    SpineManager.prototype.GetSpine = function (name, factory, armatureName) {
        var spineArr = this.m_spinePool.GetList(name);
        var spine = null;
        if (spineArr != null && spineArr.length > 0) {
            spine = spineArr.pop();
            spine.visible = true;
            spine.Reset();
        }
        else {
            spine = new Spine(factory, armatureName, name);
        }
        return spine;
    };
    SpineManager.prototype.GetDragonBonesFactory = function (name) {
        var factory = this.m_spineFactoryPool.Get(name);
        if (factory) {
            return factory;
        }
        var skeData = RES.getRes(name + "_ske_json");
        var textureData = RES.getRes(name + "_tex_json");
        var texture = RES.getRes(name + "_tex_png");
        if (skeData == null || textureData == null || texture == null) {
            return null;
        }
        factory = new dragonBones.EgretFactory();
        factory.parseDragonBonesData(skeData);
        factory.parseTextureAtlasData(textureData, texture);
        this.m_spineFactoryPool.Add(name, factory);
        return factory;
    };
    SpineManager.prototype.RecyleSpine = function (spine) {
        if (spine) {
            spine.parent.removeChild(spine);
            spine.visible = false;
            this.m_spinePool.Add(spine.SpineName, spine);
        }
    };
    SpineManager.prototype.ClearCache = function () {
        this.m_spineFactoryPool.Clear();
        this.m_spinePool.Clear();
    };
    return SpineManager;
}());
__reflect(SpineManager.prototype, "SpineManager");
