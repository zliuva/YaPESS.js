String.prototype.reverse = function(){
 	return this.split('').reverse().join('');
}

var max = 0;

for (var i = 100; i < 1000; i++) {
	for (var j = i; j < 1000; j++) {
		var product = i * j;
		if (product.toString() == product.toString().reverse() && product > max) {
			max = product;
		}
	}
}

console.log(max);
