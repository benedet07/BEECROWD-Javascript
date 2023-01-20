var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const [diaInicial, diaFinal] = [(lines[0].split('Dia')), (lines[2]).split('Dia')];
const [horaInicial, horaFinal] = [lines[1].split(':'), lines[3].split(':')];

const [diaI, diaF] = [parseInt(diaInicial[1]), parseInt(diaFinal[1])];
const [horaI, minI, segI] = [parseInt(horaInicial[0]), parseInt(horaInicial[1]), parseInt(horaInicial[2])];
const [horaF, minF, segF] = [parseInt(horaFinal[0]), parseInt(horaFinal[1]), parseInt(horaFinal[2])];

function minutosParaSegundos(minutos) {
    return minutos * 60;
}

function horasParaSegundos(horas) {
    return horas * 60 * 60;
}

function diasParaSegundos(dias) {
    return dias * 60 * 60 * 24;
}

const totalEmSegundosInicial = (segI + minutosParaSegundos(minI) + horasParaSegundos(horaI) + diasParaSegundos(diaI));
const totalEmSegundosFinal = (segF + minutosParaSegundos(minF) + horasParaSegundos(horaF) + diasParaSegundos(diaF));
const totalEmSegundos = totalEmSegundosFinal - totalEmSegundosInicial;

const DIA_EM_SEGUNDOS = 60 * 60 * 24
const HORA_EM_SEGUNDOS = 60 * 60
const MINUTO_EM_SEGUNDOS = 60

const dias = Math.floor(totalEmSegundos / DIA_EM_SEGUNDOS);
const totalSemDias = totalEmSegundos % DIA_EM_SEGUNDOS;

const horas = Math.floor(totalSemDias / HORA_EM_SEGUNDOS);
const totalSemHoras = totalSemDias % HORA_EM_SEGUNDOS;

const minutos = Math.floor(totalSemHoras / MINUTO_EM_SEGUNDOS);
const totalSemMinutos = totalSemHoras % MINUTO_EM_SEGUNDOS;

const segundos = Math.floor(totalSemMinutos);

console.log(dias + ' dia(s)');
console.log(horas + ' hora(s)');
console.log(minutos + ' minuto(s)');
console.log(segundos + ' segundo(s)');
/*
const segCertos = segI > segF ? (60 - segI) + segF : segF - segI;
const minCertos = minI > minF ? (60 - minI) + minF : minF - minI;
const horasCertas = horaI > horaF ? (24 - horaI) + horaF : horaF - horaI;
const diasCertos = horaI > horaF ? Math.floor((((diaF - diaI) * 24) - horasCertas) / 24) : diaF - diaI;

console.log(diasCertos + ' dia(s)');
console.log(horasCertas + ' hora(s)');
console.log(minCertos + ' minuto(s)');
console.log(segCertos + ' segundo(s)');





const diasEmHoras = diaI < diaF ? (diaF - diaI) * 24 : ; //4 resultado 96 horas
const diasCertos = (diasEmHoras - (horaI + horaF)) / 24
const horasCertas = horaI < horaF ? horaF - horaI : 24 - (horaF - horaI)
const minCertos = minI < minF ? minF - minI : (60 - minF) - (60 - minI); //resultado 1 minuto
const segCertos = segI < segF ? segF - segI : (60 - segF) - (60 - segI);

if (diasCertos > 0 && horasCertas > 0 && minCertos > 0){
    console.log(diasCertos + ' dia(s)\n' + horasCertas + ' hora(s)\n' + minCertos + ' minuto(s)\n' + segCertos + ' segundo(s)');
}

const totalMinInicial = minI + (horaI * 60) + (segI / 100);
const totalMinFinal = minF + (horaF * 60) + (segF / 100);

const diaSeguinte = horaI > horaF || (horaI === horaF && minI > minF);

const minAdd = diaSeguinte ? 24 * 60 : 0;
const diffTempoEmMinutos = totalMinFinal - totalMinInicial + minAdd;

const diasDeDuracaoEmMinutos = ((diaF - diaI) * 24) * 60;
const minutosTotal = diasDeDuracaoEmMinutos - diffTempoEmMinutos;

const diasDeDuracao = Math.floor((minutosTotal / 60) / 24);
const horasDuracao = Math.floor(diffTempoEmMinutos / 60);
const minDeDuracao = Math.floor(diffTempoEmMinutos - horasDuracao * 60);
const segDeDuracao = Math.floor(60 - (segI - segF));

if (diasDeDuracao >= 0 && horasDuracao >= 0 && minDeDuracao >= 0 && segDeDuracao >= 0){
    console.log(diasDeDuracao + ' dia(s)');
    console.log(horasDuracao + ' hora(s)');
    console.log(minDeDuracao + ' minuto(s)');
    console.log(segDeDuracao + ' segundo(s)');
}



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
}*/