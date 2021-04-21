const net = require('net');

const PORT = 8080;

const client = net.connect({port: PORT}, () => {
    console.log('Cliente conectado al puerto: ' + PORT);
});

client.on('data', data => {
    console.log('RX Client: ' + data);
})

let contador = 0;
setInterval(() => {
    console.log('TX Client: ', contador);
    client.write(contador.toString());
    contador++;
},1000);


// let contador = 0;
// let obj = {contador: contador};
// setInterval(() => {

//     console.log('TX Cliente: ', JSON.stringify(obj));
//     client.write(JSON.stringify(obj));
//     obj.contador++;
//     // console.log('TX Cliente: ', contador);
//     // client.write(contador.toString());
//     // contador++;
//     // client.write(obj.contador.toString());
//     // obj.contador++;
// }, 1000);
