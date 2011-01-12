/**
 * reference: cletus at StackOverflow
 * http://stackoverflow.com/questions/677579/project-euler-16-c-2-0
 */

var number = [1];

for (var i = 2; i <= 100; i++) {
	var carry = 0;
	for (var j = 0; j < number.length; j++) {
		number[j] *= i;
		number[j] += carry;
		if (number[j] >= 1000000000) {
			if (isNaN(number[j + 1])) {
				number[j + 1] = 0;
			}
			carry = Math.floor(number[j] / 1000000000);
			number[j] %= 1000000000;
		} else {
			carry = 0;
		}
	}
}

var sum = 0;
for (var i = 0; i < number.length; i++) {
	while (number[i]) {
		sum += number[i] % 10;
		number[i] = Math.floor(number[i] / 10);
	}
}

console.log(sum);
