// TypeScript file

namespace nano {
    export class DateUtils {
        
        public static GetCurrentTimeStamp() : number {
            let now = new Date();
            return now.getMilliseconds();
        }

        public static GetCurrentTimeString(format : string ) : string{
            return null;
        }

        public static GetTimeString(format : string, timeStamp : number) : string{
            return null;
        }

        public static GetDateString() : string {
            let systemDate : Date = new Date();
            let year  : number = systemDate.getFullYear();
            let month : number = systemDate.getMonth() + 1;
            let day   : number = systemDate.getDate();
            return "" + year + month + day;
        }
    }
}