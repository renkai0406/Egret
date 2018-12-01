// 本文件为自动生成文件请勿手工修改！

namespace  lobby{
	export enum Command{
		/**请求验证码*/
		VERIFICATION_CODE              = 0x0001,          
		/**检查验证码*/
		CHECK_VERIFICATION_CODE        = 0x0002,          
		/**注册用户*/
		REGISTER                       = 0x0003,          
		/**公共错误*/
		ERROR_CODE                     = 0x03E9,          
		/**强更检查请求*/
		CHECK_VERSION                  = 0x03EA,          
		/**登录游戏*/
		LOGIN                          = 0x03EB,          
		/**获取开放城市*/
		OPENED_CITY                    = 0x03EC,          
		/**设置当前城市*/
		SET_CURRENT_CITY               = 0x03ED,          
		/**获取游戏配置*/
		GET_GAME_CONFIG                = 0x03EE,          
		/**获取游戏规则*/
		GET_GAME_RULE                  = 0x03EF,          
		/**获取商城商品*/
		GET_STORE                      = 0x03F0,          
		/**获取我的牌桌*/
		TABLES                         = 0x03F1,          
		/**获取战绩列表*/
		TABLE_RECORD                   = 0x03F2,          
		/**获取战绩详情*/
		TABLE                          = 0x03F3,          
		/**获取战绩回放*/
		BATTLE_REPLAY                  = 0x03F4,          
		/**创建牌桌*/
		CREATE_TABLE                   = 0x03F5,          
		/**进入牌桌*/
		ENTER_TABLE                    = 0x03F6,          
		/**创建亲友圈*/
		CREATE_CLUB                    = 0x03F7,          
		/**加入亲友圈*/
		JOIN_CLUB                      = 0x03F8,          
		/**退出亲友圈*/
		EXIT_CLUB                      = 0x03F9,          
		/**解散亲友圈*/
		DISMISS_CLUB                   = 0x03FA,          
		/**解散亲友圈牌桌*/
		DISMISS_CLUB_TABLE             = 0x03FB,          
		/**快速加入*/
		QUICK_JOIN                     = 0x03FC,          
		/**授权玩家*/
		AUDIT_USER                     = 0x03FD,          
		/**搜索玩家*/
		SEARCH_USER                    = 0x03FE,          
		/**设置亲友圈状态（打烊）*/
		SET_CLUB_STATUS                = 0x03FF,          
		/**设置成员权限（管理员）*/
		SET_CLUB_MEMBER                = 0x0400,          
		/**设置成员状态（冻结）*/
		SET_CLUB_MEMBER_STATUS         = 0x0401,          
		/**获取亲友圈列表*/
		CLUBS                          = 0x0402,          
		/**获取亲友圈牌桌列表*/
		CLUB_TABLES                    = 0x0403,          
		/**获取亲友圈排行列表*/
		CLUB_RANK                      = 0x0404,          
		/**获取亲友圈消息列表*/
		CLUB_LOG                       = 0x0405,          
		/**获取亲友圈审核列表*/
		AUDITS                         = 0x0406,          
		/**获取亲友圈成员列表*/
		CLUB_MEMBER                    = 0x0407,          
		/**更新亲友圈名称*/
		UPDATE_CLUB_INFO               = 0x0408,          
		/**更新亲友圈开房配置*/
		UPDATE_CLUB_CONFIG             = 0x0409,          
		/**更新亲友圈公告*/
		UPDATE_CLUB_NOTICE             = 0x040A,          
		/**获取亲友圈进行中的牌桌列表*/
		CLUB_PLAING_TABLES             = 0x040B,          
	}
	export class CommandHelper implements ICommandsHelper{
	public commandIdMap = {
		"lobby.VerificationCodeRequestMessage":0x0001,
		"lobby.VerificationCodeResponseMessage":0x0001,
		"lobby.CheckVerificationCodeRequestMessage":0x0002,
		"lobby.CheckVerificationCodeResponseMessage":0x0002,
		"lobby.RegisterRequestMessage":0x0003,
		"lobby.RegisterResponseMessage":0x0003,
		"lobby.ErrorCodeResponseMessage":0x03E9,
		"lobby.CheckVersionRequestMessage":0x03EA,
		"lobby.CheckVersionResponseMessage":0x03EA,
		"lobby.LoginRequestMessage":0x03EB,
		"lobby.LoginResponseMessage":0x03EB,
		"lobby.OpenedCityResponseMessage":0x03EC,
		"lobby.SetCurrentCityRequestMessage":0x03ED,
		"lobby.GetGameConfigRequestMessage":0x03EE,
		"lobby.GetGameConfigResponseMessage":0x03EE,
		"lobby.GetGameRuleRequestMessage":0x03EF,
		"lobby.GetGameRuleResponseMessage":0x03EF,
		"lobby.GetStoreResponseMessage":0x03F0,
		"lobby.TablesRequestMessage":0x03F1,
		"lobby.TablesResponseMessage":0x03F1,
		"lobby.TableRecordRequestMessage":0x03F2,
		"lobby.TableRecordResponseMessage":0x03F2,
		"lobby.TableRequestMessage":0x03F3,
		"lobby.CreateTableRequestMessage":0x03F5,
		"lobby.CreateTableResponseMessage":0x03F5,
		"lobby.EnterTableRequestMessage":0x03F6,
		"lobby.EnterTableResponseMessage":0x03F6,
		"lobby.CreateClubRequestMessage":0x03F7,
		"lobby.CreateClubResponseMessage":0x03F7,
		"lobby.JoinClubRequestMessage":0x03F8,
		"lobby.JoinClubResponseMessage":0x03F8,
		"lobby.ExitClubRequestMessage":0x03F9,
		"lobby.ExitClubResponseMessage":0x03F9,
		"lobby.DismissClubRequestMessage":0x03FA,
		"lobby.DismissClubResponseMessage":0x03FA,
		"lobby.DismissClubTableRequestMessage":0x03FB,
		"lobby.DismissClubTableResponseMessage":0x03FB,
		"lobby.QuickJoinRequestMessage":0x03FC,
		"lobby.QuickJoinResponseMessage":0x03FC,
		"lobby.AuditUserRequestMessage":0x03FD,
		"lobby.AuditUserResponseMessage":0x03FD,
		"lobby.SearchUserRequestMessage":0x03FE,
		"lobby.SearchUserResponseMessage":0x03FE,
		"lobby.SetClubStatusRequestMessage":0x03FF,
		"lobby.SetClubStatusResponseMessage":0x03FF,
		"lobby.SetClubMemberRequestMessage":0x0400,
		"lobby.SetClubMemberResponseMessage":0x0400,
		"lobby.SetClubMemberStatusRequestMessage":0x0401,
		"lobby.SetClubMemberStatusResponseMessage":0x0401,
		"lobby.ClubsRequestMessage":0x0402,
		"lobby.ClubsResponseMessage":0x0402,
		"lobby.ClubTablesRequestMessage":0x0403,
		"lobby.ClubTablesResponseMessage":0x0403,
		"lobby.ClubRankRequestMessage":0x0404,
		"lobby.ClubRankResponseMessage":0x0404,
		"lobby.ClubLogRequestMessage":0x0405,
		"lobby.ClubLogResponseMessage":0x0405,
		"lobby.AuditsRequestMessage":0x0406,
		"lobby.AuditsResponseMessage":0x0406,
		"lobby.ClubMemberRequestMessage":0x0407,
		"lobby.ClubMemberResponseMessage":0x0407,
		"lobby.UpdateClubInfoRequestMessage":0x0408,
		"lobby.UpdateClubInfoResponseMessage":0x0408,
		"lobby.UpdateClubConfigRequestMessage":0x0409,
		"lobby.UpdateClubConfigResponseMessage":0x0409,
		"lobby.UpdateClubNoticeRequestMessage":0x040A,
		"lobby.UpdateClubNoticeResponseMessage":0x040A,
		"lobby.ClubPlaingTablesRequestMessage":0x040B,
		"lobby.ClubPlaingTablesResponseMessage":0x040B,
	}
	public requestMap = {
		0x0001:"lobby.VerificationCodeRequestMessage",
		0x0002:"lobby.CheckVerificationCodeRequestMessage",
		0x0003:"lobby.RegisterRequestMessage",
		0x03EA:"lobby.CheckVersionRequestMessage",
		0x03EB:"lobby.LoginRequestMessage",
		0x03ED:"lobby.SetCurrentCityRequestMessage",
		0x03EE:"lobby.GetGameConfigRequestMessage",
		0x03EF:"lobby.GetGameRuleRequestMessage",
		0x03F1:"lobby.TablesRequestMessage",
		0x03F2:"lobby.TableRecordRequestMessage",
		0x03F3:"lobby.TableRequestMessage",
		0x03F5:"lobby.CreateTableRequestMessage",
		0x03F6:"lobby.EnterTableRequestMessage",
		0x03F7:"lobby.CreateClubRequestMessage",
		0x03F8:"lobby.JoinClubRequestMessage",
		0x03F9:"lobby.ExitClubRequestMessage",
		0x03FA:"lobby.DismissClubRequestMessage",
		0x03FB:"lobby.DismissClubTableRequestMessage",
		0x03FC:"lobby.QuickJoinRequestMessage",
		0x03FD:"lobby.AuditUserRequestMessage",
		0x03FE:"lobby.SearchUserRequestMessage",
		0x03FF:"lobby.SetClubStatusRequestMessage",
		0x0400:"lobby.SetClubMemberRequestMessage",
		0x0401:"lobby.SetClubMemberStatusRequestMessage",
		0x0402:"lobby.ClubsRequestMessage",
		0x0403:"lobby.ClubTablesRequestMessage",
		0x0404:"lobby.ClubRankRequestMessage",
		0x0405:"lobby.ClubLogRequestMessage",
		0x0406:"lobby.AuditsRequestMessage",
		0x0407:"lobby.ClubMemberRequestMessage",
		0x0408:"lobby.UpdateClubInfoRequestMessage",
		0x0409:"lobby.UpdateClubConfigRequestMessage",
		0x040A:"lobby.UpdateClubNoticeRequestMessage",
		0x040B:"lobby.ClubPlaingTablesRequestMessage",
	}
	public responseMap = {
		0x0001:"lobby.VerificationCodeResponseMessage",
		0x0002:"lobby.CheckVerificationCodeResponseMessage",
		0x0003:"lobby.RegisterResponseMessage",
		0x03E9:"lobby.ErrorCodeResponseMessage",
		0x03EA:"lobby.CheckVersionResponseMessage",
		0x03EB:"lobby.LoginResponseMessage",
		0x03EC:"lobby.OpenedCityResponseMessage",
		0x03EE:"lobby.GetGameConfigResponseMessage",
		0x03EF:"lobby.GetGameRuleResponseMessage",
		0x03F0:"lobby.GetStoreResponseMessage",
		0x03F1:"lobby.TablesResponseMessage",
		0x03F2:"lobby.TableRecordResponseMessage",
		0x03F5:"lobby.CreateTableResponseMessage",
		0x03F6:"lobby.EnterTableResponseMessage",
		0x03F7:"lobby.CreateClubResponseMessage",
		0x03F8:"lobby.JoinClubResponseMessage",
		0x03F9:"lobby.ExitClubResponseMessage",
		0x03FA:"lobby.DismissClubResponseMessage",
		0x03FB:"lobby.DismissClubTableResponseMessage",
		0x03FC:"lobby.QuickJoinResponseMessage",
		0x03FD:"lobby.AuditUserResponseMessage",
		0x03FE:"lobby.SearchUserResponseMessage",
		0x03FF:"lobby.SetClubStatusResponseMessage",
		0x0400:"lobby.SetClubMemberResponseMessage",
		0x0401:"lobby.SetClubMemberStatusResponseMessage",
		0x0402:"lobby.ClubsResponseMessage",
		0x0403:"lobby.ClubTablesResponseMessage",
		0x0404:"lobby.ClubRankResponseMessage",
		0x0405:"lobby.ClubLogResponseMessage",
		0x0406:"lobby.AuditsResponseMessage",
		0x0407:"lobby.ClubMemberResponseMessage",
		0x0408:"lobby.UpdateClubInfoResponseMessage",
		0x0409:"lobby.UpdateClubConfigResponseMessage",
		0x040A:"lobby.UpdateClubNoticeResponseMessage",
		0x040B:"lobby.ClubPlaingTablesResponseMessage",
	}

	public GetRequestMessage(command:number):MessageBase{
		let msgName = this.requestMap[command];
		if(!msgName){return null;}
		let msg = eval("new " + msgName + "()") as MessageBase;
		return msg;
	}

	public GetResponceMessage(command:number):MessageBase{
		let msgName = this.responseMap[command];
		if(!msgName){return null;}
		let msg = eval("new " + msgName + "()") as MessageBase;
		return msg;
	}
	}
}