class MessageBase {
	_classType:any;
	_data:any;
	public constructor() {
	}
	
	public getMessageProtoName():string {
		return "";
	}

	public setData(data:any):void{
		this._data = data;
	}

	public getData():any{
		return this._data;
	}

	public initData():void{
		this._data = new this._classType();
	}

	public deserialize(buff:ArrayBuffer):void {
        this._data = this._classType.decode(buff);  
    }

    public serialize():ArrayBuffer {
        var arraybuffer: ArrayBuffer = this._data.toArrayBuffer();
        return arraybuffer;
    }
}