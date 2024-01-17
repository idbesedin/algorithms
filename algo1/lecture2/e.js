var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split('\n');
input.pop();
let len = +input[0];
let array = input[1].split(' ').map(item => +item);

function f(len, array){
	let max = 0;
	for (let i = 1; i < len; i++){
		if (array[i] > array[max]) max = i; 
	}

	if (max === len - 1 || max === len - 2) return 0;
	let ans = -1;
	for (let i = max + 1; i < len - 1; i++){
		if (array[i+1] < array[i] && array[i]%10 === 5 && array[i] > ans){
			ans = array[i];
		}
	}

	array.sort((a, b) => b - a);
	return array.findIndex(a => a === ans) + 1;
}

console.log(f(len, array));