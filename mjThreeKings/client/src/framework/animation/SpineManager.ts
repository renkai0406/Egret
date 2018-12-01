// TypeScript file

class SpineManager {

    private static _Instance : SpineManager;

    public static get Instance() : SpineManager {
        if(this._Instance == null){
            this._Instance = new SpineManager();
        }
        return this._Instance;
    }

    private m_resDir : string;

    private m_spinePool : nano.ListMap<string,Spine>;

    private m_spineFactoryPool : nano.Map<string,dragonBones.EgretFactory>;

    private constructor(){
        this.m_resDir = "resource/";
        this.m_spinePool = new nano.ListMap<string,Spine>();
        this.m_spineFactoryPool = new nano.Map<string,dragonBones.EgretFactory>();
    }

    public SetResDir(resDir) : void {
        this.m_resDir = resDir;
    }

    public CreateSpine(name : string, armatureName : string) : Spine {
        let factory : dragonBones.EgretFactory = this.GetDragonBonesFactory(name);
        if(factory == null){
            return null;
        }
        let spine : Spine = this.GetSpine(name,factory,armatureName);
        return spine;
    }

    public CreateSpineAsync(path : string) : void {

    }

    private GetSpine(name : string, factory : dragonBones.EgretFactory, armatureName : string) : Spine {

        let spineArr : Array<Spine> = this.m_spinePool.GetList(name);
        let spine : Spine = null;

        if(spineArr != null && spineArr.length > 0){
            spine = spineArr.pop();
            spine.visible = true;
            spine.Reset();
        }else{
            spine = new Spine(factory,armatureName,name);
        }
        return spine;
    }

    private GetDragonBonesFactory(name : string) : dragonBones.EgretFactory {

        let factory : dragonBones.EgretFactory = this.m_spineFactoryPool.Get(name);

        if(factory){
            return factory;
        }

        var skeData = RES.getRes(name + "_ske_json");
        var textureData = RES.getRes(name + "_tex_json");
        var texture = RES.getRes(name + "_tex_png");

        if(skeData == null || textureData == null || texture == null){
            return null;
        }

        factory= new dragonBones.EgretFactory();
        factory.parseDragonBonesData(skeData);
        factory.parseTextureAtlasData(textureData,texture);
        this.m_spineFactoryPool.Add(name,factory);

        return factory;
    }

    public RecyleSpine(spine : Spine) : void {
        if(spine){
            spine.parent.removeChild(spine);
            spine.visible = false;
            this.m_spinePool.Add(spine.SpineName,spine);
        }
    }

    public ClearCache() : void {
        this.m_spineFactoryPool.Clear();
        this.m_spinePool.Clear();
    }
 
}