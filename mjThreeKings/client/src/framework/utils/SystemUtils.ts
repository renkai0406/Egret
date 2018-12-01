// TypeScript file

class SystemUtils {
    
    public static get IsMobile() : boolean{
        return egret.Capabilities.isMobile;
    }

    public static get Language() : string {
        return egret.Capabilities.language;
    }

    public static get Os() : string {
        return egret.Capabilities.os;
    }

    public static Random(mt:RandMersenne, min:number, max:number):number{
        return Math.floor(mt.rand()*(max-min+1) + min);
    }

    public static GenerateKey(k:number, n:number):string{

        let mt = new RandMersenne(k);

        let g = "";

        for(var i = 0; i < n; i++)
        {
            let j = SystemUtils.Random(mt, 1, 3);
            switch (j){
                case 1:
                    var c = SystemUtils.Random(mt,48,58);
                    g += (c + "");
                    break;
                case 2:
                    var d = SystemUtils.Random(mt,65,90);
                    g += String.fromCharCode(d);
                    break;
                case 3:
                    var e= SystemUtils.Random(mt,97,122);
                    g += String.fromCharCode(e);
                    break;
            }
        }

        return g;
    }
}