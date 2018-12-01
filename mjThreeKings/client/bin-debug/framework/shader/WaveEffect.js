var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WaveParam = (function () {
    function WaveParam() {
        /**
         * 动画时间 0 为永久循环动画
         */
        this.Time = 0;
        /**
         * 震动频率比例
         */
        this.Frequency = 1;
        /**
         * 振幅比例
         */
        this.Amplitude = 1;
    }
    return WaveParam;
}());
__reflect(WaveParam.prototype, "WaveParam", ["IEffectParam"]);
var WaveEffect = (function () {
    function WaveEffect() {
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
            + "uniform float time;\n"
            + "uniform float amplitude;\n"
            + "uniform float frequency;\n"
            + "uniform sampler2D uSampler;\n"
            + "void main(void) {\n"
            + "    gl_FragColor = texture2D(uSampler,vTextureCoord + vec2( sin((vTextureCoord.y + time*frequency) * 10.0) *0.05 * amplitude, 0)) * vColor;\n"
            + "}";
    }
    WaveEffect.prototype.SetEffect = function (displayObj, param) {
        var waveParam = param;
        var time = (new Date().getTime()) / 1000000;
        time = (time - Math.floor(time)) * 1000;
        var paramImp = { time: time, amplitude: waveParam.Amplitude, frequency: waveParam.Frequency };
        var filter = new egret.CustomFilter(this.Vert, this.Frag, paramImp);
        filter.padding = displayObj.width * 0.05 * waveParam.Amplitude * 2;
        displayObj.filters = [filter];
        displayObj.addEventListener(egret.Event.ENTER_FRAME, function () {
            time = (new Date().getTime()) / 1000000;
            time = (time - Math.floor(time)) * 1000;
            filter.uniforms.time = time;
        }, this);
        if (waveParam.Time > 0) {
            var timer = new egret.Timer(waveParam.Time * 1000, 0);
            timer.addEventListener(egret.TimerEvent.TIMER, function () {
                displayObj.filters = [];
            }, displayObj);
            timer.start();
        }
    };
    return WaveEffect;
}());
__reflect(WaveEffect.prototype, "WaveEffect", ["IEffect"]);
