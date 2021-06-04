const getNextId = (usuarios) =>{
     return usuarios.length? (usuarios[usuarios.length-1].id + 1): 1;
}
const getTimeStamp = () => Date.now();
const getFechaYHora = () => new Date().toLocaleString();
const getIndex = (id, usuarios) => usuarios.findIndex(usuario => usuario.id == id);


module.exports = {
    getNextId,
    getTimeStamp,
    getFechaYHora,
    getIndex
}
