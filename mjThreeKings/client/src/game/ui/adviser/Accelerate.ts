class Accelerate extends UIWindow{

    private label_name : eui.Label;
    private label_time : eui.Label;
    private label_count : eui.Label;
    private btn_cancel : eui.Button;
    private btn_score : eui.Button


    public GetSkinFile() : string {
        return "exml/acceleratepage.exml";
    }
    
    protected OnOpen(args? : any){
        super.OnOpen(args);
    }
}