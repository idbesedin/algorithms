var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split('\n');
let array = input.map(item => +item);
array.pop();
array.pop();

function f(array) {
	let constant = 0, 
		ascending = 0, 
		weaklyAcsending = 0, 
		descending = 0, 
		weaklyDescending = 0;
	let prev, curr;
	for (let i = 1; i < array.length; i++){
		curr = array[i];
		prev = array[i-1];
		if (curr > prev) ascending++;
		if (curr >= prev) weaklyAcsending++;
		if (curr === prev) constant++;
		if (curr < prev) descending++;
		if (curr <= prev) weaklyDescending++;
	}
	switch (array.length - 1) {
		case constant:
			return 'CONSTANT';
		case ascending:
			return 'ASCENDING';
		case weaklyAcsending:
			return 'WEAKLY ASCENDING';
		case descending:
			return 'DESCENDING';
		case weaklyDescending:
			return 'WEAKLY DESCENDING';
		default:
			return 'RANDOM';
	}
}

console.log(f(array));