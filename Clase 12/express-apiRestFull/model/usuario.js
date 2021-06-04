const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    email: String
});


const usuario = mongoose.model('usuario', usuarioSchema);

module.exports = {
    usuario
}
