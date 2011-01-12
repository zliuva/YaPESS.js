var primes = [];
var counter = 0;

function is_prime(number) {	
	for (var i in primes) {
		if (number % primes[i] == 0) {
			return false;
		}
	}
	
	primes[counter++] = number;
	return true;
}

var i = 2;

while (counter < 10001) {
	is_prime(i++);
}

console.log(primes[10000]);
