const router = require('express').Router()

const Musicas = require("../models/musicas")

//Create - criação de dados
router.post('/', async (req,res) =>{

    const{musica,musicaNome,id} = req.body

    if(!musica){
        res.status(422).json({error: 'A descrição da música é obrigatoria'})
        return
    }

    if(!musicaNome){
        res.status(422).json({error: 'O nome da música é obrigatório!'})
        return
    }

    const musicas = {
    musica,
    musicaNome,
    id
    }

    try {
        // criando dados
        await Musicas.create(musicas)

        res.status(200).json({message: 'Musica inserida no sistema com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

//Read - leitura de dados
router.get('/', async (req, res) => {

    try {
        
        const musica = await Musicas.find()

        res.status(200).json(musica)

    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/:nome', async (req, res) => {

    console.log(req)

    // extrair o dado da requisição, pela url = req.params
    const nome = req.params.nome

    try {
        const musicas = await Musicas.findOne({ nome : nome })

        if(!musicas){
            res.status(422).json({message: 'Musica não encontrada!'})
            return
        }

        res.status(200).json(musicas)
    } catch (error) {
        
        res.status(500).json({ error: error })

    }

})

//Update - atualização de dados(PUT, PATCH)
router.patch('/:id', async(req, res) => {
    
    const id1 = req.params.id

    const{musica,musicaNome,id} = req.body

    const musicas = {
        musica,
        musicaNome,
        id
    }

    try {
        
        const updatedMusicas = await Musicas.updateOne({ _id: id1 }, musicas)

        if(updatedMusicas.matchedCount === 0){
            res.status(422).json({message: 'Musica não encontrada!'})
            return
        }

        res.status(200).json(musicas)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//Delete - deletar dados
router.delete('/:id', async(req, res) => {

    const id = req.params.id

    const musicas = await Musicas.findOne({ _id : id })

    if(!musicas){
        res.status(422).json({message: 'Musica não encontrada!'})
        return
    }

    try {
        
        await Usuarios.deleteOne({_id:id})

        res.status(200).json({message: 'Musica removida com sucesso!'})

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router