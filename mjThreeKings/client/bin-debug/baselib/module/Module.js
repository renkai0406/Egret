// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var Module = (function () {
        function Module() {
            this.Name = (typeof this);
        }
        Module.prototype.Create = function (agrs) {
            nano.Log.Msg("[Module] Module " + this.Name + " Created");
        };
        Module.prototype.Release = function () {
            nano.Log.Msg("[Module] Module " + this.Name + " Released");
        };
        Module.prototype.Show = function (args) {
        };
        Module.prototype.HandleMessage = function (msg) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
        };
        return Module;
    }());
    nano.Module = Module;
    __reflect(Module.prototype, "nano.Module");
})(nano || (nano = {}));
