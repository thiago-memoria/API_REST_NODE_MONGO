cosnt mongoose = require('mongoose')

const Playlists = mongoose.model('Playlist', {
    
    "nome": String,
    "email": String,
    "senha": String,
    "dataNascimento": String,
    "cpf": String,
    "cep": String,
    "logradouro": String,
    "cidade": String,
    "estado": String,
    "playlists": [],
    "id": Int


})

module.exports = Playlists
