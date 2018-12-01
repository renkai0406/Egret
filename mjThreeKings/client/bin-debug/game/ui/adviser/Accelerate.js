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
var Accelerate = (function (_super) {
    __extends(Accelerate, _super);
    function Accelerate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Accelerate.prototype.GetSkinFile = function () {
        return "exml/acceleratepage.exml";
    };
    Accelerate.prototype.OnOpen = function (args) {
        _super.prototype.OnOpen.call(this, args);
    };
    return Accelerate;
}(UIWindow));
__reflect(Accelerate.prototype, "Accelerate");
