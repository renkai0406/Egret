// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PageTracker = (function () {
    function PageTracker(p) {
        this.windowStack = new Array();
        this.page = p;
    }
    return PageTracker;
}());
__reflect(PageTracker.prototype, "PageTracker");
var UIManager = (function () {
    function UIManager(stage) {
        this.SkinPath = "resource/";
        this.DefaultTween = new UIDefaultTween();
        this.m_stage = stage;
        this.m_root = new egret.DisplayObjectContainer();
        stage.addChild(this.m_root);
        this.m_idCounter = 0;
        this.m_pageStack = new Array();
        this.m_mask = new egret.Shape();
        this.m_mask.graphics.beginFill(0x000000, 0.7);
        this.m_mask.graphics.drawRect(0, 0, stage.stageWidth, stage.stageHeight);
        this.m_mask.graphics.endFill();
        this.m_mask.$setTouchEnabled(true);
        this.m_mask.addEventListener(egret.TouchEvent.TOUCH_TAP, this.OnMaskClick, this);
    }
    Object.defineProperty(UIManager, "Instance", {
        get: function () {
            if (this._Instance == null || this._Instance == undefined) {
                nano.Log.Error("[UIManager] UIManager not initialize");
            }
            return this._Instance;
        },
        enumerable: true,
        configurable: true
    });
    UIManager.Init = function (stage) {
        if (this._Instance == null || this._Instance == undefined) {
            this._Instance = new UIManager(stage);
        }
    };
    UIManager.prototype.SetResDir = function (skinDir) {
        this.SkinPath = skinDir;
    };
    UIManager.prototype.OpenPage = function (name, data) {
        var page = this.CreatePanel(name);
        page.Open(data);
        this.m_currentPage = new PageTracker(page);
        this.m_pageStack.push(this.m_currentPage);
        this.m_root.addChild(page);
        return page;
    };
    UIManager.prototype.CloseTopPage = function () {
        if (this.m_pageStack.length > 1) {
            var pageTracker = this.m_pageStack.pop();
            this.m_currentPage = this.m_pageStack[this.m_pageStack.length - 1];
            this.RemovePage(pageTracker);
        }
        else {
            nano.Log.Warn("[UIManager] Can't Remove Bottom Page");
        }
    };
    UIManager.prototype.ClosePageById = function (id) {
        var pageIndex = this.GetPageIndex(id);
        var pageTracker = this.m_pageStack[pageIndex];
        this.m_pageStack.splice(pageIndex, 1);
        this.RemovePage(pageTracker);
    };
    UIManager.prototype.CloseAllPage = function () {
        for (var i = 0; i < this.m_pageStack.length; i++) {
            this.RemovePage(this.m_pageStack[i]);
        }
        this.m_pageStack = new Array();
    };
    UIManager.prototype.RemovePage = function (pageTrack) {
        if (pageTrack) {
            for (var i = 0; i < pageTrack.windowStack.length; i++) {
                this.m_root.removeChild(pageTrack.windowStack[i]);
            }
            this.m_root.removeChild(pageTrack.page);
        }
    };
    UIManager.prototype.OpenWindow = function (name, data) {
        var win = this.CreatePanel(name);
        win.Open(data);
        this.m_currentPage.windowStack.push(win);
        this.m_root.addChild(win);
        var winDepth = this.m_root.getChildIndex(win);
        var maskDepth = this.m_root.getChildIndex(this.m_mask);
        if (maskDepth > -1 && maskDepth < winDepth) {
            this.m_root.addChildAt(this.m_mask, winDepth - 1);
        }
        else {
            this.m_root.addChildAt(this.m_mask, winDepth);
        }
        return win;
    };
    UIManager.prototype.CloseWindow = function (id) {
        var winIndex = this.GetWindowIndex(id);
        var winStack = this.m_currentPage.windowStack;
        var win = winStack[winIndex];
        winStack.splice(winIndex, 1);
        this.RemoveWindow(win);
        if (winStack.length > 0) {
            var topWin = winStack[winStack.length - 1];
            var topWinDepth = this.m_root.getChildIndex(topWin);
            this.m_root.addChildAt(this.m_mask, topWinDepth);
        }
        else {
            this.m_root.removeChild(this.m_mask);
        }
    };
    UIManager.prototype.RemoveWindow = function (win) {
        if (win) {
            this.m_root.removeChild(win);
        }
    };
    UIManager.prototype.OpenWidget = function (name, data) {
        return null;
    };
    UIManager.prototype.CloseWidget = function (id) {
        return null;
    };
    UIManager.prototype.ClearAll = function () {
        this.m_root.removeChildren();
    };
    UIManager.prototype.GetWindowIndex = function (id) {
        for (var i = 0; i < this.m_currentPage.windowStack.length; i++) {
            var win = this.m_currentPage.windowStack[i];
            if (win.Id == id) {
                return i;
            }
        }
        return null;
    };
    UIManager.prototype.GetPageIndex = function (id) {
        for (var i = 0; i < this.m_pageStack.length; i++) {
            var pageTrack = this.m_pageStack[i];
            if (pageTrack.page.Id == id) {
                return i;
            }
        }
        return null;
    };
    UIManager.prototype.CreatePanel = function (viewName) {
        var jsFile = viewName;
        var panel = eval("new " + jsFile + "( )");
        panel.SetId(this.GetPanelId());
        return panel;
    };
    UIManager.prototype.GetPanelId = function () {
        return this.m_idCounter++;
    };
    UIManager.prototype.OnMaskClick = function () {
        var winStack = this.m_currentPage.windowStack;
        var topWin = winStack[winStack.length - 1];
        topWin.OnMaskClick();
    };
    return UIManager;
}());
__reflect(UIManager.prototype, "UIManager");
