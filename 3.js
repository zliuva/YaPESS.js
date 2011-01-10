var n = 600851475143;

var max = n;

var factor = (n % 2) ? 3 : 2;

while (factor <= Math.sqrt(n)) {
	if (n % factor == 0) {
		max = factor;
		while (n % factor == 0) {
			n /= factor;
		}
	}
	
	factor += 2;
}

console.log(n == 1 ? max : n);
