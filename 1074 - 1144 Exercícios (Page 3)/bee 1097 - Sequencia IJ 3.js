var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 1; i <= 9; i += 2) {
  let count = 0;
  for (let j = i + 6; j >= 5; j--) {
    console.log(`I=${i} J=${j}`);
    count++;
    if (count === 3) {
      break;
    }
  }
}