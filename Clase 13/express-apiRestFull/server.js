const express = require('express');
const router = express.Router();
const util = require('./util/usuarios');
const validaciones = require('./validaciones/usuarios');
const mongoose = require('mongoose');
const model = require('./model/usuario');

const app = express();

const PORT = process.env.PORT || 8080;

// Coneccion a mongodb(Atlas)
// mongoose.connect('mongodb+srv://tobias:tobiasrv@cluster0.dyzxp.mongodb.net/clase12?retryWrites=true&w=majority', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, err => {
//     if(err) throw Error(`Error de coneccion con la base de datos: ${err}`);
//     console.log('Coneccion con la base de datos exitosa');
//     const server = app.listen(PORT, () => {
//         console.log(`Listening to port ${server.address().port}`);
//     });
//     server.on('error', error => console.log(`Error en el servidor: ${error}`));

// });
// Coneccion a mongodb(local)

mongoose.connect('mongodb://localhost/clase12', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw Error(`Error de coneccion con la base de datos: ${err}`);
    console.log('Coneccion con la base de datos exitosa');
    const server = app.listen(PORT, () => {
        console.log(`Listening to port ${server.address().port}`);
    });
    server.on('error', error => console.log(`Error en el servidor: ${error}`));

});

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

app.use('/api', router);

//Rutas GET
router.get('/:id?' , (req , res)=>{
    let { id } = req.params;

    let query = id? {_id:id}: {}

    model.usuario.find(query, (err,usuarios) => {
        if(err) throw new Error(`Error en la query: ${err}`);
        usuarios.forEach(usuario => {
            console.log(usuario);
        });
        res.send(usuarios);
    })
    // if(id){
    //     let usuario = usuarios[util.getIndex(id, usuarios)];
    //     res.send(usuario);
    // }else{
    //     res.send(usuarios);
    // }
});

//Rutas POST
router.post('/' , (req , res)=>{
    let usuario = req.body;

    let val = validaciones.validar(usuario);
    if(val.result){
        const usuarioNuevo = new model.usuario(usuario);
        usuarioNuevo.save(err => {
            if(err) throw new Error(`Error en la query: ${err}`);
            console.log('Usuario cargado');
            res.send(usuario);
        });
        // usuario.id = util.getNextId(usuarios);
        // usuario.timestamp = util.getTimeStamp();
        // usuario.fyh = util.getFechaYHora();
        // usuarios.push(usuario);
    }else{
        res.send(`Error saving user: ${val.error}`);
    }
});

//Rutas PUT
router.put('/:id' , async (req , res)=>{
   let { id } = req.params;

   let usuario = req.body;
   let val = validaciones.validar(usuario);
   if(val.result){
        let rta = await model.usuario.updateOne({_id:id}, {$set: usuario});
        res.send(rta);
        // usuario.id = Number(id);
        // usuario.timestamp = util.getTimeStamp();
        // usuario.fyh = util.getFechaYHora();
        // let index = util.getIndex(id, usuarios);
        //     if(index != -1) {
        //     //                  Donde               ,Cuanto ,Remplazo
        //         usuarios.splice(index, 1, usuario);
        //     }else{
        //         usuario.id = util.getNextId(usuarios);
        //         usuarios.push(usuario);
        //     }
        // res.send(usuario);
    }else{
        res.send(`Error saving user: ${val.error}`);
    }
});

//Rutas DELETE
router.delete('/:id' , async (req , res)=>{

    let { id } = req.params;
    let rta = await model.usuario.deleteOne({_id:id});
    res.send(rta);
});



// mongod --dbpath="D:\Code\Fizzmod\Fizzmod-Acadomy\Clase 12\baseMongo"b
