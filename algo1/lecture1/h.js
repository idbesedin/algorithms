var fs = require('fs');
var file = fs.readFileSync('input.txt', 'utf-8');
let input = file.split('\n');
let array = input.map(item => +item);
array.pop();

let [a, b, na, nb] = array;

console.dir(array);