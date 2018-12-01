//此文件为自动生成,请勿手工修改!
namespace lobby{
    export class ShopItemMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ShopItem";
        }

        public getId():number {
            return this._data.get("id") as number;
        }

        public setId(data:number):void {
            this._data.set("id", data); 
        }

        public getType():number {
            return this._data.get("type") as number;
        }

        public setType(data:number):void {
            this._data.set("type", data); 
        }

        public getName():string {
            return this._data.get("name") as string;
        }

        public setName(data:string):void {
            this._data.set("name", data); 
        }

        public getValue():number {
            return this._data.get("value") as number;
        }

        public setValue(data:number):void {
            this._data.set("value", data); 
        }

        public getCount():number {
            return this._data.get("count") as number;
        }

        public setCount(data:number):void {
            this._data.set("count", data); 
        }

        public getPrice():number {
            return this._data.get("price") as number;
        }

        public setPrice(data:number):void {
            this._data.set("price", data); 
        }

        public getBonus():number {
            return this._data.get("bonus") as number;
        }

        public setBonus(data:number):void {
            this._data.set("bonus", data); 
        }

        public getFlags():number {
            return this._data.get("flags") as number;
        }

        public setFlags(data:number):void {
            this._data.set("flags", data); 
        }

    }

    export class ClubMessageMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubMessage";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getClubName():string {
            return this._data.get("club_name") as string;
        }

        public setClubName(data:string):void {
            this._data.set("club_name", data); 
        }

        public getRole():number {
            return this._data.get("role") as number;
        }

        public setRole(data:number):void {
            this._data.set("role", data); 
        }

        public getMembers():number {
            return this._data.get("members") as number;
        }

        public setMembers(data:number):void {
            this._data.set("members", data); 
        }

        public getOnlines():number {
            return this._data.get("onlines") as number;
        }

        public setOnlines(data:number):void {
            this._data.set("onlines", data); 
        }

        public getStatus():number {
            return this._data.get("status") as number;
        }

        public setStatus(data:number):void {
            this._data.set("status", data); 
        }

        public getNotice():string {
            return this._data.get("notice") as string;
        }

        public setNotice(data:string):void {
            this._data.set("notice", data); 
        }

        public getTables():number {
            return this._data.get("tables") as number;
        }

        public setTables(data:number):void {
            this._data.set("tables", data); 
        }

        public getIcons():string[] {
            return this._data.get("icons") as string[];
        }

        public setIcons(data:string[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("icons", data[i]);
            }
        }

        public addIcons(data:string):void {
            this._data.add("icons", data);
        }

        public getConfig():string {
            return this._data.get("config") as string;
        }

        public setConfig(data:string):void {
            this._data.set("config", data); 
        }

        public getToday():number {
            return this._data.get("today") as number;
        }

        public setToday(data:number):void {
            this._data.set("today", data); 
        }

        public getYesterday():number {
            return this._data.get("yesterday") as number;
        }

        public setYesterday(data:number):void {
            this._data.set("yesterday", data); 
        }

    }

    export class ClubTableMessageMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubTableMessage";
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

        public getRounds():number {
            return this._data.get("rounds") as number;
        }

        public setRounds(data:number):void {
            this._data.set("rounds", data); 
        }

        public getCurRound():number {
            return this._data.get("cur_round") as number;
        }

        public setCurRound(data:number):void {
            this._data.set("cur_round", data); 
        }

        public getEndTime():string {
            return this._data.get("end_time") as string;
        }

        public setEndTime(data:string):void {
            this._data.set("end_time", data); 
        }

        public getPlayers():PlayerMessageMessage[] {
            let subData = this._data.get("players") as PlayerMessageMessage[];
            let messageArray:PlayerMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new PlayerMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setPlayers(data:PlayerMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("players", data[i].getData());
            }
        }

        public addPlayers(data:PlayerMessageMessage):void {
            this._data.add("players", data.getData());
        }

    }

    export class ClubLogMessageMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubLogMessage";
        }

        public getSrcNick():string {
            return this._data.get("src_nick") as string;
        }

        public setSrcNick(data:string):void {
            this._data.set("src_nick", data); 
        }

        public getSrcRole():string {
            return this._data.get("src_role") as string;
        }

        public setSrcRole(data:string):void {
            this._data.set("src_role", data); 
        }

        public getDestNick():string {
            return this._data.get("dest_nick") as string;
        }

        public setDestNick(data:string):void {
            this._data.set("dest_nick", data); 
        }

        public getDestIcon():string {
            return this._data.get("dest_icon") as string;
        }

        public setDestIcon(data:string):void {
            this._data.set("dest_icon", data); 
        }

        public getAction():number {
            return this._data.get("action") as number;
        }

        public setAction(data:number):void {
            this._data.set("action", data); 
        }

        public getCtime():string {
            return this._data.get("ctime") as string;
        }

        public setCtime(data:string):void {
            this._data.set("ctime", data); 
        }

    }

    export class ClubMemberMessageMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubMemberMessage";
        }

        public getUserId():string {
            return this._data.get("user_id") as string;
        }

        public setUserId(data:string):void {
            this._data.set("user_id", data); 
        }

        public getUserSid():number {
            return this._data.get("user_sid") as number;
        }

        public setUserSid(data:number):void {
            this._data.set("user_sid", data); 
        }

        public getNick():string {
            return this._data.get("nick") as string;
        }

        public setNick(data:string):void {
            this._data.set("nick", data); 
        }

        public getIcon():string {
            return this._data.get("icon") as string;
        }

        public setIcon(data:string):void {
            this._data.set("icon", data); 
        }

        public getRole():number {
            return this._data.get("role") as number;
        }

        public setRole(data:number):void {
            this._data.set("role", data); 
        }

        public getStatus():number {
            return this._data.get("status") as number;
        }

        public setStatus(data:number):void {
            this._data.set("status", data); 
        }

    }

    export class GameConfigMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GameConfig";
        }

        public getGameid():number {
            return this._data.get("gameid") as number;
        }

        public setGameid(data:number):void {
            this._data.set("gameid", data); 
        }

        public getConfig():string {
            return this._data.get("config") as string;
        }

        public setConfig(data:string):void {
            this._data.set("config", data); 
        }

    }

    export class GameRuleMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GameRule";
        }

        public getGameid():number {
            return this._data.get("gameid") as number;
        }

        public setGameid(data:number):void {
            this._data.set("gameid", data); 
        }

        public getRule():string {
            return this._data.get("rule") as string;
        }

        public setRule(data:string):void {
            this._data.set("rule", data); 
        }

    }

    export class TableItemMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.TableItem";
        }

        public getTableUuid():string {
            return this._data.get("table_uuid") as string;
        }

        public setTableUuid(data:string):void {
            this._data.set("table_uuid", data); 
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

        public getType():string {
            return this._data.get("type") as string;
        }

        public setType(data:string):void {
            this._data.set("type", data); 
        }

        public getParentId():number {
            return this._data.get("parent_id") as number;
        }

        public setParentId(data:number):void {
            this._data.set("parent_id", data); 
        }

        public getGameid():number {
            return this._data.get("gameid") as number;
        }

        public setGameid(data:number):void {
            this._data.set("gameid", data); 
        }

        public getTableCfg():string {
            return this._data.get("table_cfg") as string;
        }

        public setTableCfg(data:string):void {
            this._data.set("table_cfg", data); 
        }

        public getOwnerUuid():string {
            return this._data.get("owner_uuid") as string;
        }

        public setOwnerUuid(data:string):void {
            this._data.set("owner_uuid", data); 
        }

        public getDismissUuid():string {
            return this._data.get("dismiss_uuid") as string;
        }

        public setDismissUuid(data:string):void {
            this._data.set("dismiss_uuid", data); 
        }

        public getStatus():number {
            return this._data.get("status") as number;
        }

        public setStatus(data:number):void {
            this._data.set("status", data); 
        }

        public getSettleInfo():string {
            return this._data.get("settle_info") as string;
        }

        public setSettleInfo(data:string):void {
            this._data.set("settle_info", data); 
        }

        public getCreateTime():string {
            return this._data.get("create_time") as string;
        }

        public setCreateTime(data:string):void {
            this._data.set("create_time", data); 
        }

    }

    export class PlayerMessageMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.PlayerMessage";
        }

        public getSid():number {
            return this._data.get("sid") as number;
        }

        public setSid(data:number):void {
            this._data.set("sid", data); 
        }

        public getNick():string {
            return this._data.get("nick") as string;
        }

        public setNick(data:string):void {
            this._data.set("nick", data); 
        }

        public getIcon():string {
            return this._data.get("icon") as string;
        }

        public setIcon(data:string):void {
            this._data.set("icon", data); 
        }

        public getScore():number {
            return this._data.get("score") as number;
        }

        public setScore(data:number):void {
            this._data.set("score", data); 
        }

    }

    export class AuditsRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.AuditsRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

    }

    export class AuditsResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.AuditsResponse";
        }

        public getPages():number {
            return this._data.get("pages") as number;
        }

        public setPages(data:number):void {
            this._data.set("pages", data); 
        }

        public getAudits():ClubMemberMessageMessage[] {
            let subData = this._data.get("audits") as ClubMemberMessageMessage[];
            let messageArray:ClubMemberMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubMemberMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setAudits(data:ClubMemberMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("audits", data[i].getData());
            }
        }

        public addAudits(data:ClubMemberMessageMessage):void {
            this._data.add("audits", data.getData());
        }

    }

    export class AuditUserRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.AuditUserRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getUserIds():string[] {
            return this._data.get("user_ids") as string[];
        }

        public setUserIds(data:string[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("user_ids", data[i]);
            }
        }

        public addUserIds(data:string):void {
            this._data.add("user_ids", data);
        }

        public getIsAudit():boolean {
            return this._data.get("is_audit") as boolean;
        }

        public setIsAudit(data:boolean):void {
            this._data.set("is_audit", data); 
        }

    }

    export class AuditUserResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.AuditUserResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class BattleReplayRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.BattleReplayRequest";
        }

    }

    export class BattleReplayResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.BattleReplayResponse";
        }

    }

    export class CheckVerificationCodeRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CheckVerificationCodeRequest";
        }

        public getMobile():string {
            return this._data.get("mobile") as string;
        }

        public setMobile(data:string):void {
            this._data.set("mobile", data); 
        }

        public getVerCode():string {
            return this._data.get("ver_code") as string;
        }

        public setVerCode(data:string):void {
            this._data.set("ver_code", data); 
        }

    }

    export class CheckVerificationCodeResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CheckVerificationCodeResponse";
        }

        public getCheckStatus():number {
            return this._data.get("check_status") as number;
        }

        public setCheckStatus(data:number):void {
            this._data.set("check_status", data); 
        }

    }

    export class CheckVersionRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CheckVersionRequest";
        }

        public getVersion():string {
            return this._data.get("version") as string;
        }

        public setVersion(data:string):void {
            this._data.set("version", data); 
        }

        public getPlatform():number {
            return this._data.get("platform") as number;
        }

        public setPlatform(data:number):void {
            this._data.set("platform", data); 
        }

    }

    export class CheckVersionResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CheckVersionResponse";
        }

        public getUpdate():boolean {
            return this._data.get("update") as boolean;
        }

        public setUpdate(data:boolean):void {
            this._data.set("update", data); 
        }

        public getUpdateVer():string {
            return this._data.get("update_ver") as string;
        }

        public setUpdateVer(data:string):void {
            this._data.set("update_ver", data); 
        }

        public getUpdateUrl():string {
            return this._data.get("update_url") as string;
        }

        public setUpdateUrl(data:string):void {
            this._data.set("update_url", data); 
        }

    }

    export class ClubLogRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubLogRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

    }

    export class ClubLogResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubLogResponse";
        }

        public getPages():number {
            return this._data.get("pages") as number;
        }

        public setPages(data:number):void {
            this._data.set("pages", data); 
        }

        public getLogs():ClubLogMessageMessage[] {
            let subData = this._data.get("logs") as ClubLogMessageMessage[];
            let messageArray:ClubLogMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubLogMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setLogs(data:ClubLogMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("logs", data[i].getData());
            }
        }

        public addLogs(data:ClubLogMessageMessage):void {
            this._data.add("logs", data.getData());
        }

    }

    export class ClubMemberRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubMemberRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

    }

    export class ClubMemberResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubMemberResponse";
        }

        public getPages():number {
            return this._data.get("pages") as number;
        }

        public setPages(data:number):void {
            this._data.set("pages", data); 
        }

        public getAudits():ClubMemberMessageMessage[] {
            let subData = this._data.get("audits") as ClubMemberMessageMessage[];
            let messageArray:ClubMemberMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubMemberMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setAudits(data:ClubMemberMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("audits", data[i].getData());
            }
        }

        public addAudits(data:ClubMemberMessageMessage):void {
            this._data.add("audits", data.getData());
        }

    }

    export class ClubPlaingTablesRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubPlaingTablesRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getType():number {
            return this._data.get("type") as number;
        }

        public setType(data:number):void {
            this._data.set("type", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

    }

    export class ClubPlaingTablesResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubPlaingTablesResponse";
        }

        public getTables():ClubTableMessageMessage[] {
            let subData = this._data.get("tables") as ClubTableMessageMessage[];
            let messageArray:ClubTableMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubTableMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setTables(data:ClubTableMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("tables", data[i].getData());
            }
        }

        public addTables(data:ClubTableMessageMessage):void {
            this._data.add("tables", data.getData());
        }

    }

    export class ClubRankRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubRankRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

        public getRankType():number {
            return this._data.get("rank_type") as number;
        }

        public setRankType(data:number):void {
            this._data.set("rank_type", data); 
        }

        public getRankSubType():number {
            return this._data.get("rank_sub_type") as number;
        }

        public setRankSubType(data:number):void {
            this._data.set("rank_sub_type", data); 
        }

    }

    export class ClubRankResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubRankResponse";
        }

        public getPlayer():PlayerMessageMessage {
            let subData = this._data.get("player") as PlayerMessageMessage;
            let message = new PlayerMessageMessage();
            message.setData(subData);
            return message;
        }

        public setPlayer(data:PlayerMessageMessage):void {
            this._data.set("player", data.getData()); 
        }

        public getGainers():number {
            return this._data.get("gainers") as number;
        }

        public setGainers(data:number):void {
            this._data.set("gainers", data); 
        }

        public getRounds():number {
            return this._data.get("rounds") as number;
        }

        public setRounds(data:number):void {
            this._data.set("rounds", data); 
        }

        public getScores():number {
            return this._data.get("scores") as number;
        }

        public setScores(data:number):void {
            this._data.set("scores", data); 
        }

    }

    export class ClubsRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubsRequest";
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

    }

    export class ClubsResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubsResponse";
        }

        public getClubs():ClubMessageMessage[] {
            let subData = this._data.get("clubs") as ClubMessageMessage[];
            let messageArray:ClubMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setClubs(data:ClubMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("clubs", data[i].getData());
            }
        }

        public addClubs(data:ClubMessageMessage):void {
            this._data.add("clubs", data.getData());
        }

    }

    export class ClubTablesRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubTablesRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getType():number {
            return this._data.get("type") as number;
        }

        public setType(data:number):void {
            this._data.set("type", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

    }

    export class ClubTablesResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ClubTablesResponse";
        }

        public getTables():ClubTableMessageMessage[] {
            let subData = this._data.get("tables") as ClubTableMessageMessage[];
            let messageArray:ClubTableMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubTableMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setTables(data:ClubTableMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("tables", data[i].getData());
            }
        }

        public addTables(data:ClubTableMessageMessage):void {
            this._data.add("tables", data.getData());
        }

    }

    export class CreateClubRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CreateClubRequest";
        }

        public getName():string {
            return this._data.get("name") as string;
        }

        public setName(data:string):void {
            this._data.set("name", data); 
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

        public getTableCfg():string {
            return this._data.get("table_cfg") as string;
        }

        public setTableCfg(data:string):void {
            this._data.set("table_cfg", data); 
        }

    }

    export class CreateClubResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CreateClubResponse";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

    }

    export class CreateTableRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CreateTableRequest";
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

        public getTableCfg():string {
            return this._data.get("table_cfg") as string;
        }

        public setTableCfg(data:string):void {
            this._data.set("table_cfg", data); 
        }

        public getOwnerInfo():string {
            return this._data.get("owner_info") as string;
        }

        public setOwnerInfo(data:string):void {
            this._data.set("owner_info", data); 
        }

    }

    export class CreateTableResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.CreateTableResponse";
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

    }

    export class DismissClubTableRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.DismissClubTableRequest";
        }

        public getTableIds():number[] {
            return this._data.get("table_ids") as number[];
        }

        public setTableIds(data:number[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("table_ids", data[i]);
            }
        }

        public addTableIds(data:number):void {
            this._data.add("table_ids", data);
        }

    }

    export class DismissClubTableResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.DismissClubTableResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class DismissClubRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.DismissClubRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

    }

    export class DismissClubResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.DismissClubResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class EnterTableRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.EnterTableRequest";
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

    }

    export class EnterTableResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.EnterTableResponse";
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

    }

    export class ErrorCodeResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ErrorCodeResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

        public getMsg():string {
            return this._data.get("msg") as string;
        }

        public setMsg(data:string):void {
            this._data.set("msg", data); 
        }

    }

    export class ExitClubRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ExitClubRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

    }

    export class ExitClubResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.ExitClubResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class GetGameConfigRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GetGameConfigRequest";
        }

        public getCity():number {
            return this._data.get("city") as number;
        }

        public setCity(data:number):void {
            this._data.set("city", data); 
        }

    }

    export class GetGameConfigResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GetGameConfigResponse";
        }

        public getConfigs():GameConfigMessage[] {
            let subData = this._data.get("configs") as GameConfigMessage[];
            let messageArray:GameConfigMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new GameConfigMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setConfigs(data:GameConfigMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("configs", data[i].getData());
            }
        }

        public addConfigs(data:GameConfigMessage):void {
            this._data.add("configs", data.getData());
        }

    }

    export class GetGameRuleRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GetGameRuleRequest";
        }

        public getCity():number {
            return this._data.get("city") as number;
        }

        public setCity(data:number):void {
            this._data.set("city", data); 
        }

    }

    export class GetGameRuleResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GetGameRuleResponse";
        }

        public getRules():GameRuleMessage[] {
            let subData = this._data.get("rules") as GameRuleMessage[];
            let messageArray:GameRuleMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new GameRuleMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setRules(data:GameRuleMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("rules", data[i].getData());
            }
        }

        public addRules(data:GameRuleMessage):void {
            this._data.add("rules", data.getData());
        }

    }

    export class GetStoreRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GetStoreRequest";
        }

    }

    export class GetStoreResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.GetStoreResponse";
        }

        public getItems():ShopItemMessage[] {
            let subData = this._data.get("items") as ShopItemMessage[];
            let messageArray:ShopItemMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ShopItemMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setItems(data:ShopItemMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("items", data[i].getData());
            }
        }

        public addItems(data:ShopItemMessage):void {
            this._data.add("items", data.getData());
        }

    }

    export class JoinClubRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.JoinClubRequest";
        }

        public getUserId():string {
            return this._data.get("user_id") as string;
        }

        public setUserId(data:string):void {
            this._data.set("user_id", data); 
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

    }

    export class JoinClubResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.JoinClubResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class LoginRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.LoginRequest";
        }

        public getAppid():number {
            return this._data.get("appid") as number;
        }

        public setAppid(data:number):void {
            this._data.set("appid", data); 
        }

        public getChannel():number {
            return this._data.get("channel") as number;
        }

        public setChannel(data:number):void {
            this._data.set("channel", data); 
        }

        public getPlatform():number {
            return this._data.get("platform") as number;
        }

        public setPlatform(data:number):void {
            this._data.set("platform", data); 
        }

        public getTimestamp():number {
            return this._data.get("timestamp") as number;
        }

        public setTimestamp(data:number):void {
            this._data.set("timestamp", data); 
        }

        public getToken():string {
            return this._data.get("token") as string;
        }

        public setToken(data:string):void {
            this._data.set("token", data); 
        }

        public getOpenid():string {
            return this._data.get("openid") as string;
        }

        public setOpenid(data:string):void {
            this._data.set("openid", data); 
        }

        public getVersion():string {
            return this._data.get("version") as string;
        }

        public setVersion(data:string):void {
            this._data.set("version", data); 
        }

        public getDeviceid():string {
            return this._data.get("deviceid") as string;
        }

        public setDeviceid(data:string):void {
            this._data.set("deviceid", data); 
        }

        public getLocation():string {
            return this._data.get("location") as string;
        }

        public setLocation(data:string):void {
            this._data.set("location", data); 
        }

        public getReconnect():number {
            return this._data.get("reconnect") as number;
        }

        public setReconnect(data:number):void {
            this._data.set("reconnect", data); 
        }

    }

    export class LoginResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.LoginResponse";
        }

        public getUuid():string {
            return this._data.get("uuid") as string;
        }

        public setUuid(data:string):void {
            this._data.set("uuid", data); 
        }

        public getPid():string {
            return this._data.get("pid") as string;
        }

        public setPid(data:string):void {
            this._data.set("pid", data); 
        }

        public getSid():number {
            return this._data.get("sid") as number;
        }

        public setSid(data:number):void {
            this._data.set("sid", data); 
        }

        public getSex():number {
            return this._data.get("sex") as number;
        }

        public setSex(data:number):void {
            this._data.set("sex", data); 
        }

        public getGold():number {
            return this._data.get("gold") as number;
        }

        public setGold(data:number):void {
            this._data.set("gold", data); 
        }

        public getDiamond():number {
            return this._data.get("diamond") as number;
        }

        public setDiamond(data:number):void {
            this._data.set("diamond", data); 
        }

        public getParentId():number {
            return this._data.get("parent_id") as number;
        }

        public setParentId(data:number):void {
            this._data.set("parent_id", data); 
        }

        public getIp():string {
            return this._data.get("ip") as string;
        }

        public setIp(data:string):void {
            this._data.set("ip", data); 
        }

        public getNick():string {
            return this._data.get("nick") as string;
        }

        public setNick(data:string):void {
            this._data.set("nick", data); 
        }

        public getMobile():string {
            return this._data.get("mobile") as string;
        }

        public setMobile(data:string):void {
            this._data.set("mobile", data); 
        }

        public getHeadimgurl():string {
            return this._data.get("headimgurl") as string;
        }

        public setHeadimgurl(data:string):void {
            this._data.set("headimgurl", data); 
        }

        public getCurCity():number {
            return this._data.get("cur_city") as number;
        }

        public setCurCity(data:number):void {
            this._data.set("cur_city", data); 
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

        public getNotice():string {
            return this._data.get("notice") as string;
        }

        public setNotice(data:string):void {
            this._data.set("notice", data); 
        }

        public getShareIco():string {
            return this._data.get("share_ico") as string;
        }

        public setShareIco(data:string):void {
            this._data.set("share_ico", data); 
        }

        public getShareUrl():string {
            return this._data.get("share_url") as string;
        }

        public setShareUrl(data:string):void {
            this._data.set("share_url", data); 
        }

        public getIapVerifyUrl():string {
            return this._data.get("iap_verify_url") as string;
        }

        public setIapVerifyUrl(data:string):void {
            this._data.set("iap_verify_url", data); 
        }

    }

    export class OpenedCityRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.OpenedCityRequest";
        }

    }

    export class OpenedCityResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.OpenedCityResponse";
        }

        public getCitys():number[] {
            return this._data.get("citys") as number[];
        }

        public setCitys(data:number[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("citys", data[i]);
            }
        }

        public addCitys(data:number):void {
            this._data.add("citys", data);
        }

    }

    export class QuickJoinRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.QuickJoinRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

    }

    export class QuickJoinResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.QuickJoinResponse";
        }

        public getTableSid():number {
            return this._data.get("table_sid") as number;
        }

        public setTableSid(data:number):void {
            this._data.set("table_sid", data); 
        }

        public getGameId():number {
            return this._data.get("game_id") as number;
        }

        public setGameId(data:number):void {
            this._data.set("game_id", data); 
        }

    }

    export class RegisterRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.RegisterRequest";
        }

        public getMobile():string {
            return this._data.get("mobile") as string;
        }

        public setMobile(data:string):void {
            this._data.set("mobile", data); 
        }

        public getNickname():string {
            return this._data.get("nickname") as string;
        }

        public setNickname(data:string):void {
            this._data.set("nickname", data); 
        }

        public getPassword():string {
            return this._data.get("password") as string;
        }

        public setPassword(data:string):void {
            this._data.set("password", data); 
        }

    }

    export class RegisterResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.RegisterResponse";
        }

        public getRegisterStatus():number {
            return this._data.get("register_status") as number;
        }

        public setRegisterStatus(data:number):void {
            this._data.set("register_status", data); 
        }

    }

    export class SearchUserRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SearchUserRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getUserSid():number {
            return this._data.get("user_sid") as number;
        }

        public setUserSid(data:number):void {
            this._data.set("user_sid", data); 
        }

    }

    export class SearchUserResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SearchUserResponse";
        }

        public getUserId():string {
            return this._data.get("user_id") as string;
        }

        public setUserId(data:string):void {
            this._data.set("user_id", data); 
        }

        public getUserSid():number {
            return this._data.get("user_sid") as number;
        }

        public setUserSid(data:number):void {
            this._data.set("user_sid", data); 
        }

        public getNick():string {
            return this._data.get("nick") as string;
        }

        public setNick(data:string):void {
            this._data.set("nick", data); 
        }

        public getIcon():string {
            return this._data.get("icon") as string;
        }

        public setIcon(data:string):void {
            this._data.set("icon", data); 
        }

        public getIsMember():boolean {
            return this._data.get("is_member") as boolean;
        }

        public setIsMember(data:boolean):void {
            this._data.set("is_member", data); 
        }

        public getLogs():ClubLogMessageMessage[] {
            let subData = this._data.get("logs") as ClubLogMessageMessage[];
            let messageArray:ClubLogMessageMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new ClubLogMessageMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setLogs(data:ClubLogMessageMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("logs", data[i].getData());
            }
        }

        public addLogs(data:ClubLogMessageMessage):void {
            this._data.add("logs", data.getData());
        }

    }

    export class SetClubMemberStatusRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetClubMemberStatusRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getUserId():string {
            return this._data.get("user_id") as string;
        }

        public setUserId(data:string):void {
            this._data.set("user_id", data); 
        }

        public getValue():number {
            return this._data.get("value") as number;
        }

        public setValue(data:number):void {
            this._data.set("value", data); 
        }

    }

    export class SetClubMemberStatusResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetClubMemberStatusResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class SetClubMemberRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetClubMemberRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getUserId():string {
            return this._data.get("user_id") as string;
        }

        public setUserId(data:string):void {
            this._data.set("user_id", data); 
        }

        public getValue():number {
            return this._data.get("value") as number;
        }

        public setValue(data:number):void {
            this._data.set("value", data); 
        }

    }

    export class SetClubMemberResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetClubMemberResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class SetClubStatusRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetClubStatusRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getStatus():number {
            return this._data.get("status") as number;
        }

        public setStatus(data:number):void {
            this._data.set("status", data); 
        }

    }

    export class SetClubStatusResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetClubStatusResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class SetCurrentCityRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.SetCurrentCityRequest";
        }

        public getCity():number {
            return this._data.get("city") as number;
        }

        public setCity(data:number):void {
            this._data.set("city", data); 
        }

    }

    export class TableRecordRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.TableRecordRequest";
        }

        public getStatus():string {
            return this._data.get("status") as string;
        }

        public setStatus(data:string):void {
            this._data.set("status", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

    }

    export class TableRecordResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.TableRecordResponse";
        }

        public getItems():TableItemMessage[] {
            let subData = this._data.get("items") as TableItemMessage[];
            let messageArray:TableItemMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new TableItemMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setItems(data:TableItemMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("items", data[i].getData());
            }
        }

        public addItems(data:TableItemMessage):void {
            this._data.add("items", data.getData());
        }

    }

    export class TablesRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.TablesRequest";
        }

        public getStatus():string {
            return this._data.get("status") as string;
        }

        public setStatus(data:string):void {
            this._data.set("status", data); 
        }

        public getSize():number {
            return this._data.get("size") as number;
        }

        public setSize(data:number):void {
            this._data.set("size", data); 
        }

        public getPage():number {
            return this._data.get("page") as number;
        }

        public setPage(data:number):void {
            this._data.set("page", data); 
        }

    }

    export class TablesResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.TablesResponse";
        }

        public getItems():TableItemMessage[] {
            let subData = this._data.get("items") as TableItemMessage[];
            let messageArray:TableItemMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new TableItemMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setItems(data:TableItemMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("items", data[i].getData());
            }
        }

        public addItems(data:TableItemMessage):void {
            this._data.add("items", data.getData());
        }

    }

    export class TableRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.TableRequest";
        }

        public getTableId():number {
            return this._data.get("table_id") as number;
        }

        public setTableId(data:number):void {
            this._data.set("table_id", data); 
        }

    }

    export class UpdateClubConfigRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.UpdateClubConfigRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getContent():string {
            return this._data.get("content") as string;
        }

        public setContent(data:string):void {
            this._data.set("content", data); 
        }

    }

    export class UpdateClubConfigResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.UpdateClubConfigResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class UpdateClubInfoRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.UpdateClubInfoRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getContent():string {
            return this._data.get("content") as string;
        }

        public setContent(data:string):void {
            this._data.set("content", data); 
        }

    }

    export class UpdateClubInfoResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.UpdateClubInfoResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class UpdateClubNoticeRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.UpdateClubNoticeRequest";
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getContent():string {
            return this._data.get("content") as string;
        }

        public setContent(data:string):void {
            this._data.set("content", data); 
        }

    }

    export class UpdateClubNoticeResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.UpdateClubNoticeResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class VerificationCodeRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.VerificationCodeRequest";
        }

        public getMobile():string {
            return this._data.get("mobile") as string;
        }

        public setMobile(data:string):void {
            this._data.set("mobile", data); 
        }

        public getRequestType():number {
            return this._data.get("request_type") as number;
        }

        public setRequestType(data:number):void {
            this._data.set("request_type", data); 
        }

    }

    export class VerificationCodeResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getMessageProtoName());
            this.initData();
        }

        public getMessageProtoName():string {
            return "lobby.VerificationCodeResponse";
        }

        public getRequestStatus():number {
            return this._data.get("request_status") as number;
        }

        public setRequestStatus(data:number):void {
            this._data.set("request_status", data); 
        }

        public getExpireTime():number {
            return this._data.get("expire_time") as number;
        }

        public setExpireTime(data:number):void {
            this._data.set("expire_time", data); 
        }

    }

}