class QxzbMain extends UIWindow{

	private btn0 : eui.Button;
	private btn1 : eui.Button;
	private btn2 : eui.Button;
	private btn3 : eui.Button;

    public GetSkinFile() : string {
        return "exml/qxzb_main.exml";
    }

    protected OnOpen(args? : any){
        super.OnOpen(args);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function(e){
			SoundManager.Instance.PlayEffect("tuch_mp3");
			let btn_name = e.target.name;
			switch(btn_name){
				case "btn0":
					UIManager.Instance.OpenWindow("QxzbAward");
				break;
				case "btn1":
					UIManager.Instance.OpenWindow("QxzbRaceDetail");
				break;
				case "btn2":
				break;
				case "btn3":
					UIManager.Instance.OpenWindow("QxzbCreateRace");
				break;
			}
			
		}, this);
    }
}