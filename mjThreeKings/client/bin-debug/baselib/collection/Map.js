// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var Map = (function () {
        function Map() {
            this.m_data = {};
            this.m_keys = new Array();
        }
        Map.prototype.Add = function (key, value) {
            if (!this.m_data[key]) {
                this.m_data[key] = value;
                this.m_keys.push(key);
            }
        };
        Map.prototype.Remove = function (key) {
            if (this.m_data[key]) {
                this.m_data[key] = null;
            }
        };
        Map.prototype.Contains = function (key) {
            return this.m_data[key] != null || this.m_data[key] != undefined;
        };
        Map.prototype.Get = function (key) {
            return this.m_data[key];
        };
        Map.prototype.Keys = function () {
            return this.m_keys;
        };
        Map.prototype.Clear = function () {
            this.m_data = {};
            this.m_keys = new Array();
        };
        return Map;
    }());
    nano.Map = Map;
    __reflect(Map.prototype, "nano.Map");
})(nano || (nano = {}));
