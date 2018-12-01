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
var FriendBase = (function (_super) {
    __extends(FriendBase, _super);
    function FriendBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list_data = new Array();
        _this.max_child_count = 4;
        return _this;
    }
    FriendBase.prototype.GetSkinFile = function () {
        return "exml/friendpage_cur_base.exml";
    };
    FriendBase.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.rbtn_base.group.selectedValue = 0;
        this.vs_view.selectedIndex = 0;
        this.lv_current = this.list_show;
        this.initShow();
        this.rbtn_base.group.addEventListener(eui.UIEvent.CHANGE, this.radio_changed_callback, this);
        this.btn_refresh_show.addEventListener(egret.TouchEvent.TOUCH_TAP, this.refresh_show_callback, this);
        this.btn_edit_show.addEventListener(egret.TouchEvent.TOUCH_TAP, this.edit_show_callback, this);
        this.btn_cancel_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.edit_cancel_callback, this);
        this.btn_submit_edit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.edit_submit_callback, this);
    };
    //从网络加载资源
    FriendBase.prototype.load_friend_data = function (page, count) {
        var temp_data = [
            { name: "刘一", id: "023451", grade: "90", office: "平民", img: "", invite: "1111101" },
            { name: "陈二", id: "023452", grade: "91", office: "平民", img: "", invite: "1111102" },
            { name: "张三", id: "023453", grade: "92", office: "宰相", img: "", invite: "1111103" },
            { name: "李四", id: "023454", grade: "93", office: "平民", img: "", invite: "1111104" },
            { name: "李5", id: "023454", grade: "93", office: "平民", img: "", invite: "1111105" },
            { name: "李6", id: "023454", grade: "93", office: "平民", img: "", invite: "1111106" },
            { name: "李7", id: "023454", grade: "93", office: "平民", img: "", invite: "1111107" },
            { name: "李8", id: "023454", grade: "93", office: "平民", img: "", invite: "1111108" },
            { name: "刘9", id: "023454", grade: "93", office: "平民", img: "", invite: "1111109" },
            { name: "刘10", id: "023454", grade: "93", office: "平民", img: "", invite: "1111110" },
            { name: "刘11", id: "023454", grade: "93", office: "平民", img: "", invite: "1111111" },
            { name: "刘12", id: "023454", grade: "93", office: "平民", img: "", invite: "1111112" },
        ];
        this.list_data.splice(0);
        for (var i = (page - 1) * count; i < page * count; i++) {
            this.list_data.push(temp_data[i]);
        }
    };
    FriendBase.prototype.list_added_callback = function (e) {
        var list = this.lv_current.GetList();
        var child = list.getChildAt(list.numChildren - 1);
        egret.log(child);
        child.setBase(this);
    };
    FriendBase.prototype.radio_changed_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var group = e.target;
        switch (group.selectedValue) {
            case "0":
                this.vs_view.selectedIndex = 0;
                this.lv_current = this.list_show;
                this.initShow();
                break;
            case "1":
                this.vs_view.selectedIndex = 2;
                this.lv_current = this.list_add;
                this.initAdd();
                break;
            case "2":
                this.vs_view.selectedIndex = 3;
                this.lv_current = this.list_apply;
                this.initApply();
                break;
            default:
                break;
        }
        egret.log("radio id:" + group.selectedValue + ";view_stack id:" + this.vs_view.selectedIndex);
    };
    FriendBase.prototype.del_child = function (index) {
        egret.log("删除元素,下标：" + index);
        this.list_data.splice(index, 1);
        this.lv_current.SetData(this.list_data);
    };
    FriendBase.prototype.initShow = function () {
        this.load_friend_data(1, 4);
        this.list_show.SetData(this.list_data);
        this.list_show.SetItemClass(FriendItem_Show);
        this.pt1_show.init(1, 22);
        this.list_show.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    };
    FriendBase.prototype.refresh_show_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.load_friend_data(this.pt1_show.getPage(), 4);
        this.list_show.SetData(this.list_data);
        this.list_show.SetItemClass(FriendItem_Show);
        this.list_show.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    };
    FriendBase.prototype.edit_show_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var current_page = this.pt1_show.getPage();
        var max_page = this.pt1_show.getMax();
        this.vs_view.selectedIndex = 1;
        this.load_friend_data(current_page, 4);
        this.pt1_edit.init(current_page, max_page);
        this.list_edit.SetData(this.list_data);
        this.list_edit.SetItemClass(FriendItem_Edit);
        this.list_edit.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    };
    FriendBase.prototype.edit_cancel_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.vs_view.selectedIndex = 0;
    };
    FriendBase.prototype.edit_submit_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.vs_view.selectedIndex = 0;
    };
    FriendBase.prototype.initAdd = function () {
        this.load_friend_data(1, 3);
        this.list_add.SetData(this.list_data);
        this.list_add.SetItemClass(FriendItem_Add);
        this.list_add.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    };
    FriendBase.prototype.initApply = function () {
        this.load_friend_data(1, 4);
        this.list_apply.SetData(this.list_data);
        this.list_apply.SetItemClass(FriendItem_Apply);
        this.pt1_apply.init(1, 22);
        this.list_apply.addEventListener(egret.Event.ADDED, this.list_added_callback, this);
    };
    return FriendBase;
}(UIWindow));
__reflect(FriendBase.prototype, "FriendBase");
