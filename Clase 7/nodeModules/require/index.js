
//Importacion de modulos con -> CommonJS
const operaciones = require('./api/operaciones');

console.log('Inicio de calculos...');
console.log(operaciones.suma(10,3));
console.log(operaciones.resta(10,3));
console.log(operaciones.mult(10,3));
console.log(operaciones.div(10,3));
console.log(operaciones.mod(10,3));
console.log('Fin de calculos...');
