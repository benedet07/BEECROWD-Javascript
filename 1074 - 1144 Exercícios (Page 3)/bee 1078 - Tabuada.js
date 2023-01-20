var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const N = parseInt(lines);

for(let i = 1; i <= 10; i++){
    let total = i * N;
    console.log(`${i} x ${N} = ${total}`);
}