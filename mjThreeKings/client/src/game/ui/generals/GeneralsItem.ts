class GeneralsItem extends ListItemBase{

  private vs_tag:eui.ViewStack;
  private group_star : eui.Group;



    public constructor() {
		  super();
		  this.skinName = "resource/eui_skins/MoJing/GeneralsItem.exml";
    
    }

    
    protected childrenCreated():void{
		  super.childrenCreated();
      
	  }

    protected OnDataChange() : void {
      if(this.data.enabled)
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.up_touch_callback, this);
       this.vs_tag.selectedIndex = this.data.tag - 1;
       this.init_star(this.data.star, this.data.max);
    }  

    private up_touch_callback(e : TouchEvent){
      SoundManager.Instance.PlayEffect("tuch_mp3");
      egret.log("当前等级：" + this.data.star);
      if(this.data.star >= this.data.max){
        //[uncompleted] 已经满级
        return;
      }
     var args = [
       {name:this.data.name,
         tag:this.data.tag,
         img:this.data.img, 
         star:this.data.star, 
         max:this.data.max,
         enabled:false},
     ];
      UIManager.Instance.OpenWindow("GeneralsUp", args);
    }    

    private init_star(star:number, max:number){
      var count = this.group_star.numChildren;
      if(star > max || max > count){
        return;
      }
      for(var i = 0; i < count; i++){
        var child = this.group_star.getChildAt(i) as eui.Button;
        if(i < star){
          child.visible = true;
          child.enabled = true;
        }else if(i >= max){
          child.visible = false;
          
        }else{
          child.visible = true;
          child.enabled = false;
        }
        
      }
      
    }
}