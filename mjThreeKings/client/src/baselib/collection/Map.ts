// TypeScript file

namespace nano {
    export class Map<TKey,TValue> {

        private m_data;

        private m_keys : Array<any>;

        public constructor() {
            this.m_data = {};
            this.m_keys = new Array<any>();
        }

        public Add<TKey,TValue>(key: TKey, value : TValue) : void {
            if(!this.m_data[key]){
                this.m_data[key] = value;
                this.m_keys.push(key);
            }
        }

        public Remove<TKey>(key : TKey) : void {
            if(this.m_data[key]){
                this.m_data[key] = null;
            }
        }

        public Contains<TKey>(key : TKey) : boolean {
            return this.m_data[key] != null || this.m_data[key] != undefined;
        }

        public Get<TKey>(key : TKey) : TValue {
            return this.m_data[key];
        }

        public Keys() : Array<TKey> {
            return this.m_keys;
        }

        public Clear() : void {
            this.m_data = {};
            this.m_keys = new Array<TKey>();
        }

    }
}

