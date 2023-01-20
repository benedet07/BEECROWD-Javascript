var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const hr = lines.shift();
const horas = hr.split(' ');
const [horaInicial, horaFinal] = [parseInt(horas[0]), parseInt(horas[1])];

if (horaInicial > horaFinal){
    const diasDiferentes = 24 - horaInicial + horaFinal;
    if (diasDiferentes <= 24 && diasDiferentes >= 1){
        console.log('O JOGO DUROU '+ diasDiferentes +' HORA(S)');
    }
} else if (horaInicial < horaFinal){
    const diasIguais = horaFinal - horaInicial;
    if (diasIguais <= 24 && diasIguais >= 1){
        console.log('O JOGO DUROU '+ diasIguais +' HORA(S)');
    }
} else if (horaInicial === horaFinal){
    console.log('O JOGO DUROU 24 HORA(S)');
}