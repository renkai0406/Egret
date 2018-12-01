var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SpaceInfo = (function () {
    function SpaceInfo(spaceId, res, helper) {
        this._spaceId = 0;
        this._protos = null;
        this._res = "";
        this._helper = null;
        this._spaceId = spaceId;
        this._res = res;
        this._helper = helper;
    }
    Object.defineProperty(SpaceInfo.prototype, "SpaceId", {
        get: function () {
            return this._spaceId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpaceInfo.prototype, "Res", {
        get: function () {
            return this._res;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpaceInfo.prototype, "Helper", {
        get: function () {
            return this._helper;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpaceInfo.prototype, "Protos", {
        get: function () {
            return this._protos;
        },
        set: function (protos) {
            this._protos = protos;
        },
        enumerable: true,
        configurable: true
    });
    return SpaceInfo;
}());
__reflect(SpaceInfo.prototype, "SpaceInfo");
var ProtoMng = (function () {
    function ProtoMng() {
        this._spaceMap = new nano.Map();
        this._spaceMap.Add("lobby", new SpaceInfo(0, "lobby_proto", new lobby.CommandHelper()));
        this._spaceMap.Add("game", new SpaceInfo(1, "game_proto", new game.CommandHelper()));
        // ...
        // 其他协议名称空间在此处添加
        this.Init();
    }
    ProtoMng.prototype.Init = function () {
        var keys = this._spaceMap.Keys();
        for (var i = 0; i < keys.length; i++) {
            var info = this._spaceMap.Get(keys[i]);
            var res = RES.getRes(info.Res);
            this._spaceMap.Get(keys[i]).Protos = dcodeIO.ProtoBuf.loadProto(res);
        }
    };
    Object.defineProperty(ProtoMng, "Instance", {
        get: function () {
            if (this._instance == null) {
                this._instance = new ProtoMng();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    ProtoMng.prototype.build = function (protoName) {
        var protoSplit = protoName.split(".");
        if (protoSplit.length != 2) {
            throw new Error("协议名称错误" + protoName);
        }
        return this._spaceMap.Get(protoSplit[0]).Protos.build(protoName);
    };
    ProtoMng.prototype.GetProtoIdByName = function (protoName) {
        var protoSplit = protoName.split(".");
        if (protoSplit.length != 2) {
            throw new Error("协议名称错误" + protoName);
        }
        var commandId = this._spaceMap.Get(protoSplit[0]).Helper.commandIdMap[protoName];
        return this._spaceMap.Get(protoSplit[0]).SpaceId * 10000 + commandId;
    };
    ProtoMng.prototype.GetProtoNameById = function (protoId, isRequest) {
        var spaceId = Math.floor(protoId / 10000);
        var commandId = protoId % 10000;
        var keys = this._spaceMap.Keys();
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var spaceInfo = this._spaceMap.Get(key);
            if (spaceInfo.SpaceId == spaceId) {
                return isRequest ? spaceInfo.Helper.requestMap[commandId] : spaceInfo.Helper.responseMap[commandId];
            }
        }
        return null;
    };
    ProtoMng.prototype.GetResponseProtoById = function (spaceId, commandId) {
        var spaceName = this.GetSpaceName(spaceId);
        if (this._spaceMap.Contains(spaceName)) {
            var spaceInfo = this._spaceMap.Get(spaceName);
            return spaceInfo.Helper.GetResponceMessage(commandId);
        }
        return null;
    };
    ProtoMng.prototype.GetSpaceName = function (spaceId) {
        var keys = this._spaceMap.Keys();
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var spaceInfo = this._spaceMap.Get(key);
            if (spaceInfo.SpaceId == spaceId) {
                return key;
            }
        }
        return "";
    };
    ProtoMng._instance = null;
    return ProtoMng;
}());
__reflect(ProtoMng.prototype, "ProtoMng");
