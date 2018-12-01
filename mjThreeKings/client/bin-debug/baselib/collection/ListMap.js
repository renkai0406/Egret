// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var ListMap = (function () {
        function ListMap() {
            this.m_listMap = new nano.Map();
        }
        ListMap.prototype.Add = function (key, value) {
            var list = this.m_listMap.Get(key);
            if (list == null) {
                list = new Array();
                this.m_listMap.Add(key, list);
            }
            list.push(value);
        };
        ListMap.prototype.GetList = function (key) {
            var list = this.m_listMap.Get(key);
            return list;
        };
        ListMap.prototype.Remove = function (key) {
            this.m_listMap.Remove(key);
        };
        ListMap.prototype.Clear = function () {
            this.m_listMap.Clear();
        };
        return ListMap;
    }());
    nano.ListMap = ListMap;
    __reflect(ListMap.prototype, "nano.ListMap");
})(nano || (nano = {}));
