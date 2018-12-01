// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var MapOrList = (function () {
        function MapOrList() {
            this.m_list = [];
            this.m_map = new nano.Map();
        }
        MapOrList.prototype.GetList = function () {
            return this.m_list;
        };
        MapOrList.prototype.GetMap = function () {
            return this.m_map;
        };
        MapOrList.prototype.Add = function (key, value) {
            if (!this.m_map.Contains(key)) {
                this.m_map.Add(key, value);
            }
            this.m_list.push(value);
        };
        MapOrList.prototype.Remove = function (key, value) {
            this.m_map.Remove(key);
            for (var i = 0; i < this.m_list.length; i++) {
                if (this.m_list[i] == value) {
                    this.m_list.splice(i, 1);
                    return;
                }
            }
        };
        return MapOrList;
    }());
    nano.MapOrList = MapOrList;
    __reflect(MapOrList.prototype, "nano.MapOrList");
})(nano || (nano = {}));
