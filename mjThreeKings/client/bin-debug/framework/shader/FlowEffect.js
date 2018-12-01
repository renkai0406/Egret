var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FlowParam = (function () {
    function FlowParam() {
        /**
         * 动画时间 0 为永久循环动画
         */
        this.Time = 0;
        /**
         * 颜色值
         */
        this.Color = 0xffffffff;
        /**
         * 闪烁频率比例
         */
        this.Frequency = 1;
        /**
         * 初像
         */
        this.Beginning = 0;
    }
    return FlowParam;
}());
__reflect(FlowParam.prototype, "FlowParam", ["IEffectParam"]);
var FlowEffect = (function () {
    function FlowEffect() {
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
            + "uniform sampler2D TextureUnit0;\n"
            + "uniform float time;\n"
            + "uniform vec3 flowColor;\n"
            + "void main(void) {\n"
            + "	vec4 color = texture2D(TextureUnit0,vTextureCoord);\n"
            + "	float scale = sin(vTextureCoord.x * 5.0 + vTextureCoord.y * 3.0 - time) / 2.0 + 0.5; \n"
            + " vec3 colorTemp = vec3(0.299, 0.587, 0.114) * flowColor;\n"
            + "	float flow = dot(color.xyz,colorTemp);\n"
            + "	vec4 flowColor =  color * flow * abs(scale);\n"
            + "    gl_FragColor = color + flowColor;\n"
            + "}\n";
    }
    FlowEffect.prototype.SetEffect = function (displayObj, param) {
        var flowParam = param;
        var time = (new Date().getTime()) / 1000000;
        time = (time - Math.floor(time)) * 1000;
        var paramImp = { time: time, alpha: 1, flowColor: ShaderEffectMng.TransColor(flowParam.Color) };
        var filter = new egret.CustomFilter(this.Vert, this.Frag, paramImp);
        displayObj.filters = [filter];
        displayObj.addEventListener(egret.Event.ENTER_FRAME, function () {
            time = (new Date().getTime()) / 1000000;
            time = (time - Math.floor(time)) * 1000;
            filter.uniforms.time = time * flowParam.Frequency;
        }, displayObj);
        if (flowParam.Time > 0) {
            var timer = new egret.Timer(flowParam.Time * 1000, 0);
            timer.addEventListener(egret.TimerEvent.TIMER, function () {
                displayObj.filters = [];
            }, displayObj);
            timer.start();
        }
    };
    return FlowEffect;
}());
__reflect(FlowEffect.prototype, "FlowEffect", ["IEffect"]);
