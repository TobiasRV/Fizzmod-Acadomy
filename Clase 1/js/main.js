console.log('Bienvenidos al curso de Javascript')

/*------------------------------------------------------*/
/*                    VARIABLES                         */
/*------------------------------------------------------*/
// //Variables numerica
// var miNumero = -123.45;
// console.log(miNumero, typeof miNumero);

// // Variables booleanas
// var miBooleano = true; //false
// console.log(miBooleano, typeof miBooleano);

// // Variable string
// var miString = 'Hola!';
// console.log(miString, typeof miString);

// //Variables array
// var miArray = [1,2,3];
// console.log(miArray, typeof miArray, Array.isArray(miArray));

// // Variables objeto
// var miObjeto = {
//     nombre: 'Juan',
//     apellido: 'Perez'
// };
// console.log(miObjeto, typeof miObjeto, Array.isArray(miObjeto));

/*------------------------------------------------------*/
/*              ESTRUCTURAS CONDICIONALES               */
/*------------------------------------------------------*/

// var respuesta = confirm('Desea ingresar?'); //Solo funciona en navegador
// console.log(respuesta, typeof respuesta);
// if(respuesta){
//     alert('Bienvenido');
//     console.log('Bienvenido');
// }else{
//     alert('Lo esperamos la proxima vez');
//     console.log('Lo esperamos la proxima vez');
// }

// var edad = prompt('Ingrese su edad'); //Solo funciona en navegador
// if(edad>=18){
//     console.log('Usted es mayor de edad');

//     if(edad >= 18 && edad < 35){
//         console.log('Usted es un adulto joven');
//     }else if(edad >= 35 && edad <50){
//         console.log('Usted es un adulto');
//     }else if(edad >= 50 && edad <60){
//         console.log('Usted es un adulto');
//     }else if(edad >= 60 && edad < 80){
//         console.log('Usted es un adulto mayor');
//     }else if(edad >= 80 && edad <120){
//         console.log('Usted es un anciano');
//     }else{
//         console.log('Usted es Mirtha Legrand');
//     }
// }else{
//     console.log('Usted es menor de edad');
// }

// var numero = Number(prompt('Ingrese un numero'));
// switch(numero){
//     case 1:
//         console.log('Uno');
//         break;
//     case 2:
//         console.log('Dos');
//         break;
//     case 3:
//         console.log('Tres');
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log('Cuatro, cinco o seis');
//     default:
//         console.log('Otro');
//         break;
// }

//Operador ternario

// var numero = prompt('Ingrese su edad');
// console.log( edad>=18? 'Usted es mayor de edad' : 'Usted es menor de edad');


/*------------------------------------------------------*/
/*              ESTRUCTURAS ITERATIVAS                  */
/*------------------------------------------------------*/
//Representar los numeros del 0 al 9
// console.log('/* For */');
// for( var i=0; i<10; i++){
//     console.log(i);
// }

// console.log('/* While */');
// var n1 = 0;
// while( n1 < 10){
//     console.log(n1);
//     n1++;
// }

// console.log('/* Do While */');
// var n2 = 0;
// do{
//     console.log(n2);
//     n2++;
// }while( n2 < 10 );


/*------------------------------------------------------*/
/*              FUNCIONES                               */
/*------------------------------------------------------*/
// console.log('Funciones');

// function suma(a,b) {
//     return a + b;
// }

// var resultado = suma(5,6);
// console.log(resultado);

// resultado = suma(6,7);
// console.log(resultado);

// function saludo() {
//     console.log('Hola');
// }
// saludo();

// function getPi() {
//     return Math.PI;
// }
// console.log(getPi());

// function mostrarMensaje(mensaje) {
//     console.log(mensaje);
// }
// mostrarMensaje("Mensaje");

// //Tipos de datos en Javascript
// //1) Tipo primitivo: number, boolean, string (se pasa por copia)
// //2) Tipo Object: array, object, function (se pasa por referencia)

// var fecha = '29/03/2021'; //Tipo 1: String
// function agregarHora(f) {
//     f += '12:41';
//     console.log(f);
// }
// console.log(fecha);
// agregarHora(fecha);
// console.log(fecha);

// var fecha2 = ['29/03/2021'] //Tipo 2: Array

// function agregarHora2(f) {
//     f[0] += '12:41';
//     console.log(f);
// }

// console.log(fecha2);
// agregarHora(fecha2);
// console.log(fecha2);

/*------------------------------------------------------*/
/*              Array en JS: Iteraciones                */
/*------------------------------------------------------*/

// var numeros = [1,2,3,4,5,6,7,8,9];
// console.log(numeros[0]);

// console.log("Con FOR");
// for (var i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);

// }

// console.log("Con FOREACH");
// numeros.forEach(function(numero){
//     console.log(numero);
// })

// console.log("Con FOROF");
// for(var numero of numeros){
//     console.log(numero);
// }

/*------------------------------------------------------*/
/*              Objet en JS: Iteraciones                */
/*------------------------------------------------------*/
var persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 24
};
console.log(persona);

console.log(persona.nombre);

console.log(persona['nombre']);

for (var clave in persona) {
    var valor = persona[clave].valor;
    console.log(clave, valor);
}
