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
var LoadingPage = (function (_super) {
    __extends(LoadingPage, _super);
    function LoadingPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.m_stageStr = "";
        return _this;
    }
    LoadingPage.prototype.GetSkinFile = function () {
        return "exml/loadingpage.exml";
    };
    ;
    LoadingPage.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
        this.lb1Loading.init(0, 1);
    };
    LoadingPage.prototype.onProgress = function (current, total) {
        if (this.lb1Loading) {
            this.SetProgress(current, total);
        }
    };
    LoadingPage.prototype.SetLoadStageStr = function (stage) {
        this.m_stageStr = stage;
    };
    LoadingPage.prototype.SetProgress = function (current, total) {
        this.lb1Loading.update(current, total);
    };
    return LoadingPage;
}(UIPage));
__reflect(LoadingPage.prototype, "LoadingPage", ["RES.PromiseTaskReporter"]);
