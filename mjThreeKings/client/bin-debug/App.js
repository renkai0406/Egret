// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RunEnvironment;
(function (RunEnvironment) {
    RunEnvironment[RunEnvironment["Dev"] = 0] = "Dev";
    RunEnvironment[RunEnvironment["Test"] = 1] = "Test";
    RunEnvironment[RunEnvironment["Publish"] = 2] = "Publish";
})(RunEnvironment || (RunEnvironment = {}));
var ChannelType;
(function (ChannelType) {
    ChannelType[ChannelType["GuestDebug"] = 1] = "GuestDebug";
    ChannelType[ChannelType["WeiXinDebug"] = 2] = "WeiXinDebug";
    ChannelType[ChannelType["WXAutoDebug"] = 3] = "WXAutoDebug";
    ChannelType[ChannelType["GuestRelease"] = 4] = "GuestRelease";
    ChannelType[ChannelType["WeiXinRelease"] = 5] = "WeiXinRelease";
    ChannelType[ChannelType["WXAutoRelease"] = 6] = "WXAutoRelease";
})(ChannelType || (ChannelType = {}));
;
var App = (function () {
    function App() {
    }
    Object.defineProperty(App, "VersionStr", {
        get: function () {
            if (this.Env == RunEnvironment.Dev) {
                return this.Version + "_D";
            }
            else if (this.Env == RunEnvironment.Test) {
                return this.Version + "_T";
            }
            else if (this.Env == RunEnvironment.Publish) {
                return this.Version + "_P";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "ServerUrl", {
        get: function () {
            if (this.Env == RunEnvironment.Dev) {
                return this.DevServerUrl;
            }
            else if (this.Env == RunEnvironment.Test) {
                return this.TestServerUrl;
            }
            else if (this.Env == RunEnvironment.Publish) {
                return this.PublishServerUrl;
            }
        },
        enumerable: true,
        configurable: true
    });
    App.Version = "1.0.250";
    App.Env = RunEnvironment.Dev;
    App.AppID = 115;
    App.Channel = ChannelType.GuestDebug;
    App.DeviceId = "aa:bb:cc:dd";
    App.DevServerUrl = "";
    App.TestServerUrl = "";
    App.PublishServerUrl = "";
    return App;
}());
__reflect(App.prototype, "App");
