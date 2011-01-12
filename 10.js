function is_prime(n) {
	if (n == 1) {
		return false;
	} else if (n < 4) {
		return true;
	} else if (n % 2 == 0) {
		return false;
	} else if (n < 9) {
		return true;
	} else if (n % 3 == 0) {
		return false;
	}
	
	for (var f = 5; f <= Math.sqrt(n); f += 6) {
		if (n % f == 0) {
			return false;
		}
		
		if (n % (f + 2) == 0) {
			return false;
		}
	}
		
	return true;
}

var sum = 2;
for (var i = 3; i < 2000000; i += 2) {
	if (is_prime(i)) {
		console.log(i);
		sum += i;
	}
}

console.log(sum);
