interface IEffectParam
{// 效果参数

}

interface IEffect
{
	Vert:string;
	Frag:string;

	SetEffect(displayObj:egret.DisplayObject, param:IEffectParam);
}

enum EffectType
{
	/**
	 * 波动
	 */
	Wave = 1,

	/**
	 * 描边闪动
	 */
	OutLine,
	
	/**
	 * 置灰
	 */
	Gray,

	/**
	 * 流光
	 */
	Flow,

	/**
	 * 渐隐渐显
	 */
	Fade,

	/**
	 * 变色
	 */
	Color,
}

class ShaderEffectMng {
	private _effectMap:nano.Map<EffectType, IEffect> = new nano.Map<EffectType, IEffect>();
	public constructor() {
		this._effectMap.Add(EffectType.Wave, new WaveEffect());
		this._effectMap.Add(EffectType.OutLine, new OutLineEffect());
		this._effectMap.Add(EffectType.Gray, new GrayEffect());
		this._effectMap.Add(EffectType.Flow, new FlowEffect());
		this._effectMap.Add(EffectType.Fade, new FadeEffect());
		this._effectMap.Add(EffectType.Color, new ColorEffect());
	}

	private static _instance:ShaderEffectMng = null;
	public static get Instance(){
		if(ShaderEffectMng._instance == null)
		{
			ShaderEffectMng._instance = new ShaderEffectMng();
		}
		return ShaderEffectMng._instance;
	}


	public AddEffect(type:EffectType, displayObj:egret.DisplayObject, param:IEffectParam){

		let effect = this._effectMap.Get(type);
		if(effect != null)
		{
			effect.SetEffect(displayObj, param);
		}
	
	}

	public static TransColor(color:number):any{
		let colorArray = [];
		
		colorArray.push(color/0x1000000/255);
		color = color % 0x1000000;
		colorArray.push(color/0x10000 / 255);
		color = color % 0x10000;
		colorArray.push(color/0x100 / 255);
		color = color % 0x100;
		colorArray.push(color / 255);

		return { x: colorArray[0], y: colorArray[1], z: colorArray[2], w: colorArray[3] };
	}

}