// TypeScript file

class UIDefaultTween implements UITweenInterface {

    private m_openAnimationTime : number = 200;

    private m_closeAnimationTime : number = 200;

    OpenTween(obj : egret.DisplayObjectContainer, endCallBack : Function) : void {
        obj.scaleX = 0;
        obj.scaleY = 0;
        obj.alpha = 0;
        obj.width = obj.stage.width;
        obj.height = obj.stage.height;
        obj.anchorOffsetX = obj.width * 0.5;
        obj.anchorOffsetY = obj.height * 0.5;
        obj.x = obj.stage.width / 2;
        obj.y = obj.stage.height / 2;
        egret.Tween.get(obj).to({scaleX:1,scaleY:1},this.m_openAnimationTime,egret.Ease.backOut).call(endCallBack);
        egret.Tween.get(obj).to({alpha:1},this.m_openAnimationTime);

    }

    CloseTween(obj : egret.DisplayObjectContainer, endCallBack : Function) : void {
        egret.Tween.get(obj).to({scaleX:0,scaleY:0},this.m_closeAnimationTime,egret.Ease.backIn).call(endCallBack);
        egret.Tween.get(obj).to({alpha:0},this.m_openAnimationTime);
    }
}