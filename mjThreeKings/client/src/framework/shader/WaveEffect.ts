class WaveParam implements IEffectParam
{
	/**
	 * 动画时间 0 为永久循环动画
	 */
	public Time:number = 0;

	/**
	 * 震动频率比例
	 */
	public Frequency:number = 1;

	/**
	 * 振幅比例
	 */
	public Amplitude:number = 1;
}

class WaveEffect implements IEffect
{

	public Vert:string = "attribute vec2 aVertexPosition;\n"
+"attribute vec2 aTextureCoord;\n"
+"attribute vec2 aColor;\n"
+"uniform vec2 projectionVector;\n"
+"varying vec2 vTextureCoord;\n"
+"varying vec4 vColor;\n"
+"const vec2 center = vec2(-1.0, 1.0);\n"
+"void main(void) {\n"
+"   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n"
+"   vTextureCoord = aTextureCoord;\n"
+"   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n"
+"}";

	public Frag:string = "precision lowp float;\n"
+"varying vec2 vTextureCoord;\n"
+"varying vec4 vColor;\n"
+"uniform float time;\n"
+"uniform float amplitude;\n"
+"uniform float frequency;\n"
+"uniform sampler2D uSampler;\n"
+"void main(void) {\n"
+"    gl_FragColor = texture2D(uSampler,vTextureCoord + vec2( sin((vTextureCoord.y + time*frequency) * 10.0) *0.05 * amplitude, 0)) * vColor;\n"
+"}";

	public constructor() {
	}

	SetEffect(displayObj:egret.DisplayObject, param:IEffectParam){
		
		let waveParam = param as WaveParam;

		let time = (new Date().getTime()) / 1000000;
		time = (time - Math.floor(time)) * 1000;
		var paramImp = {time:time, amplitude:waveParam.Amplitude, frequency:waveParam.Frequency};
		
		let filter = new egret.CustomFilter(this.Vert, this.Frag, paramImp);
		filter.padding = displayObj.width * 0.05 * waveParam.Amplitude * 2;
		displayObj.filters = [filter];

        displayObj.addEventListener(egret.Event.ENTER_FRAME, function(){
			time = (new Date().getTime()) / 1000000;
			time = (time - Math.floor(time)) * 1000;
            filter.uniforms.time = time;
        },this);

		if(waveParam.Time > 0)
		{
			let timer:egret.Timer = new egret.Timer(waveParam.Time * 1000, 0);
			timer.addEventListener(egret.TimerEvent.TIMER, function(){
				displayObj.filters = [];
			}, displayObj);
			timer.start();
		}
	}
}