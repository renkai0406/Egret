var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ByteArray = (function () {
    function ByteArray(bytesBuff) {
        this._position = 0;
        this._length = 0;
        this._endian = false;
        this._bytesBuff = bytesBuff;
        this._bytesBuffView = null;
        if (bytesBuff) {
            this._bytesBuffView = new DataView(this._bytesBuff);
        }
        else {
            this._fmt = [];
            this._data = [];
        }
        this._position = 0;
        this._length = 0;
    }
    ByteArray.prototype.Destory = function () {
        this._bytesBuff = null;
        this._fmt = null;
        this._data = null;
        this._bytesBuff = null;
        this._bytesBuffView = null;
    };
    ByteArray.prototype.ReadByte = function () {
        var val = this._bytesBuffView.getInt8(this._position);
        this._position += 1;
        return val;
    };
    ByteArray.prototype.WriteByte = function (b) {
        this._fmt.push('b');
        this._data.push(b);
        this._length += 1;
    };
    ByteArray.prototype.ReadShort = function () {
        var val = this._bytesBuffView.getInt16(this._position, this._endian);
        this._position += 2;
        return val;
    };
    ByteArray.prototype.WriteShort = function (h) {
        this._fmt.push('h');
        this._data.push(h);
        this._length += 2;
    };
    ByteArray.prototype.ReadInt = function () {
        var val = this._bytesBuffView.getInt32(this._position, this._endian);
        this._position += 4;
        return val;
    };
    ByteArray.prototype.WriteInt = function (i) {
        this._fmt.push('i');
        this._data.push(i);
        this._length += 4;
    };
    ByteArray.prototype.ReadDouble = function () {
        var val = this._bytesBuffView.getFloat64(this._position, this._endian);
        this._position += 8;
        return val;
    };
    ByteArray.prototype.WriteDouble = function (d) {
        this._fmt.push('d');
        this._data.push(d);
        this._length += 8;
    };
    ByteArray.prototype.ReadString = function () {
        var l = this.ReadShort();
        if (l < 1)
            return '';
        var u8Arr = new Uint8Array(this._bytesBuff, this._position);
        var arr = [];
        for (var i = 0; i < l; i++) {
            arr[i] = u8Arr[i];
        }
        var ret = Utf8.Decode(arr);
        this._position += l;
        return ret;
    };
    ByteArray.prototype.WriteMultiByte = function (str) {
        var len = str.length;
        for (var i = 0; i < len; i++) {
            this.WriteByte(str.charCodeAt(i));
        }
    };
    ByteArray.prototype.UintCharArrToString = function (arr) {
        var ret = '';
        for (var i = 0; i < arr.length; i++) {
            ret += String.fromCharCode(arr[i]);
        }
        return ret;
    };
    ByteArray.prototype.WriteString = function (s, writelen) {
        var arr = Utf8.Encode(s);
        if (writelen || typeof writelen == "undefined")
            this.WriteShort(arr.length);
        this._fmt.push('s');
        this._data.push(this.UintCharArrToString(arr));
        this._length += arr.length;
    };
    ByteArray.prototype.getbytes = function () {
        if (this._bytesBuff) {
            return this._bytesBuff;
        }
        else {
            var buff = new ArrayBuffer(this._length);
            var buffView = new DataView(buff);
            var len = this._fmt.length;
            var dataType = '';
            var elm = 0;
            var index = 0;
            for (var i = 0; i < len; i++) {
                dataType = this._fmt[i];
                elm = this._data[i];
                if (dataType == 'b') {
                    buffView.setInt8(index, elm);
                    index += 1;
                }
                else if (dataType == 'h') {
                    buffView.setInt16(index, elm, this._endian);
                    index += 2;
                }
                else if (dataType == 'i') {
                    buffView.setInt32(index, elm, this._endian);
                    index += 4;
                }
                else if (dataType == 'd') {
                    buffView.setFloat64(index, elm, this._endian);
                    index += 8;
                }
                else if (dataType == 's') {
                    index += this.FillArryBuffWithString(elm, buff, index);
                }
            }
            return buff;
        }
    };
    ByteArray.prototype.FillArryBuffWithString = function (strData, arryBuff, offset) {
        if (!strData)
            return;
        var len = strData.length;
        var tempDataView = new DataView(arryBuff, offset);
        for (var i = 0; i < len; i++) {
            tempDataView.setUint8(i, strData.charCodeAt(i));
        }
        return len;
    };
    return ByteArray;
}());
__reflect(ByteArray.prototype, "ByteArray");
