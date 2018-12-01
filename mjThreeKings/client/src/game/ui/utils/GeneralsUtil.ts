class GeneralsUtil{
    
    public static MAX_STAR = 5;
    
    public static get_adviser_path(name:string){
        switch(name){
            case "1":
                return "10001_png";
            case "2":
                return "10002_png";
            case "3":
                return "10003_png";
            default:
                return "";
        }
    }
}