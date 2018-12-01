class ColorParam implements IEffectParam
{
	/**
	 * 动画时间 0 为永久循环动画
	 */
	public Time:number = 0;

	/**
	 * 闪烁频率比例
	 */
	public Frequency:number = 0;

	/**
	 * 初像
	 */
	public Beginning:number = 0;

	/**
	 * 变色
	 */
	public Color:number = 0xFFFFFFFF;

}

class ColorEffect implements IEffect {

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
+"uniform float alpha;\n"
+"uniform sampler2D uSampler;\n"
+"uniform vec4 color;\n"
+"void main(void) {\n"
+"	vec4 mainColor = texture2D(uSampler,vTextureCoord); \n"
+"  float gray = dot(mainColor.xyz,vec3(0.299, 0.587, 0.114));\n"
+"  vec4 grayColor =  vec4(gray,gray,gray, mainColor.a);\n"
+"  gl_FragColor =mainColor * (1.0 - alpha * 0.5) + grayColor * alpha * color;\n"
+"}";

	public constructor() {
	}

	SetEffect(displayObj:egret.DisplayObject, param:IEffectParam){

		let colorParam = param as ColorParam;

		let time = (new Date().getTime()) / 1000000;
		time = (time - Math.floor(time)) * 1000;


		var paramImp = {time:time, alpha:1, color:ShaderEffectMng.TransColor(colorParam.Color)};
		
		let filter = new egret.CustomFilter(this.Vert, this.Frag, paramImp);
		displayObj.filters = [filter];

		
		if(colorParam.Frequency > 0)
		{
			displayObj.addEventListener(egret.Event.ENTER_FRAME, function(){
				filter.uniforms.alpha = Math.cos(new Date().getTime() / 500 *colorParam.Frequency + colorParam.Beginning) / 2 + 0.5;
			},this);
		}
		
		if(colorParam.Time > 0)
		{
			let timer:egret.Timer = new egret.Timer(colorParam.Time * 1000, 0);
			timer.addEventListener(egret.TimerEvent.TIMER, function(){
				
				displayObj.filters = [];
			}, displayObj);
			timer.start();
		}
	}


}