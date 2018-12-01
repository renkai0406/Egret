// TypeScript file
class LHDHistoryDetailsItem extends  eui.ItemRenderer {

    private playback: eui.Button;

    private list_data: eui.List;

    private redbg: eui.Image;

    private bluebg: eui.Image;

    private winer: eui.Image;

    private loser: eui.Image;

    private relation0: eui.Image;

    private relation1: eui.Image;

    private playerName: eui.Label;

    private level: eui.Label;

    private grade: eui.Label;

    private textMojing: eui.Label;

    private textbangjing: eui.Label;

    private textExp: eui.Label;



    public constructor() {
		super();
		this.skinName = "resource/eui_skins/MoJing/HistoryLHDDetailItem.exml";

     
	}

     protected dataChanged() {
        if(this.data.isWin == 1){
           this.redbg.visible = true;
           this.bluebg.visible = false;
           this.winer.visible = true;
           this.loser.visible = false;
        }
        else{
           this.redbg.visible = false;
           this.bluebg.visible = true;
           this.winer.visible = false;
           this.loser.visible = true;
        }
        this.playerName.text = this.data.playerName;
        this.level.text = "主公等级:" +this.data.level;
        this.grade.text = this.data.grade;
        this.textMojing.text = this.data.incomemojing;
        this.textbangjing.text = this.data.incomebangjing;
        this.textExp.text = this.data.exp;

        if(this.data.relationship == 1){
           this.relation1.visible = true;
           this.relation0.visible = false;
        }
        else{
           this.relation1.visible = false;
           this.relation0.visible = true;
        }

     }

}

 


    

