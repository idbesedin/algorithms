var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split('\n');
input.pop();
let array = input.map(item => +item);

let [a, b, c] = array;
function f () {
	if (c < 0) {
		return 'NO SOLUTION';
	} 
	if (c === 0 && b !== 0 && a !== 0) {
		return Number.isInteger(-b/a) ? -b/a : 'NO SOLUTION';
	}
	if (a === 0 && b === 0 && c === 0){
		return 'MANY SOLUTIONS';
	}
	if (a === 0 && b < 0) {
		return 'NO SOLUTION';
	} 
 	if (a === 0 && b !== c*c) {
		return 'NO SOLUTION';
	}
	if (a === 0 && b === c*c){
		return 'MANY SOLUTIONS';
	}
	return Number.isInteger((c*c-b)/a) ? (c*c-b)/a : 'NO SOLUTION';
}
console.log(f(a, b, c));
