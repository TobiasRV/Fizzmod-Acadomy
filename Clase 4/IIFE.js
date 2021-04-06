'use strict';

//Funciones Autoinvocadas
console.log('\n');
console.log('\n');

console.log('Funciones Autoinvocadas (IIFE)');
console.log('I: Inmediatly');
console.log('I: Invoked');
console.log('F: Function');
console.log('E: Expression');

console.log('\n');

function program() {
    var clave = 'qwerty1234';
}
program();

console.log('---- console.log ----');
console.log(program);
console.log('---- console.dir ----');
console.dir(program);

// console.log(clave); Error Not defined

console.log('\n');
console.log('---- funcion autoinvocada ----');
const libreria = (function(num) {



    //Variable privada
    let clave2 = 'qwerty1234';

    function getClave2(){
        return clave2;
    }

    console.log('Libreria instalada', num);

    //Funciones publicas
    return {
        //getClave2, // es igual a getClave2:getClave2
        getClave2 : () => getClave2() //wrapper
    }
})(33);

console.log(libreria.getClave2);
console.log(libreria.getClave2());

console.log('\n');
console.log('\n');
