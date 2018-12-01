//--------------------------------------------------
// 数据表管基类
//     20180704 wanghongliang
//--------------------------------------------------
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataTypeCode;
(function (DataTypeCode) {
    //
    // 摘要:
    //     空引用。
    DataTypeCode[DataTypeCode["Empty"] = 0] = "Empty";
    //
    // 摘要:
    //     简单类型，表示 true 或 false 的布尔值。
    DataTypeCode[DataTypeCode["Boolean"] = 3] = "Boolean";
    //
    // 摘要:
    //     整型，表示值介于 0 到 255 之间的无符号 8 位整数。
    DataTypeCode[DataTypeCode["Byte"] = 6] = "Byte";
    //
    // 摘要:
    //     整型，表示值介于 -2147483648 到 2147483647 之间的有符号 32 位整数。
    DataTypeCode[DataTypeCode["Int32"] = 9] = "Int32";
    //
    // 摘要:
    //     整型，表示值介于 0 到 4294967295 之间的无符号 32 位整数。
    DataTypeCode[DataTypeCode["UInt32"] = 10] = "UInt32";
    //
    // 摘要:
    //     浮点型，表示从大约 1.5 x 10 -45 到 3.4 x 10 38 且精度为 7 位的值。
    DataTypeCode[DataTypeCode["Single"] = 13] = "Single";
    //
    // 摘要:
    //     浮点型，表示从大约 5.0 x 10 -324 到 1.7 x 10 308 且精度为 15 到 16 位的值。
    DataTypeCode[DataTypeCode["Double"] = 14] = "Double";
    //
    // 摘要:
    //     密封类类型，表示 Unicode 字符串。
    DataTypeCode[DataTypeCode["String"] = 18] = "String";
    DataTypeCode[DataTypeCode["BooleanArr1"] = 23] = "BooleanArr1";
    DataTypeCode[DataTypeCode["ByteArr1"] = 26] = "ByteArr1";
    DataTypeCode[DataTypeCode["Int32Arr1"] = 29] = "Int32Arr1";
    DataTypeCode[DataTypeCode["UInt32Arr1"] = 30] = "UInt32Arr1";
    DataTypeCode[DataTypeCode["SingleArr1"] = 33] = "SingleArr1";
    DataTypeCode[DataTypeCode["DoubleArr1"] = 34] = "DoubleArr1";
    DataTypeCode[DataTypeCode["StringArr1"] = 38] = "StringArr1";
    DataTypeCode[DataTypeCode["BooleanArr2"] = 43] = "BooleanArr2";
    DataTypeCode[DataTypeCode["ByteArr2"] = 46] = "ByteArr2";
    DataTypeCode[DataTypeCode["Int32Arr2"] = 49] = "Int32Arr2";
    DataTypeCode[DataTypeCode["UInt32Arr2"] = 50] = "UInt32Arr2";
    DataTypeCode[DataTypeCode["SingleArr2"] = 53] = "SingleArr2";
    DataTypeCode[DataTypeCode["DoubleArr2"] = 54] = "DoubleArr2";
    DataTypeCode[DataTypeCode["StringArr2"] = 58] = "StringArr2";
})(DataTypeCode || (DataTypeCode = {}));
var ConfigDataBase = (function () {
    function ConfigDataBase() {
        this.ConfigDataDic = {};
    }
    Object.defineProperty(ConfigDataBase.prototype, "Id", {
        get: function () { return this.ConfigDataDic["Id"]; },
        enumerable: true,
        configurable: true
    });
    ConfigDataBase.prototype.Get = function (key) {
        return this.ConfigDataDic[key];
    };
    ConfigDataBase.prototype.Init = function (sources, offset, columnList) {
        ConfigDataBase.source = sources;
        ConfigDataBase.source.position = offset;
        for (var i = 0; i < columnList.length; i++) {
            this.InitColumn(columnList[i]);
        }
        return this.Id;
    };
    ConfigDataBase.prototype.InitColumn = function (pair) {
        switch (pair[1]) {
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
    };
    ConfigDataBase.ReadBoolean = function () {
        return ConfigDataBase.source.readBoolean();
    };
    ConfigDataBase.ReadByte = function () {
        return ConfigDataBase.source.readByte();
    };
    ConfigDataBase.ReadInt32 = function () {
        return ConfigDataBase.source.readInt();
    };
    ConfigDataBase.ReadUInt32 = function () {
        return ConfigDataBase.source.readUnsignedInt();
    };
    ConfigDataBase.ReadSingle = function () {
        return ConfigDataBase.source.readFloat();
    };
    ConfigDataBase.ReadDouble = function () {
        return ConfigDataBase.source.readDouble();
    };
    ConfigDataBase.ReadString = function () {
        return ConfigDataBase.source.readUTF();
    };
    ConfigDataBase.ReadBooleanArr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadBoolean());
        }
        return ret;
    };
    ConfigDataBase.ReadByteArr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadByte());
        }
        return ret;
    };
    ConfigDataBase.ReadInt32Arr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadInt32());
        }
        return ret;
    };
    ConfigDataBase.ReadUInt32Arr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadUInt32());
        }
        return ret;
    };
    ConfigDataBase.ReadSingleArr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadSingle());
        }
        return ret;
    };
    ConfigDataBase.ReadDoubleArr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadDouble());
        }
        return ret;
    };
    ConfigDataBase.ReadStringArr1 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret.push(ConfigDataBase.ReadString());
        }
        return ret;
    };
    ConfigDataBase.ReadBooleanArr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadBoolean();
            }
        }
        return ret;
    };
    ConfigDataBase.ReadByteArr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadByte();
            }
        }
        return ret;
    };
    ConfigDataBase.ReadInt32Arr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadInt32();
            }
        }
        return ret;
    };
    ConfigDataBase.ReadUInt32Arr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadUInt32();
            }
        }
        return ret;
    };
    ConfigDataBase.ReadSingleArr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadSingle();
            }
        }
        return ret;
    };
    ConfigDataBase.ReadDoubleArr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadDouble();
            }
        }
        return ret;
    };
    ConfigDataBase.ReadStringArr2 = function () {
        var a1 = ConfigDataBase.ReadByte();
        var a2 = ConfigDataBase.ReadByte();
        var ret = [];
        for (var aindex1 = 0; aindex1 < a1; aindex1++) {
            ret[aindex1] = [];
            for (var aindex2 = 0; aindex2 < a2; aindex2++) {
                ret[aindex1][aindex2] = ConfigDataBase.ReadString();
            }
        }
        return ret;
    };
    return ConfigDataBase;
}());
__reflect(ConfigDataBase.prototype, "ConfigDataBase");
