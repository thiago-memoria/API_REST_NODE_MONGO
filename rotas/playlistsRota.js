const router = require('express').Router()

const Musicas = require("../models/playlists")

//Create - criação de dados
router.post('/', async (req,res) =>{

    const{musica,imagem,id} = req.body

    if(!musica){
        res.status(422).json({error: 'é necessário passar as musicas'})
        return
    }

    if(!imagem){
        res.status(422).json({error: 'A playlist necessita de uma imagem'})
        return
    }

    const musicas = {
    musica,
    imagem,
    id
    }

    try {
        // criando dados
        await Playlists.create(playlistss)

        res.status(200).json({message: 'Playlist criada com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

//Read - leitura de dados
router.get('/', async (req, res) => {

    try {
        
        const playlists = await Playlists.find()

        res.status(200).json(playlists)

    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/:id', async (req, res) => {

    console.log(req)

    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {
        const playlists = await Playlists.findOne({ _id : id })

        if(!playlists){
            res.status(422).json({message: 'Playlist não encontrada!'})
            return
        }

        res.status(200).json(playlists)
    } catch (error) {
        
        res.status(500).json({ error: error })

    }

})

//Update - atualização de dados(PUT, PATCH)
router.patch('/:id', async(req, res) => {
    
    const id1 = req.params.id

    const{musica,imagem,id} = req.body

    const playlists = {
        musica,
        imagem,
        id
    }

    try {
        
        const updatedPlaylists = await Playlists.updateOne({ _id: id1 }, playlists)

        if(updatedPlaylists.matchedCount === 0){
            res.status(422).json({message: 'Playlist não encontrada!'})
            return
        }

        res.status(200).json(playlists)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//Delete - deletar dados
router.delete('/:id', async(req, res) => {

    const id = req.params.id

    const playlists = await Playlists.findOne({ _id : id })

    if(!playlists){
        res.status(422).json({message: 'Playlist não encontrada!'})
        return
    }

    try {
        
        await Playlists.deleteOne({_id:id})

        res.status(200).json({message: 'Playlist removida com sucesso!'})

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router