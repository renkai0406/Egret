// TypeScript file

class LoadingPage extends UIPage implements RES.PromiseTaskReporter {

    private lb1Loading : LoadingBar1;

    private m_stageStr : string = "";

    

    public GetSkinFile() : string {
        return "exml/loadingpage.exml";
    };

    protected OnOpen(args? : any) : void {
        super.OnOpen(args);
        this.lb1Loading.init(0, 1);

    }

    public onProgress(current: number, total: number): void {
        if(this.lb1Loading){
            this.SetProgress(current,total);
        }
    }

    public SetLoadStageStr(stage : string) : void {
        this.m_stageStr = stage;
    }

    public SetProgress(current : number , total : number) : void{
        this.lb1Loading.update(current, total);
    }

}