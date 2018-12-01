// TypeScript file

namespace nano {
    
    export class StringUtils {

        public static LimitStringLength(str : string, maxLen : number) : string {
            if (!str || 0 >= str.length) return "";

            let newNick : string = str;
            let len : number = (maxLen) ? maxLen : 5;
            if (len < str.length){
                newNick = str.substring(0, len);
                newNick = newNick + "..."
            }
            return newNick;
        }

        
    }
}