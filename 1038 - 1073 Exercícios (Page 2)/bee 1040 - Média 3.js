var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const notas = lines.shift().split(' ')
const n1 = parseFloat(notas.shift()).toFixed(1)
const n2 = parseFloat(notas.shift()).toFixed(1)
const n3 = parseFloat(notas.shift()).toFixed(1)
const n4 = parseFloat(notas.shift()).toFixed(1)
const notaex = parseFloat(lines.shift())

const media = (n1*2 + n2*3 + n3*4 + n4*1) / 10
const mediaex = (notaex + media) / 2
console.log('Media: ' + media.toFixed(1))

if (media >= 7.0){
    console.log('Aluno aprovado.')

} else if (media < 5.0){
    console.log('Aluno reprovado.')

} else {
    console.log('Aluno em exame.')
    console.log('Nota do exame: ' + notaex.toFixed(1))
    if (mediaex >= 5.0){
        console.log('Aluno aprovado.')
    } else if (mediaex <= 4.9){
        console.log('Aluno reprovado.')
    }
    console.log('Media final: ' + mediaex.toFixed(1))
}

/*
if (media >= 5.0 && media <= 6.9){
    const notaex = lines.shift()
    console.log('Nota do exame: ' + notaex)
    const mediaex = (notaex + media) / 2
    console.log(mediaex)
}
*/