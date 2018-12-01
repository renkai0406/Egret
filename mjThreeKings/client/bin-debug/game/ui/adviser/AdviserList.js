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
var AdviserList = (function (_super) {
    __extends(AdviserList, _super);
    function AdviserList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list_data = new Array();
        return _this;
    }
    AdviserList.prototype.GetSkinFile = function () {
        return "exml/adviserpage.exml";
    };
    AdviserList.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.list_adviser.GetList().layout = new eui.TileLayout();
        this.init();
    };
    //从网络加载资源
    AdviserList.prototype.load_friend_data = function (page, count) {
        var temp_data = [
            { name: "刘1", state: AdviserUtil.ADVISER_STATE_LOCKED, img: "1", info: "大家好，我叫诸葛亮", attribute: "采矿时间：1小时" },
            { name: "刘2", state: AdviserUtil.ADVISER_STATE_USED, img: "2", info: "大家好，我叫刘备", attribute: "采矿时间：2小时" },
            { name: "刘3", state: AdviserUtil.ADVISER_STATE_OWNED, img: "3", info: "大家好，我叫关羽", attribute: "采矿时间：3小时" },
            { name: "刘4", state: AdviserUtil.ADVISER_STATE_LOCKED, img: "2", info: "大家好，我叫张飞", attribute: "采矿时间：4小时" },
            { name: "刘5", state: AdviserUtil.ADVISER_STATE_LOCKED, img: "3", info: "大家好，我叫徐庶", attribute: "采矿时间：5小时" },
            { name: "刘6", state: AdviserUtil.ADVISER_STATE_OWNED, img: "1", info: "大家好，我叫张岱", attribute: "采矿时间：6小时" },
            { name: "刘7", state: AdviserUtil.ADVISER_STATE_OWNED, img: "1", info: "大家好，我叫魏延", attribute: "采矿时间：7小时" },
            { name: "刘8", state: AdviserUtil.ADVISER_STATE_LOCKED, img: "3", info: "大家好，我叫陈宫", attribute: "采矿时间：8小时" },
        ];
        this.list_data.splice(0);
        for (var i = (page - 1) * count; i < page * count; i++) {
            var value = temp_data[i];
            value.img = this.get_adviser_path(value.img);
            this.list_data.push(value);
        }
    };
    AdviserList.prototype.init = function () {
        this.load_friend_data(1, 8);
        this.list_adviser.SetData(this.list_data);
        this.list_adviser.SetItemClass(AdviserItem);
    };
    AdviserList.prototype.get_adviser_path = function (name) {
        switch (name) {
            case "1":
                return "10001_png";
            case "2":
                return "10002_png";
            case "3":
                return "10003_png";
            default:
                return "";
        }
    };
    return AdviserList;
}(UIWindow));
__reflect(AdviserList.prototype, "AdviserList");
