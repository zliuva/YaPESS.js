var fs = require('fs');

var tree = fs.readFileSync(process.argv[2], 'utf-8').split('\n');

for (var i in tree) {
	tree[i] = tree[i].split(' ');
	for (var j in tree[i]) {
		tree[i][j] = parseInt(tree[i][j], 10);
	}
}

var current_level = tree.length - 1;

while (current_level > 0) {
	for (var i = 0; i < tree[current_level - 1].length; i++) {
		var left = tree[current_level][i];
		var right = tree[current_level][i + 1];
		tree[current_level - 1][i] += Math.max(left, right);
	}
	current_level--;
}

console.log(tree[0][0]);
