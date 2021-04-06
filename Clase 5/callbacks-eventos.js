// console.log('\n Eventos (customizados)');

// const {EventEmitter} = require('events');

// //Creo el evento
// const myEmitter = new EventEmitter();

// //registro los callbacks
// myEmitter.addListener('digaHola', () => console.log('Hola'));
// myEmitter.addListener('digaHola2', () => console.log('Hola2'));

// myEmitter.emit('digaHola2');

// console.log('\n Callbacks anidados (callback hell)');

// function delay(ms, callback) {
//     setTimeout(callback, ms);
// }

// let acc = 0;
// console.log('acc = ', acc);
// delay(2000,() => {
//     acc += 2;
//     console.log('acc = ', acc);
//     delay(2000,() => {
//         acc += 2;
//         console.log('acc = ', acc);
//         delay(2000,() => {
//             acc += 2;
//             console.log('acc = ', acc);
//             delay(2000,() => {
//                 acc += 2;
//                 console.log('acc = ', acc);
//             });
//         });
//     });
// });

console.log('\n Resolucion Callback Hell con Promise');

function delayPromise(ms, nombre) {
    return new Promise((resolve, reject) => {
        if (typeof ms === 'number') {
            setTimeout(() => resolve(nombre), ms);
        }else{
            let err = {
                error: 'error de tipo en tiempo',
                nombre,//nombre: nombre,
                data: ms,
                tipo: typeof ms
            }
            reject(err);
        }
    });
}

function procesoConThenCatch(){
    let acc = 0;
    console.log('acc = ', acc);
    console.log('Init retardo');
    delayPromise(2000, 'Retardo 1')
        .then(datos => {
            acc += 2;
            console.log('acc = ', acc)
            console.log('Fin retardo: ' + datos);
            return delayPromise(2000, 'Retardo 2')
        })
        .then(datos => {
            acc += 2;
            console.log('acc = ', acc)
            console.log('Fin retardo: ' + datos);
            return delayPromise(2000, 'Retardo 3')
        })
        .then(datos => {
            acc += 2;
            console.log('acc = ', acc)
            console.log('Fin retardo: ' + datos);
            return delayPromise(2000, 'Retardo 4')
        })
        .then(datos => {
            acc += 2;
            console.log('acc = ', acc)
            console.log('Fin retardo: ' + datos);
            return delayPromise(2000, 'Retardo 5')
        })
        .then(datos => {
            acc += 2;
            console.log('acc = ', acc)
            console.log('Fin retardo: ' + datos);
            return delayPromise(2000, 'Retardo 6')
        })
        .then(datos => {
            acc += 2;
            console.log('acc = ', acc)
            console.log('Fin retardo: ' + datos);
            return delayPromise(2000, 'Retardo 7')
        })
        .catch(err => { console.log(`Error: ${JSON.stringify(err)}`); });

        console.log('Otras tareas...');
    };

//async function procesoConAsyncAwait(){
//const procesoConAsyncAwait = async function(){
const procesoConAsyncAwait = async () => {
    try {
    let acc = 0;
    console.log('acc = ', acc);

    for (let index = 0; index < 5; index++) {
        // let tiempo = index!=3? 2000 : 'Hello there'; //Para error
        let tiempo = 2000;
        let datos = await delayPromise(tiempo, `Retardo ${index}`);
        acc += 2;
        console.log('acc = ', acc);
        console.log('proceso: ', datos);
    }

    // let datos = await delayPromise(2000, 'Retardo 1');
    // acc += 2;
    // console.log('acc = ', acc);

    // datos = await delayPromise(2000, 'Retardo 2');
    // acc += 2;
    // console.log('acc = ', acc);

    // datos = await delayPromise(2000, 'Retardo 3');
    // acc += 2;
    // console.log('acc = ', acc);

    // datos = await delayPromise(2000, 'Retardo 4');
    // acc += 2;
    // console.log('acc = ', acc);
    }catch(err){
        console.log(`Error: ${JSON.stringify(err)}`);
    }

    console.log('Otras tareas...');
}
console.log('Inicio llamado funcion con Async/Await');
( async () => {
    await procesoConAsyncAwait();
    console.log('Fin proceso funcion con Async/Await');

})();

console.log('Fin llamado funcion con Async/Await');


console.log('\n');
