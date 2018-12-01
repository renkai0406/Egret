// TypeScript file

class LangManager {
    
    private static _instance : LangManager; 

    public static get Instance() : LangManager {
        if(this._instance == null){
            this._instance = new LangManager();
        }
        return this._instance;
    }

    private m_langDict;

    private constructor(){
        this.m_langDict = null;
    }

    public LoadConig(langDescFilePath) : void {
        this.m_langDict = RES.getRes(langDescFilePath);
    }

    public Get(key : string) : string {
        if(this.m_langDict == null){
            nano.Log.Error("[LangManager] Please load language description file first");
            return ;
        }
        if(!this.m_langDict[key]){
            nano.Log.Error("[LangManager] Can not found " + key + " in language description file");
            return "";
        }
        return this.m_langDict[key];
    }

}