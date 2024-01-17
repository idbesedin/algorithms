var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let [troom, tcond] = file.split('\n')[0].split(' ').map(e => +e);
let mode = file.split('\n')[1];

const f = (troom, tcond, mode) => {
	switch (mode) {
		case 'heat':
			if (troom < tcond) {
				return tcond;
			} else {
				return troom;
			}
		case 'freeze':
			if (troom > tcond){
				return tcond;
			} else {
				return troom;
			}
		case 'auto':
			return tcond;
		case 'fan':
			return troom;
	}	
}
console.log(f(troom, tcond, mode));
	

