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
var LoadingBar1 = (function (_super) {
    __extends(LoadingBar1, _super);
    function LoadingBar1() {
        return _super.call(this) || this;
    }
    LoadingBar1.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    LoadingBar1.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        //加载动画
        var data = RES.getRes("load_anim_json");
        var texture = RES.getRes("load_anim_png");
        this.mcFactory = new egret.MovieClipDataFactory(data, texture);
        this.clip_move = new egret.MovieClip(this.mcFactory.generateMovieClipData("loadanimation"));
        this.clip_move.anchorOffsetX = this.clip_move.width - 15;
        this.clip_move.y = this.img_front.y + 5;
        this.addChild(this.clip_move);
        this.clip_move.gotoAndPlay(1, -1);
    };
    LoadingBar1.prototype.init = function (current, max) {
        this.max_mask_width = this.img_front.width - 100;
        this.update(current, max);
    };
    LoadingBar1.prototype.update = function (current, max) {
        this.mask_egret = new egret.Rectangle(this.img_front.x + 15, this.img_front.y, this.calcuProgress(current, max), this.img_front.height);
        this.img_front.mask = this.mask_egret;
        var progress = Math.round(current / max * 100);
        if (progress >= 100) {
            this.clip_move.stop();
            egret.log("动画暂停");
        }
        else {
            this.clip_move.x = this.img_front.x + this.mask_egret.width + 10;
        }
        this.label_progress.text = "加载中…" + progress + "%";
    };
    LoadingBar1.prototype.calcuProgress = function (current, max) {
        return current / max * this.max_mask_width;
    };
    return LoadingBar1;
}(eui.Component));
__reflect(LoadingBar1.prototype, "LoadingBar1", ["eui.UIComponent", "egret.DisplayObject"]);
