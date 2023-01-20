var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (var j = 2; j <= 100; j += 2){
    console.log(j);
}