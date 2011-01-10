var result = 1;
for (var i = 1; i <= 20; i++) {
	var mod = result % i;
	if (mod) {
		result *= i % mod ? i : i / mod
	}
	
	//console.log(i + ' ' + result % i);
}

console.log(result);
