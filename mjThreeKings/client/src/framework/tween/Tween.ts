// TypeScript file

class Tween {

    public static float(obj : any, distance : number, duration : number ) : egret.Tween {
        return egret.Tween.get(obj,{loop:true})
                .to({y:obj.y + distance},duration / 2)
                .to({y:obj.y },duration / 2)
                .to({y:obj.y - distance},duration / 2)
                .to({y:obj.y},duration / 2);
    }

    public static shake(obj : any, distance = 15, duration = 1500) : egret.Tween {
        return egret.Tween.get(obj).to({x : obj.x - distance},duration / 10).to({x:obj.x},duration / 3 ,egret.Ease.elasticOut);
    }

    public static breath(obj : any, scale : number, duration : number) : egret.Tween {
        if(obj.anchorOffsetX == 0 || obj.anchorOffsetY == 0){
            nano.Log.Warn("[Tween] breath tween obj anchorOffsetX or anchorOffsetY not in center");
        }

        return egret.Tween.get(obj,{loop:true}).to({scaleX : scale, scaleY : scale},duration/2).to({scaleX : obj.scaleX, scaleY : obj.scaleY},duration / 2);
    }

    public static breath2(obj : any, scale : number, duration : number) : egret.Tween {
        if(obj.anchorOffsetX == 0 || obj.anchorOffsetY == 0){
            nano.Log.Warn("[Tween] breath tween obj anchorOffsetX or anchorOffsetY not in center");
        }

        return egret.Tween.get(obj,{loop:true}).to({scaleX : obj.scaleX - scale, scaleY : obj.scaleY + scale},duration/4, egret.Ease.sineOut)
        .to({scaleX : obj.scaleX + scale, scaleY : obj.scaleY - scale},duration/2, egret.Ease.sineInOut)
        .to({scaleX : obj.scaleX, scaleY : obj.scaleY},duration/4, egret.Ease.sineIn);
    }

    public static attack(obj:any, target:any):egret.Tween{
        return null;
    }

    public static click(obj : any , scale = 0.9) : egret.Tween {
        return egret.Tween.get(obj).to({scaleX : scale,scaleY : scale},100).to({scaleX : obj.scaleX,scaleY : obj.scaleY},100,egret.Ease.backOut);
    }

    public static moveToX(obj : any, x : number, duration : number,ease? : Function) : egret.Tween {
        return egret.Tween.get(obj).to({x : x},duration,ease);
    }

    public static moveToY(obj : any, y : number, duration : number,ease? : Function) : egret.Tween {
        return egret.Tween.get(obj).to({y : y},duration,ease);
    }

    public static moveTo(obj : any, x : number, y : number,duration : number, ease? : Function) : egret.Tween {
        return egret.Tween.get(obj).to({x : x,y : y},duration,ease);
    }

    public static scaleToX(obj : any, scaleX : number, duration : number, ease? : Function) : egret.Tween {
        return egret.Tween.get(obj).to({scaleX : scaleX},duration,ease);
    }

    public static scaleToY(obj : any, scaleY : number, duration : number, ease? : Function) : egret.Tween {
        return egret.Tween.get(obj).to({scaleY : scaleY},duration,ease);
    }

    public static scaleTo(obj : any, scale : number, duration : number, ease? : Function){
        return egret.Tween.get(obj).to({scaleX : scale,scaleY : scale},duration,ease);
    }    
}
