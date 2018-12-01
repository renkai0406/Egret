var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FadeParam = (function () {
    function FadeParam() {
        /**
         * 动画时间 0 为永久循环动画
         */
        this.Time = 0;
        /**
         * 闪烁频率比例
         */
        this.Frequency = 1;
        /**
         * 初像
         */
        this.Beginning = 0;
    }
    return FadeParam;
}());
__reflect(FadeParam.prototype, "FadeParam", ["IEffectParam"]);
var FadeEffect = (function () {
    function FadeEffect() {
        this.Vert = "attribute vec2 aVertexPosition;\n"
            + "attribute vec2 aTextureCoord;\n"
            + "attribute vec2 aColor;\n"
            + "uniform vec2 projectionVector;\n"
            + "varying vec2 vTextureCoord;\n"
            + "varying vec4 vColor;\n"
            + "const vec2 center = vec2(-1.0, 1.0);\n"
            + "void main(void) {\n"
            + "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n"
            + "   vTextureCoord = aTextureCoord;\n"
            + "   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n"
            + "}";
        this.Frag = "precision lowp float;\n"
            + "varying vec2 vTextureCoord;\n"
            + "varying vec4 vColor;\n"
            + "uniform float alpha;\n"
            + "uniform sampler2D uSampler;\n"
            + "void main(void) {\n"
            + "  gl_FragColor =texture2D(uSampler,vTextureCoord) * alpha;\n"
            + "}";
    }
    FadeEffect.prototype.SetEffect = function (displayObj, param) {
        var fadeParam = param;
        var time = (new Date().getTime()) / 1000000;
        time = (time - Math.floor(time)) * 1000;
        var paramImp = { time: time, alpha: Math.cos(fadeParam.Beginning) / 2 + 0.5 };
        var filter = new egret.CustomFilter(this.Vert, this.Frag, paramImp);
        displayObj.filters = [filter];
        if (fadeParam.Frequency > 0) {
            displayObj.addEventListener(egret.Event.ENTER_FRAME, function () {
                filter.uniforms.alpha = Math.cos(new Date().getTime() / 500 * fadeParam.Frequency + fadeParam.Beginning) / 2 + 0.5;
            }, displayObj);
        }
        if (fadeParam.Time > 0) {
            var timer = new egret.Timer(fadeParam.Time * 1000, 0);
            timer.addEventListener(egret.TimerEvent.TIMER, function () {
                displayObj.filters = [];
            }, displayObj);
            timer.start();
        }
    };
    return FadeEffect;
}());
__reflect(FadeEffect.prototype, "FadeEffect", ["IEffect"]);
