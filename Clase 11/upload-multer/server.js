const express = require('express');
const multer = require('multer');

const app = express();

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(`Listening to server on port: ${PORT}`);
});
server.on('error', () => console.log('Error on server'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use((req,res,next) => {
    next();
});

const storage = multer.diskStorage({
    destination: function (req,file,cb) {
        cb(null, 'uploads');
    },
    filename: function(req,file,cb) {
        cb(null, file.originalname + '-' + Date.now());
    }
});


const upload = multer({storage: storage});

//Subir archivos a traves de multer
app.post('/subir' , upload.single('archivo'), (req , res) => {
    const file = req.file;
    if(!file){
        const error = new Error(`Error subiendo el archivo`);
        error.httpStatusCode = 400;
        return next(error);
    }
    console.log(`Archivo <b>${file.originalname}</b> subido exitosamente`);
    res.redirect('/');
});
