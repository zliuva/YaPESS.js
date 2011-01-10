var prev2 = 1;
var prev1 = 2;

var cur = 0;
var sum = 2;

while (1) {
	cur = prev2 + prev1;
	
	if (cur > 4000000) {
		break;
	}
	
	if (cur %2 == 0) {
		sum += cur;
	}
	
	prev2 = prev1;
	prev1 = cur;
}

console.log(sum);
