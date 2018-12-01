namespace nano {
	export class MathUtils {
		
		public static Random(a : number ,b : number) : number {
			  let Range = b - a;  
			  let Rand = Math.random();  
			  return (a + Math.round(Rand * Range));  
		}
	}
}

