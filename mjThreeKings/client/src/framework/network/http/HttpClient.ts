/// wanghongliang 2018/6/23 
/// HttpClient class
namespace nano{

	class HttpCommand{
		public url:string;
		public sendMsg:MessageBase;
		public msgId:number;
		public callBack:(this:void, msgId:number, reciveMsgData:egret.ByteArray, sendMsg:MessageBase)=>void;
	}

	export class HttpClient {

		private _reqHttpList:Array<HttpCommand> = [];

		public constructor() {
		
		}


		public protoBufTest(){

			// let msg:fish.ScoreUpResponseMessage = new fish.ScoreUpResponseMessage();

			// msg.setPlayerScore(2000000);
			// msg.setScoreType(1000);
			// msg.setSeatId(3);

			// let code = msg.serialize();



			// let msg2:fish.ScoreUpResponseMessage = new fish.ScoreUpResponseMessage();

			// msg2.deserialize(code);

			// let score:number = msg2.getPlayerScore();


		}

		public sendMessage(msg:MessageBase, url?:string):void{
			
			// msg.getName():
			

			let cmd:HttpCommand = new HttpCommand();
			cmd.sendMsg = msg;

			this._reqHttpList.push(cmd);
			let fullUrl = this.checkURL(cmd.url) + cmd.msgId;

			console.log("Send Http Request " + url);

			let request = new egret.HttpRequest();
			request.responseType = egret.HttpResponseType.ARRAY_BUFFER;
			request.open(url,egret.HttpMethod.POST);
			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

			//let bytes = 

			



			

		}

		private checkURL(serverUrl:string):string{
			if(serverUrl[serverUrl.length - 1] == '/'){
            	return serverUrl;
			}else{
				return serverUrl + '/';
			}
		}

		private getCommandName(cmdId:number){
			let cmdName:string = game.Command[cmdId];
			return cmdName.toLowerCase();
		}
	}
}
