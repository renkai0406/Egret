// TypeScript file
class BaseInfoUtil{

    public static NOT_NULL_WARN:string = "不能为空！";
    public static ILLEGAL_WARN:string = "请填写正确的";
    public static DIFF_PSD_WARN:string = "两次输入密码不一致！";

    public static PHONE_LENGTH:number = 11;
    public static VERCODE_LENGTH:number = 4;

    public static REGEX_PHONE = "^1(3|5|8)[0-9]{9}$";
    public static REGET_NUMBER = "^[0-9]+";


    public static checkPhone(phone : string) : string{
        if(phone==null || phone == "" || phone.indexOf(" ") != -1)
            return "手机号码" + this.NOT_NULL_WARN;
        /*if(phone.length != this.PHONE_LENGTH)
            return ;
        
        return "";*/
        var result = phone.match(this.REGEX_PHONE);
        return !result? this.ILLEGAL_WARN + "手机号！": null;
    }

    public static checkVerCode(verCode : string):string{
        if(verCode == null || verCode == ""){
            return "验证码" + this.NOT_NULL_WARN;
        }
        if(verCode.indexOf(" ") != -1 || verCode.length != this.VERCODE_LENGTH){
            return this.ILLEGAL_WARN + "验证码！";
        }
        return null;
    }

    public static checkUserName(name : string) : string{
        if(name == null || name == "")
            return "昵称" + this.NOT_NULL_WARN;
        if(name.indexOf(" ") != -1)
            return this.ILLEGAL_WARN + "昵称！";
        return null;
    }

    public static checkPassword(psd : string) : string{
        if(psd == null || psd == "")
            return "密码" + this.NOT_NULL_WARN;
        if(psd.indexOf(" ") != -1)
            return this.ILLEGAL_WARN + "密码！";
        return null;
    }

    public static checkRepeatPsd(psd : string, psd_repeat : string) : string{
        if(psd_repeat == null || psd != psd_repeat)
            return this.DIFF_PSD_WARN;
        return null;
    }

    public static isNumber(value:string):boolean{
        return value.match(this.REGET_NUMBER) != null;
    }
}