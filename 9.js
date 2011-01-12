var a, b, c;

function test() {
	for (a = 0; a < 999; a++) {
		for (b = a + 1; b < 1000; b++) {
			c = 1000 - a - b;
			if (c > a && c > b && (c * c == a * a + b * b)) {
				return;
			}
		}
	}	
}

test();

//console.log(a + ' ' + b + ' ' + c);
console.log(a * b * c);
