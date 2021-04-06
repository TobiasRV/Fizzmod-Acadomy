console.log('\n');
console.log('\n');

console.log('Spread Operator');
console.log('\n');

//Array
function sumar(a,b,c) {
    return a + b + c;
}

console.log(sumar(6,7,8));

const numeros = [6,7,8];
console.log(sumar(...numeros));

//Object

console.log('\n');
console.log('Sin desestructurar');
let a = { nombre: 'Carlos'};
let b = a;
a.nombre = 'Juan';

console.log(a);
console.log(b);

console.log('\n');
console.log('Desestructurado');
let c = { nombre: 'Carlos'};
let d = {...c};
c.nombre = 'Juan';

console.log(c);
console.log(d);

console.log('\n');

let obj1 = {
    a: 1,
    b: 2,
    c: 3
};

let obj2 = {
    d:4,
    e:5,
    f:6
};

let objR = { ...obj1, ...obj2, d:44, a:11};
console.log(obj1);
console.log(obj2);
console.log(objR);


console.log('\n');
console.log('\n');

console.log('Rest Operator');
console.log('\n');

function sumar(...args) {
    let suma = 0;
    args.forEach(arg => {
        suma += arg;
    });

    return suma;
}

console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));


console.log('\n');
console.log('Destructuring Object');
console.log('\n');

//Array
console.log('Array');
let [p,q, ...rest] = [10,20,30,40,50];
console.log(p,q,rest);

console.log('\n');

console.log('Object');

//Object
let obj4 = {
    x:6,
    y:7,
    z:8,
    a:2,
    b:3
};

// let x = obj4.x;
// let y = obj4.y;
// let z = obj4.z;

let {z, y, x, ...resto} = obj4;
console.log(x,y,z,resto);

let {x:xx, y:yy, z:zz} = obj4;
console.log(xx,yy,zz);


console.log('\n');
console.log('\n');
