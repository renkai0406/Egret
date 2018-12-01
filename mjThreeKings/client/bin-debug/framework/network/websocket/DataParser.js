/**
 * Created by wanghongliang on 7/25/2018.
 * 分包 解包
 *      把后台返回的二进制数据解码 并且才分成包数据 然后传递给包解析器(PackParser.js)
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataParser = (function () {
    function DataParser(callback) {
        this._buffer = null;
        this._headerSize = 10;
        this._callback = null;
        this._buffer = null;
        this._headerSize = 10;
        this._callback = callback;
    }
    DataParser.prototype.Parse = function (arrBuffer) {
        if (!arrBuffer)
            return;
        this.FillBuffer(arrBuffer);
        if (!this.CheckHeader())
            return;
        var pack = this.ParseHeader(this._buffer);
        if (!this.CheckBody(pack))
            return;
        pack.data = DataParser.CopyArrayBuffer(this._buffer, this._headerSize, pack.bodySize);
        this.ParseBody(pack);
        var packTotalLen = this._headerSize + pack.bodySize;
        if (arrBuffer.byteLength > packTotalLen) {
            console.log("byteLength > packTotalLen-->出现粘包");
            var buffer = DataParser.CopyArrayBuffer(this._buffer, packTotalLen);
            this._buffer = null;
            this.Parse(buffer);
        }
        else {
            this._buffer = null;
        }
    };
    DataParser.prototype.CheckBody = function (pack) {
        if (pack.bodySize > this._buffer.byteLength - this._headerSize) {
            console.log('-->body data not enough');
            return false;
        }
        return true;
    };
    DataParser.prototype.CheckHeader = function () {
        if (this._buffer.byteLength < this._headerSize) {
            console.log('-->buffer bytelength less than header size min limit');
            return false;
        }
        return true;
    };
    DataParser.prototype.FillBuffer = function (arrBuffer) {
        if (!this._buffer) {
            this._buffer = arrBuffer;
        }
        else {
            this._buffer = DataParser.MergeArrayBuffer(this._buffer, arrBuffer);
        }
    };
    DataParser.prototype.ParseHeader = function (buff) {
        var dv = new DataView(buff);
        var pack = new Pack();
        pack.bodySize = dv.getInt32(0);
        pack.bodySize = pack.bodySize - this._headerSize;
        pack.seq = dv.getInt16(4);
        pack.spaceId = dv.getInt16(6);
        pack.cmd = dv.getInt16(8);
        return pack;
    };
    DataParser.prototype.ParseBody = function (pack) {
        if (this._callback) {
            this._callback(pack);
        }
    };
    /**
 * 合并两个ArrayBuffer 返回一个新的ArrayBuffer
 * @param buff1
 * @param buff2
 * @returns {ArrayBuffer}
 */
    DataParser.MergeArrayBuffer = function (buffer1, buffer2) {
        var len1 = buffer1.byteLength;
        var len2 = buffer2.byteLength;
        var ret = new ArrayBuffer(len1 + len2);
        var retI8a = new Int8Array(ret);
        var i8a = new Int8Array(buffer1);
        var i = 0;
        for (i = 0; i < len1; i++) {
            retI8a[i] = i8a[i];
        }
        i8a = new Int8Array(buffer2);
        for (i = 0; i < len2; i++) {
            retI8a[len1 + i] = i8a[i];
        }
        return ret;
    };
    /**
     * 拷贝ArrayBuffer的数据返回一个新的ArrayBuffer
     * @param buff  原数据
     * @param offset 偏移下标
     * @param len   拷贝长度
     * @returns {ArrayBuffer}
     */
    DataParser.CopyArrayBuffer = function (buff, offset, len) {
        var buffLen = buff.byteLength;
        var retArrayBuff = null;
        var retLen = len;
        if (!len) {
            len = buffLen - offset;
        }
        retArrayBuff = new ArrayBuffer(len);
        if (len == 0) {
            return retArrayBuff;
        }
        var reti8a = new Int8Array(retArrayBuff);
        var i8a = new Int8Array(buff, offset);
        for (var i = 0; i < len; i++) {
            reti8a[i] = i8a[i];
        }
        return retArrayBuff;
    };
    return DataParser;
}());
__reflect(DataParser.prototype, "DataParser");
