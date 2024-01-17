var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');
let [a, b, c] = file.split('\n').map(e => +e);

if (a + b > c && a + c > b && c + b > a){
	console.log('YES');
} else {
	console.log('NO');
}