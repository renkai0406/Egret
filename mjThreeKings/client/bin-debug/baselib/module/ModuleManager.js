// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var Message = (function () {
        function Message() {
        }
        return Message;
    }());
    __reflect(Message.prototype, "Message");
    var ModuleManager = (function () {
        function ModuleManager() {
            this.m_moduleDict = new nano.Map();
            //this.m_cacheMsgList = new Map<string,Message>();
        }
        Object.defineProperty(ModuleManager, "Instance", {
            //private m_cacheMsgList : Map<string,Message>;
            get: function () {
                if (this._Instance == null || this._Instance == undefined) {
                    this._Instance = new ModuleManager();
                }
                return this._Instance;
            },
            enumerable: true,
            configurable: true
        });
        ModuleManager.prototype.CreateModule = function (name, args) {
            var m = this.GetModule(name);
            if (m == null) {
                m = eval("new " + name + "( )");
                if (m != null) {
                    m.Create(args);
                    this.m_moduleDict.Add(name, m);
                }
                else {
                    nano.Log.Error("[ModuleManager] module file " + name + " not exits ");
                }
            }
            return null;
        };
        ModuleManager.prototype.GetModule = function (moduleName) {
            if (this.m_moduleDict.Contains(moduleName)) {
                return this.m_moduleDict.Get(moduleName);
            }
            return null;
        };
        ModuleManager.prototype.ClearAllModule = function () {
            var keys = this.m_moduleDict.Keys();
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var m = this.m_moduleDict.Get(key);
                m.Release();
            }
            this.m_moduleDict.Clear();
        };
        ModuleManager.prototype.SendMessage = function (target, msg) {
            var args = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                args[_i - 2] = arguments[_i];
            }
            var m = this.GetModule(target);
            if (m != null) {
                m.HandleMessage(msg, args);
            }
            else {
                nano.Log.Warn("[ModuleManager] target " + target + " not exits ");
            }
        };
        return ModuleManager;
    }());
    nano.ModuleManager = ModuleManager;
    __reflect(ModuleManager.prototype, "nano.ModuleManager");
})(nano || (nano = {}));
