var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const val = lines.shift()
const valores = val.split(' ')
const valoresSeparados = valores.map(a => parseFloat(a))
const x = valoresSeparados[0]
const y = valoresSeparados[1]
const z = valoresSeparados[2]

const perimetro = (x + y + z).toFixed(1)
const area = (((x + y) * z) / 2).toFixed(1)

if ((x < y + z) && (y < x + z) && (z < x + y)){
    console.log('Perimetro = ' + perimetro)
} else {
    console.log('Area = ' + area)
}