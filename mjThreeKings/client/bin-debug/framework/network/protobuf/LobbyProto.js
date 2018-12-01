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
var lobby;
(function (lobby) {
    var ShopItemMessage = (function (_super) {
        __extends(ShopItemMessage, _super);
        function ShopItemMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ShopItemMessage.prototype.getMessageProtoName = function () {
            return "lobby.ShopItem";
        };
        ShopItemMessage.prototype.getId = function () {
            return this._data.get("id");
        };
        ShopItemMessage.prototype.setId = function (data) {
            this._data.set("id", data);
        };
        ShopItemMessage.prototype.getType = function () {
            return this._data.get("type");
        };
        ShopItemMessage.prototype.setType = function (data) {
            this._data.set("type", data);
        };
        ShopItemMessage.prototype.getName = function () {
            return this._data.get("name");
        };
        ShopItemMessage.prototype.setName = function (data) {
            this._data.set("name", data);
        };
        ShopItemMessage.prototype.getValue = function () {
            return this._data.get("value");
        };
        ShopItemMessage.prototype.setValue = function (data) {
            this._data.set("value", data);
        };
        ShopItemMessage.prototype.getCount = function () {
            return this._data.get("count");
        };
        ShopItemMessage.prototype.setCount = function (data) {
            this._data.set("count", data);
        };
        ShopItemMessage.prototype.getPrice = function () {
            return this._data.get("price");
        };
        ShopItemMessage.prototype.setPrice = function (data) {
            this._data.set("price", data);
        };
        ShopItemMessage.prototype.getBonus = function () {
            return this._data.get("bonus");
        };
        ShopItemMessage.prototype.setBonus = function (data) {
            this._data.set("bonus", data);
        };
        ShopItemMessage.prototype.getFlags = function () {
            return this._data.get("flags");
        };
        ShopItemMessage.prototype.setFlags = function (data) {
            this._data.set("flags", data);
        };
        return ShopItemMessage;
    }(MessageBase));
    lobby.ShopItemMessage = ShopItemMessage;
    __reflect(ShopItemMessage.prototype, "lobby.ShopItemMessage");
    var ClubMessageMessage = (function (_super) {
        __extends(ClubMessageMessage, _super);
        function ClubMessageMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubMessageMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubMessage";
        };
        ClubMessageMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ClubMessageMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        ClubMessageMessage.prototype.getClubName = function () {
            return this._data.get("club_name");
        };
        ClubMessageMessage.prototype.setClubName = function (data) {
            this._data.set("club_name", data);
        };
        ClubMessageMessage.prototype.getRole = function () {
            return this._data.get("role");
        };
        ClubMessageMessage.prototype.setRole = function (data) {
            this._data.set("role", data);
        };
        ClubMessageMessage.prototype.getMembers = function () {
            return this._data.get("members");
        };
        ClubMessageMessage.prototype.setMembers = function (data) {
            this._data.set("members", data);
        };
        ClubMessageMessage.prototype.getOnlines = function () {
            return this._data.get("onlines");
        };
        ClubMessageMessage.prototype.setOnlines = function (data) {
            this._data.set("onlines", data);
        };
        ClubMessageMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        ClubMessageMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        ClubMessageMessage.prototype.getNotice = function () {
            return this._data.get("notice");
        };
        ClubMessageMessage.prototype.setNotice = function (data) {
            this._data.set("notice", data);
        };
        ClubMessageMessage.prototype.getTables = function () {
            return this._data.get("tables");
        };
        ClubMessageMessage.prototype.setTables = function (data) {
            this._data.set("tables", data);
        };
        ClubMessageMessage.prototype.getIcons = function () {
            return this._data.get("icons");
        };
        ClubMessageMessage.prototype.setIcons = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("icons", data[i]);
            }
        };
        ClubMessageMessage.prototype.addIcons = function (data) {
            this._data.add("icons", data);
        };
        ClubMessageMessage.prototype.getConfig = function () {
            return this._data.get("config");
        };
        ClubMessageMessage.prototype.setConfig = function (data) {
            this._data.set("config", data);
        };
        ClubMessageMessage.prototype.getToday = function () {
            return this._data.get("today");
        };
        ClubMessageMessage.prototype.setToday = function (data) {
            this._data.set("today", data);
        };
        ClubMessageMessage.prototype.getYesterday = function () {
            return this._data.get("yesterday");
        };
        ClubMessageMessage.prototype.setYesterday = function (data) {
            this._data.set("yesterday", data);
        };
        return ClubMessageMessage;
    }(MessageBase));
    lobby.ClubMessageMessage = ClubMessageMessage;
    __reflect(ClubMessageMessage.prototype, "lobby.ClubMessageMessage");
    var ClubTableMessageMessage = (function (_super) {
        __extends(ClubTableMessageMessage, _super);
        function ClubTableMessageMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubTableMessageMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubTableMessage";
        };
        ClubTableMessageMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        ClubTableMessageMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        ClubTableMessageMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        ClubTableMessageMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        ClubTableMessageMessage.prototype.getRounds = function () {
            return this._data.get("rounds");
        };
        ClubTableMessageMessage.prototype.setRounds = function (data) {
            this._data.set("rounds", data);
        };
        ClubTableMessageMessage.prototype.getCurRound = function () {
            return this._data.get("cur_round");
        };
        ClubTableMessageMessage.prototype.setCurRound = function (data) {
            this._data.set("cur_round", data);
        };
        ClubTableMessageMessage.prototype.getEndTime = function () {
            return this._data.get("end_time");
        };
        ClubTableMessageMessage.prototype.setEndTime = function (data) {
            this._data.set("end_time", data);
        };
        ClubTableMessageMessage.prototype.getPlayers = function () {
            var subData = this._data.get("players");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_1 = new PlayerMessageMessage();
                message_1.setData(subData[i]);
                messageArray.push(message_1);
            }
            return messageArray;
        };
        ClubTableMessageMessage.prototype.setPlayers = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("players", data[i].getData());
            }
        };
        ClubTableMessageMessage.prototype.addPlayers = function (data) {
            this._data.add("players", data.getData());
        };
        return ClubTableMessageMessage;
    }(MessageBase));
    lobby.ClubTableMessageMessage = ClubTableMessageMessage;
    __reflect(ClubTableMessageMessage.prototype, "lobby.ClubTableMessageMessage");
    var ClubLogMessageMessage = (function (_super) {
        __extends(ClubLogMessageMessage, _super);
        function ClubLogMessageMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubLogMessageMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubLogMessage";
        };
        ClubLogMessageMessage.prototype.getSrcNick = function () {
            return this._data.get("src_nick");
        };
        ClubLogMessageMessage.prototype.setSrcNick = function (data) {
            this._data.set("src_nick", data);
        };
        ClubLogMessageMessage.prototype.getSrcRole = function () {
            return this._data.get("src_role");
        };
        ClubLogMessageMessage.prototype.setSrcRole = function (data) {
            this._data.set("src_role", data);
        };
        ClubLogMessageMessage.prototype.getDestNick = function () {
            return this._data.get("dest_nick");
        };
        ClubLogMessageMessage.prototype.setDestNick = function (data) {
            this._data.set("dest_nick", data);
        };
        ClubLogMessageMessage.prototype.getDestIcon = function () {
            return this._data.get("dest_icon");
        };
        ClubLogMessageMessage.prototype.setDestIcon = function (data) {
            this._data.set("dest_icon", data);
        };
        ClubLogMessageMessage.prototype.getAction = function () {
            return this._data.get("action");
        };
        ClubLogMessageMessage.prototype.setAction = function (data) {
            this._data.set("action", data);
        };
        ClubLogMessageMessage.prototype.getCtime = function () {
            return this._data.get("ctime");
        };
        ClubLogMessageMessage.prototype.setCtime = function (data) {
            this._data.set("ctime", data);
        };
        return ClubLogMessageMessage;
    }(MessageBase));
    lobby.ClubLogMessageMessage = ClubLogMessageMessage;
    __reflect(ClubLogMessageMessage.prototype, "lobby.ClubLogMessageMessage");
    var ClubMemberMessageMessage = (function (_super) {
        __extends(ClubMemberMessageMessage, _super);
        function ClubMemberMessageMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubMemberMessageMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubMemberMessage";
        };
        ClubMemberMessageMessage.prototype.getUserId = function () {
            return this._data.get("user_id");
        };
        ClubMemberMessageMessage.prototype.setUserId = function (data) {
            this._data.set("user_id", data);
        };
        ClubMemberMessageMessage.prototype.getUserSid = function () {
            return this._data.get("user_sid");
        };
        ClubMemberMessageMessage.prototype.setUserSid = function (data) {
            this._data.set("user_sid", data);
        };
        ClubMemberMessageMessage.prototype.getNick = function () {
            return this._data.get("nick");
        };
        ClubMemberMessageMessage.prototype.setNick = function (data) {
            this._data.set("nick", data);
        };
        ClubMemberMessageMessage.prototype.getIcon = function () {
            return this._data.get("icon");
        };
        ClubMemberMessageMessage.prototype.setIcon = function (data) {
            this._data.set("icon", data);
        };
        ClubMemberMessageMessage.prototype.getRole = function () {
            return this._data.get("role");
        };
        ClubMemberMessageMessage.prototype.setRole = function (data) {
            this._data.set("role", data);
        };
        ClubMemberMessageMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        ClubMemberMessageMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        return ClubMemberMessageMessage;
    }(MessageBase));
    lobby.ClubMemberMessageMessage = ClubMemberMessageMessage;
    __reflect(ClubMemberMessageMessage.prototype, "lobby.ClubMemberMessageMessage");
    var GameConfigMessage = (function (_super) {
        __extends(GameConfigMessage, _super);
        function GameConfigMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GameConfigMessage.prototype.getMessageProtoName = function () {
            return "lobby.GameConfig";
        };
        GameConfigMessage.prototype.getGameid = function () {
            return this._data.get("gameid");
        };
        GameConfigMessage.prototype.setGameid = function (data) {
            this._data.set("gameid", data);
        };
        GameConfigMessage.prototype.getConfig = function () {
            return this._data.get("config");
        };
        GameConfigMessage.prototype.setConfig = function (data) {
            this._data.set("config", data);
        };
        return GameConfigMessage;
    }(MessageBase));
    lobby.GameConfigMessage = GameConfigMessage;
    __reflect(GameConfigMessage.prototype, "lobby.GameConfigMessage");
    var GameRuleMessage = (function (_super) {
        __extends(GameRuleMessage, _super);
        function GameRuleMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GameRuleMessage.prototype.getMessageProtoName = function () {
            return "lobby.GameRule";
        };
        GameRuleMessage.prototype.getGameid = function () {
            return this._data.get("gameid");
        };
        GameRuleMessage.prototype.setGameid = function (data) {
            this._data.set("gameid", data);
        };
        GameRuleMessage.prototype.getRule = function () {
            return this._data.get("rule");
        };
        GameRuleMessage.prototype.setRule = function (data) {
            this._data.set("rule", data);
        };
        return GameRuleMessage;
    }(MessageBase));
    lobby.GameRuleMessage = GameRuleMessage;
    __reflect(GameRuleMessage.prototype, "lobby.GameRuleMessage");
    var TableItemMessage = (function (_super) {
        __extends(TableItemMessage, _super);
        function TableItemMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        TableItemMessage.prototype.getMessageProtoName = function () {
            return "lobby.TableItem";
        };
        TableItemMessage.prototype.getTableUuid = function () {
            return this._data.get("table_uuid");
        };
        TableItemMessage.prototype.setTableUuid = function (data) {
            this._data.set("table_uuid", data);
        };
        TableItemMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        TableItemMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        TableItemMessage.prototype.getType = function () {
            return this._data.get("type");
        };
        TableItemMessage.prototype.setType = function (data) {
            this._data.set("type", data);
        };
        TableItemMessage.prototype.getParentId = function () {
            return this._data.get("parent_id");
        };
        TableItemMessage.prototype.setParentId = function (data) {
            this._data.set("parent_id", data);
        };
        TableItemMessage.prototype.getGameid = function () {
            return this._data.get("gameid");
        };
        TableItemMessage.prototype.setGameid = function (data) {
            this._data.set("gameid", data);
        };
        TableItemMessage.prototype.getTableCfg = function () {
            return this._data.get("table_cfg");
        };
        TableItemMessage.prototype.setTableCfg = function (data) {
            this._data.set("table_cfg", data);
        };
        TableItemMessage.prototype.getOwnerUuid = function () {
            return this._data.get("owner_uuid");
        };
        TableItemMessage.prototype.setOwnerUuid = function (data) {
            this._data.set("owner_uuid", data);
        };
        TableItemMessage.prototype.getDismissUuid = function () {
            return this._data.get("dismiss_uuid");
        };
        TableItemMessage.prototype.setDismissUuid = function (data) {
            this._data.set("dismiss_uuid", data);
        };
        TableItemMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        TableItemMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        TableItemMessage.prototype.getSettleInfo = function () {
            return this._data.get("settle_info");
        };
        TableItemMessage.prototype.setSettleInfo = function (data) {
            this._data.set("settle_info", data);
        };
        TableItemMessage.prototype.getCreateTime = function () {
            return this._data.get("create_time");
        };
        TableItemMessage.prototype.setCreateTime = function (data) {
            this._data.set("create_time", data);
        };
        return TableItemMessage;
    }(MessageBase));
    lobby.TableItemMessage = TableItemMessage;
    __reflect(TableItemMessage.prototype, "lobby.TableItemMessage");
    var PlayerMessageMessage = (function (_super) {
        __extends(PlayerMessageMessage, _super);
        function PlayerMessageMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        PlayerMessageMessage.prototype.getMessageProtoName = function () {
            return "lobby.PlayerMessage";
        };
        PlayerMessageMessage.prototype.getSid = function () {
            return this._data.get("sid");
        };
        PlayerMessageMessage.prototype.setSid = function (data) {
            this._data.set("sid", data);
        };
        PlayerMessageMessage.prototype.getNick = function () {
            return this._data.get("nick");
        };
        PlayerMessageMessage.prototype.setNick = function (data) {
            this._data.set("nick", data);
        };
        PlayerMessageMessage.prototype.getIcon = function () {
            return this._data.get("icon");
        };
        PlayerMessageMessage.prototype.setIcon = function (data) {
            this._data.set("icon", data);
        };
        PlayerMessageMessage.prototype.getScore = function () {
            return this._data.get("score");
        };
        PlayerMessageMessage.prototype.setScore = function (data) {
            this._data.set("score", data);
        };
        return PlayerMessageMessage;
    }(MessageBase));
    lobby.PlayerMessageMessage = PlayerMessageMessage;
    __reflect(PlayerMessageMessage.prototype, "lobby.PlayerMessageMessage");
    var AuditsRequestMessage = (function (_super) {
        __extends(AuditsRequestMessage, _super);
        function AuditsRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        AuditsRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.AuditsRequest";
        };
        AuditsRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        AuditsRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        AuditsRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        AuditsRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        AuditsRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        AuditsRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        return AuditsRequestMessage;
    }(MessageBase));
    lobby.AuditsRequestMessage = AuditsRequestMessage;
    __reflect(AuditsRequestMessage.prototype, "lobby.AuditsRequestMessage");
    var AuditsResponseMessage = (function (_super) {
        __extends(AuditsResponseMessage, _super);
        function AuditsResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        AuditsResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.AuditsResponse";
        };
        AuditsResponseMessage.prototype.getPages = function () {
            return this._data.get("pages");
        };
        AuditsResponseMessage.prototype.setPages = function (data) {
            this._data.set("pages", data);
        };
        AuditsResponseMessage.prototype.getAudits = function () {
            var subData = this._data.get("audits");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_2 = new ClubMemberMessageMessage();
                message_2.setData(subData[i]);
                messageArray.push(message_2);
            }
            return messageArray;
        };
        AuditsResponseMessage.prototype.setAudits = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("audits", data[i].getData());
            }
        };
        AuditsResponseMessage.prototype.addAudits = function (data) {
            this._data.add("audits", data.getData());
        };
        return AuditsResponseMessage;
    }(MessageBase));
    lobby.AuditsResponseMessage = AuditsResponseMessage;
    __reflect(AuditsResponseMessage.prototype, "lobby.AuditsResponseMessage");
    var AuditUserRequestMessage = (function (_super) {
        __extends(AuditUserRequestMessage, _super);
        function AuditUserRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        AuditUserRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.AuditUserRequest";
        };
        AuditUserRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        AuditUserRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        AuditUserRequestMessage.prototype.getUserIds = function () {
            return this._data.get("user_ids");
        };
        AuditUserRequestMessage.prototype.setUserIds = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("user_ids", data[i]);
            }
        };
        AuditUserRequestMessage.prototype.addUserIds = function (data) {
            this._data.add("user_ids", data);
        };
        AuditUserRequestMessage.prototype.getIsAudit = function () {
            return this._data.get("is_audit");
        };
        AuditUserRequestMessage.prototype.setIsAudit = function (data) {
            this._data.set("is_audit", data);
        };
        return AuditUserRequestMessage;
    }(MessageBase));
    lobby.AuditUserRequestMessage = AuditUserRequestMessage;
    __reflect(AuditUserRequestMessage.prototype, "lobby.AuditUserRequestMessage");
    var AuditUserResponseMessage = (function (_super) {
        __extends(AuditUserResponseMessage, _super);
        function AuditUserResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        AuditUserResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.AuditUserResponse";
        };
        AuditUserResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        AuditUserResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return AuditUserResponseMessage;
    }(MessageBase));
    lobby.AuditUserResponseMessage = AuditUserResponseMessage;
    __reflect(AuditUserResponseMessage.prototype, "lobby.AuditUserResponseMessage");
    var BattleReplayRequestMessage = (function (_super) {
        __extends(BattleReplayRequestMessage, _super);
        function BattleReplayRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        BattleReplayRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.BattleReplayRequest";
        };
        return BattleReplayRequestMessage;
    }(MessageBase));
    lobby.BattleReplayRequestMessage = BattleReplayRequestMessage;
    __reflect(BattleReplayRequestMessage.prototype, "lobby.BattleReplayRequestMessage");
    var BattleReplayResponseMessage = (function (_super) {
        __extends(BattleReplayResponseMessage, _super);
        function BattleReplayResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        BattleReplayResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.BattleReplayResponse";
        };
        return BattleReplayResponseMessage;
    }(MessageBase));
    lobby.BattleReplayResponseMessage = BattleReplayResponseMessage;
    __reflect(BattleReplayResponseMessage.prototype, "lobby.BattleReplayResponseMessage");
    var CheckVerificationCodeRequestMessage = (function (_super) {
        __extends(CheckVerificationCodeRequestMessage, _super);
        function CheckVerificationCodeRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CheckVerificationCodeRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.CheckVerificationCodeRequest";
        };
        CheckVerificationCodeRequestMessage.prototype.getMobile = function () {
            return this._data.get("mobile");
        };
        CheckVerificationCodeRequestMessage.prototype.setMobile = function (data) {
            this._data.set("mobile", data);
        };
        CheckVerificationCodeRequestMessage.prototype.getVerCode = function () {
            return this._data.get("ver_code");
        };
        CheckVerificationCodeRequestMessage.prototype.setVerCode = function (data) {
            this._data.set("ver_code", data);
        };
        return CheckVerificationCodeRequestMessage;
    }(MessageBase));
    lobby.CheckVerificationCodeRequestMessage = CheckVerificationCodeRequestMessage;
    __reflect(CheckVerificationCodeRequestMessage.prototype, "lobby.CheckVerificationCodeRequestMessage");
    var CheckVerificationCodeResponseMessage = (function (_super) {
        __extends(CheckVerificationCodeResponseMessage, _super);
        function CheckVerificationCodeResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CheckVerificationCodeResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.CheckVerificationCodeResponse";
        };
        CheckVerificationCodeResponseMessage.prototype.getCheckStatus = function () {
            return this._data.get("check_status");
        };
        CheckVerificationCodeResponseMessage.prototype.setCheckStatus = function (data) {
            this._data.set("check_status", data);
        };
        return CheckVerificationCodeResponseMessage;
    }(MessageBase));
    lobby.CheckVerificationCodeResponseMessage = CheckVerificationCodeResponseMessage;
    __reflect(CheckVerificationCodeResponseMessage.prototype, "lobby.CheckVerificationCodeResponseMessage");
    var CheckVersionRequestMessage = (function (_super) {
        __extends(CheckVersionRequestMessage, _super);
        function CheckVersionRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CheckVersionRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.CheckVersionRequest";
        };
        CheckVersionRequestMessage.prototype.getVersion = function () {
            return this._data.get("version");
        };
        CheckVersionRequestMessage.prototype.setVersion = function (data) {
            this._data.set("version", data);
        };
        CheckVersionRequestMessage.prototype.getPlatform = function () {
            return this._data.get("platform");
        };
        CheckVersionRequestMessage.prototype.setPlatform = function (data) {
            this._data.set("platform", data);
        };
        return CheckVersionRequestMessage;
    }(MessageBase));
    lobby.CheckVersionRequestMessage = CheckVersionRequestMessage;
    __reflect(CheckVersionRequestMessage.prototype, "lobby.CheckVersionRequestMessage");
    var CheckVersionResponseMessage = (function (_super) {
        __extends(CheckVersionResponseMessage, _super);
        function CheckVersionResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CheckVersionResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.CheckVersionResponse";
        };
        CheckVersionResponseMessage.prototype.getUpdate = function () {
            return this._data.get("update");
        };
        CheckVersionResponseMessage.prototype.setUpdate = function (data) {
            this._data.set("update", data);
        };
        CheckVersionResponseMessage.prototype.getUpdateVer = function () {
            return this._data.get("update_ver");
        };
        CheckVersionResponseMessage.prototype.setUpdateVer = function (data) {
            this._data.set("update_ver", data);
        };
        CheckVersionResponseMessage.prototype.getUpdateUrl = function () {
            return this._data.get("update_url");
        };
        CheckVersionResponseMessage.prototype.setUpdateUrl = function (data) {
            this._data.set("update_url", data);
        };
        return CheckVersionResponseMessage;
    }(MessageBase));
    lobby.CheckVersionResponseMessage = CheckVersionResponseMessage;
    __reflect(CheckVersionResponseMessage.prototype, "lobby.CheckVersionResponseMessage");
    var ClubLogRequestMessage = (function (_super) {
        __extends(ClubLogRequestMessage, _super);
        function ClubLogRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubLogRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubLogRequest";
        };
        ClubLogRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ClubLogRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        ClubLogRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        ClubLogRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        ClubLogRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        ClubLogRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        return ClubLogRequestMessage;
    }(MessageBase));
    lobby.ClubLogRequestMessage = ClubLogRequestMessage;
    __reflect(ClubLogRequestMessage.prototype, "lobby.ClubLogRequestMessage");
    var ClubLogResponseMessage = (function (_super) {
        __extends(ClubLogResponseMessage, _super);
        function ClubLogResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubLogResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubLogResponse";
        };
        ClubLogResponseMessage.prototype.getPages = function () {
            return this._data.get("pages");
        };
        ClubLogResponseMessage.prototype.setPages = function (data) {
            this._data.set("pages", data);
        };
        ClubLogResponseMessage.prototype.getLogs = function () {
            var subData = this._data.get("logs");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_3 = new ClubLogMessageMessage();
                message_3.setData(subData[i]);
                messageArray.push(message_3);
            }
            return messageArray;
        };
        ClubLogResponseMessage.prototype.setLogs = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("logs", data[i].getData());
            }
        };
        ClubLogResponseMessage.prototype.addLogs = function (data) {
            this._data.add("logs", data.getData());
        };
        return ClubLogResponseMessage;
    }(MessageBase));
    lobby.ClubLogResponseMessage = ClubLogResponseMessage;
    __reflect(ClubLogResponseMessage.prototype, "lobby.ClubLogResponseMessage");
    var ClubMemberRequestMessage = (function (_super) {
        __extends(ClubMemberRequestMessage, _super);
        function ClubMemberRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubMemberRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubMemberRequest";
        };
        ClubMemberRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ClubMemberRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        ClubMemberRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        ClubMemberRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        ClubMemberRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        ClubMemberRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        return ClubMemberRequestMessage;
    }(MessageBase));
    lobby.ClubMemberRequestMessage = ClubMemberRequestMessage;
    __reflect(ClubMemberRequestMessage.prototype, "lobby.ClubMemberRequestMessage");
    var ClubMemberResponseMessage = (function (_super) {
        __extends(ClubMemberResponseMessage, _super);
        function ClubMemberResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubMemberResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubMemberResponse";
        };
        ClubMemberResponseMessage.prototype.getPages = function () {
            return this._data.get("pages");
        };
        ClubMemberResponseMessage.prototype.setPages = function (data) {
            this._data.set("pages", data);
        };
        ClubMemberResponseMessage.prototype.getAudits = function () {
            var subData = this._data.get("audits");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_4 = new ClubMemberMessageMessage();
                message_4.setData(subData[i]);
                messageArray.push(message_4);
            }
            return messageArray;
        };
        ClubMemberResponseMessage.prototype.setAudits = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("audits", data[i].getData());
            }
        };
        ClubMemberResponseMessage.prototype.addAudits = function (data) {
            this._data.add("audits", data.getData());
        };
        return ClubMemberResponseMessage;
    }(MessageBase));
    lobby.ClubMemberResponseMessage = ClubMemberResponseMessage;
    __reflect(ClubMemberResponseMessage.prototype, "lobby.ClubMemberResponseMessage");
    var ClubPlaingTablesRequestMessage = (function (_super) {
        __extends(ClubPlaingTablesRequestMessage, _super);
        function ClubPlaingTablesRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubPlaingTablesRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubPlaingTablesRequest";
        };
        ClubPlaingTablesRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ClubPlaingTablesRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        ClubPlaingTablesRequestMessage.prototype.getType = function () {
            return this._data.get("type");
        };
        ClubPlaingTablesRequestMessage.prototype.setType = function (data) {
            this._data.set("type", data);
        };
        ClubPlaingTablesRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        ClubPlaingTablesRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        ClubPlaingTablesRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        ClubPlaingTablesRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        return ClubPlaingTablesRequestMessage;
    }(MessageBase));
    lobby.ClubPlaingTablesRequestMessage = ClubPlaingTablesRequestMessage;
    __reflect(ClubPlaingTablesRequestMessage.prototype, "lobby.ClubPlaingTablesRequestMessage");
    var ClubPlaingTablesResponseMessage = (function (_super) {
        __extends(ClubPlaingTablesResponseMessage, _super);
        function ClubPlaingTablesResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubPlaingTablesResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubPlaingTablesResponse";
        };
        ClubPlaingTablesResponseMessage.prototype.getTables = function () {
            var subData = this._data.get("tables");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_5 = new ClubTableMessageMessage();
                message_5.setData(subData[i]);
                messageArray.push(message_5);
            }
            return messageArray;
        };
        ClubPlaingTablesResponseMessage.prototype.setTables = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("tables", data[i].getData());
            }
        };
        ClubPlaingTablesResponseMessage.prototype.addTables = function (data) {
            this._data.add("tables", data.getData());
        };
        return ClubPlaingTablesResponseMessage;
    }(MessageBase));
    lobby.ClubPlaingTablesResponseMessage = ClubPlaingTablesResponseMessage;
    __reflect(ClubPlaingTablesResponseMessage.prototype, "lobby.ClubPlaingTablesResponseMessage");
    var ClubRankRequestMessage = (function (_super) {
        __extends(ClubRankRequestMessage, _super);
        function ClubRankRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubRankRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubRankRequest";
        };
        ClubRankRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ClubRankRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        ClubRankRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        ClubRankRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        ClubRankRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        ClubRankRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        ClubRankRequestMessage.prototype.getRankType = function () {
            return this._data.get("rank_type");
        };
        ClubRankRequestMessage.prototype.setRankType = function (data) {
            this._data.set("rank_type", data);
        };
        ClubRankRequestMessage.prototype.getRankSubType = function () {
            return this._data.get("rank_sub_type");
        };
        ClubRankRequestMessage.prototype.setRankSubType = function (data) {
            this._data.set("rank_sub_type", data);
        };
        return ClubRankRequestMessage;
    }(MessageBase));
    lobby.ClubRankRequestMessage = ClubRankRequestMessage;
    __reflect(ClubRankRequestMessage.prototype, "lobby.ClubRankRequestMessage");
    var ClubRankResponseMessage = (function (_super) {
        __extends(ClubRankResponseMessage, _super);
        function ClubRankResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubRankResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubRankResponse";
        };
        ClubRankResponseMessage.prototype.getPlayer = function () {
            var subData = this._data.get("player");
            var message = new PlayerMessageMessage();
            message.setData(subData);
            return message;
        };
        ClubRankResponseMessage.prototype.setPlayer = function (data) {
            this._data.set("player", data.getData());
        };
        ClubRankResponseMessage.prototype.getGainers = function () {
            return this._data.get("gainers");
        };
        ClubRankResponseMessage.prototype.setGainers = function (data) {
            this._data.set("gainers", data);
        };
        ClubRankResponseMessage.prototype.getRounds = function () {
            return this._data.get("rounds");
        };
        ClubRankResponseMessage.prototype.setRounds = function (data) {
            this._data.set("rounds", data);
        };
        ClubRankResponseMessage.prototype.getScores = function () {
            return this._data.get("scores");
        };
        ClubRankResponseMessage.prototype.setScores = function (data) {
            this._data.set("scores", data);
        };
        return ClubRankResponseMessage;
    }(MessageBase));
    lobby.ClubRankResponseMessage = ClubRankResponseMessage;
    __reflect(ClubRankResponseMessage.prototype, "lobby.ClubRankResponseMessage");
    var ClubsRequestMessage = (function (_super) {
        __extends(ClubsRequestMessage, _super);
        function ClubsRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubsRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubsRequest";
        };
        ClubsRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        ClubsRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        ClubsRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        ClubsRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        return ClubsRequestMessage;
    }(MessageBase));
    lobby.ClubsRequestMessage = ClubsRequestMessage;
    __reflect(ClubsRequestMessage.prototype, "lobby.ClubsRequestMessage");
    var ClubsResponseMessage = (function (_super) {
        __extends(ClubsResponseMessage, _super);
        function ClubsResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubsResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubsResponse";
        };
        ClubsResponseMessage.prototype.getClubs = function () {
            var subData = this._data.get("clubs");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_6 = new ClubMessageMessage();
                message_6.setData(subData[i]);
                messageArray.push(message_6);
            }
            return messageArray;
        };
        ClubsResponseMessage.prototype.setClubs = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("clubs", data[i].getData());
            }
        };
        ClubsResponseMessage.prototype.addClubs = function (data) {
            this._data.add("clubs", data.getData());
        };
        return ClubsResponseMessage;
    }(MessageBase));
    lobby.ClubsResponseMessage = ClubsResponseMessage;
    __reflect(ClubsResponseMessage.prototype, "lobby.ClubsResponseMessage");
    var ClubTablesRequestMessage = (function (_super) {
        __extends(ClubTablesRequestMessage, _super);
        function ClubTablesRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubTablesRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubTablesRequest";
        };
        ClubTablesRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ClubTablesRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        ClubTablesRequestMessage.prototype.getType = function () {
            return this._data.get("type");
        };
        ClubTablesRequestMessage.prototype.setType = function (data) {
            this._data.set("type", data);
        };
        ClubTablesRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        ClubTablesRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        ClubTablesRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        ClubTablesRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        return ClubTablesRequestMessage;
    }(MessageBase));
    lobby.ClubTablesRequestMessage = ClubTablesRequestMessage;
    __reflect(ClubTablesRequestMessage.prototype, "lobby.ClubTablesRequestMessage");
    var ClubTablesResponseMessage = (function (_super) {
        __extends(ClubTablesResponseMessage, _super);
        function ClubTablesResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ClubTablesResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ClubTablesResponse";
        };
        ClubTablesResponseMessage.prototype.getTables = function () {
            var subData = this._data.get("tables");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_7 = new ClubTableMessageMessage();
                message_7.setData(subData[i]);
                messageArray.push(message_7);
            }
            return messageArray;
        };
        ClubTablesResponseMessage.prototype.setTables = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("tables", data[i].getData());
            }
        };
        ClubTablesResponseMessage.prototype.addTables = function (data) {
            this._data.add("tables", data.getData());
        };
        return ClubTablesResponseMessage;
    }(MessageBase));
    lobby.ClubTablesResponseMessage = ClubTablesResponseMessage;
    __reflect(ClubTablesResponseMessage.prototype, "lobby.ClubTablesResponseMessage");
    var CreateClubRequestMessage = (function (_super) {
        __extends(CreateClubRequestMessage, _super);
        function CreateClubRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CreateClubRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.CreateClubRequest";
        };
        CreateClubRequestMessage.prototype.getName = function () {
            return this._data.get("name");
        };
        CreateClubRequestMessage.prototype.setName = function (data) {
            this._data.set("name", data);
        };
        CreateClubRequestMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        CreateClubRequestMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        CreateClubRequestMessage.prototype.getTableCfg = function () {
            return this._data.get("table_cfg");
        };
        CreateClubRequestMessage.prototype.setTableCfg = function (data) {
            this._data.set("table_cfg", data);
        };
        return CreateClubRequestMessage;
    }(MessageBase));
    lobby.CreateClubRequestMessage = CreateClubRequestMessage;
    __reflect(CreateClubRequestMessage.prototype, "lobby.CreateClubRequestMessage");
    var CreateClubResponseMessage = (function (_super) {
        __extends(CreateClubResponseMessage, _super);
        function CreateClubResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CreateClubResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.CreateClubResponse";
        };
        CreateClubResponseMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        CreateClubResponseMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        return CreateClubResponseMessage;
    }(MessageBase));
    lobby.CreateClubResponseMessage = CreateClubResponseMessage;
    __reflect(CreateClubResponseMessage.prototype, "lobby.CreateClubResponseMessage");
    var CreateTableRequestMessage = (function (_super) {
        __extends(CreateTableRequestMessage, _super);
        function CreateTableRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CreateTableRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.CreateTableRequest";
        };
        CreateTableRequestMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        CreateTableRequestMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        CreateTableRequestMessage.prototype.getTableCfg = function () {
            return this._data.get("table_cfg");
        };
        CreateTableRequestMessage.prototype.setTableCfg = function (data) {
            this._data.set("table_cfg", data);
        };
        CreateTableRequestMessage.prototype.getOwnerInfo = function () {
            return this._data.get("owner_info");
        };
        CreateTableRequestMessage.prototype.setOwnerInfo = function (data) {
            this._data.set("owner_info", data);
        };
        return CreateTableRequestMessage;
    }(MessageBase));
    lobby.CreateTableRequestMessage = CreateTableRequestMessage;
    __reflect(CreateTableRequestMessage.prototype, "lobby.CreateTableRequestMessage");
    var CreateTableResponseMessage = (function (_super) {
        __extends(CreateTableResponseMessage, _super);
        function CreateTableResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        CreateTableResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.CreateTableResponse";
        };
        CreateTableResponseMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        CreateTableResponseMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        CreateTableResponseMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        CreateTableResponseMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        return CreateTableResponseMessage;
    }(MessageBase));
    lobby.CreateTableResponseMessage = CreateTableResponseMessage;
    __reflect(CreateTableResponseMessage.prototype, "lobby.CreateTableResponseMessage");
    var DismissClubTableRequestMessage = (function (_super) {
        __extends(DismissClubTableRequestMessage, _super);
        function DismissClubTableRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        DismissClubTableRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.DismissClubTableRequest";
        };
        DismissClubTableRequestMessage.prototype.getTableIds = function () {
            return this._data.get("table_ids");
        };
        DismissClubTableRequestMessage.prototype.setTableIds = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("table_ids", data[i]);
            }
        };
        DismissClubTableRequestMessage.prototype.addTableIds = function (data) {
            this._data.add("table_ids", data);
        };
        return DismissClubTableRequestMessage;
    }(MessageBase));
    lobby.DismissClubTableRequestMessage = DismissClubTableRequestMessage;
    __reflect(DismissClubTableRequestMessage.prototype, "lobby.DismissClubTableRequestMessage");
    var DismissClubTableResponseMessage = (function (_super) {
        __extends(DismissClubTableResponseMessage, _super);
        function DismissClubTableResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        DismissClubTableResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.DismissClubTableResponse";
        };
        DismissClubTableResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        DismissClubTableResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return DismissClubTableResponseMessage;
    }(MessageBase));
    lobby.DismissClubTableResponseMessage = DismissClubTableResponseMessage;
    __reflect(DismissClubTableResponseMessage.prototype, "lobby.DismissClubTableResponseMessage");
    var DismissClubRequestMessage = (function (_super) {
        __extends(DismissClubRequestMessage, _super);
        function DismissClubRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        DismissClubRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.DismissClubRequest";
        };
        DismissClubRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        DismissClubRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        return DismissClubRequestMessage;
    }(MessageBase));
    lobby.DismissClubRequestMessage = DismissClubRequestMessage;
    __reflect(DismissClubRequestMessage.prototype, "lobby.DismissClubRequestMessage");
    var DismissClubResponseMessage = (function (_super) {
        __extends(DismissClubResponseMessage, _super);
        function DismissClubResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        DismissClubResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.DismissClubResponse";
        };
        DismissClubResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        DismissClubResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return DismissClubResponseMessage;
    }(MessageBase));
    lobby.DismissClubResponseMessage = DismissClubResponseMessage;
    __reflect(DismissClubResponseMessage.prototype, "lobby.DismissClubResponseMessage");
    var EnterTableRequestMessage = (function (_super) {
        __extends(EnterTableRequestMessage, _super);
        function EnterTableRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        EnterTableRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.EnterTableRequest";
        };
        EnterTableRequestMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        EnterTableRequestMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        return EnterTableRequestMessage;
    }(MessageBase));
    lobby.EnterTableRequestMessage = EnterTableRequestMessage;
    __reflect(EnterTableRequestMessage.prototype, "lobby.EnterTableRequestMessage");
    var EnterTableResponseMessage = (function (_super) {
        __extends(EnterTableResponseMessage, _super);
        function EnterTableResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        EnterTableResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.EnterTableResponse";
        };
        EnterTableResponseMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        EnterTableResponseMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        EnterTableResponseMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        EnterTableResponseMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        return EnterTableResponseMessage;
    }(MessageBase));
    lobby.EnterTableResponseMessage = EnterTableResponseMessage;
    __reflect(EnterTableResponseMessage.prototype, "lobby.EnterTableResponseMessage");
    var ErrorCodeResponseMessage = (function (_super) {
        __extends(ErrorCodeResponseMessage, _super);
        function ErrorCodeResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ErrorCodeResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ErrorCodeResponse";
        };
        ErrorCodeResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        ErrorCodeResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        ErrorCodeResponseMessage.prototype.getMsg = function () {
            return this._data.get("msg");
        };
        ErrorCodeResponseMessage.prototype.setMsg = function (data) {
            this._data.set("msg", data);
        };
        return ErrorCodeResponseMessage;
    }(MessageBase));
    lobby.ErrorCodeResponseMessage = ErrorCodeResponseMessage;
    __reflect(ErrorCodeResponseMessage.prototype, "lobby.ErrorCodeResponseMessage");
    var ExitClubRequestMessage = (function (_super) {
        __extends(ExitClubRequestMessage, _super);
        function ExitClubRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ExitClubRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.ExitClubRequest";
        };
        ExitClubRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        ExitClubRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        return ExitClubRequestMessage;
    }(MessageBase));
    lobby.ExitClubRequestMessage = ExitClubRequestMessage;
    __reflect(ExitClubRequestMessage.prototype, "lobby.ExitClubRequestMessage");
    var ExitClubResponseMessage = (function (_super) {
        __extends(ExitClubResponseMessage, _super);
        function ExitClubResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        ExitClubResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.ExitClubResponse";
        };
        ExitClubResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        ExitClubResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return ExitClubResponseMessage;
    }(MessageBase));
    lobby.ExitClubResponseMessage = ExitClubResponseMessage;
    __reflect(ExitClubResponseMessage.prototype, "lobby.ExitClubResponseMessage");
    var GetGameConfigRequestMessage = (function (_super) {
        __extends(GetGameConfigRequestMessage, _super);
        function GetGameConfigRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GetGameConfigRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.GetGameConfigRequest";
        };
        GetGameConfigRequestMessage.prototype.getCity = function () {
            return this._data.get("city");
        };
        GetGameConfigRequestMessage.prototype.setCity = function (data) {
            this._data.set("city", data);
        };
        return GetGameConfigRequestMessage;
    }(MessageBase));
    lobby.GetGameConfigRequestMessage = GetGameConfigRequestMessage;
    __reflect(GetGameConfigRequestMessage.prototype, "lobby.GetGameConfigRequestMessage");
    var GetGameConfigResponseMessage = (function (_super) {
        __extends(GetGameConfigResponseMessage, _super);
        function GetGameConfigResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GetGameConfigResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.GetGameConfigResponse";
        };
        GetGameConfigResponseMessage.prototype.getConfigs = function () {
            var subData = this._data.get("configs");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_8 = new GameConfigMessage();
                message_8.setData(subData[i]);
                messageArray.push(message_8);
            }
            return messageArray;
        };
        GetGameConfigResponseMessage.prototype.setConfigs = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("configs", data[i].getData());
            }
        };
        GetGameConfigResponseMessage.prototype.addConfigs = function (data) {
            this._data.add("configs", data.getData());
        };
        return GetGameConfigResponseMessage;
    }(MessageBase));
    lobby.GetGameConfigResponseMessage = GetGameConfigResponseMessage;
    __reflect(GetGameConfigResponseMessage.prototype, "lobby.GetGameConfigResponseMessage");
    var GetGameRuleRequestMessage = (function (_super) {
        __extends(GetGameRuleRequestMessage, _super);
        function GetGameRuleRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GetGameRuleRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.GetGameRuleRequest";
        };
        GetGameRuleRequestMessage.prototype.getCity = function () {
            return this._data.get("city");
        };
        GetGameRuleRequestMessage.prototype.setCity = function (data) {
            this._data.set("city", data);
        };
        return GetGameRuleRequestMessage;
    }(MessageBase));
    lobby.GetGameRuleRequestMessage = GetGameRuleRequestMessage;
    __reflect(GetGameRuleRequestMessage.prototype, "lobby.GetGameRuleRequestMessage");
    var GetGameRuleResponseMessage = (function (_super) {
        __extends(GetGameRuleResponseMessage, _super);
        function GetGameRuleResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GetGameRuleResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.GetGameRuleResponse";
        };
        GetGameRuleResponseMessage.prototype.getRules = function () {
            var subData = this._data.get("rules");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_9 = new GameRuleMessage();
                message_9.setData(subData[i]);
                messageArray.push(message_9);
            }
            return messageArray;
        };
        GetGameRuleResponseMessage.prototype.setRules = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("rules", data[i].getData());
            }
        };
        GetGameRuleResponseMessage.prototype.addRules = function (data) {
            this._data.add("rules", data.getData());
        };
        return GetGameRuleResponseMessage;
    }(MessageBase));
    lobby.GetGameRuleResponseMessage = GetGameRuleResponseMessage;
    __reflect(GetGameRuleResponseMessage.prototype, "lobby.GetGameRuleResponseMessage");
    var GetStoreRequestMessage = (function (_super) {
        __extends(GetStoreRequestMessage, _super);
        function GetStoreRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GetStoreRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.GetStoreRequest";
        };
        return GetStoreRequestMessage;
    }(MessageBase));
    lobby.GetStoreRequestMessage = GetStoreRequestMessage;
    __reflect(GetStoreRequestMessage.prototype, "lobby.GetStoreRequestMessage");
    var GetStoreResponseMessage = (function (_super) {
        __extends(GetStoreResponseMessage, _super);
        function GetStoreResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        GetStoreResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.GetStoreResponse";
        };
        GetStoreResponseMessage.prototype.getItems = function () {
            var subData = this._data.get("items");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_10 = new ShopItemMessage();
                message_10.setData(subData[i]);
                messageArray.push(message_10);
            }
            return messageArray;
        };
        GetStoreResponseMessage.prototype.setItems = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("items", data[i].getData());
            }
        };
        GetStoreResponseMessage.prototype.addItems = function (data) {
            this._data.add("items", data.getData());
        };
        return GetStoreResponseMessage;
    }(MessageBase));
    lobby.GetStoreResponseMessage = GetStoreResponseMessage;
    __reflect(GetStoreResponseMessage.prototype, "lobby.GetStoreResponseMessage");
    var JoinClubRequestMessage = (function (_super) {
        __extends(JoinClubRequestMessage, _super);
        function JoinClubRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        JoinClubRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.JoinClubRequest";
        };
        JoinClubRequestMessage.prototype.getUserId = function () {
            return this._data.get("user_id");
        };
        JoinClubRequestMessage.prototype.setUserId = function (data) {
            this._data.set("user_id", data);
        };
        JoinClubRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        JoinClubRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        return JoinClubRequestMessage;
    }(MessageBase));
    lobby.JoinClubRequestMessage = JoinClubRequestMessage;
    __reflect(JoinClubRequestMessage.prototype, "lobby.JoinClubRequestMessage");
    var JoinClubResponseMessage = (function (_super) {
        __extends(JoinClubResponseMessage, _super);
        function JoinClubResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        JoinClubResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.JoinClubResponse";
        };
        JoinClubResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        JoinClubResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return JoinClubResponseMessage;
    }(MessageBase));
    lobby.JoinClubResponseMessage = JoinClubResponseMessage;
    __reflect(JoinClubResponseMessage.prototype, "lobby.JoinClubResponseMessage");
    var LoginRequestMessage = (function (_super) {
        __extends(LoginRequestMessage, _super);
        function LoginRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        LoginRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.LoginRequest";
        };
        LoginRequestMessage.prototype.getAppid = function () {
            return this._data.get("appid");
        };
        LoginRequestMessage.prototype.setAppid = function (data) {
            this._data.set("appid", data);
        };
        LoginRequestMessage.prototype.getChannel = function () {
            return this._data.get("channel");
        };
        LoginRequestMessage.prototype.setChannel = function (data) {
            this._data.set("channel", data);
        };
        LoginRequestMessage.prototype.getPlatform = function () {
            return this._data.get("platform");
        };
        LoginRequestMessage.prototype.setPlatform = function (data) {
            this._data.set("platform", data);
        };
        LoginRequestMessage.prototype.getTimestamp = function () {
            return this._data.get("timestamp");
        };
        LoginRequestMessage.prototype.setTimestamp = function (data) {
            this._data.set("timestamp", data);
        };
        LoginRequestMessage.prototype.getToken = function () {
            return this._data.get("token");
        };
        LoginRequestMessage.prototype.setToken = function (data) {
            this._data.set("token", data);
        };
        LoginRequestMessage.prototype.getOpenid = function () {
            return this._data.get("openid");
        };
        LoginRequestMessage.prototype.setOpenid = function (data) {
            this._data.set("openid", data);
        };
        LoginRequestMessage.prototype.getVersion = function () {
            return this._data.get("version");
        };
        LoginRequestMessage.prototype.setVersion = function (data) {
            this._data.set("version", data);
        };
        LoginRequestMessage.prototype.getDeviceid = function () {
            return this._data.get("deviceid");
        };
        LoginRequestMessage.prototype.setDeviceid = function (data) {
            this._data.set("deviceid", data);
        };
        LoginRequestMessage.prototype.getLocation = function () {
            return this._data.get("location");
        };
        LoginRequestMessage.prototype.setLocation = function (data) {
            this._data.set("location", data);
        };
        LoginRequestMessage.prototype.getReconnect = function () {
            return this._data.get("reconnect");
        };
        LoginRequestMessage.prototype.setReconnect = function (data) {
            this._data.set("reconnect", data);
        };
        return LoginRequestMessage;
    }(MessageBase));
    lobby.LoginRequestMessage = LoginRequestMessage;
    __reflect(LoginRequestMessage.prototype, "lobby.LoginRequestMessage");
    var LoginResponseMessage = (function (_super) {
        __extends(LoginResponseMessage, _super);
        function LoginResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        LoginResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.LoginResponse";
        };
        LoginResponseMessage.prototype.getUuid = function () {
            return this._data.get("uuid");
        };
        LoginResponseMessage.prototype.setUuid = function (data) {
            this._data.set("uuid", data);
        };
        LoginResponseMessage.prototype.getPid = function () {
            return this._data.get("pid");
        };
        LoginResponseMessage.prototype.setPid = function (data) {
            this._data.set("pid", data);
        };
        LoginResponseMessage.prototype.getSid = function () {
            return this._data.get("sid");
        };
        LoginResponseMessage.prototype.setSid = function (data) {
            this._data.set("sid", data);
        };
        LoginResponseMessage.prototype.getSex = function () {
            return this._data.get("sex");
        };
        LoginResponseMessage.prototype.setSex = function (data) {
            this._data.set("sex", data);
        };
        LoginResponseMessage.prototype.getGold = function () {
            return this._data.get("gold");
        };
        LoginResponseMessage.prototype.setGold = function (data) {
            this._data.set("gold", data);
        };
        LoginResponseMessage.prototype.getDiamond = function () {
            return this._data.get("diamond");
        };
        LoginResponseMessage.prototype.setDiamond = function (data) {
            this._data.set("diamond", data);
        };
        LoginResponseMessage.prototype.getParentId = function () {
            return this._data.get("parent_id");
        };
        LoginResponseMessage.prototype.setParentId = function (data) {
            this._data.set("parent_id", data);
        };
        LoginResponseMessage.prototype.getIp = function () {
            return this._data.get("ip");
        };
        LoginResponseMessage.prototype.setIp = function (data) {
            this._data.set("ip", data);
        };
        LoginResponseMessage.prototype.getNick = function () {
            return this._data.get("nick");
        };
        LoginResponseMessage.prototype.setNick = function (data) {
            this._data.set("nick", data);
        };
        LoginResponseMessage.prototype.getMobile = function () {
            return this._data.get("mobile");
        };
        LoginResponseMessage.prototype.setMobile = function (data) {
            this._data.set("mobile", data);
        };
        LoginResponseMessage.prototype.getHeadimgurl = function () {
            return this._data.get("headimgurl");
        };
        LoginResponseMessage.prototype.setHeadimgurl = function (data) {
            this._data.set("headimgurl", data);
        };
        LoginResponseMessage.prototype.getCurCity = function () {
            return this._data.get("cur_city");
        };
        LoginResponseMessage.prototype.setCurCity = function (data) {
            this._data.set("cur_city", data);
        };
        LoginResponseMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        LoginResponseMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        LoginResponseMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        LoginResponseMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        LoginResponseMessage.prototype.getNotice = function () {
            return this._data.get("notice");
        };
        LoginResponseMessage.prototype.setNotice = function (data) {
            this._data.set("notice", data);
        };
        LoginResponseMessage.prototype.getShareIco = function () {
            return this._data.get("share_ico");
        };
        LoginResponseMessage.prototype.setShareIco = function (data) {
            this._data.set("share_ico", data);
        };
        LoginResponseMessage.prototype.getShareUrl = function () {
            return this._data.get("share_url");
        };
        LoginResponseMessage.prototype.setShareUrl = function (data) {
            this._data.set("share_url", data);
        };
        LoginResponseMessage.prototype.getIapVerifyUrl = function () {
            return this._data.get("iap_verify_url");
        };
        LoginResponseMessage.prototype.setIapVerifyUrl = function (data) {
            this._data.set("iap_verify_url", data);
        };
        return LoginResponseMessage;
    }(MessageBase));
    lobby.LoginResponseMessage = LoginResponseMessage;
    __reflect(LoginResponseMessage.prototype, "lobby.LoginResponseMessage");
    var OpenedCityRequestMessage = (function (_super) {
        __extends(OpenedCityRequestMessage, _super);
        function OpenedCityRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        OpenedCityRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.OpenedCityRequest";
        };
        return OpenedCityRequestMessage;
    }(MessageBase));
    lobby.OpenedCityRequestMessage = OpenedCityRequestMessage;
    __reflect(OpenedCityRequestMessage.prototype, "lobby.OpenedCityRequestMessage");
    var OpenedCityResponseMessage = (function (_super) {
        __extends(OpenedCityResponseMessage, _super);
        function OpenedCityResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        OpenedCityResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.OpenedCityResponse";
        };
        OpenedCityResponseMessage.prototype.getCitys = function () {
            return this._data.get("citys");
        };
        OpenedCityResponseMessage.prototype.setCitys = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("citys", data[i]);
            }
        };
        OpenedCityResponseMessage.prototype.addCitys = function (data) {
            this._data.add("citys", data);
        };
        return OpenedCityResponseMessage;
    }(MessageBase));
    lobby.OpenedCityResponseMessage = OpenedCityResponseMessage;
    __reflect(OpenedCityResponseMessage.prototype, "lobby.OpenedCityResponseMessage");
    var QuickJoinRequestMessage = (function (_super) {
        __extends(QuickJoinRequestMessage, _super);
        function QuickJoinRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        QuickJoinRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.QuickJoinRequest";
        };
        QuickJoinRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        QuickJoinRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        return QuickJoinRequestMessage;
    }(MessageBase));
    lobby.QuickJoinRequestMessage = QuickJoinRequestMessage;
    __reflect(QuickJoinRequestMessage.prototype, "lobby.QuickJoinRequestMessage");
    var QuickJoinResponseMessage = (function (_super) {
        __extends(QuickJoinResponseMessage, _super);
        function QuickJoinResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        QuickJoinResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.QuickJoinResponse";
        };
        QuickJoinResponseMessage.prototype.getTableSid = function () {
            return this._data.get("table_sid");
        };
        QuickJoinResponseMessage.prototype.setTableSid = function (data) {
            this._data.set("table_sid", data);
        };
        QuickJoinResponseMessage.prototype.getGameId = function () {
            return this._data.get("game_id");
        };
        QuickJoinResponseMessage.prototype.setGameId = function (data) {
            this._data.set("game_id", data);
        };
        return QuickJoinResponseMessage;
    }(MessageBase));
    lobby.QuickJoinResponseMessage = QuickJoinResponseMessage;
    __reflect(QuickJoinResponseMessage.prototype, "lobby.QuickJoinResponseMessage");
    var RegisterRequestMessage = (function (_super) {
        __extends(RegisterRequestMessage, _super);
        function RegisterRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        RegisterRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.RegisterRequest";
        };
        RegisterRequestMessage.prototype.getMobile = function () {
            return this._data.get("mobile");
        };
        RegisterRequestMessage.prototype.setMobile = function (data) {
            this._data.set("mobile", data);
        };
        RegisterRequestMessage.prototype.getNickname = function () {
            return this._data.get("nickname");
        };
        RegisterRequestMessage.prototype.setNickname = function (data) {
            this._data.set("nickname", data);
        };
        RegisterRequestMessage.prototype.getPassword = function () {
            return this._data.get("password");
        };
        RegisterRequestMessage.prototype.setPassword = function (data) {
            this._data.set("password", data);
        };
        return RegisterRequestMessage;
    }(MessageBase));
    lobby.RegisterRequestMessage = RegisterRequestMessage;
    __reflect(RegisterRequestMessage.prototype, "lobby.RegisterRequestMessage");
    var RegisterResponseMessage = (function (_super) {
        __extends(RegisterResponseMessage, _super);
        function RegisterResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        RegisterResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.RegisterResponse";
        };
        RegisterResponseMessage.prototype.getRegisterStatus = function () {
            return this._data.get("register_status");
        };
        RegisterResponseMessage.prototype.setRegisterStatus = function (data) {
            this._data.set("register_status", data);
        };
        return RegisterResponseMessage;
    }(MessageBase));
    lobby.RegisterResponseMessage = RegisterResponseMessage;
    __reflect(RegisterResponseMessage.prototype, "lobby.RegisterResponseMessage");
    var SearchUserRequestMessage = (function (_super) {
        __extends(SearchUserRequestMessage, _super);
        function SearchUserRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SearchUserRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.SearchUserRequest";
        };
        SearchUserRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        SearchUserRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        SearchUserRequestMessage.prototype.getUserSid = function () {
            return this._data.get("user_sid");
        };
        SearchUserRequestMessage.prototype.setUserSid = function (data) {
            this._data.set("user_sid", data);
        };
        return SearchUserRequestMessage;
    }(MessageBase));
    lobby.SearchUserRequestMessage = SearchUserRequestMessage;
    __reflect(SearchUserRequestMessage.prototype, "lobby.SearchUserRequestMessage");
    var SearchUserResponseMessage = (function (_super) {
        __extends(SearchUserResponseMessage, _super);
        function SearchUserResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SearchUserResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.SearchUserResponse";
        };
        SearchUserResponseMessage.prototype.getUserId = function () {
            return this._data.get("user_id");
        };
        SearchUserResponseMessage.prototype.setUserId = function (data) {
            this._data.set("user_id", data);
        };
        SearchUserResponseMessage.prototype.getUserSid = function () {
            return this._data.get("user_sid");
        };
        SearchUserResponseMessage.prototype.setUserSid = function (data) {
            this._data.set("user_sid", data);
        };
        SearchUserResponseMessage.prototype.getNick = function () {
            return this._data.get("nick");
        };
        SearchUserResponseMessage.prototype.setNick = function (data) {
            this._data.set("nick", data);
        };
        SearchUserResponseMessage.prototype.getIcon = function () {
            return this._data.get("icon");
        };
        SearchUserResponseMessage.prototype.setIcon = function (data) {
            this._data.set("icon", data);
        };
        SearchUserResponseMessage.prototype.getIsMember = function () {
            return this._data.get("is_member");
        };
        SearchUserResponseMessage.prototype.setIsMember = function (data) {
            this._data.set("is_member", data);
        };
        SearchUserResponseMessage.prototype.getLogs = function () {
            var subData = this._data.get("logs");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_11 = new ClubLogMessageMessage();
                message_11.setData(subData[i]);
                messageArray.push(message_11);
            }
            return messageArray;
        };
        SearchUserResponseMessage.prototype.setLogs = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("logs", data[i].getData());
            }
        };
        SearchUserResponseMessage.prototype.addLogs = function (data) {
            this._data.add("logs", data.getData());
        };
        return SearchUserResponseMessage;
    }(MessageBase));
    lobby.SearchUserResponseMessage = SearchUserResponseMessage;
    __reflect(SearchUserResponseMessage.prototype, "lobby.SearchUserResponseMessage");
    var SetClubMemberStatusRequestMessage = (function (_super) {
        __extends(SetClubMemberStatusRequestMessage, _super);
        function SetClubMemberStatusRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetClubMemberStatusRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetClubMemberStatusRequest";
        };
        SetClubMemberStatusRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        SetClubMemberStatusRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        SetClubMemberStatusRequestMessage.prototype.getUserId = function () {
            return this._data.get("user_id");
        };
        SetClubMemberStatusRequestMessage.prototype.setUserId = function (data) {
            this._data.set("user_id", data);
        };
        SetClubMemberStatusRequestMessage.prototype.getValue = function () {
            return this._data.get("value");
        };
        SetClubMemberStatusRequestMessage.prototype.setValue = function (data) {
            this._data.set("value", data);
        };
        return SetClubMemberStatusRequestMessage;
    }(MessageBase));
    lobby.SetClubMemberStatusRequestMessage = SetClubMemberStatusRequestMessage;
    __reflect(SetClubMemberStatusRequestMessage.prototype, "lobby.SetClubMemberStatusRequestMessage");
    var SetClubMemberStatusResponseMessage = (function (_super) {
        __extends(SetClubMemberStatusResponseMessage, _super);
        function SetClubMemberStatusResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetClubMemberStatusResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetClubMemberStatusResponse";
        };
        SetClubMemberStatusResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        SetClubMemberStatusResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return SetClubMemberStatusResponseMessage;
    }(MessageBase));
    lobby.SetClubMemberStatusResponseMessage = SetClubMemberStatusResponseMessage;
    __reflect(SetClubMemberStatusResponseMessage.prototype, "lobby.SetClubMemberStatusResponseMessage");
    var SetClubMemberRequestMessage = (function (_super) {
        __extends(SetClubMemberRequestMessage, _super);
        function SetClubMemberRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetClubMemberRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetClubMemberRequest";
        };
        SetClubMemberRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        SetClubMemberRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        SetClubMemberRequestMessage.prototype.getUserId = function () {
            return this._data.get("user_id");
        };
        SetClubMemberRequestMessage.prototype.setUserId = function (data) {
            this._data.set("user_id", data);
        };
        SetClubMemberRequestMessage.prototype.getValue = function () {
            return this._data.get("value");
        };
        SetClubMemberRequestMessage.prototype.setValue = function (data) {
            this._data.set("value", data);
        };
        return SetClubMemberRequestMessage;
    }(MessageBase));
    lobby.SetClubMemberRequestMessage = SetClubMemberRequestMessage;
    __reflect(SetClubMemberRequestMessage.prototype, "lobby.SetClubMemberRequestMessage");
    var SetClubMemberResponseMessage = (function (_super) {
        __extends(SetClubMemberResponseMessage, _super);
        function SetClubMemberResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetClubMemberResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetClubMemberResponse";
        };
        SetClubMemberResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        SetClubMemberResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return SetClubMemberResponseMessage;
    }(MessageBase));
    lobby.SetClubMemberResponseMessage = SetClubMemberResponseMessage;
    __reflect(SetClubMemberResponseMessage.prototype, "lobby.SetClubMemberResponseMessage");
    var SetClubStatusRequestMessage = (function (_super) {
        __extends(SetClubStatusRequestMessage, _super);
        function SetClubStatusRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetClubStatusRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetClubStatusRequest";
        };
        SetClubStatusRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        SetClubStatusRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        SetClubStatusRequestMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        SetClubStatusRequestMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        return SetClubStatusRequestMessage;
    }(MessageBase));
    lobby.SetClubStatusRequestMessage = SetClubStatusRequestMessage;
    __reflect(SetClubStatusRequestMessage.prototype, "lobby.SetClubStatusRequestMessage");
    var SetClubStatusResponseMessage = (function (_super) {
        __extends(SetClubStatusResponseMessage, _super);
        function SetClubStatusResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetClubStatusResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetClubStatusResponse";
        };
        SetClubStatusResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        SetClubStatusResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return SetClubStatusResponseMessage;
    }(MessageBase));
    lobby.SetClubStatusResponseMessage = SetClubStatusResponseMessage;
    __reflect(SetClubStatusResponseMessage.prototype, "lobby.SetClubStatusResponseMessage");
    var SetCurrentCityRequestMessage = (function (_super) {
        __extends(SetCurrentCityRequestMessage, _super);
        function SetCurrentCityRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        SetCurrentCityRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.SetCurrentCityRequest";
        };
        SetCurrentCityRequestMessage.prototype.getCity = function () {
            return this._data.get("city");
        };
        SetCurrentCityRequestMessage.prototype.setCity = function (data) {
            this._data.set("city", data);
        };
        return SetCurrentCityRequestMessage;
    }(MessageBase));
    lobby.SetCurrentCityRequestMessage = SetCurrentCityRequestMessage;
    __reflect(SetCurrentCityRequestMessage.prototype, "lobby.SetCurrentCityRequestMessage");
    var TableRecordRequestMessage = (function (_super) {
        __extends(TableRecordRequestMessage, _super);
        function TableRecordRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        TableRecordRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.TableRecordRequest";
        };
        TableRecordRequestMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        TableRecordRequestMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        TableRecordRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        TableRecordRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        TableRecordRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        TableRecordRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        return TableRecordRequestMessage;
    }(MessageBase));
    lobby.TableRecordRequestMessage = TableRecordRequestMessage;
    __reflect(TableRecordRequestMessage.prototype, "lobby.TableRecordRequestMessage");
    var TableRecordResponseMessage = (function (_super) {
        __extends(TableRecordResponseMessage, _super);
        function TableRecordResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        TableRecordResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.TableRecordResponse";
        };
        TableRecordResponseMessage.prototype.getItems = function () {
            var subData = this._data.get("items");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_12 = new TableItemMessage();
                message_12.setData(subData[i]);
                messageArray.push(message_12);
            }
            return messageArray;
        };
        TableRecordResponseMessage.prototype.setItems = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("items", data[i].getData());
            }
        };
        TableRecordResponseMessage.prototype.addItems = function (data) {
            this._data.add("items", data.getData());
        };
        return TableRecordResponseMessage;
    }(MessageBase));
    lobby.TableRecordResponseMessage = TableRecordResponseMessage;
    __reflect(TableRecordResponseMessage.prototype, "lobby.TableRecordResponseMessage");
    var TablesRequestMessage = (function (_super) {
        __extends(TablesRequestMessage, _super);
        function TablesRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        TablesRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.TablesRequest";
        };
        TablesRequestMessage.prototype.getStatus = function () {
            return this._data.get("status");
        };
        TablesRequestMessage.prototype.setStatus = function (data) {
            this._data.set("status", data);
        };
        TablesRequestMessage.prototype.getSize = function () {
            return this._data.get("size");
        };
        TablesRequestMessage.prototype.setSize = function (data) {
            this._data.set("size", data);
        };
        TablesRequestMessage.prototype.getPage = function () {
            return this._data.get("page");
        };
        TablesRequestMessage.prototype.setPage = function (data) {
            this._data.set("page", data);
        };
        return TablesRequestMessage;
    }(MessageBase));
    lobby.TablesRequestMessage = TablesRequestMessage;
    __reflect(TablesRequestMessage.prototype, "lobby.TablesRequestMessage");
    var TablesResponseMessage = (function (_super) {
        __extends(TablesResponseMessage, _super);
        function TablesResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        TablesResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.TablesResponse";
        };
        TablesResponseMessage.prototype.getItems = function () {
            var subData = this._data.get("items");
            var messageArray = [];
            for (var i = 0; i < subData.length; i++) {
                var message_13 = new TableItemMessage();
                message_13.setData(subData[i]);
                messageArray.push(message_13);
            }
            return messageArray;
        };
        TablesResponseMessage.prototype.setItems = function (data) {
            for (var i = 0; i < data.length; i++) {
                this._data.add("items", data[i].getData());
            }
        };
        TablesResponseMessage.prototype.addItems = function (data) {
            this._data.add("items", data.getData());
        };
        return TablesResponseMessage;
    }(MessageBase));
    lobby.TablesResponseMessage = TablesResponseMessage;
    __reflect(TablesResponseMessage.prototype, "lobby.TablesResponseMessage");
    var TableRequestMessage = (function (_super) {
        __extends(TableRequestMessage, _super);
        function TableRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        TableRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.TableRequest";
        };
        TableRequestMessage.prototype.getTableId = function () {
            return this._data.get("table_id");
        };
        TableRequestMessage.prototype.setTableId = function (data) {
            this._data.set("table_id", data);
        };
        return TableRequestMessage;
    }(MessageBase));
    lobby.TableRequestMessage = TableRequestMessage;
    __reflect(TableRequestMessage.prototype, "lobby.TableRequestMessage");
    var UpdateClubConfigRequestMessage = (function (_super) {
        __extends(UpdateClubConfigRequestMessage, _super);
        function UpdateClubConfigRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        UpdateClubConfigRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.UpdateClubConfigRequest";
        };
        UpdateClubConfigRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        UpdateClubConfigRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        UpdateClubConfigRequestMessage.prototype.getContent = function () {
            return this._data.get("content");
        };
        UpdateClubConfigRequestMessage.prototype.setContent = function (data) {
            this._data.set("content", data);
        };
        return UpdateClubConfigRequestMessage;
    }(MessageBase));
    lobby.UpdateClubConfigRequestMessage = UpdateClubConfigRequestMessage;
    __reflect(UpdateClubConfigRequestMessage.prototype, "lobby.UpdateClubConfigRequestMessage");
    var UpdateClubConfigResponseMessage = (function (_super) {
        __extends(UpdateClubConfigResponseMessage, _super);
        function UpdateClubConfigResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        UpdateClubConfigResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.UpdateClubConfigResponse";
        };
        UpdateClubConfigResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        UpdateClubConfigResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return UpdateClubConfigResponseMessage;
    }(MessageBase));
    lobby.UpdateClubConfigResponseMessage = UpdateClubConfigResponseMessage;
    __reflect(UpdateClubConfigResponseMessage.prototype, "lobby.UpdateClubConfigResponseMessage");
    var UpdateClubInfoRequestMessage = (function (_super) {
        __extends(UpdateClubInfoRequestMessage, _super);
        function UpdateClubInfoRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        UpdateClubInfoRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.UpdateClubInfoRequest";
        };
        UpdateClubInfoRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        UpdateClubInfoRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        UpdateClubInfoRequestMessage.prototype.getContent = function () {
            return this._data.get("content");
        };
        UpdateClubInfoRequestMessage.prototype.setContent = function (data) {
            this._data.set("content", data);
        };
        return UpdateClubInfoRequestMessage;
    }(MessageBase));
    lobby.UpdateClubInfoRequestMessage = UpdateClubInfoRequestMessage;
    __reflect(UpdateClubInfoRequestMessage.prototype, "lobby.UpdateClubInfoRequestMessage");
    var UpdateClubInfoResponseMessage = (function (_super) {
        __extends(UpdateClubInfoResponseMessage, _super);
        function UpdateClubInfoResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        UpdateClubInfoResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.UpdateClubInfoResponse";
        };
        UpdateClubInfoResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        UpdateClubInfoResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return UpdateClubInfoResponseMessage;
    }(MessageBase));
    lobby.UpdateClubInfoResponseMessage = UpdateClubInfoResponseMessage;
    __reflect(UpdateClubInfoResponseMessage.prototype, "lobby.UpdateClubInfoResponseMessage");
    var UpdateClubNoticeRequestMessage = (function (_super) {
        __extends(UpdateClubNoticeRequestMessage, _super);
        function UpdateClubNoticeRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        UpdateClubNoticeRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.UpdateClubNoticeRequest";
        };
        UpdateClubNoticeRequestMessage.prototype.getClubId = function () {
            return this._data.get("club_id");
        };
        UpdateClubNoticeRequestMessage.prototype.setClubId = function (data) {
            this._data.set("club_id", data);
        };
        UpdateClubNoticeRequestMessage.prototype.getContent = function () {
            return this._data.get("content");
        };
        UpdateClubNoticeRequestMessage.prototype.setContent = function (data) {
            this._data.set("content", data);
        };
        return UpdateClubNoticeRequestMessage;
    }(MessageBase));
    lobby.UpdateClubNoticeRequestMessage = UpdateClubNoticeRequestMessage;
    __reflect(UpdateClubNoticeRequestMessage.prototype, "lobby.UpdateClubNoticeRequestMessage");
    var UpdateClubNoticeResponseMessage = (function (_super) {
        __extends(UpdateClubNoticeResponseMessage, _super);
        function UpdateClubNoticeResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        UpdateClubNoticeResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.UpdateClubNoticeResponse";
        };
        UpdateClubNoticeResponseMessage.prototype.getCode = function () {
            return this._data.get("code");
        };
        UpdateClubNoticeResponseMessage.prototype.setCode = function (data) {
            this._data.set("code", data);
        };
        return UpdateClubNoticeResponseMessage;
    }(MessageBase));
    lobby.UpdateClubNoticeResponseMessage = UpdateClubNoticeResponseMessage;
    __reflect(UpdateClubNoticeResponseMessage.prototype, "lobby.UpdateClubNoticeResponseMessage");
    var VerificationCodeRequestMessage = (function (_super) {
        __extends(VerificationCodeRequestMessage, _super);
        function VerificationCodeRequestMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        VerificationCodeRequestMessage.prototype.getMessageProtoName = function () {
            return "lobby.VerificationCodeRequest";
        };
        VerificationCodeRequestMessage.prototype.getMobile = function () {
            return this._data.get("mobile");
        };
        VerificationCodeRequestMessage.prototype.setMobile = function (data) {
            this._data.set("mobile", data);
        };
        VerificationCodeRequestMessage.prototype.getRequestType = function () {
            return this._data.get("request_type");
        };
        VerificationCodeRequestMessage.prototype.setRequestType = function (data) {
            this._data.set("request_type", data);
        };
        return VerificationCodeRequestMessage;
    }(MessageBase));
    lobby.VerificationCodeRequestMessage = VerificationCodeRequestMessage;
    __reflect(VerificationCodeRequestMessage.prototype, "lobby.VerificationCodeRequestMessage");
    var VerificationCodeResponseMessage = (function (_super) {
        __extends(VerificationCodeResponseMessage, _super);
        function VerificationCodeResponseMessage() {
            var _this = _super.call(this) || this;
            _this._classType = ProtoMng.Instance.build(_this.getMessageProtoName());
            _this.initData();
            return _this;
        }
        VerificationCodeResponseMessage.prototype.getMessageProtoName = function () {
            return "lobby.VerificationCodeResponse";
        };
        VerificationCodeResponseMessage.prototype.getRequestStatus = function () {
            return this._data.get("request_status");
        };
        VerificationCodeResponseMessage.prototype.setRequestStatus = function (data) {
            this._data.set("request_status", data);
        };
        VerificationCodeResponseMessage.prototype.getExpireTime = function () {
            return this._data.get("expire_time");
        };
        VerificationCodeResponseMessage.prototype.setExpireTime = function (data) {
            this._data.set("expire_time", data);
        };
        return VerificationCodeResponseMessage;
    }(MessageBase));
    lobby.VerificationCodeResponseMessage = VerificationCodeResponseMessage;
    __reflect(VerificationCodeResponseMessage.prototype, "lobby.VerificationCodeResponseMessage");
})(lobby || (lobby = {}));
