const router = require('express').Router()

const Usuarios = require("../models/usuarios")

//Create - criação de dados
router.post('/', async (req,res) =>{

    const{nome,email,senha,dataNascimento,cpf,cep,logradouro,cidade,estado,playlists,id} = req.body

    if(!nome){
        res.status(422).json({error: 'O nome é Obrigatortio!'})
        return
    }

    if(!email){
        res.status(422).json({error: 'O email é Obrigatortio!'})
        return
    }

    const usuarios = {
    nome,
    email,
    senha,
    dataNascimento,
    cpf,
    cep,
    logradouro,
    cidade,
    estado,
    playlists,
    id
    }

    try {
        // criando dados
        await Usuarios.create(usuarios)

        res.status(200).json({message: 'Usuario inserido no sistema com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

//Read - leitura de dados
router.get('/', async (req, res) => {

    try {
        
        const usuario = await Usuarios.find()

        res.status(200).json(usuario)

    } catch (error) {
        res.status(500).json({error: error})
    }

})

router.get('/:id', async (req, res) => {

    console.log(req)

    // extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    try {
        const usuarios = await Usuarios.findOne({ _id : id })

        if(!usuarios){
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json(usuarios)
    } catch (error) {
        
        res.status(500).json({ error: error })

    }

})

//Update - atualização de dados(PUT, PATCH)
router.patch('/:id', async(req, res) => {
    
    const id1 = req.params.id

    const{nome,email,senha,dataNascimento,cpf,cep,logradouro,cidade,estado,playlists,id} = req.body

    const usuarios = {
        nome,
        email,
        senha,
        dataNascimento,
        cpf,
        cep,
        logradouro,
        cidade,
        estado,
        playlists,
        id
    }

    try {
        
        const updatedUsuarios = await Usuarios.updateOne({ _id: id1 }, usuarios)

        if(updatedUsuarios.matchedCount === 0){
            res.status(422).json({message: 'Usuário não encontrado!'})
            return
        }

        res.status(200).json(usuarios)

    } catch (error) {
        res.status(500).json({ error: error })
    }

})