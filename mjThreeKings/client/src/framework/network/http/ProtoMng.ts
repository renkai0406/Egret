//--------------------------------------------------
// 协议管理器基类
//     20180706 wanghongliang
//--------------------------------------------------
interface ICommandsHelper{
	commandIdMap:{};
	requestMap:{};
	responseMap:{},
	GetRequestMessage(command:number):MessageBase;
	GetResponceMessage(command:number):MessageBase;
}

class SpaceInfo{

	private _spaceId:number = 0;
	private _protos:any = null;
	private _res:string = "";
	private _helper:ICommandsHelper = null;

	public constructor(spaceId:number, res:string, helper:ICommandsHelper){
		this._spaceId = spaceId;
		this._res = res;
		this._helper = helper;
	}

	public get SpaceId():number{
		return this._spaceId;
	}

	public get Res():string{
		return this._res;
	}

	public get Helper():ICommandsHelper{
		return this._helper;
	}

	public get Protos():any{
		return this._protos;
	}

	public set Protos(protos:any)
	{
		this._protos = protos;
	}
}


class ProtoMng {
	private static _instance:ProtoMng = null;
	private _spaceMap:nano.Map<string, SpaceInfo> = new nano.Map<string, SpaceInfo>();

	public constructor() {
		this._spaceMap.Add("lobby", new SpaceInfo(0, "lobby_proto", new lobby.CommandHelper()));
		this._spaceMap.Add("game", new SpaceInfo(1, "game_proto", new game.CommandHelper()));

		// ...
		// 其他协议名称空间在此处添加


		this.Init();
	}

	private Init():void{
		let keys = this._spaceMap.Keys();
		for(let i = 0; i <keys.length; i++ )
		{
			let info = this._spaceMap.Get(keys[i]);

			let res = RES.getRes(info.Res);
			this._spaceMap.Get(keys[i]).Protos = dcodeIO.ProtoBuf.loadProto(res);
		}
	}

	public static get Instance() : ProtoMng {
        if(this._instance == null){
            this._instance = new ProtoMng();
        }
        return this._instance;
    }

	public build(protoName:string):any{

		let protoSplit = protoName.split(".");
		if(protoSplit.length != 2)
		{
			throw new Error("协议名称错误" + protoName);
		}

		return this._spaceMap.Get(protoSplit[0]).Protos.build(protoName); 
	}

	public GetProtoIdByName(protoName:string):number{
		let protoSplit = protoName.split(".");
		if(protoSplit.length != 2)
		{
			throw new Error("协议名称错误" + protoName);
		}

		
		let commandId = this._spaceMap.Get(protoSplit[0]).Helper.commandIdMap[protoName];
		return this._spaceMap.Get(protoSplit[0]).SpaceId * 10000 + commandId;
	}

	public GetProtoNameById(protoId:number, isRequest:boolean):string{

		let spaceId = Math.floor(protoId / 10000);
		let commandId = protoId % 10000;

		let keys = this._spaceMap.Keys();


		for(let i = 0; i < keys.length; i++)
		{
			let key = keys[i];
			let spaceInfo:SpaceInfo = this._spaceMap.Get(key);
			if(spaceInfo.SpaceId == spaceId)
			{
				return isRequest? spaceInfo.Helper.requestMap[commandId] : spaceInfo.Helper.responseMap[commandId];
			}
		}

		return null;
	}

	public GetResponseProtoById(spaceId:number,commandId:number):MessageBase{

		let spaceName = this.GetSpaceName(spaceId);

		if(this._spaceMap.Contains(spaceName))
		{
			let spaceInfo = this._spaceMap.Get(spaceName);
			return spaceInfo.Helper.GetResponceMessage(commandId);
		}

		return null;
	}

	public GetSpaceName(spaceId:number):string{
		let keys = this._spaceMap.Keys();
		for(let i = 0; i < keys.length; i++)
		{
			let key = keys[i];
			let spaceInfo:SpaceInfo = this._spaceMap.Get(key);
			if(spaceInfo.SpaceId == spaceId)
			{
				return key;
			}
		}

		return "";
	}
}