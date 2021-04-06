console.log('\n Eventos (customizados)');

const {EventEmitter} = require('events');

//Creo el evento
const myEmitter = new EventEmitter();

//registro los callbacks
myEmitter.addListener('digaHola', () => console.log('Hola'));
myEmitter.addListener('digaHola2', () => console.log('Hola2'));

myEmitter.emit('digaHola2');

console.log('\nCallbacks anidados (callback hell)');

function delay(ms, callback) {
    setTimeout(callback, ms);
}

let acc = 0;
console.log('acc = ', acc);
delay(2000,() => {
    acc += 2;
    console.log('acc = ', acc);
    delay(2000,() => {
        acc += 2;
        console.log('acc = ', acc);
        delay(2000,() => {
            acc += 2;
            console.log('acc = ', acc);
            delay(2000,() => {
                acc += 2;
                console.log('acc = ', acc);
            });
        });
    });
});
