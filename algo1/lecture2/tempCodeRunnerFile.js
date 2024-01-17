var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split(' ').map(item => +item);

function abs(a){
	return Math.abs(a);
}
function f(arr){
	let max1 = Math.max(abs(arr[0]), abs(arr[1]));
	let max2 = Math.min(abs(arr[0]), abs(arr[1]));
	for (let i = 2; i < arr.length; i++){
		if (abs(arr[i]) > abs(max1) && (arr[i] > 0 && max2 > 0 ||  arr[i] < 0 && max2 < 0)){
			max2 = max1;
			max1 = arr[i];
		} else if (abs(arr[i]) > abs(max2) && abs(arr[i]) <= abs(max1) && (arr[i] > 0 && max1 > 0 ||  arr[i] < 0 && max1 < 0)){
			max2 = arr[i];
		}
	}
	return [max1, max2];
}

console.log(f(input))