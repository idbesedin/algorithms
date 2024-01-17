var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');

let input = file.split(' ');
let array = input.map(item => +item);
let [n, k, m] = array;
let ans = 0;

if (k < m || n < k || n < m) {
	console.log(0);
} else {
	while (n >= k){
		let currentPieces = Math.floor(n/k);
		let currentDetailsPerPiece = Math.floor(k/m);
		ans += currentPieces*currentDetailsPerPiece;
		n = n - currentPieces*currentDetailsPerPiece*m;
	}
	console.log(ans);
}
