// 本文件为自动生成文件请勿手工修改！
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    var Command;
    (function (Command) {
        /**创建房间*/
        Command[Command["CREATE_ROOM"] = 1] = "CREATE_ROOM";
        /**进入房间*/
        Command[Command["ENTER_ROOM"] = 2] = "ENTER_ROOM";
    })(Command = game.Command || (game.Command = {}));
    var CommandHelper = (function () {
        function CommandHelper() {
            this.commandIdMap = {
                "game.CreateRoomRequestMessage": 0x0001,
                "game.CreateRoomResponseMessage": 0x0001,
                "game.EnterRoomRequestMessage": 0x0002,
                "game.EnterRoomResponseMessage": 0x0002,
            };
            this.requestMap = {
                0x0001: "game.CreateRoomRequestMessage",
                0x0002: "game.EnterRoomRequestMessage",
            };
            this.responseMap = {
                0x0001: "game.CreateRoomResponseMessage",
                0x0002: "game.EnterRoomResponseMessage",
            };
        }
        CommandHelper.prototype.GetRequestMessage = function (command) {
            var msgName = this.requestMap[command];
            if (!msgName) {
                return null;
            }
            var msg = eval("new " + msgName + "()");
            return msg;
        };
        CommandHelper.prototype.GetResponceMessage = function (command) {
            var msgName = this.responseMap[command];
            if (!msgName) {
                return null;
            }
            var msg = eval("new " + msgName + "()");
            return msg;
        };
        return CommandHelper;
    }());
    game.CommandHelper = CommandHelper;
    __reflect(CommandHelper.prototype, "game.CommandHelper", ["ICommandsHelper"]);
})(game || (game = {}));
