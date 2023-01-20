var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


const hr = lines.shift();
const horas = hr.split(" ");
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = [parseInt(horas[0]),parseInt(horas[1]),parseInt(horas[2]),parseInt(horas[3])];
const diaSeguinte = horaInicial > horaFinal || (horaInicial === horaFinal && minutoInicial > minutoFinal);
const ehDiaSeguinte = horaInicial > horaFinal || (horaInicial === horaFinal && minutoInicial > minutoFinal);

const totalInicialEmMinutos = minutoInicial + horaInicial * 60;
const totalFinalEmMinutos = minutoFinal + horaFinal * 60;

const minutosParaAdicionar = ehDiaSeguinte ? 24 * 60 : 0;

const diferencaDeTempoEmMinutos = totalFinalEmMinutos - totalInicialEmMinutos + minutosParaAdicionar;

const horasDeDuracao = Math.floor(diferencaDeTempoEmMinutos / 60);
const minutosDeDuracao = diferencaDeTempoEmMinutos - horasDeDuracao * 60;

if (diferencaDeTempoEmMinutos === 0) {
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
} else {
    console.log("O JOGO DUROU " + horasDeDuracao + " HORA(S) E " + minutosDeDuracao + " MINUTO(S)");
}



/*
var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const hr = lines.shift();
const horas = hr.split(' ');
const [horaInicial, minutoInicial, horaFinal, minutoFinal] = [parseInt(horas[0]), parseInt(horas[1]), parseInt(horas[2]), parseInt(horas[3])];

if (horaInicial >= horaFinal && minutoInicial > minutoFinal){ //correto
    const horasDiferentes = 24 - horaInicial + horaFinal;
    const minutosDiferentes = 60 - (minutoInicial - minutoFinal);
    if (horasDiferentes <= 24 && minutosDiferentes >= 1);{
        console.log('O JOGO DUROU '+ horasDiferentes +' HORA(S) E ' + minutosDiferentes + ' MINUTO(S)');
    }
} else if (horaInicial <= horaFinal && minutoInicial < minutoFinal){ //correto
    const horasDiferentes0 = horaFinal - horaInicial;
    const minutosDiferentes0 = minutoFinal - minutoInicial;
    if (horasDiferentes0 <= 24 && minutosDiferentes0 >= 1);{
        console.log('O JOGO DUROU '+ horasDiferentes0 +' HORA(S) E ' + minutosDiferentes0 + ' MINUTO(S)');
    }
} else if (horaInicial >= horaFinal && minutoInicial < minutoFinal){ //correto
    const horasDiferentes2 = horaInicial - horaFinal - 1;
    const minutosDiferentes2 = 60 - (minutoFinal - minutoInicial);
    if (horasDiferentes2 <= 24 && minutosDiferentes2 >= 1);{
        console.log('O JOGO DUROU '+ horasDiferentes2 +' HORA(S) E ' + minutosDiferentes2 + ' MINUTO(S)');
        }
} else if (horaInicial <= horaFinal && minutoInicial > minutoFinal){ //correto
    const horasDiferentes1 = horaFinal - horaInicial - 1;
    const minutosDiferentes1 = 60 - (minutoInicial - minutoFinal);
    if (horasDiferentes1 <= 24 && minutosDiferentes1 >= 1);{
        console.log('O JOGO DUROU '+ horasDiferentes1 +' HORA(S) E ' + minutosDiferentes1 + ' MINUTO(S)');
        }
} else if (horaInicial === horaFinal && minutoInicial === minutoFinal){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
}



if (horaInicial > horaFinal && minutoInicial > minutoFinal){
    const diasDiferentes1 =  horaInicial - horaFinal;
    const minutosDiferentes1 = 60 - (minutoInicial - minutoFinal);
    if (diasDiferentes1 <= 24 && minutosDiferentes1 >= 1){
        console.log('O JOGO DUROU '+ diasDiferentes1 +' HORA(S) E ' + minutosDiferentes1 + ' MINUTO(S)');
    }
} else if (horaInicial < horaFinal && minutoInicial > minutoFinal){
    const diasDiferentes2 =  horaFinal - horaInicial;
    const minutosDiferentes2 = 60 - (minutoInicial - minutoFinal);
    if (diasDiferentes2 <= 24 && minutosDiferentes2 >= 1){
        console.log('O JOGO DUROU '+ diasDiferentes2 +' HORA(S) E ' + minutosDiferentes2 + ' MINUTO(S)');
    }
}



else if (horaInicial < horaFinal && minutoInicial < minutoFinal){
    const diasIguais = horaFinal - horaInicial;
    const minutosIguais = 60 - (minutoFinal - minutoInicial);
    if (diasIguais <= 24 && minutosIguais >= 1){
        console.log('O JOGO DUROU '+ diasIguais +' HORA(S) E ' + minutos + ' MINUTO(S)');
    }
} else if (horaInicial === horaFinal === minutoInicial === minutoFinal){
    console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
}
*/