const express = require('express');
const util = require('./util/usuarios');
const validaciones = require('./validaciones/usuarios');

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Listening to port ${server.address().port}`);
});
server.on('error', error => console.log(`Error en el servidor: ${error}`));

app.use(express.urlencoded({
    extended: true
 }));
 app.use(express.json());

app.use((req,res,next) => {
    next();
});


//Ruta GET: Params
app.get('/datos/:nombre?' , (req , res)=>{
    let { url, method } = req;
    let { nombre } = req.params;
    res.send(`<h3>Ruta ${method} - URL: ${url} - Nombre: ${nombre}</h3>`);
});

/*------------------------------API REST FULL------------------------------------*/

let usuarios = [];

//Rutas GET
app.get('/:id?' , (req , res)=>{
    let { id } = req.params;
    if(id){
        let usuario = usuarios[util.getIndex(id, usuarios)];
        res.send(usuario);
    }else{
        res.send(usuarios);
    }
});

//Rutas POST
app.post('/' , (req , res)=>{
    let usuario = req.body;

    let val = validaciones.validar(usuario);
    if(val.result){
        usuario.id = util.getNextId(usuarios);
        usuario.timestamp = util.getTimeStamp();
        usuario.fyh = util.getFechaYHora();
        usuarios.push(usuario);
        res.send(usuario);
    }else{
        res.send(`Error saving user: ${val.error}`);
    }
});

//Rutas PUT
app.put('/:id' , (req , res)=>{
   let { id } = req.params;

   let usuario = req.body;
   let val = validaciones.validar(usuario);
   if(val.result){
        usuario.id = Number(id);
        usuario.timestamp = util.getTimeStamp();
        usuario.fyh = util.getFechaYHora();
        let index = util.getIndex(id, usuarios);
            if(index != -1) {
            //                  Donde               ,Cuanto ,Remplazo
                usuarios.splice(index, 1, usuario);
            }else{
                usuario.id = util.getNextId(usuarios);
                usuarios.push(usuario);
            }
        res.send(usuario);
    }else{
        res.send(`Error saving user: ${val.error}`);
    }
});

//Rutas DELETE
app.delete('/:id' , (req , res)=>{
    let { id } = req.params;
    let usuario = usuarios.splice(util.getIndex(id,usuarios),1);
    res.send(usuario);
});
