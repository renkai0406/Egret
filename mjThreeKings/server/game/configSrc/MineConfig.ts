//--------------------------------------------------
// <auto-generated>
//      本文件由《纳米娱乐-游戏编辑器-数据工具》自动生成
//      源文件： Mine.xlsx
// </auto-generated>
//--------------------------------------------------

class MineConfig extends ConfigDataBase
{
	/**矿区名*/
	public get Name():string {  return this.Get<string>("Name"); }

	/**解锁方式*/
	public get Unlock():number[] {  return this.Get<number[]>("Unlock"); }

	/**解锁等级*/
	public get Level():number {  return this.Get<number>("Level"); }

	/**魔晶解锁*/
	public get Level_1():number {  return this.Get<number>("Level_1"); }

	/**最低保底收益类型*/
	public get ItemType():number {  return this.Get<number>("ItemType"); }

	/**最低保底收益数量*/
	public get MinItemCount():number {  return this.Get<number>("MinItemCount"); }

	/**最高保底收益数量*/
	public get MaxItemCount():number {  return this.Get<number>("MaxItemCount"); }

	/**最低额外收益类型*/
	public get ExtraItemType():number {  return this.Get<number>("ExtraItemType"); }

	/**最低额外收益*/
	public get MinRate():number {  return this.Get<number>("MinRate"); }

	/**最高额外收益*/
	public get MaxRate():number {  return this.Get<number>("MaxRate"); }

}
