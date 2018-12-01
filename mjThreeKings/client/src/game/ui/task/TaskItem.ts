class TaskItem extends eui.ItemRenderer {

	private static ON_GOING_STATUS = 0;
	private static WAITING_FOR_RECEIVE_STATUS = 1;
	private static FINISHED_STATUS = 2;
	private static ON_GOING_LABEL = "前往";
	private static WAITING_FOR_RECEIVE_LABEL = "领取奖励";
	private static ON_GOING_SKIN = "mojingskins.GreenButton1Skin";
	private static WAITING_FOR_RECEIVE_SKIN = "mojingskins.YellowButton1Skin";

	private label_progress: eui.Label;
	private btn_operate: eui.Button;
	private img_received: eui.Image;

	public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/TaskItem.exml";
	}

	protected dataChanged() {
		var status = this.data.status;
		switch (status) {
			case TaskItem.ON_GOING_STATUS://任务待完成
				this.img_received.visible = false;
				this.btn_operate.visible = true;
				this.label_progress.visible = true;
				this.btn_operate.label = TaskItem.ON_GOING_LABEL;
				this.btn_operate.skinName = TaskItem.ON_GOING_SKIN;
				this.label_progress.text = this.data.progress;
				break;
			case TaskItem.WAITING_FOR_RECEIVE_STATUS:
				this.img_received.visible = false;
				this.btn_operate.visible = true;
				this.label_progress.visible = true;
				this.btn_operate.label = TaskItem.WAITING_FOR_RECEIVE_LABEL;
				this.btn_operate.skinName = TaskItem.WAITING_FOR_RECEIVE_SKIN;
				this.label_progress.text = this.data.progress;
				break;
			case TaskItem.FINISHED_STATUS:
				this.img_received.visible = true;
				this.btn_operate.visible = false;
				this.label_progress.visible = false;
				break;

			default:
				break;
		}

	}
}