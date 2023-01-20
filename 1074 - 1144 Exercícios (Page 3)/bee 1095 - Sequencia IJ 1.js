var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = 1;
let Y = 60;
console.log('I='+ X + ' J=' + Y);
for(let i = 0; i < 12; i++){
    X += 3;
    Y -= 5;
    console.log('I='+ X + ' J=' + Y);
}