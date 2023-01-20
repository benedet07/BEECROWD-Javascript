var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let num = lines.filter(lines => !isNaN(parseInt(lines)));

var inn = 0;
var out = 0;

for (var i = 1; i < num.length; i++){
  if (num[i] >= 10 && num[i] <=20) {
    inn++;
  } else {
    out++;
  }
}
console.log(inn + " in");
console.log(out + " out");
/*
while (num < 10000){
  let x = num.shift()
  N++;
  
}
console.log(N)



*/
//