cosnt mongoose = require('mongoose')

const Playlists = mongoose.model('Playlist', {
    
    "id": number,
    "imagem": String,
    "musicas": [],
    
})

module.exports = Playlists
