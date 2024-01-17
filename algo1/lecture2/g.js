var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split(' ').map(item => +item);

function abs(a){
	return Math.abs(a);
}
function f(arr){
	
}

console.log(f(input))