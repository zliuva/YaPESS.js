var fs = require('fs');

function add_string_numbers(str1, str2) {
	var arr1 = str1.split('').reverse();
	var arr2 = str2.split('').reverse();
	var result = [];
	
	for (var i in arr1) {
		arr1[i] = parseInt(arr1[i]);
	}
	
	for (var i in arr2) {
		arr2[i] = parseInt(arr2[i]);
	}
	
	var carry = 0;
	var max = Math.max(arr1.length, arr2.length);
	for (var i = 0; i < max; i++) {
		result[i] = 0;
	}
	
	for (var i = 0; i < result.length; i++) {
		if (isNaN(arr1[i])) {
			arr1[i] = 0;
		}
		
		if (isNaN(arr2[i])) {
			arr2[i] = 0;
		}
		
		result[i] = arr1[i] + arr2[i] + carry;
		
		if (result[i] >= 10) {
			if (isNaN(result[i + 1])) {
				result[i + 1] = 0;
			}
			
			carry = Math.floor(result[i] / 10);
			result[i] %= 10;
		} else {
			carry = 0;
		}
	}
	
	return result.reverse().join('');
}

var numbers = fs.readFileSync('13.txt', 'utf-8').split('\n');

var result = '0';

for (var i in numbers) {
	result = add_string_numbers(result, numbers[i]);
}

//console.log(result);
console.log(result.substr(0, 10));
