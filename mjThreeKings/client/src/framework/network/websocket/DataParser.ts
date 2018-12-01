/**
 * Created by wanghongliang on 7/25/2018.
 * 分包 解包
 *      把后台返回的二进制数据解码 并且才分成包数据 然后传递给包解析器(PackParser.js)
 */

class DataParser{
    private _buffer:ArrayBuffer = null;
    private _headerSize:number = 10;
    private _callback:(pack:Pack)=>void = null;

    public constructor(callback:(pack:Pack)=>void) {
        this._buffer = null;
        this._headerSize = 10;
        this._callback = callback;
    }

    public Parse(arrBuffer:ArrayBuffer) {
        if (!arrBuffer) return;
        this.FillBuffer(arrBuffer);
        if (!this.CheckHeader()) return;
        var pack = this.ParseHeader(this._buffer);

        if (!this.CheckBody(pack)) return;
        pack.data = DataParser.CopyArrayBuffer(this._buffer, this._headerSize, pack.bodySize);
        this.ParseBody(pack);
        var packTotalLen = this._headerSize + pack.bodySize;

        if (arrBuffer.byteLength > packTotalLen) {
            console.log("byteLength > packTotalLen-->出现粘包");
            var buffer = DataParser.CopyArrayBuffer(this._buffer, packTotalLen);
            this._buffer = null;
            this.Parse(buffer);
        } else {
            this._buffer = null;
        }
    }

    private CheckBody(pack:Pack) {
        if (pack.bodySize > this._buffer.byteLength - this._headerSize) {
            console.log('-->body data not enough');
            return false;
        }
        return true;
    }

    private CheckHeader():boolean {
        if (this._buffer.byteLength < this._headerSize) {
            console.log('-->buffer bytelength less than header size min limit');
            return false;
        }
        return true;
    }

    private FillBuffer(arrBuffer:ArrayBuffer):void {
        if (!this._buffer) {
            this._buffer = arrBuffer;
        } else {
            this._buffer = DataParser.MergeArrayBuffer(this._buffer, arrBuffer);
        }
    }

    private ParseHeader(buff:ArrayBuffer) {
        var dv = new DataView(buff);
        var pack = new Pack();
        pack.bodySize = dv.getInt32(0);
        pack.bodySize = pack.bodySize - this._headerSize;
        pack.seq = dv.getInt16(4);
        pack.spaceId = dv.getInt16(6);
        pack.cmd = dv.getInt16(8);

        return pack;
    }

    private ParseBody(pack) {
        if (this._callback) {
            this._callback(pack);
        }
    }

        /**
     * 合并两个ArrayBuffer 返回一个新的ArrayBuffer
     * @param buff1
     * @param buff2
     * @returns {ArrayBuffer}
     */
	public static MergeArrayBuffer(buffer1:ArrayBuffer, buffer2:ArrayBuffer):ArrayBuffer{
		let len1 = buffer1.byteLength;
		let len2 = buffer2.byteLength;

		let ret = new ArrayBuffer(len1 + len2);
		
		let retI8a = new Int8Array(ret);
        let i8a = new Int8Array(buffer1);
        let i=0;
        for(i=0; i<len1; i++) {
            retI8a[i] = i8a[i];
        }
        i8a = new Int8Array(buffer2);
        for(i=0; i<len2; i++) {
            retI8a[len1+i] = i8a[i];
        }

		return ret;
	}

    /**
     * 拷贝ArrayBuffer的数据返回一个新的ArrayBuffer
     * @param buff  原数据
     * @param offset 偏移下标
     * @param len   拷贝长度
     * @returns {ArrayBuffer}
     */
    public static CopyArrayBuffer(buff:ArrayBuffer, offset:number, len?:number):ArrayBuffer {
        var buffLen = buff.byteLength;
        var retArrayBuff = null;
        var retLen = len;
        if(!len) {
            len = buffLen - offset;
        }
        retArrayBuff = new ArrayBuffer(len);
        if(len == 0) {
            return retArrayBuff;
        }
        var reti8a = new Int8Array(retArrayBuff);
        var i8a = new Int8Array(buff, offset);
        for(var i=0; i<len; i++) {
            reti8a[i] = i8a[i];
        }
        return retArrayBuff;
    }
}