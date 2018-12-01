// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var nano;
(function (nano) {
    var Event = (function () {
        function Event(name) {
            this.Name = name;
            this.m_listeners = new Array();
        }
        Event.prototype.Invoke = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            for (var i = 0; i < this.m_listeners.length; i++) {
                this.m_listeners[i](args);
            }
        };
        Event.prototype.AddListener = function (listener) {
            this.m_listeners.push(listener);
        };
        Event.prototype.RemoveListener = function (listener) {
            for (var i = 0; i < this.m_listeners.length; i++) {
                if (listener == this.m_listeners[i]) {
                    this.m_listeners.splice(i, 1);
                }
            }
        };
        Event.prototype.ClearListeners = function () {
            this.m_listeners = [];
        };
        return Event;
    }());
    nano.Event = Event;
    __reflect(Event.prototype, "nano.Event");
})(nano || (nano = {}));
