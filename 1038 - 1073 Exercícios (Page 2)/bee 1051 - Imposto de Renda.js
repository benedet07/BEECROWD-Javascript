var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const renda = parseFloat(lines);

if (renda > 0 && renda <= 2000){
    console.log('Isento');

} else if (renda > 2000 && renda <= 3000){
    const diffImposto1 = renda - 2000;
    console.log('R$ ' + (diffImposto1*0.08).toFixed(2));

} else if (renda > 3000 && renda <= 4500){
    const diffImposto2 = (1000*0.08) + ((renda - 3000)*0.18);
    console.log('R$ ' + diffImposto2.toFixed(2));

} else if (renda > 4500) {
    const diffImposto3 = (1000*0.08) + (1500*0.18) + ((renda - 4500)*0.28);
    console.log('R$ ' + diffImposto3.toFixed(2));
}


/*
const diffRenda = renda - 2000
    const sobraRenda = renda - 3000
    const totalImposto = (diffRenda*0.8) + (sobraRenda*0.18)
*/