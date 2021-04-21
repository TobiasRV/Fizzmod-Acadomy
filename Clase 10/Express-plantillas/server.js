import express from 'express';
import fs from 'fs';
import handlebars from 'express-handlebars';

const app = express();

let visitas =  0;

let PORT = process.env.PORT || 8080;
app.set('PORT', PORT);

const server = app.listen(app.get('PORT'), () => {
    console.log(`Server listening to port: ${server.address().port}`);
});
server.on('error', error => { console.log(`Error en el servido ${error}`)});

//Configuracion de plantillas Handlebars
// app.engine('hbs', handlebars({extname:'.hbs', defaultLayout: 'index.hbs'}));
// app.set('views', './views-hbs');
// app.set('view engine', 'hbs');

//Configuracion de plantillas con ejs
// app.set('views', './views-ejs');
// app.set('view engine', 'ejs');

//Configuracion de plantillas con pug
app.set('views', './views-pug');
app.set('view engine', 'pug');

app.get('/' , (req , res)=>{
    visitas++;
    let fyh = new Date().toLocaleString();
    //         {filepth  ,   options                             } ->  app.engine
    res.render('plantilla', {visitas, fyh, timestamp: Date.now()});
});
