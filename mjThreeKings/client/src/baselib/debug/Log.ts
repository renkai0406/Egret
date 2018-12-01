// TypeScript file

namespace nano{
    export class Log {

        private static prefix : string = "> ";

        public static ShowLog  : boolean = true;

        public static Msg(log : string) : void {
            if(!this.ShowLog){
                return;
            }

            console.log(this.prefix + this.getTimeString() + " " + log);
        }


        public static Error(log : string) : void {
            if(!this.ShowLog){
                return;
            }
            console.error(this.prefix + this.getTimeString() + " " + log);
        }

        public static Warn(log : string) : void {
            if(!this.ShowLog){
                return;
            }

            console.warn(this.prefix + this.getTimeString() + " " + log);
        }

        private static getTimeString() : string {
            let now = new Date();
            return now.toLocaleString();
        }
    }
}