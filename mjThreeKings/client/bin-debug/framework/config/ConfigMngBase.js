//--------------------------------------------------
// 数据表管理器基类
//     20180704 wanghongliang
//--------------------------------------------------
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ConfigMngBase = (function () {
    function ConfigMngBase() {
        this._configDic = new nano.Map();
    }
    ConfigMngBase.prototype.LoadConfig = function () {
        var resMap = this.GetResMap();
        var typeNameList = resMap.Keys();
        this._configDic.Clear();
        for (var i = 0; i < typeNameList.length; i++) {
            var typeName = typeNameList[i];
            var res = resMap.Get(typeName);
            var buffer = RES.getRes(res);
            var byteArray = new egret.ByteArray(buffer);
            var configMap = this.BinaryParse(byteArray, typeName);
            this._configDic.Add(typeName, configMap);
        }
    };
    ConfigMngBase.prototype.GetResMap = function () {
        return null;
    };
    ConfigMngBase.prototype.BinaryParse = function (binary, typeName) {
        var configMap = new nano.Map();
        var configArrayLength = binary.readUnsignedInt();
        var configArray = [];
        for (var i = 0; i < configArrayLength; i++) {
            configArray.push(binary.readInt());
        }
        var columnListCount = binary.readInt();
        var columList = [];
        for (var i = 0; i < columnListCount; i++) {
            var key = binary.readUTF();
            var value = binary.readByte();
            columList.push([key, value]);
        }
        var headIndex = binary.position;
        for (var i = 0; i < configArray.length; i++) {
            var configData = eval("new " + typeName + "()");
            var id = configData.Init(binary, headIndex + configArray[i], columList);
            configMap.Add(id, configData);
        }
        return configMap;
    };
    ConfigMngBase.prototype.GetConfigBase = function (configName, id) {
        var valueMap = this._configDic.Get(configName);
        return valueMap.Get(id);
    };
    ConfigMngBase.prototype.HasConfigBase = function (configName, id) {
        var containConfig = this._configDic.Contains(configName);
        if (!containConfig) {
            return false;
        }
        var valueMap = this._configDic.Get(configName);
        return valueMap.Contains(id);
    };
    ConfigMngBase.prototype.GetAllConfigBase = function (configName) {
        return this._configDic.Get(configName);
    };
    return ConfigMngBase;
}());
__reflect(ConfigMngBase.prototype, "ConfigMngBase");
