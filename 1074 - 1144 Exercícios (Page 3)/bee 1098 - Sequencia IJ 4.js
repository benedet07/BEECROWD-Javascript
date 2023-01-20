var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const roundN = (num, decimais) => {
  const role = Math.pow(10, decimais); // 100  --  0.274
  return Math.round(num * role) / role;
} 

for (let i = 0; i <= 2; i += 0.2) {
  for (let j = 1; j <= 3; j++) {
    const acrescimo = roundN(i, 2);
    console.log(`I=${(acrescimo)} J=${(j + acrescimo)}`);
  }
}



