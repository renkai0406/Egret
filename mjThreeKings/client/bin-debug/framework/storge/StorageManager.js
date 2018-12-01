// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StorageManager = (function () {
    function StorageManager() {
    }
    StorageManager.SetData = function (key, value) {
        egret.localStorage.setItem(key, value);
    };
    StorageManager.GetData = function (key) {
        return egret.localStorage.getItem(key);
    };
    StorageManager.RemoveData = function (key) {
        egret.localStorage.removeItem(key);
    };
    StorageManager.ClearAll = function () {
        egret.localStorage.clear();
    };
    return StorageManager;
}());
__reflect(StorageManager.prototype, "StorageManager");
