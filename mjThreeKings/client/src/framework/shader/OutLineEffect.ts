class OutLineParam implements IEffectParam
{
	/**
	 * 动画时间 0 为永久循环动画
	 */
	public Time:number = 0;

	/**
	 * 颜色值
	 */
	public Color:number = 0xffffffff;

	/**
	 * 描边宽度
	 */
	public Breadth:number = 1;


	/**
	 * 闪烁频率比例
	 */
	public Frequency:number = 1;

	/**
	 * 初像
	 */
	public Beginning:number = 0;
}

class OutLineEffect implements IEffect {

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
+"uniform sampler2D TextureUnit0;\n"
+"uniform float breadth;\n"
+"uniform float alpha;\n"
+"uniform float scale;\n"
+"uniform vec4 outlineColor;\n"
+"void main(void) {\n"
+"  float temp = breadth * 0.005;\n"
+"	vec4 color = texture2D(TextureUnit0,vTextureCoord);\n"
+"	vec4 color1 =  texture2D(TextureUnit0,vTextureCoord + vec2(temp, 0.0));\n"
+"	vec4 color2 =  texture2D(TextureUnit0,vTextureCoord + vec2(-temp, 0.0));\n"
+"	vec4 color3 =  texture2D(TextureUnit0,vTextureCoord + vec2(0.0, temp * scale));\n"
+"	vec4 color4 =  texture2D(TextureUnit0,vTextureCoord + vec2(0.0, -temp * scale));\n"

+"	float grads = (color1.a + color2.a + color3.a +color4.a) -  4.0 * color.a;\n"
+" 	grads = abs(grads) * alpha;\n"
+"    gl_FragColor = color * ( 1.0 - grads) + vec4(grads,grads,grads,grads) * outlineColor;\n"
+"}\n";

	public constructor() {
	}

	SetEffect(displayObj:egret.DisplayObject, param:IEffectParam){

		let outlineParam = param as OutLineParam;

		let time = (new Date().getTime()) / 1000000;
		time = (time - Math.floor(time)) * 1000;


		var paramImp = {time:time, breadth:outlineParam.Breadth, alpha:1, scale:displayObj.width/displayObj.height, outlineColor:ShaderEffectMng.TransColor(outlineParam.Color)};
		
		let filter = new egret.CustomFilter(this.Vert, this.Frag, paramImp);
		filter.padding = displayObj.width * 0.005 * outlineParam.Breadth * 2;
		displayObj.filters = [filter];

        displayObj.addEventListener(egret.Event.ENTER_FRAME, function(){
			filter.uniforms.alpha = Math.cos(new Date().getTime() / 500 *outlineParam.Frequency + outlineParam.Beginning) / 2 + 0.5;
        },this);

		if(outlineParam.Time > 0)
		{
			let timer:egret.Timer = new egret.Timer(outlineParam.Time * 1000, 0);
			timer.addEventListener(egret.TimerEvent.TIMER, function(){
				
				displayObj.filters = [];
			}, displayObj);
			timer.start();
		}
	}


}