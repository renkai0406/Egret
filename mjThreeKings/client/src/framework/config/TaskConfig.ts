//--------------------------------------------------
// <auto-generated>
//      本文件由《纳米娱乐-游戏编辑器-数据工具》自动生成
//      源文件： Task.xlsx
// </auto-generated>
//--------------------------------------------------

class TaskConfig extends ConfigDataBase
{
	/**任务名称*/
	public get Name():string {  return this.Get<string>("Name"); }

	/**任务描述*/
	public get Describe():string {  return this.Get<string>("Describe"); }

	/**前置任务*/
	public get PreTask():number {  return this.Get<number>("PreTask"); }

	/**等级限制*/
	public get Level():number {  return this.Get<number>("Level"); }

	/**任务类型*/
	public get Type():number {  return this.Get<number>("Type"); }

	/**功能号*/
	public get Action():number {  return this.Get<number>("Action"); }

	/**取值*/
	public get Value():number {  return this.Get<number>("Value"); }

	/**奖励类型*/
	public get AwardType():number[] {  return this.Get<number[]>("AwardType"); }

	/**奖励值*/
	public get AwardValue():number[] {  return this.Get<number[]>("AwardValue"); }

}
