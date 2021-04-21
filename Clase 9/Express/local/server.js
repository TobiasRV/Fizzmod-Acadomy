// const express = require('express');
import express from 'express';

//--------------- Instancia 1 de servidor ---------------------//
const app = express();

//Manejor de variables en el ambito de la instancia del servidor

app.set('PUERTO', 8080);
const PORT = process.env.PORT || app.get('PUERTO');;
const server = app.listen(PORT, () => {
    console.log(`Listening to port ${server.address().port}`);
});

//Servicio de recursos estaticos de express
app.use(express.static('public'));

app.get('/' , (req , res)=>{
   // res.send('hello from simple server :)');
   // res.json({info: 'Soy la ruta raiz', a: {b:{c:'Hello there!'}}});
   // res.sendFile( __dirname + '/public/index.html');//Disponible en type commonjs(con require)
   // res.sendFile(process.cwd() + '/public/index.html');//Disponible en type model(con import)
});

let visitas = 0;
app.get('/visitas' , (req , res)=>{
   res.send(`<h2 style= "color:green;">Usted visito la pagina ${++visitas} ${visitas == 1? 'vez':'veces'}</h2>`);
});

app.get('/status' , (req , res)=>{
   res.send('<h2>Servidor express</h2>');
});

app.get('/' , (req , res)=>{
   res.send('<h2>Servidor express</h2>');
});

server.on('error', error => console.log(`Error en servidor: ${error}`));

//--------------- Instancia 2 de servidor ---------------------//
// const app2 = express();

// app2.listen(PORT + 1 , () => {
//    console.log(`Listening to port ${{PORT}}`);
// });

// app2.get('/', (req,res) => {
//    res.send('Hola soy la instancia 2 del servidor express')
// })
