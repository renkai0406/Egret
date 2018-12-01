// TypeScript file

class UIUtils {

    public static GetChildFromRoot(node : egret.DisplayObject, name : string) : any {
        let children : egret.DisplayObject[] = node.$children;

        for(let i = 0; i < children.length; i++){
            if(children[i].name == name){
                return children[i];
            }
        }

        for(let i = 0; i < children.length; i++){
            return this.GetChildFromRoot(children[i],name);
        }

        return null;
    }

} 