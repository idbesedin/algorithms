var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');
let input = file.split('\n');
let array = input.map(item => +item);
array.pop();

let [a, b, c, d, e] = array;


if (a <= d && (b <= e || c <= e)){
	console.log('YES');
}else if (b<=d && (a<=e || c <= e)){
	console.log("YES");
} else if (c<=d && (b <= e || a<=e)){
	console.log('YES');
} else {
	console.log('NO');
}