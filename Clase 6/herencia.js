console.log('\n---------- Herencia en Javascript ----------\n');

console.log('\n//Herencia en JS5 usando funciones contructoras');

console.log('\n---- Persona JS5 ----\n');
function PersonaJS5(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    PersonaJS5.constructor++;
}

PersonaJS5.prototype.saludo = function(){
    console.log('Hello there!');
}
//Propiedad estatica
PersonaJS5.constructor = 0;

let juanJS5 = new PersonaJS5('Juan', 23);
let anaJS5 = new PersonaJS5('Ana', 21);

console.log(juanJS5);
console.log(anaJS5);
console.dir(PersonaJS5);

console.log('\n---- Empleado JS5 ----\n');
function EmpleadoJS5(nombre, edad,sueldo){
    PersonaJS5.call(this, nombre, edad); //Composicion
    this.sueldo = sueldo;
}

EmpleadoJS5.prototype = Object.create(Persona.prototype);  //Herencia
EmpleadoJS5.prototype.trabajar = function(){
    console.log('Trabajo muy duro, como un esclavo...');
}

let empleadoJS5 = new EmpleadoJS5('Pedro',30,40000);
console.log(empleadoJS5);
console.dir(EmpleadoJS5);

console.log('\n//Herencia en ES6 usando class');
//Las clases en ES6 no soportan Hoisting
console.log('\n---- Persona ES6 ----\n');
class PersonaES6{
    static contador = 0;
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        PersonaES6.contador++;
    }
    saludo(){
        console.log('Hello there!');
    }
}


let juanES6 = new PersonaES6('Juan', 23);
let anaES6 = new PersonaES6('Ana', 21);

console.log(juanES6);
console.log(anaES6);
console.dir(PersonaES6);

console.log('\n---- Empleado ES6 ----\n');
class EmpleadoES6 extends PersonaES6{
    constructor(nombre, edad,sueldo){
        super(nombre, edad);
        this.sueldo = sueldo;
    }
    trabajar(){
        console.log('Trabajo muy duro, como un esclavo...');
    }
}

let empleadoES6 = new EmpleadoES6('Pedro',30,40000);
console.log(empleadoES6);
console.dir(EmpleadoES6);
