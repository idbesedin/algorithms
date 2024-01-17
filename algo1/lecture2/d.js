var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split(' ').map(item => +item);

function f(array){
	let curr,
		prev = array[0],
		next,
		len = array.length,
		count = 0;
	if (len < 3) return 0;
	for (let i = 1; i < len - 1; i++){
		curr = array[i];
		next = array[i+1];
		if (curr > prev && curr > next) count++;
		prev = curr;
	}
	return count;
}
console.log(f(input));