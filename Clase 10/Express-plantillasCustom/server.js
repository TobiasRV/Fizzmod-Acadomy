import express from 'express';
import fs from 'fs';
const app = express();

let visitas =  0;

let PORT = process.env.PORT || 8080;
app.set('PORT', PORT);

const server = app.listen(app.get('PORT'), () => {
    console.log(`Server listening to port: ${server.address().port}`);
});
server.on('error', error => { console.log(`Error en el servido ${error}`)});

//Configuracion del motor de platillas custom
app.engine('cte', (filepath,options, cb) => {
    fs.readFile(filepath, (err, content) => {
        if(err){
            return cb(new Error(err));
        }
        let rendered = content.toString();
        for (let key in options) {
            if(typeof options[key] == 'string' || typeof options[key] == 'number'){
                rendered = rendered.replace(`$${key}?`, `${options[key]}`);
            }
        }
        return cb(null, rendered);
    });
});

app.set('views', './views');
app.set('view engine', 'cte');

app.get('/' , (req , res)=>{
    visitas++;
    let fyh = new Date().toLocaleString();
    //         {filepth  ,   options                             } ->  app.engine
    res.render('plantilla', {visitas, fyh, timestamp: Date.now()});
});
