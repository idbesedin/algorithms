var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.replace('\n', '').split(' ');
let array = input.map(item => +item);

function f(array){
	let prev, curr;
	let growingCount = 0;
	for (let i = 1; i < array.length; i++){
		curr = array[i];
		prev = array[i-1];
		if (curr > prev) {
			growingCount++;
		}
	}
	if (growingCount === array.length - 1){
		return 'YES';
	}
	return 'NO';
}

console.log(f(array));