// TypeScript file

namespace nano {
    export class EventManager {
        
        private static _Instance;

        private m_eventMap : Map<string,Event>;

        public static get Instance(){
            if(this._Instance == null){
                this._Instance = new EventManager();
            }
            return this._Instance;
        }

        private constructor(){
            this.m_eventMap = new Map<string,Event>();
        }

        public AddEventListener(event : string, listener : Function) : void {
            let e : Event = this.m_eventMap.Get(event);

            if(e == null){
                e = new Event(event);
                this.m_eventMap.Add(event,e);
            }
            e.AddListener(listener);
        }

        public DispatchEvent(event : string, ...args : any[]) : void {
            let e : Event = this.m_eventMap.Get(event);
            if(e){
                e.Invoke(args);
            }else{
                Log.Warn("[EventManager] Can not fount event " + event);
            }
        }
    }
}