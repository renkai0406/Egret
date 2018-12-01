// TypeScript file

namespace nano {

    export class MapOrList <TKey,TValue> {
        
        private m_list : Array<any>;    
    
        private m_map : Map<TKey,TValue>;

        public constructor(){
            this.m_list = [];
            this.m_map  = new Map<TKey,TValue>();
        }

        public GetList() : Array<TValue> {
            return this.m_list as Array<TValue>;
        }

        public GetMap() : Map<TKey,TValue> {
            return this.m_map;
        }

        public Add<TKey,TValue>(key : TKey, value : TValue) : void {
            if(!this.m_map.Contains(key)){
                this.m_map.Add(key,value);
            }
            this.m_list.push(value);
        }

        public Remove<TKey>(key: TKey,value : TValue) : void {
            this.m_map.Remove(key);
            
            for(let i = 0 ; i < this.m_list.length; i++){
                if(this.m_list[i] == value ){
                    this.m_list.splice(i,1);
                    return ;
                }
            }
        }
        
    }
}