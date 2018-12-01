// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var EventManager = (function () {
        function EventManager() {
            this.m_eventMap = new nano.Map();
        }
        Object.defineProperty(EventManager, "Instance", {
            get: function () {
                if (this._Instance == null) {
                    this._Instance = new EventManager();
                }
                return this._Instance;
            },
            enumerable: true,
            configurable: true
        });
        EventManager.prototype.AddEventListener = function (event, listener) {
            var e = this.m_eventMap.Get(event);
            if (e == null) {
                e = new nano.Event(event);
                this.m_eventMap.Add(event, e);
            }
            e.AddListener(listener);
        };
        EventManager.prototype.DispatchEvent = function (event) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var e = this.m_eventMap.Get(event);
            if (e) {
                e.Invoke(args);
            }
            else {
                nano.Log.Warn("[EventManager] Can not fount event " + event);
            }
        };
        return EventManager;
    }());
    nano.EventManager = EventManager;
    __reflect(EventManager.prototype, "nano.EventManager");
})(nano || (nano = {}));
