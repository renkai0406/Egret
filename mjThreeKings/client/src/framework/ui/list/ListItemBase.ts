// TypeScript file

class ListItemBase extends eui.ItemRenderer {

    protected dataChanged() : void {
        let list : ListViewBase = this.parent as ListViewBase;

        if(this.itemIndex == 0){
            if(list.itemSizeMeasured){
                this.OnDataChange();
            }else{
                list.itemSizeMeasured = true;
            }
        }else{
             this.OnDataChange();
        }
    }

    protected OnDataChange() : void {

    }    

}