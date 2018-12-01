//--------------------------------------------------
// 数据表管基类
//     20180704 wanghongliang
//--------------------------------------------------

enum DataTypeCode
{
    //
    // 摘要:
    //     空引用。
    Empty = 0,
    //
    // 摘要:
    //     简单类型，表示 true 或 false 的布尔值。
    Boolean = 3,
    //
    // 摘要:
    //     整型，表示值介于 0 到 255 之间的无符号 8 位整数。
    Byte = 6,
    //
    // 摘要:
    //     整型，表示值介于 -2147483648 到 2147483647 之间的有符号 32 位整数。
    Int32 = 9,
    //
    // 摘要:
    //     整型，表示值介于 0 到 4294967295 之间的无符号 32 位整数。
    UInt32 = 10,
    //
    // 摘要:
    //     浮点型，表示从大约 1.5 x 10 -45 到 3.4 x 10 38 且精度为 7 位的值。
    Single = 13,
    //
    // 摘要:
    //     浮点型，表示从大约 5.0 x 10 -324 到 1.7 x 10 308 且精度为 15 到 16 位的值。
    Double = 14,
    //
    // 摘要:
    //     密封类类型，表示 Unicode 字符串。
    String = 18,


    BooleanArr1 = 23,

    ByteArr1 = 26,

    Int32Arr1 = 29,

    UInt32Arr1 = 30,

    SingleArr1 = 33,

    DoubleArr1 = 34,

    StringArr1 = 38,


    BooleanArr2 = 43,

    ByteArr2 = 46,

    Int32Arr2 = 49,

    UInt32Arr2 = 50,

    SingleArr2 = 53,

    DoubleArr2 = 54,

    StringArr2 = 58,
}

class ConfigDataBase {
    private static source:egret.ByteArray;
    private static index:number;

	public ConfigDataDic:{[key:string]: any;} = {}

	public get Id():number{return this.ConfigDataDic["Id"] as number;}

	public constructor() {
	}


	public Get<T>(key:string):T{
		return this.ConfigDataDic[key] as T;
	}

	public Init(sources:egret.ByteArray, offset:number, columnList:Array<[string,number]>):number{
		ConfigDataBase.source = sources
		ConfigDataBase.source.position = offset;

		for(let i = 0; i < columnList.length; i++)
		{
			this.InitColumn(columnList[i]);
		}
		
		return this.Id;
	}

 	private InitColumn(pair:[string, number]):void
    {
        switch (pair[1])
        {
            //基本类型
            case DataTypeCode.Boolean:
				this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadBoolean();
                break;
            case DataTypeCode.Byte:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadByte();
                break;
            case DataTypeCode.Int32:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadInt32();
                break;
            case DataTypeCode.UInt32:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadUInt32();
                break;
            case DataTypeCode.Single:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadSingle();
                break;
            case DataTypeCode.Double:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadDouble();
                break;
            case DataTypeCode.String:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadString();
                break;
            //一维数组
            case DataTypeCode.BooleanArr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadBooleanArr1();
                break;
            case DataTypeCode.ByteArr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadByteArr1();
                break;
            case DataTypeCode.Int32Arr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadInt32Arr1();
                break;
            case DataTypeCode.UInt32Arr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadUInt32Arr1();
                break;
            case DataTypeCode.SingleArr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadSingleArr1();
                break;
            case DataTypeCode.DoubleArr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadDoubleArr1();
                break;
            case DataTypeCode.StringArr1:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadStringArr1();
                break;
            //二维数组
            case DataTypeCode.BooleanArr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadBooleanArr2();
                break;
            case DataTypeCode.ByteArr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadByteArr2();
                break;
            case DataTypeCode.Int32Arr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadInt32Arr2();
                break;
            case DataTypeCode.UInt32Arr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadUInt32Arr2();
                break;
            case DataTypeCode.SingleArr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadSingleArr2();
                break;
            case DataTypeCode.DoubleArr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadDoubleArr2();
                break;
            case DataTypeCode.StringArr2:
                this.ConfigDataDic[pair[0]] = ConfigDataBase.ReadStringArr2();
                break;

        }
	}

	private static ReadBoolean():boolean{
		return ConfigDataBase.source.readBoolean();
	}


    private static ReadByte():number
    {
		return ConfigDataBase.source.readByte();
    }

    private static ReadInt32():number
    {
		return ConfigDataBase.source.readInt();
    }

    private static ReadUInt32():number
    {
        return ConfigDataBase.source.readUnsignedInt();
    }

    private static ReadSingle():number
    {
		return ConfigDataBase.source.readFloat();
    }

    private static ReadDouble():number
    {
        return ConfigDataBase.source.readDouble();
    }

    private static ReadString():string
    {
		return ConfigDataBase.source.readUTF();
    }

    private static ReadBooleanArr1():boolean[]
    {
        let a1:number = ConfigDataBase.ReadByte();
		let ret:boolean[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadBoolean());
        }
        return ret;
    }

    private static ReadByteArr1():number[]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let ret:number[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadByte());
        }
        return ret;
    }

    private static ReadInt32Arr1():number[]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let ret:number[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadInt32());
        }
        return ret;
    }

    private static ReadUInt32Arr1():number[]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let ret:number[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadUInt32());
        }
        return ret;
    }

    private static ReadSingleArr1():number[]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let ret:number[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadSingle());
        }
        return ret;
    }

    private static ReadDoubleArr1():number[]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let ret:number[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadDouble());
        }
        return ret;
    }

    private static ReadStringArr1():string[]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let ret:string[] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret.push(ConfigDataBase.ReadString());
        }
        return ret;
    }


    private static ReadBooleanArr2():boolean[][]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:boolean[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadBoolean();
            }
        }
        return ret;
    }

    private static ReadByteArr2():number[][]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:number[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadByte();
            }
        }
        return ret;
    }

    private static ReadInt32Arr2():number[][]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:number[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadInt32();
            }
        }
        return ret;
    }

    private static ReadUInt32Arr2():number[][]
    {
        let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:number[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadUInt32();
            }
        }
        return ret;
    }


    private static ReadSingleArr2():number[][]
    {
         let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:number[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadSingle();
            }
        }
        return ret;
    }

    private static ReadDoubleArr2():number[][]
    {
         let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:number[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadDouble();
            }
        }
        return ret;
    }

    private static ReadStringArr2():string[][]
    {
         let a1:number = ConfigDataBase.ReadByte();
        let a2:number = ConfigDataBase.ReadByte();
		let ret:string[][] = [];
        for (let aindex1 = 0; aindex1 < a1; aindex1++)
        {
			ret[aindex1] = [];
            for (let aindex2 = 0; aindex2 < a2; aindex2++)
            {
				ret[aindex1][aindex2] = ConfigDataBase.ReadString();
            }
        }
        return ret;
    }

}