// 本文件为自动生成文件请勿手工修改！
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var lobby;
(function (lobby) {
    var Command;
    (function (Command) {
        /**请求验证码*/
        Command[Command["VERIFICATION_CODE"] = 1] = "VERIFICATION_CODE";
        /**检查验证码*/
        Command[Command["CHECK_VERIFICATION_CODE"] = 2] = "CHECK_VERIFICATION_CODE";
        /**注册用户*/
        Command[Command["REGISTER"] = 3] = "REGISTER";
        /**公共错误*/
        Command[Command["ERROR_CODE"] = 1001] = "ERROR_CODE";
        /**强更检查请求*/
        Command[Command["CHECK_VERSION"] = 1002] = "CHECK_VERSION";
        /**登录游戏*/
        Command[Command["LOGIN"] = 1003] = "LOGIN";
        /**获取开放城市*/
        Command[Command["OPENED_CITY"] = 1004] = "OPENED_CITY";
        /**设置当前城市*/
        Command[Command["SET_CURRENT_CITY"] = 1005] = "SET_CURRENT_CITY";
        /**获取游戏配置*/
        Command[Command["GET_GAME_CONFIG"] = 1006] = "GET_GAME_CONFIG";
        /**获取游戏规则*/
        Command[Command["GET_GAME_RULE"] = 1007] = "GET_GAME_RULE";
        /**获取商城商品*/
        Command[Command["GET_STORE"] = 1008] = "GET_STORE";
        /**获取我的牌桌*/
        Command[Command["TABLES"] = 1009] = "TABLES";
        /**获取战绩列表*/
        Command[Command["TABLE_RECORD"] = 1010] = "TABLE_RECORD";
        /**获取战绩详情*/
        Command[Command["TABLE"] = 1011] = "TABLE";
        /**获取战绩回放*/
        Command[Command["BATTLE_REPLAY"] = 1012] = "BATTLE_REPLAY";
        /**创建牌桌*/
        Command[Command["CREATE_TABLE"] = 1013] = "CREATE_TABLE";
        /**进入牌桌*/
        Command[Command["ENTER_TABLE"] = 1014] = "ENTER_TABLE";
        /**创建亲友圈*/
        Command[Command["CREATE_CLUB"] = 1015] = "CREATE_CLUB";
        /**加入亲友圈*/
        Command[Command["JOIN_CLUB"] = 1016] = "JOIN_CLUB";
        /**退出亲友圈*/
        Command[Command["EXIT_CLUB"] = 1017] = "EXIT_CLUB";
        /**解散亲友圈*/
        Command[Command["DISMISS_CLUB"] = 1018] = "DISMISS_CLUB";
        /**解散亲友圈牌桌*/
        Command[Command["DISMISS_CLUB_TABLE"] = 1019] = "DISMISS_CLUB_TABLE";
        /**快速加入*/
        Command[Command["QUICK_JOIN"] = 1020] = "QUICK_JOIN";
        /**授权玩家*/
        Command[Command["AUDIT_USER"] = 1021] = "AUDIT_USER";
        /**搜索玩家*/
        Command[Command["SEARCH_USER"] = 1022] = "SEARCH_USER";
        /**设置亲友圈状态（打烊）*/
        Command[Command["SET_CLUB_STATUS"] = 1023] = "SET_CLUB_STATUS";
        /**设置成员权限（管理员）*/
        Command[Command["SET_CLUB_MEMBER"] = 1024] = "SET_CLUB_MEMBER";
        /**设置成员状态（冻结）*/
        Command[Command["SET_CLUB_MEMBER_STATUS"] = 1025] = "SET_CLUB_MEMBER_STATUS";
        /**获取亲友圈列表*/
        Command[Command["CLUBS"] = 1026] = "CLUBS";
        /**获取亲友圈牌桌列表*/
        Command[Command["CLUB_TABLES"] = 1027] = "CLUB_TABLES";
        /**获取亲友圈排行列表*/
        Command[Command["CLUB_RANK"] = 1028] = "CLUB_RANK";
        /**获取亲友圈消息列表*/
        Command[Command["CLUB_LOG"] = 1029] = "CLUB_LOG";
        /**获取亲友圈审核列表*/
        Command[Command["AUDITS"] = 1030] = "AUDITS";
        /**获取亲友圈成员列表*/
        Command[Command["CLUB_MEMBER"] = 1031] = "CLUB_MEMBER";
        /**更新亲友圈名称*/
        Command[Command["UPDATE_CLUB_INFO"] = 1032] = "UPDATE_CLUB_INFO";
        /**更新亲友圈开房配置*/
        Command[Command["UPDATE_CLUB_CONFIG"] = 1033] = "UPDATE_CLUB_CONFIG";
        /**更新亲友圈公告*/
        Command[Command["UPDATE_CLUB_NOTICE"] = 1034] = "UPDATE_CLUB_NOTICE";
        /**获取亲友圈进行中的牌桌列表*/
        Command[Command["CLUB_PLAING_TABLES"] = 1035] = "CLUB_PLAING_TABLES";
    })(Command = lobby.Command || (lobby.Command = {}));
    var CommandHelper = (function () {
        function CommandHelper() {
            this.commandIdMap = {
                "lobby.VerificationCodeRequestMessage": 0x0001,
                "lobby.VerificationCodeResponseMessage": 0x0001,
                "lobby.CheckVerificationCodeRequestMessage": 0x0002,
                "lobby.CheckVerificationCodeResponseMessage": 0x0002,
                "lobby.RegisterRequestMessage": 0x0003,
                "lobby.RegisterResponseMessage": 0x0003,
                "lobby.ErrorCodeResponseMessage": 0x03E9,
                "lobby.CheckVersionRequestMessage": 0x03EA,
                "lobby.CheckVersionResponseMessage": 0x03EA,
                "lobby.LoginRequestMessage": 0x03EB,
                "lobby.LoginResponseMessage": 0x03EB,
                "lobby.OpenedCityResponseMessage": 0x03EC,
                "lobby.SetCurrentCityRequestMessage": 0x03ED,
                "lobby.GetGameConfigRequestMessage": 0x03EE,
                "lobby.GetGameConfigResponseMessage": 0x03EE,
                "lobby.GetGameRuleRequestMessage": 0x03EF,
                "lobby.GetGameRuleResponseMessage": 0x03EF,
                "lobby.GetStoreResponseMessage": 0x03F0,
                "lobby.TablesRequestMessage": 0x03F1,
                "lobby.TablesResponseMessage": 0x03F1,
                "lobby.TableRecordRequestMessage": 0x03F2,
                "lobby.TableRecordResponseMessage": 0x03F2,
                "lobby.TableRequestMessage": 0x03F3,
                "lobby.CreateTableRequestMessage": 0x03F5,
                "lobby.CreateTableResponseMessage": 0x03F5,
                "lobby.EnterTableRequestMessage": 0x03F6,
                "lobby.EnterTableResponseMessage": 0x03F6,
                "lobby.CreateClubRequestMessage": 0x03F7,
                "lobby.CreateClubResponseMessage": 0x03F7,
                "lobby.JoinClubRequestMessage": 0x03F8,
                "lobby.JoinClubResponseMessage": 0x03F8,
                "lobby.ExitClubRequestMessage": 0x03F9,
                "lobby.ExitClubResponseMessage": 0x03F9,
                "lobby.DismissClubRequestMessage": 0x03FA,
                "lobby.DismissClubResponseMessage": 0x03FA,
                "lobby.DismissClubTableRequestMessage": 0x03FB,
                "lobby.DismissClubTableResponseMessage": 0x03FB,
                "lobby.QuickJoinRequestMessage": 0x03FC,
                "lobby.QuickJoinResponseMessage": 0x03FC,
                "lobby.AuditUserRequestMessage": 0x03FD,
                "lobby.AuditUserResponseMessage": 0x03FD,
                "lobby.SearchUserRequestMessage": 0x03FE,
                "lobby.SearchUserResponseMessage": 0x03FE,
                "lobby.SetClubStatusRequestMessage": 0x03FF,
                "lobby.SetClubStatusResponseMessage": 0x03FF,
                "lobby.SetClubMemberRequestMessage": 0x0400,
                "lobby.SetClubMemberResponseMessage": 0x0400,
                "lobby.SetClubMemberStatusRequestMessage": 0x0401,
                "lobby.SetClubMemberStatusResponseMessage": 0x0401,
                "lobby.ClubsRequestMessage": 0x0402,
                "lobby.ClubsResponseMessage": 0x0402,
                "lobby.ClubTablesRequestMessage": 0x0403,
                "lobby.ClubTablesResponseMessage": 0x0403,
                "lobby.ClubRankRequestMessage": 0x0404,
                "lobby.ClubRankResponseMessage": 0x0404,
                "lobby.ClubLogRequestMessage": 0x0405,
                "lobby.ClubLogResponseMessage": 0x0405,
                "lobby.AuditsRequestMessage": 0x0406,
                "lobby.AuditsResponseMessage": 0x0406,
                "lobby.ClubMemberRequestMessage": 0x0407,
                "lobby.ClubMemberResponseMessage": 0x0407,
                "lobby.UpdateClubInfoRequestMessage": 0x0408,
                "lobby.UpdateClubInfoResponseMessage": 0x0408,
                "lobby.UpdateClubConfigRequestMessage": 0x0409,
                "lobby.UpdateClubConfigResponseMessage": 0x0409,
                "lobby.UpdateClubNoticeRequestMessage": 0x040A,
                "lobby.UpdateClubNoticeResponseMessage": 0x040A,
                "lobby.ClubPlaingTablesRequestMessage": 0x040B,
                "lobby.ClubPlaingTablesResponseMessage": 0x040B,
            };
            this.requestMap = {
                0x0001: "lobby.VerificationCodeRequestMessage",
                0x0002: "lobby.CheckVerificationCodeRequestMessage",
                0x0003: "lobby.RegisterRequestMessage",
                0x03EA: "lobby.CheckVersionRequestMessage",
                0x03EB: "lobby.LoginRequestMessage",
                0x03ED: "lobby.SetCurrentCityRequestMessage",
                0x03EE: "lobby.GetGameConfigRequestMessage",
                0x03EF: "lobby.GetGameRuleRequestMessage",
                0x03F1: "lobby.TablesRequestMessage",
                0x03F2: "lobby.TableRecordRequestMessage",
                0x03F3: "lobby.TableRequestMessage",
                0x03F5: "lobby.CreateTableRequestMessage",
                0x03F6: "lobby.EnterTableRequestMessage",
                0x03F7: "lobby.CreateClubRequestMessage",
                0x03F8: "lobby.JoinClubRequestMessage",
                0x03F9: "lobby.ExitClubRequestMessage",
                0x03FA: "lobby.DismissClubRequestMessage",
                0x03FB: "lobby.DismissClubTableRequestMessage",
                0x03FC: "lobby.QuickJoinRequestMessage",
                0x03FD: "lobby.AuditUserRequestMessage",
                0x03FE: "lobby.SearchUserRequestMessage",
                0x03FF: "lobby.SetClubStatusRequestMessage",
                0x0400: "lobby.SetClubMemberRequestMessage",
                0x0401: "lobby.SetClubMemberStatusRequestMessage",
                0x0402: "lobby.ClubsRequestMessage",
                0x0403: "lobby.ClubTablesRequestMessage",
                0x0404: "lobby.ClubRankRequestMessage",
                0x0405: "lobby.ClubLogRequestMessage",
                0x0406: "lobby.AuditsRequestMessage",
                0x0407: "lobby.ClubMemberRequestMessage",
                0x0408: "lobby.UpdateClubInfoRequestMessage",
                0x0409: "lobby.UpdateClubConfigRequestMessage",
                0x040A: "lobby.UpdateClubNoticeRequestMessage",
                0x040B: "lobby.ClubPlaingTablesRequestMessage",
            };
            this.responseMap = {
                0x0001: "lobby.VerificationCodeResponseMessage",
                0x0002: "lobby.CheckVerificationCodeResponseMessage",
                0x0003: "lobby.RegisterResponseMessage",
                0x03E9: "lobby.ErrorCodeResponseMessage",
                0x03EA: "lobby.CheckVersionResponseMessage",
                0x03EB: "lobby.LoginResponseMessage",
                0x03EC: "lobby.OpenedCityResponseMessage",
                0x03EE: "lobby.GetGameConfigResponseMessage",
                0x03EF: "lobby.GetGameRuleResponseMessage",
                0x03F0: "lobby.GetStoreResponseMessage",
                0x03F1: "lobby.TablesResponseMessage",
                0x03F2: "lobby.TableRecordResponseMessage",
                0x03F5: "lobby.CreateTableResponseMessage",
                0x03F6: "lobby.EnterTableResponseMessage",
                0x03F7: "lobby.CreateClubResponseMessage",
                0x03F8: "lobby.JoinClubResponseMessage",
                0x03F9: "lobby.ExitClubResponseMessage",
                0x03FA: "lobby.DismissClubResponseMessage",
                0x03FB: "lobby.DismissClubTableResponseMessage",
                0x03FC: "lobby.QuickJoinResponseMessage",
                0x03FD: "lobby.AuditUserResponseMessage",
                0x03FE: "lobby.SearchUserResponseMessage",
                0x03FF: "lobby.SetClubStatusResponseMessage",
                0x0400: "lobby.SetClubMemberResponseMessage",
                0x0401: "lobby.SetClubMemberStatusResponseMessage",
                0x0402: "lobby.ClubsResponseMessage",
                0x0403: "lobby.ClubTablesResponseMessage",
                0x0404: "lobby.ClubRankResponseMessage",
                0x0405: "lobby.ClubLogResponseMessage",
                0x0406: "lobby.AuditsResponseMessage",
                0x0407: "lobby.ClubMemberResponseMessage",
                0x0408: "lobby.UpdateClubInfoResponseMessage",
                0x0409: "lobby.UpdateClubConfigResponseMessage",
                0x040A: "lobby.UpdateClubNoticeResponseMessage",
                0x040B: "lobby.ClubPlaingTablesResponseMessage",
            };
        }
        CommandHelper.prototype.GetRequestMessage = function (command) {
            var msgName = this.requestMap[command];
            if (!msgName) {
                return null;
            }
            var msg = eval("new " + msgName + "()");
            return msg;
        };
        CommandHelper.prototype.GetResponceMessage = function (command) {
            var msgName = this.responseMap[command];
            if (!msgName) {
                return null;
            }
            var msg = eval("new " + msgName + "()");
            return msg;
        };
        return CommandHelper;
    }());
    lobby.CommandHelper = CommandHelper;
    __reflect(CommandHelper.prototype, "lobby.CommandHelper", ["ICommandsHelper"]);
})(lobby || (lobby = {}));
