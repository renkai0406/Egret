// TypeScript file

namespace nano {
    export class Module {

        public Name : string;

        public Title : string;

        public constructor(){
            this.Name = (typeof this);
        }

        public Create(agrs? : any) : void {
            Log.Msg("[Module] Module " + this.Name + " Created" );
        }

        public Release() : void {
            Log.Msg("[Module] Module " + this.Name + " Released" );
        }

        public Show(args? : any) : void {
            
        }

        public HandleMessage(msg : string, ...args : any[]) : void{

        }
    }
}