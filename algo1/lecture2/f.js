var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split('\n');
input.pop();
let len = +input[0];
let array = input[1].split(' ').map(item => +item);
function f(array, len){
	
}

// function f(array, len){
// 	let prev = array[len-1],
// 		next,
// 		centreIndex;
// 	for (let i = len - 2; i > 1; i--){
// 		next = array[i-1];
// 		if (prev === next && i >= (len-1)/2){ 
// 			centreIndex = i;
// 		} else if(array[i] === prev && i >= (len-1)/2){
// 			centreIndex = i;
// 		}
// 		prev = array[i];
// 	}
// 	return centreIndex;
// }
console.log(f(array, len));