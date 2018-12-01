//此文件为自动生成,请勿手工修改!
namespace game{
    export class PlayerMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getName());
            this.initData();
        }

        public getName():string {
            return "game.Player";
        }

        public getSeat():number {
            return this._data.get("seat") as number;
        }

        public setSeat(data:number):void {
            this._data.set("seat", data); 
        }

        public getPlayer():string {
            return this._data.get("player") as string;
        }

        public setPlayer(data:string):void {
            this._data.set("player", data); 
        }

        public getInfo():string {
            return this._data.get("info") as string;
        }

        public setInfo(data:string):void {
            this._data.set("info", data); 
        }

        public getStatus():number {
            return this._data.get("status") as number;
        }

        public setStatus(data:number):void {
            this._data.set("status", data); 
        }

        public getIsOnline():number {
            return this._data.get("is_online") as number;
        }

        public setIsOnline(data:number):void {
            this._data.set("is_online", data); 
        }

        public getTotalScore():number {
            return this._data.get("total_score") as number;
        }

        public setTotalScore(data:number):void {
            this._data.set("total_score", data); 
        }

        public getState():string {
            return this._data.get("state") as string;
        }

        public setState(data:string):void {
            this._data.set("state", data); 
        }

    }

    export class CreateRoomRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getName());
            this.initData();
        }

        public getName():string {
            return "game.CreateRoomRequest";
        }

        public getRoomId():number {
            return this._data.get("room_id") as number;
        }

        public setRoomId(data:number):void {
            this._data.set("room_id", data); 
        }

        public getOwnerUuid():string {
            return this._data.get("owner_uuid") as string;
        }

        public setOwnerUuid(data:string):void {
            this._data.set("owner_uuid", data); 
        }

        public getKwargs():string {
            return this._data.get("kwargs") as string;
        }

        public setKwargs(data:string):void {
            this._data.set("kwargs", data); 
        }

        public getRoomUuid():string {
            return this._data.get("room_uuid") as string;
        }

        public setRoomUuid(data:string):void {
            this._data.set("room_uuid", data); 
        }

        public getClubId():number {
            return this._data.get("club_id") as number;
        }

        public setClubId(data:number):void {
            this._data.set("club_id", data); 
        }

        public getOwnerInfo():string {
            return this._data.get("owner_info") as string;
        }

        public setOwnerInfo(data:string):void {
            this._data.set("owner_info", data); 
        }

    }

    export class CreateRoomResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getName());
            this.initData();
        }

        public getName():string {
            return "game.CreateRoomResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

    }

    export class EnterRoomRequestMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getName());
            this.initData();
        }

        public getName():string {
            return "game.EnterRoomRequest";
        }

        public getRoomId():number {
            return this._data.get("room_id") as number;
        }

        public setRoomId(data:number):void {
            this._data.set("room_id", data); 
        }

        public getPlayer():string {
            return this._data.get("player") as string;
        }

        public setPlayer(data:string):void {
            this._data.set("player", data); 
        }

        public getInfo():string {
            return this._data.get("info") as string;
        }

        public setInfo(data:string):void {
            this._data.set("info", data); 
        }

    }

    export class EnterRoomResponseMessage extends MessageBase {
        public constructor() {
            super();
            this._classType = ProtoMng.Instance.build(this.getName());
            this.initData();
        }

        public getName():string {
            return "game.EnterRoomResponse";
        }

        public getCode():number {
            return this._data.get("code") as number;
        }

        public setCode(data:number):void {
            this._data.set("code", data); 
        }

        public getRoomId():number {
            return this._data.get("room_id") as number;
        }

        public setRoomId(data:number):void {
            this._data.set("room_id", data); 
        }

        public getOwner():string {
            return this._data.get("owner") as string;
        }

        public setOwner(data:string):void {
            this._data.set("owner", data); 
        }

        public getKwargs():string {
            return this._data.get("kwargs") as string;
        }

        public setKwargs(data:string):void {
            this._data.set("kwargs", data); 
        }

        public getRestCards():number {
            return this._data.get("rest_cards") as number;
        }

        public setRestCards(data:number):void {
            this._data.set("rest_cards", data); 
        }

        public getPlayer():PlayerMessage[] {
            let subData = this._data.get("player") as PlayerMessage[];
            let messageArray:PlayerMessage[] = []; 
            for(let i = 0; i<subData.length; i++)
            {
                let message = new PlayerMessage();
                message.setData(subData[i]);
                messageArray.push(message);
            }
            return messageArray;
        }

        public setPlayer(data:PlayerMessage[]):void {
            for(let i = 0; i < data.length; i++)
            {
            this._data.add("player", data[i].getData());
            }
        }

        public addPlayer(data:PlayerMessage):void {
            this._data.add("player", data.getData());
        }

        public getOwnerInfo():string {
            return this._data.get("owner_info") as string;
        }

        public setOwnerInfo(data:string):void {
            this._data.set("owner_info", data); 
        }

        public getRoomType():number {
            return this._data.get("room_type") as number;
        }

        public setRoomType(data:number):void {
            this._data.set("room_type", data); 
        }

    }

}