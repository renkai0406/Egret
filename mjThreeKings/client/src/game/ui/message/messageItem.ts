class MessageItem extends eui.ItemRenderer {

	
	private origin: eui.Label;
	private income: eui.Label;
	private time: eui.Label;
	

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/MessageItem.exml";
	}

	protected dataChanged() {
		
		this.origin.text = this.data.title;
		if(this.data.type == 1){
			this.income.text = this.data.count + "魔晶"
		}
		else{
			this.income.text = this.data.count + "绑晶"
		}
		this.time.text  = this.data.time;

	}
}