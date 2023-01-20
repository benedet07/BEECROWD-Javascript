var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const num = lines.map(line => parseInt(line));

for(i = 1; i <= num.length; i++){
    if(num[i] > 0 && num[i] % 2 === 0){
        console.log('EVEN POSITIVE');
    } else if(num[i] < 0 && num[i] % 2 === 0){
        console.log('EVEN NEGATIVE');
    } else if(num[i] > 0 && num[i] % 2 !== 0){
        console.log('ODD POSITIVE');
    } else if(num[i] < 0 && num[i] % 2 !== 0){
        console.log('ODD NEGATIVE');
    } else if(num[i] === 0) {
        console.log('NULL');
    }
}