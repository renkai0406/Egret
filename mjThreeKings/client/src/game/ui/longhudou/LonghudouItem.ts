// TypeScript file

class LonghudouItem extends eui.ItemRenderer{

    private warcost: eui.Label;
    private warlimit: eui.Label;
    private exp: eui.Label;
    private merit: eui.Label;
    private lineup: eui.Label;
    private skill: eui.Label;
    private income: eui.Label;
   
    public constructor() {
		    super();
		    this.skinName = "resource/eui_skins/MoJing/LongHuDouItem.exml";
	  }

	  protected dataChanged() {
		
		   this.warcost.text = this.data.cost;

           this.warlimit.text = this.data.limit;

           this.exp.text = "官场经验 +" +this.data.exp;

           this.merit.text ="功勋值 +" + this.data.merit;

           this.lineup.text = this.data.lineup;

           this.skill.text = this.data.skill;

           this.income.text = this.data.income;

	  }
    
}