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
//此文件为自动生成,请勿手工修改!
var game;
(function (game) {
    var PlayerMessage = (function (_super) {
        __extends(PlayerMessage, _super);
        function PlayerMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getName());
            _this.initData();
            return _this;
        }
        PlayerMessage.prototype.getName = function () {
            return "game.Player";
        };
        PlayerMessage.prototype.getSeat = function () {
            return this._data.get("seat");
        };
        PlayerMessage.prototype.setSeat = function (data) {
            this._data.set("seat", data);
        };
        PlayerMessage.prototype.getPlayer = function () {
            return this._data.get("player");
        };
        PlayerMessage.prototype.setPlayer = function (data) {
            this._data.set("player", data);
        };
        PlayerMessage.prototype.getInfo = function () {
            return this._data.get("info");
        };
        PlayerMessage.prototype.setInfo = function (data) {
            this._data.set("info", data);
        };
        PlayerMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        PlayerMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        PlayerMessage.prototype.getIsOnline = function () {
            return this._data.get("is_online");
        };
        PlayerMessage.prototype.setIsOnline = function (data) {
            this._data.set("is_online", data);
        };
        PlayerMessage.prototype.getTotalScore = function () {
            return this._data.get("total_score");
        };
        PlayerMessage.prototype.setTotalScore = function (data) {
            this._data.set("total_score", data);
        };
        PlayerMessage.prototype.getState = function () {
            return this._data.get("state");
        };
        PlayerMessage.prototype.setState = function (data) {
            this._data.set("state", data);
        };
        return PlayerMessage;
    }(MessageBase));
    game.PlayerMessage = PlayerMessage;
    __reflect(PlayerMessage.prototype, "game.PlayerMessage");
    var CreateRoomRequestMessage = (function (_super) {
        __extends(CreateRoomRequestMessage, _super);
        function CreateRoomRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getName());
            _this.initData();
            return _this;
        }
        CreateRoomRequestMessage.prototype.getName = function () {
            return "game.CreateRoomRequest";
        };
        CreateRoomRequestMessage.prototype.getRoomId = function () {
            return this._data.get("room_id");
        };
        CreateRoomRequestMessage.prototype.setRoomId = function (data) {
            this._data.set("room_id", data);
        };
        CreateRoomRequestMessage.prototype.getOwnerUuid = function () {
            return this._data.get("owner_uuid");
        };
        CreateRoomRequestMessage.prototype.setOwnerUuid = function (data) {
            this._data.set("owner_uuid", data);
        };
        CreateRoomRequestMessage.prototype.getKwargs = function () {
            return this._data.get("kwargs");
        };
        CreateRoomRequestMessage.prototype.setKwargs = function (data) {
            this._data.set("kwargs", data);
        };
        CreateRoomRequestMessage.prototype.getRoomUuid = function () {
            return this._data.get("room_uuid");
        };
        CreateRoomRequestMessage.prototype.setRoomUuid = function (data) {
            this._data.set("room_uuid", data);
        };
        CreateRoomRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        CreateRoomRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        CreateRoomRequestMessage.prototype.getOwnerInfo = function () {
            return this._data.get("owner_info");
        };
        CreateRoomRequestMessage.prototype.setOwnerInfo = function (data) {
            this._data.set("owner_info", data);
        };
        return CreateRoomRequestMessage;
    }(MessageBase));
    game.CreateRoomRequestMessage = CreateRoomRequestMessage;
    __reflect(CreateRoomRequestMessage.prototype, "game.CreateRoomRequestMessage");
    var CreateRoomResponseMessage = (function (_super) {
        __extends(CreateRoomResponseMessage, _super);
        function CreateRoomResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getName());
            _this.initData();
            return _this;
        }
        CreateRoomResponseMessage.prototype.getName = function () {
            return "game.CreateRoomResponse";
        };
        CreateRoomResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        CreateRoomResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return CreateRoomResponseMessage;
    }(MessageBase));
    game.CreateRoomResponseMessage = CreateRoomResponseMessage;
    __reflect(CreateRoomResponseMessage.prototype, "game.CreateRoomResponseMessage");
    var EnterRoomRequestMessage = (function (_super) {
        __extends(EnterRoomRequestMessage, _super);
        function EnterRoomRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getName());
            _this.initData();
            return _this;
        }
        EnterRoomRequestMessage.prototype.getName = function () {
            return "game.EnterRoomRequest";
        };
        EnterRoomRequestMessage.prototype.getRoomId = function () {
            return this._data.get("room_id");
        };
        EnterRoomRequestMessage.prototype.setRoomId = function (data) {
            this._data.set("room_id", data);
        };
        EnterRoomRequestMessage.prototype.getPlayer = function () {
            return this._data.get("player");
        };
        EnterRoomRequestMessage.prototype.setPlayer = function (data) {
            this._data.set("player", data);
        };
        EnterRoomRequestMessage.prototype.getInfo = function () {
            return this._data.get("info");
        };
        EnterRoomRequestMessage.prototype.setInfo = function (data) {
            this._data.set("info", data);
        };
        return EnterRoomRequestMessage;
    }(MessageBase));
    game.EnterRoomRequestMessage = EnterRoomRequestMessage;
    __reflect(EnterRoomRequestMessage.prototype, "game.EnterRoomRequestMessage");
    var EnterRoomResponseMessage = (function (_super) {
        __extends(EnterRoomResponseMessage, _super);
        function EnterRoomResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getName());
            _this.initData();
            return _this;
        }
        EnterRoomResponseMessage.prototype.getName = function () {
            return "game.EnterRoomResponse";
        };
        EnterRoomResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        EnterRoomResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        EnterRoomResponseMessage.prototype.getRoomId = function () {
            return this._data.get("room_id");
        };
        EnterRoomResponseMessage.prototype.setRoomId = function (data) {
            this._data.set("room_id", data);
        };
        EnterRoomResponseMessage.prototype.getOwner = function () {
            return this._data.get("owner");
        };
        EnterRoomResponseMessage.prototype.setOwner = function (data) {
            this._data.set("owner", data);
        };
        EnterRoomResponseMessage.prototype.getKwargs = function () {
            return this._data.get("kwargs");
        };
        EnterRoomResponseMessage.prototype.setKwargs = function (data) {
            this._data.set("kwargs", data);
        };
        EnterRoomResponseMessage.prototype.getRestCards = function () {
            return this._data.get("rest_cards");
        };
        EnterRoomResponseMessage.prototype.setRestCards = function (data) {
            this._data.set("rest_cards", data);
        };
        EnterRoomResponseMessage.prototype.getPlayer = function () {
            var subData = this._data.get("player");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_1 = new PlayerMessage();
                message_1.setData(subData[i]);
                messageArray.push(message_1);
            }
            return messageArray;
        };
        EnterRoomResponseMessage.prototype.setPlayer = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("player", data[i].getData());
            }
        };
        EnterRoomResponseMessage.prototype.addPlayer = function (data) {
            this._data.add("player", data.getData());
        };
        EnterRoomResponseMessage.prototype.getOwnerInfo = function () {
            return this._data.get("owner_info");
        };
        EnterRoomResponseMessage.prototype.setOwnerInfo = function (data) {
            this._data.set("owner_info", data);
        };
        EnterRoomResponseMessage.prototype.getRoomType = function () {
            return this._data.get("room_type");
        };
        EnterRoomResponseMessage.prototype.setRoomType = function (data) {
            this._data.set("room_type", data);
        };
        return EnterRoomResponseMessage;
    }(MessageBase));
    game.EnterRoomResponseMessage = EnterRoomResponseMessage;
    __reflect(EnterRoomResponseMessage.prototype, "game.EnterRoomResponseMessage");
})(game || (game = {}));
