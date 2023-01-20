var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

const [vertebras, classe, dieta] = [lines[0], lines[1], lines[2]];

if (vertebras === 'vertebrado'){
    if (classe === 'ave'){
        if (dieta === 'carnivoro'){
            console.log('aguia');
        } else if (dieta === 'onivoro'){
            console.log('pomba');
        }
    } else if (classe === 'mamifero'){
        if (dieta === 'onivoro'){
            console.log('homem');
        } else if (dieta === 'herbivoro'){
            console.log('vaca');
        }
    }
} else if (vertebras === 'invertebrado'){
    if (classe === 'inseto'){
        if (dieta === 'hematofago'){
            console.log('pulga');
        } else if (dieta === 'herbivoro'){
            console.log('lagarta');
        }
    } else if (classe === 'anelideo'){
        if(dieta === 'hematofago'){
            console.log('sanguessuga');
        } else if (dieta === 'onivoro'){
            console.log('minhoca');
        }
    }
}