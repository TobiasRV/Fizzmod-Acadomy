const net = require('net');

const PORT = 8080;

const server = net.createServer( cliente => {
    console.log('Cliente conectado');

    cliente.on('data', data => {
        console.log(`RX Server: ${data}`);
        cliente.write(data);
    })
})

server.listen(PORT, () => {
    console.log('Server escuchando en puerto: ' + PORT);
})



// net.createServer( conexion => {
//     console.log('Cliente conectado');
// }).listen(PORT);

// const server = net.createServer( cliente => {
//     console.log('Cliente conectado');

//     cliente.on('data', data => {
//         let obj = JSON.parse(data)
//         // console.log(`RX Server: ${data}`);
//         // console.log('RX Server: ', obj);
//         // console.log(`RX Server: ${JSON.stringify(obj)}`);
//         console.log(`RX Server: ${data}`);
//         // console.log(`RX Server: ${obj.contador}`);
//         cliente.write(`TX Server: ${data}`);
//     })
// });
