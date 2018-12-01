var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EffectType;
(function (EffectType) {
    /**
     * 波动
     */
    EffectType[EffectType["Wave"] = 1] = "Wave";
    /**
     * 描边闪动
     */
    EffectType[EffectType["OutLine"] = 2] = "OutLine";
    /**
     * 置灰
     */
    EffectType[EffectType["Gray"] = 3] = "Gray";
    /**
     * 流光
     */
    EffectType[EffectType["Flow"] = 4] = "Flow";
    /**
     * 渐隐渐显
     */
    EffectType[EffectType["Fade"] = 5] = "Fade";
    /**
     * 变色
     */
    EffectType[EffectType["Color"] = 6] = "Color";
})(EffectType || (EffectType = {}));
var ShaderEffectMng = (function () {
    function ShaderEffectMng() {
        this._effectMap = new nano.Map();
        this._effectMap.Add(EffectType.Wave, new WaveEffect());
        this._effectMap.Add(EffectType.OutLine, new OutLineEffect());
        this._effectMap.Add(EffectType.Gray, new GrayEffect());
        this._effectMap.Add(EffectType.Flow, new FlowEffect());
        this._effectMap.Add(EffectType.Fade, new FadeEffect());
        this._effectMap.Add(EffectType.Color, new ColorEffect());
    }
    Object.defineProperty(ShaderEffectMng, "Instance", {
        get: function () {
            if (ShaderEffectMng._instance == null) {
                ShaderEffectMng._instance = new ShaderEffectMng();
            }
            return ShaderEffectMng._instance;
        },
        enumerable: true,
        configurable: true
    });
    ShaderEffectMng.prototype.AddEffect = function (type, displayObj, param) {
        var effect = this._effectMap.Get(type);
        if (effect != null) {
            effect.SetEffect(displayObj, param);
        }
    };
    ShaderEffectMng.TransColor = function (color) {
        var colorArray = [];
        colorArray.push(color / 0x1000000 / 255);
        color = color % 0x1000000;
        colorArray.push(color / 0x10000 / 255);
        color = color % 0x10000;
        colorArray.push(color / 0x100 / 255);
        color = color % 0x100;
        colorArray.push(color / 255);
        return { x: colorArray[0], y: colorArray[1], z: colorArray[2], w: colorArray[3] };
    };
    ShaderEffectMng._instance = null;
    return ShaderEffectMng;
}());
__reflect(ShaderEffectMng.prototype, "ShaderEffectMng");
