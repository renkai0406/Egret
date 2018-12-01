// 本文件为自动生成文件请勿手工修改！

namespace  game{
	export enum Command{
		/**创建房间*/
		CREATE_ROOM                    = 0x0001,          
		/**进入房间*/
		ENTER_ROOM                     = 0x0002,          
	}
	export class CommandHelper implements ICommandsHelper{
	public commandIdMap = {
		"game.CreateRoomRequestMessage":0x0001,
		"game.CreateRoomResponseMessage":0x0001,
		"game.EnterRoomRequestMessage":0x0002,
		"game.EnterRoomResponseMessage":0x0002,
	}
	public requestMap = {
		0x0001:"game.CreateRoomRequestMessage",
		0x0002:"game.EnterRoomRequestMessage",
	}
	public responseMap = {
		0x0001:"game.CreateRoomResponseMessage",
		0x0002:"game.EnterRoomResponseMessage",
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