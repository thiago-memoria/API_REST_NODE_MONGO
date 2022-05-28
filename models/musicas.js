const mongoose = require('mongoose')

const Musicas = mongoose.model('Musica', {
    musica: String,
    musicaNome: String,
    id: Int,
})

module.exports = Musicas