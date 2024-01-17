var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split('\n');
input.pop();
let array = input.map(item => {
	let number = item.replace(/[()\-+]/g, '');
	if (number.length === 7) number = '8495' + number;
	number = number.slice(1);
	return number;
})

let [number, ...list] = array;
list.forEach(e => {
	if (e === number) {
		console.log('YES');
	} else {
		console.log('NO');
	}
})