var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var TaskItem = (function (_super) {
    __extends(TaskItem, _super);
    function TaskItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/MoJing/TaskItem.exml";
        return _this;
    }
    TaskItem.prototype.dataChanged = function () {
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
    };
    TaskItem.ON_GOING_STATUS = 0;
    TaskItem.WAITING_FOR_RECEIVE_STATUS = 1;
    TaskItem.FINISHED_STATUS = 2;
    TaskItem.ON_GOING_LABEL = "前往";
    TaskItem.WAITING_FOR_RECEIVE_LABEL = "领取奖励";
    TaskItem.ON_GOING_SKIN = "mojingskins.GreenButton1Skin";
    TaskItem.WAITING_FOR_RECEIVE_SKIN = "mojingskins.YellowButton1Skin";
    return TaskItem;
}(eui.ItemRenderer));
__reflect(TaskItem.prototype, "TaskItem");
