//--------------------------------------------------
// 数据表管理器基类
//     20180704 wanghongliang
//--------------------------------------------------

class ConfigMngBase {

	private _configDic = new nano.Map<string, nano.Map<number, ConfigDataBase>>();

	public constructor() {

		
	}

	public LoadConfig():void{
		let resMap = this.GetResMap();

		let typeNameList = resMap.Keys();

		this._configDic.Clear();

		for(let i = 0; i < typeNameList.length; i++)
		{
			let typeName = typeNameList[i];
			let res = resMap.Get(typeName);

			let buffer = RES.getRes(res);

			let byteArray = new egret.ByteArray(buffer);

			let configMap = this.BinaryParse(byteArray, typeName);

			this._configDic.Add(typeName, configMap);
		}
	}

	public GetResMap():nano.Map<string, string>{
		return null;
	}


	protected BinaryParse(binary:egret.ByteArray, typeName:string):nano.Map<number, ConfigDataBase>{


			let configMap = new nano.Map<number, ConfigDataBase>();

			let configArrayLength = binary.readUnsignedInt();

			let configArray:number[] = [];

			for(let i = 0; i < configArrayLength ; i++)
			{
				configArray.push(binary.readInt());
			}


			let columnListCount = binary.readInt();


			let columList:Array<[string,number]> = [];
			for(let i = 0; i < columnListCount; i++)
			{
				let key = binary.readUTF();
				let value = binary.readByte();


				columList.push([key, value]);
			}

			let headIndex = binary.position;

			for(let i = 0; i< configArray.length; i++)
			{
				let configData:ConfigDataBase =  eval("new " + typeName + "()") as ConfigDataBase;

				let id = configData.Init(binary, headIndex + configArray[i], columList);

				configMap.Add(id, configData);
			}
			

			return configMap;

	}



	protected GetConfigBase(configName:string, id:number):ConfigDataBase{
		let valueMap = this._configDic.Get(configName);
		return valueMap.Get(id);
	}


	protected HasConfigBase(configName:string, id:number):boolean{

		let containConfig = this._configDic.Contains(configName);
		if(!containConfig)
		{
			return false;
		}

		let valueMap = this._configDic.Get(configName);
		return valueMap.Contains(id);
	}

	protected GetAllConfigBase(configName:string):nano.Map<number,ConfigDataBase>{
		return this._configDic.Get(configName);
	}

	


}