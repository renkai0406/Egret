// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Retrieve = (function (_super) {
    __extends(Retrieve, _super);
    function Retrieve() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.leftTime = 0;
        _this.vercode_accepted = false;
        return _this;
    }
    Retrieve.prototype.GetSkinFile = function () {
        return "exml/retrievepage.exml";
    };
    Retrieve.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.panel_first.visible = true;
        this.panel_second.visible = false;
        this.mainPanel.closeButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCloseButtonClick, this);
        /*//[离线测试注释]
        this.btn_getIdentity.addEventListener(egret.TouchEvent.TOUCH_TAP, this.getiDentity_clicked_callback, this);
        */
        this.btn_submit.addEventListener(egret.TouchEvent.TOUCH_TAP, this.submit_callback, this);
    };
    Retrieve.prototype.getiDentity_clicked_callback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        var phone = this.tinput_phone.text;
        if (BaseInfoUtil.isNumber(this.btn_getIdentity.label)) {
            //[nocomplete]获取验证未解除时间限制
            egret.log("获取验证未解除时间限制:" + this.btn_getIdentity.label);
            return; //已获取过验证码且时间限制未解除
        }
        var result = BaseInfoUtil.checkPhone(phone);
        if (result != null) {
            //[nocomplete]显示结果
            //打印错误信息result
            egret.log("phone:" + phone + ",result:" + result);
            return;
        }
        this.phone = phone;
        var verCodeReq = new lobby.VerificationCodeRequestMessage();
        verCodeReq.setMobile(phone);
        verCodeReq.setRequestType(1);
        egret.log("phone:" + phone);
        NetManager.Instance.SendMsg(verCodeReq, this.getVerCode_response_callback.bind(this));
        this.btn_getIdentity.label = ValidateUtil.IN_IDENTITY;
    };
    Retrieve.prototype.getIdentity_time_callback = function (timer, e) {
        this.leftTime -= 1;
        if (this.leftTime == 0) {
            this.btn_getIdentity.enabled = true;
            this.btn_getIdentity.label = ValidateUtil.IDENTITY;
        }
        else {
            this.btn_getIdentity.label = this.leftTime + "秒";
        }
    };
    Retrieve.prototype.getVerCode_response_callback = function (msgSend, msgRec) {
        var verCodeRes = msgRec;
        var time = verCodeRes.getExpireTime();
        var status = verCodeRes.getRequestStatus();
        egret.log("time:" + time);
        egret.log("status:" + status);
        if (status == 0) {
            //请求成功,设置验证时间倒计时
            this.vercode_accepted = true;
            var time_number = Number(time);
            var timer = new egret.Timer(1000, time_number);
            this.leftTime = time_number;
            timer.addEventListener(egret.TimerEvent.TIMER, this.getIdentity_time_callback, this);
            timer.start();
            this.btn_getIdentity.enabled = false;
            this.btn_getIdentity.label = time_number + "秒";
        }
        else if (status == 1) {
            //[nocomplete]请求失败
            egret.log("获取验证码请求失败");
        }
        else {
        }
    };
    Retrieve.prototype.submit_callback = function () {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        /*//[离线测试注释]
        if(!this.vercode_accepted){
            //[uncompleted]
            egret.log("请先获取验证码！")
            return;
        }*/
        if (this.btn_submit.label == Retrieve.NEXT_STEP) {
            this.validate();
        }
        else if (this.btn_submit.label == Retrieve.SUBMIT) {
            this.retrieve();
        }
    };
    Retrieve.prototype.validate = function () {
        /*//[离线测试注释]
        var verCode : string = this.tinput_identify.text;
        
        var result : string = BaseInfoUtil.checkVerCode(verCode);
        if(result != null){
            //[nocomplete]验证码错误信息显示
            egret.log(result);
            return;
        }

        let checkVerReq = new lobby.CheckVerificationCodeRequestMessage();
        checkVerReq.setMobile(this.phone);
        checkVerReq.setVerCode(verCode);
        NetManager.Instance.SendMsg(checkVerReq, this.checkVerCode_response_callback.bind(this));
        this.btn_submit.label = ValidateUtil.WAITING;*/
        //[离线测试]
        //[begin]
        this.btn_submit.label = Retrieve.SUBMIT;
        //[end]
    };
    Retrieve.prototype.checkVerCode_response_callback = function (msgSend, msgRec) {
        var checkRes = msgRec;
        var status = checkRes.getCheckStatus();
        egret.log("验证码检查response：\nstatus:" + status);
        if (status == 0) {
            //验证成功,跳转
            this.panel_first.visible = false;
            this.btn_submit.label = Retrieve.SUBMIT;
            this.panel_second.visible = true;
            this.panel_second.enabled = true;
        }
        else if (status == 1) {
            this.btn_submit.label = Retrieve.NEXT_STEP;
            //[uncompleted]请求过期
            egret.log("验证码过期");
        }
        else if (status == 2) {
            this.btn_submit.label = Retrieve.NEXT_STEP;
            //[uncompleted]请求失败
            egret.log("验证码检查请求失败");
        }
        else {
        }
    };
    Retrieve.prototype.retrieve = function () {
        /*//[离线测试注释]
        var psd = this.tinput_password.text;
        var repeat = this.tinput_repeat.text;
        var result = BaseInfoUtil.checkPassword(psd);
        if(result){
            //[uncompleted]
            egret.log(result);
            return;
        }
         result = BaseInfoUtil.checkRepeatPsd(psd, repeat);
        if(result){
            //[uncompleted]
            egret.log(result);
            return;
        }

        //重置
        let retReq = new lobby.();
        regReq.setNickname(name);
        regReq.setMobile(this.phone);
        regReq.setPassword(psd);
        NetManager.Instance.SendMsg(regReq, this.register_response_callback.bind(this));
        this.btn_submit.label = ValidateUtil.WAITING;*/
        //[离线测试]
        //[begin]
        this.Close();
        //[end]
    };
    Retrieve.prototype.retrieve_response_callback = function (msgSend, msgRec) {
        var regRes = msgRec;
        var status = regRes.getRegisterStatus();
        switch (status) {
            case 0:
                //[uncompleted]注册成功
                egret.log("注册成功");
                this.Close();
                break;
            case 1:
                //[uncompleted]注册失败
                egret.log("注册失败");
                break;
            default:
                break;
        }
    };
    Retrieve.prototype.onCloseButtonClick = function (event) {
        SoundManager.Instance.PlayEffect("tuch_mp3");
        this.Close();
    };
    Retrieve.NEXT_STEP = "下一步";
    Retrieve.SUBMIT = "确定";
    return Retrieve;
}(UIWindow));
__reflect(Retrieve.prototype, "Retrieve");
