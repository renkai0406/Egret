// TypeScript file

namespace nano {
    export class ListMap<TKey,TValue> {

        private m_listMap : Map<TKey,Array<any>>;

        public constructor(){
            this.m_listMap = new Map<TKey,Array<TValue>>();
        }

        public Add<TKey,TValue>(key : TKey, value : TValue) : void {
            let list : Array<any> = this.m_listMap.Get(key);

            if(list == null){
                list = new Array<any>();
                this.m_listMap.Add(key,list);    
            }
            list.push(value);
        }

        public GetList<TKey>(key : TKey) : Array<TValue> {
            let list : Array<any> = this.m_listMap.Get(key);
            return list;
        }

        public Remove<TKey>(key : TKey) : void {
            this.m_listMap.Remove(key);
        }

        public Clear() : void {
            this.m_listMap.Clear();
        }

    }
}