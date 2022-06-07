const mongoose = require('mongoose')

const Usuarios = mongoose.model('Usuario', {
    
    "nome": String,
    "email": String,
    "senha": String,
    "dataNascimento": String,
    "cpf": String,
    "cep": String,
    "logradouro": String,
    "cidade": String,
    "estado": String,
    // "playlists": [],
    "id": Number


})

module.exports = Usuarios
