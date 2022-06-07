const mongoose = require('mongoose')

const Playlists = mongoose.model('Playlist', {
    
    "idUsuario": Number,
    "imagem": String,
    "nome": String,
    "musicas": []
})

module.exports = Playlists
