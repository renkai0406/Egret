// TypeScript file

namespace nano {

    export class Event {

        public Name : string;

        private m_listeners : Array<Function>;

        public constructor(name : string){
            this.Name = name;
            this.m_listeners = new Array<Function>();
        }

        public Invoke(...args : any[]) : void {
            for(let i = 0; i < this.m_listeners.length; i++){
                this.m_listeners[i](args);
            }
        }

        public AddListener(listener : Function) : void {
            this.m_listeners.push(listener);
        }

        public RemoveListener(listener) : void {
            for(let i = 0; i < this.m_listeners.length; i++){
                if(listener == this.m_listeners[i]){
                    this.m_listeners.splice(i,1);
                }
            }   
        }

        public ClearListeners() : void {
            this.m_listeners = [];
        }
        
    }    
}