var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/// wanghongliang 2018/6/23 
/// HttpClient class
var nano;
(function (nano) {
    var HttpCommand = (function () {
        function HttpCommand() {
        }
        return HttpCommand;
    }());
    __reflect(HttpCommand.prototype, "HttpCommand");
    var HttpClient = (function () {
        function HttpClient() {
            this._reqHttpList = [];
        }
        HttpClient.prototype.protoBufTest = function () {
            // let msg:fish.ScoreUpResponseMessage = new fish.ScoreUpResponseMessage();
            // msg.setPlayerScore(2000000);
            // msg.setScoreType(1000);
            // msg.setSeatId(3);
            // let code = msg.serialize();
            // let msg2:fish.ScoreUpResponseMessage = new fish.ScoreUpResponseMessage();
            // msg2.deserialize(code);
            // let score:number = msg2.getPlayerScore();
        };
        HttpClient.prototype.sendMessage = function (msg, url) {
            // msg.getName():
            var cmd = new HttpCommand();
            cmd.sendMsg = msg;
            this._reqHttpList.push(cmd);
            var fullUrl = this.checkURL(cmd.url) + cmd.msgId;
            console.log("Send Http Request " + url);
            var request = new egret.HttpRequest();
            request.responseType = egret.HttpResponseType.ARRAY_BUFFER;
            request.open(url, egret.HttpMethod.POST);
            request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            //let bytes = 
        };
        HttpClient.prototype.checkURL = function (serverUrl) {
            if (serverUrl[serverUrl.length - 1] == '/') {
                return serverUrl;
            }
            else {
                return serverUrl + '/';
            }
        };
        HttpClient.prototype.getCommandName = function (cmdId) {
            var cmdName = game.Command[cmdId];
            return cmdName.toLowerCase();
        };
        return HttpClient;
    }());
    nano.HttpClient = HttpClient;
    __reflect(HttpClient.prototype, "nano.HttpClient");
})(nano || (nano = {}));
