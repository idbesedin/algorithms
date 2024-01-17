var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split('\n');
input.pop();
let len = +input[0];
let array = input[1].split(' ').map(item => +item);
let number = +input[2];
function f(len, array, number){
	let ans = array[0];
	for (let i = 1; i < len; i++){
		if (Math.abs(array[i] - number) < Math.abs(ans - number)) ans = array[i];
	}
	return ans;
}
console.log(f(len, array, number));