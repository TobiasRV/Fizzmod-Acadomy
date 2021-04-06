// Clase Persona
class Persona {

    //Propiedad estatica
    static contador = 0;
    //static contador;

    constructor(nombre, edad){
        //Propiedades instancia (atributos)
        this.nombre = nombre;
        this.edad = edad;
        // if (!Persona.contador) {
        //     Persona.contador = 0;
        // }
        Persona.contador++;
    }

    //Propiedad prototipo (metodo)
    saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

console.log('\n');
console.log(`Cantidad de instancias de Persona: ${Persona.contador}`);
let juan = new Persona('Juan', 23);
console.log(juan);
juan.saludar();
console.log(`Cantidad de instancias de Persona: ${Persona.contador}`);
let ana = new Persona('Ana', 21);
console.log(ana);
ana.saludar();
console.log(`Cantidad de instancias de Persona: ${Persona.contador}`);

console.log('\n');

//Clase Empleado
class Empleado extends Persona {

    constructor(nombre, edad, sueldo){
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    trabajar(){
        console.log('Trabajando...');
    }
}

console.log('\n');

let empleado = new Empleado('Pedro', 35, 40000);
console.log(empleado);
empleado.saludar();
empleado.trabajar();
console.log(`Cantidad de instancias de Persona: ${Persona.contador}`);
console.log('\n');
