console.log('\n-------------- Objetos en Javascript -----------------\n');

// Formas de crear objetos
// 1) a traves de la forma literal (JS5)
// 2) a traves del metodo Object.create (JS5)
// 3) a traves de las funciones constructoras
//      a) fabrica de objetos o Factory
//      b) operador new
// 4) a traves de la funcion construtora class (ES6)

// console.log('\n---- Forma literal ----\n');

// let a = {nombre: 'Carlos'};
// console.log(a);
// console.log('Posee la propiedad nombre: ' + a.hasOwnProperty('nombre'));
// console.log('Posee la propiedad edad: ' + a.hasOwnProperty('edad'));

// console.log('\n---- Funcion Create de Object ----\n');
// console.dir(Object);

// let prototipo = {
//     saludo: function (){
//         console.log('Hello there!');
//     }
// };
// let prototipo2 = {
//     saludo: function (){
//         console.log('General Kenobi');
//     }
// };

// // let b = Object.create(null);
// // let b = Object.create(Object.prototype);
// let b = Object.create(prototipo, {
//     nombre: {
//         value: 'Juan',
//         writable: true,
//         configurable: true,
//         enumerable: true
//     }
// });
// console.log(b);

// let c = Object.create(prototipo2);
// c.nombre = 'Juan';
// console.log(c);

// console.log(prototipo.isPrototypeOf(b));
// console.log(prototipo.isPrototypeOf(c));
// console.log(prototipo2.isPrototypeOf(b));
// console.log(prototipo2.isPrototypeOf(c));

// //Proteccion de propiedades con Object.create

// console.log('\nObjeto c: dinamico');
// console.log(c);
// console.log(c.nombre);//Leo la propiedad
// c.nombre = 'Pedro';//Escribo la propiedad
// //delete c.nombre;//Borro la propiedad
// for (let key in c) {
//     console.log(key);
// }
// console.log(c);

// console.log('\nObjeto b: statico');
// console.log(b);
// console.log(b.nombre);//Leo la propiedad
// b.nombre = 'Pedro';//Escribo la propiedad
// //delete b.nombre;//Borro la propiedad
// for (let key in b) {
//     console.log(key);
// }
// console.log(b);

// console.log('\n---- Funcion Constructoras ----\n');

// console.log('\na) Una funcion es un objeto');

// function foo(){
//     console.log('Soy foo');
// };

// foo();
// console.dir(foo);
// foo.x = true;
// console.log(foo.x);

// console.log('\nb) Las funciones en JS son variadicas');

// function suma(a = 0,b = 0){
//     console.log(a,b);
//     return a + b;
// }
// console.log(suma(5));
// console.log(suma(5,6));
// console.log(suma(5,6,7));

// console.log('\nc) Las funciones en JS tienen ambito o scope');

// var global = 'global';
// function foo2(argumento) {
//     var local = 'local';
//     console.log(global, local, argumento);
// }

// function foo3() {
//     var local2 = 'local2';
//     console.log(global, local2);
// }
// foo2('argumento');
// foo3();

// console.dir(foo2);

// console.log('\nd) Las funciones en JS tienen contexto(this)');

// function foo4(){
//     console.log(this);
// }
// foo4();

// var nombre = 'Juan';
// var persona = {
//     nombre: 'Pedro',
//     saludo: function (){
//         console.log(this, this.nombre);
//     }
// }

// persona.saludo();

// const saludoExt = persona.saludo;
// saludoExt();


// console.log('\ne) Las funciones en JS tienen clousure (clausuras)');

// function externa(x){
//     //console.log(x);
//     let z = 5;
//     return function interna(y){
//         console.log(z+y+x);
//     }
// }
// let resultado = externa(50);
// console.log(resultado);

// resultado(10);
// console.dir(resultado);
// // console.log(x);

// console.log('\nf) Funciones: formas de ejecucion');
// function ctx(a,b){
//     console.log(this, a, b);
// }

// ctx(5,6);                       //Forma normal de ejecucion
// ctx.apply({x:1},[5,6]);         //Forma de ejecucion mediante el metodo apply
// ctx.call({x:1},5,6);            //Forma de ejecucion mediante el metodo call
// ctx.bind({x:1})(5,6);           //Forma de ejecucion mediante el metodo bind


// console.dir(ctx);


// var x = 9;
// var module = {
//     x:81,
//     gerX: function(){
//         return this.x;
//     }
// };

// console.log(module.gerX()); //Funciona bien da 81

// var getX = module.gerX;
// console.log(getX());        //Esperabamos 81 pero dio 9 proque esta en el contexto global

// var getXbind = getX.bind(module);
// console.log(getXbind());    //Funciona ok, da 81 porque esta bindeado con el this correcto (al contexto de module)

// //Usando apply,call
// console.log(getX.apply(module));
// console.log(getX.call(module));


console.log('\n//POO, OOP: Aplicacion de las funciones constructoras');

////No funciona porque los objetos juan y ana no son independientes (referencian al mismo espacio en memoria)
// var persona = {
//     nombre: null,
//     edad: null
// };

// var juan = persona;
// var ana = persona;

////Esto funciona
// var juan = {... persona};
// var ana = {... persona};

// Solucion usar funciones para
console.log('\n3)Funciones constructoras');
console.log('\n  a)Factories');

function persona(nombre, edad){
    var p = {
        nombre: nombre,
        edad: edad,
    };

    return p;
}


var juan = persona('Juan', 23);
var ana = persona('Ana', 21);

console.log(juan);
console.log(ana);

console.log('\n  b)Operador new');

function Persona(nombre, edad){
    //console.log('Persona', this);
    this.nombre = nombre;
    this.edad = edad;
};


//Sin el new apunta al contexto global
var mario = new Persona('Mario',28);
var cecilia = new Persona('Cecilia', 26);

console.log(mario);
console.log(cecilia);

// Paso o acciones que ejectua new
// 1) Crea un objeto vacio -> p = {}
// 2) Ejecuta la funcion constructora que tiene a su derecha (Persona())
//    redefiniendo su contexto al contexto (this) al contexto del objeto que creo en punto 1 (p) -> Persona.call(p,...,...)
// 3) Retorna el objeto p -> var mario <- p <- Persona.call(p,...,...)


console.log('\n//Prototype de una funcion constructora');

// Creacion de un objeto en forma literal
var pedroL = {
    nombre: 'Pedro',
    edad: 34
};

console.log(pedroL);

//Creacion de un objeto usando una funcion constructora (new)

function Individuo(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
}

var pedroFC = new Individuo('Pedro', 34);
console.log(pedroFC);

console.dir(Individuo);

Individuo.prototype.saludo = function(){
    console.log('Hello there');
}
