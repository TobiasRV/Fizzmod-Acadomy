console.log('\n-----------------------------------------------------------');

console.log('/************ ECMAScript Conceptos ************/');

// Nuevos Contructores de variables: let y const

// console.log('\n/* JS5 - var */');

// var numero = 5;
// var numero = 6;
// console.log(numero);

// var PI = 3.1415927
// console.log(PI);
// PI = 2.71;
// console.log(PI);

// var sumar = function(a,b){
//     return a + b;
// }
// sumar = 'pepe';
// console.log(sumar(6,7));

// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }
// console.log(i);

//-----------------------------------------------------

console.log('\n/* ES6 - let / const */');

console.log('\n/* JS5 - var */');

let numero = 5;
//let numero = 6;
console.log(numero);

const PI = 3.1415927
console.log(PI);
// PI = 2.71;
// console.log(PI);

const sumar = function(a,b){
    return a + b;
}
//sumar = 'pepe';
console.log(sumar(6,7));

for (let i = 0; i < 5; i++) {
    console.log(i);
}
//console.log(i);


console.log('/**********************************************/');

// console.log('/************ Bloques de codigo: var ,let , const ************/');

// console.log('//Bloque de codigo anonimo');
// {
//     //var a = 5;
//     //let a = 5;
//     const a = 5;
//     console.log(a);
// };
// //console.log(a);

// console.log('//Bloque de codigo condicional');
// if(true){
//     //var b = 6;
//     //let b = 6;
//     const b = 6;
//     console.log(b);
// };
// //console.log(b);

// console.log('//Bloque de codigo funcional');
// function foo(){
//     //var c = 7;
//     //let c = 7;
//     const c = 7;
//     console.log(c);
// };
// foo();
// //console.log(c);


console.log('/**********************************************/');

console.log('/************ Nuevos Constructores de funciones: arrow function ************/');

// function sumar(a,b){
//     return a + b;
// };

// const sumar = function(a,b){
//     return a + b;
// };

// const sumar = (a,b) => {
//     return a + b;
// };

const sumar = (a,b) => a + b; //Solo cuando son de una linea(basicamente como los if)

const dobleDe = a => 2*a;

const prtMensaje = () => console.log('Hola');

console.log(sumar(5+6));

let num1 = 16;
let num2 = 32;
//Template string
console.log(`El doble de ${num1} es ${dobleDe(num1)}`);


console.log(
    `La suma de ${num1}
    + ${num2} es ${sumar(num1,num2)}
    `);


prtMensaje();
console.log('/**********************************************/');


console.log('\n-----------------------------------------------------------');
