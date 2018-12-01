// TypeScript file

namespace nano {

    class Message {
        public msg : string;
        public args : any;
    }

    export class ModuleManager {
        
        private static _Instance : ModuleManager;

        private m_moduleDict : Map<string,Module>;

        //private m_cacheMsgList : Map<string,Message>;

        public static get Instance() : ModuleManager {
            if(this._Instance == null || this._Instance == undefined){
                this._Instance = new ModuleManager();
            }
            return this._Instance;
        }

        private constructor() {
            this.m_moduleDict = new Map<string,Module>();
            //this.m_cacheMsgList = new Map<string,Message>();
        }

        public CreateModule(name : string, args? : any) : Module {
            let m : Module = this.GetModule<Module>(name);
            
            if(m == null){
                m = eval("new " + name + "( )");
                if(m != null){
                    m.Create(args);
                    this.m_moduleDict.Add(name,m);
                }else{
                    Log.Error("[ModuleManager] module file " + name + " not exits ");
                }
            }
            return null;
        }

        public GetModule<T extends Module>(moduleName : string) : T {
            if(this.m_moduleDict.Contains(moduleName)){
                return this.m_moduleDict.Get(moduleName) as T;
            }
            return null;
        }

        public ClearAllModule() : void {
            let keys : Array<string> = this.m_moduleDict.Keys();
            for(let key of keys){
                let m : Module = this.m_moduleDict.Get(key);
                m.Release();
            }
            this.m_moduleDict.Clear();
        }

        public SendMessage(target : string, msg : string, ...args : any[]) : void {
            let m  : Module = this.GetModule(target);
            if(m != null ){
                m.HandleMessage(msg,args);
            }else{
                Log.Warn("[ModuleManager] target " + target + " not exits ");
            }
        }
        
    }

}