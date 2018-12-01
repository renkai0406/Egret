// TypeScript file
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UIUtils = (function () {
    function UIUtils() {
    }
    UIUtils.GetChildFromRoot = function (node, name) {
        var children = node.$children;
        for (var i = 0; i < children.length; i++) {
            if (children[i].name == name) {
                return children[i];
            }
        }
        for (var i = 0; i < children.length; i++) {
            return this.GetChildFromRoot(children[i], name);
        }
        return null;
    };
    return UIUtils;
}());
__reflect(UIUtils.prototype, "UIUtils");
