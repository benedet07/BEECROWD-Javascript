var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let todosValores = 0;
let X = parseInt(lines.shift());

if(X >= 1 && X <= 1000){
    for(i = 0; i < X; i++ ){
        todosValores++;
        if(todosValores % 2 !== 0){
            console.log(todosValores);
        }
    }
}