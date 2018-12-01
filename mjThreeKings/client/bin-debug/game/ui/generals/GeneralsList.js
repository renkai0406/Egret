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
var GeneralsList = (function (_super) {
    __extends(GeneralsList, _super);
    function GeneralsList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.list_data = new Array();
        return _this;
    }
    GeneralsList.prototype.GetSkinFile = function () {
        return "exml/generalspage.exml";
    };
    GeneralsList.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.rbtn_sort.group.selectedValue = 0;
        this.rbtn_sort.group.addEventListener(eui.UIEvent.CHANGE, this.radio_changed_callback, this);
        this.lvb_generals.GetList().layout = new eui.TileLayout();
        this.init();
    };
    //从网络加载资源
    GeneralsList.prototype.load_friend_data = function (type) {
        var generals = ConfigMng.Instance.GetAllGeneralConfig();
        var keys = generals.Keys();
        this.list_data.splice(0);
        for (var i = 0; i < keys.length; i++) {
            var value = { name: "", tag: 0, img: "", star: 0, max: 0, enabled: true };
            var general = generals.Get(keys[i]);
            if (type != 0 && general.CountryId != type) {
                continue;
            }
            value.name = general.Name;
            value.tag = general.CountryId;
            value.img = general.Res;
            value.star = general.InitStar;
            value.max = general.MaxStar;
            value.enabled = true;
            this.list_data.push(value);
        }
    };
    GeneralsList.prototype.init = function () {
        this.load_friend_data(Number(this.rbtn_sort.group.selectedValue));
        this.lvb_generals.SetData(this.list_data);
        this.lvb_generals.SetItemClass(GeneralsItem);
    };
    GeneralsList.prototype.radio_changed_callback = function (e) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var group = e.target;
        this.init();
    };
    return GeneralsList;
}(UIWindow));
__reflect(GeneralsList.prototype, "GeneralsList");
