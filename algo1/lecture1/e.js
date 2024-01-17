var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split(' ');
let array = input.map(item => +item);

let [k1, m, k2, p2, n2] = array;
let flatsAmount = Math.ceil(k2/n2); // количество квартир на этаже
let flatsPerBuilding = flatsAmount*m; // количество квартир в подъезде


function p(k1, m, k2, p2, n2, flatsAmount, flatsPerBuilding) {
	// вычисляем подъезд
	let ans = '';
	if (Math.ceil(k2 / flatsPerBuilding) !== p2 ){
		ans += -1; 
	} else {

	}
	return ans + ' '
}
function n (k1, m, k2, p2, n2, flatsAmount, flatsPerBuilding){
	// вычисляем этаж
	let ans = '';
	if (Math.ceil((k2 % flatsPerBuilding)/ flatsAmount) !== n2){
		ans += -1;
	} else {
		if (n === 1) ans+=1
	}
	return ans;
}

console.log(Math.ceil(k1/flatsPerBuilding), Math.ceil((k1 % flatsPerBuilding)/ flatsAmount));



