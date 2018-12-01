// TypeScript file

class Spine extends egret.DisplayObjectContainer {

    public readonly display : dragonBones.EgretArmatureDisplay;

    public readonly SpineName : string;

    private m_autoRemove : boolean;

    private m_completeCallBack : Function;

    public get animation() : dragonBones.Animation {
        return this.display.animation;
    }

    public constructor(factory : dragonBones.EgretFactory, armatureName : string, name : string){
        super();
        this.SpineName = name;
        this.display = factory.buildArmatureDisplay(armatureName);
        this.addChild(this.display);
    }

    public Play(animation : string, times : number, completeCallback? : Function, autoRemove = false) : void {
        this.m_autoRemove = autoRemove;
        this.m_completeCallBack = completeCallback;
        this.display.addEventListener(dragonBones.AnimationEvent.COMPLETE,this.OnAnimationComplete,this);
        if(this.animation.hasAnimation(animation)){
            this.animation.play(animation,times);
        }else{
            nano.Log.Error("[Spine] Spine " + name + " can not found animation " + animation);
        }
    }

    public Reset() : void {
        console.log("reuse animation");
        this.m_completeCallBack = null;
        this.m_autoRemove = false;
        this.display.removeEventListener(dragonBones.AnimationEvent.COMPLETE,this.OnAnimationComplete,this);
        this.animation.reset();
    }

    private OnAnimationComplete() : void {
        if(this.m_completeCallBack){
            this.m_completeCallBack();
        }
        if(this.m_autoRemove){
            SpineManager.Instance.RecyleSpine(this);
        }
    }

}