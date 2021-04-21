const events = require('events');

//  1) Crear evento custom
const eventEmitter = new events.EventEmitter();

//  2)Registro del evento con los callbacks de atencion
const listener1 = () => {
    console.log('listener 1 ejecutado');
};
const listener2 = () => {
    console.log('listener 2 ejecutado');
};

eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

let eventsListeners = eventEmitter.listenerCount('connection');
console.log('Listeners escuchando la ocurrencia del evento: ' + eventsListeners);

// 3) Disparo del evento custom
eventEmitter.emit('connection');

// 4) Remocion de un listener
eventEmitter.removeListener('connection', listener1);
console.log('Listener 1 removido');
eventEmitter.emit('connection');
