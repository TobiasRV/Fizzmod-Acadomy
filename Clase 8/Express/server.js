const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Listening to port ${{PORT}}`);
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
