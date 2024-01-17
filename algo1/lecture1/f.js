var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split(' ');
let array = input.map(item => +item);
let [x1, y1, x2, y2] = array;

s1 = (y1 + y2)*Math.max(x1, x2);
s2 = (y1 + x2)*Math.max(x1, y2);
s3 = (x1 + y2)*Math.max(x2, y1);
s4 = (x2 + x1)*Math.max(y1, y2);
function check(s1, s2, s3, s4){
	let ans = Math.min(s1, s2, s3, s4);
	if (ans === s1){
		return `${y1 + y2} ${Math.max(x1, x2)}`;
	}
	if (ans === s2){
		return `${y1 + x2}  ${Math.max(x1, y2)}`;
	}
	if (ans === s3){
		return `${x1 + y2} ${Math.max(x2, y1)}`;
	}
	if (ans === s4){
		return `${x2 + x1} ${Math.max(y1, y2)}`;
	}
}
console.log(check(s1, s2, s3, s4));

