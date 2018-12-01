// TypeScript file

class StorageManager {
    
    public static SetData(key : string , value : string) : void {
        egret.localStorage.setItem(key,value);
    }    

    public static GetData(key : string) : string {
        return egret.localStorage.getItem(key);
    }

    public static RemoveData(key : string) : void {
        egret.localStorage.removeItem(key);
    }

    public static ClearAll() : void {
        egret.localStorage.clear();
    }
}