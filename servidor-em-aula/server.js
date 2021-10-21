const express = require("express")
const app = express()
const filmesJson = require("./data/ghibli.json")
const cors = require("cors")
const { application } = require("express")

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json([
        {
            "mensagem": "API de filmes Ghibli da turma On14"
        }
    ])

})

app.get("/filmes", (req, res) => {
    res.status(200).send(filmesJson)
})

app.get("/filmes/:id", (req, res) => {
    let idRequerido = req.params.id
    let filmeEncontrado = filmesJson.find(filme => filme.id == idRequerido)
    res.status(200).send(filmeEncontrado)
    
})

app.post("/filmes/criar", (req, res) => {
    let tituloRequest = req.body.title
    let descricaoRequest = req.body.description

    let novoFilme = {
        id: (filmesJson.length) + 1,
        title: tituloRequest,
        description: descricaoRequest
    }

    filmesJson.push(novoFilme)

    res.status(201).json([
        {
            "mensagem": "Filme cadastrado com sucesso",
            novoFilme
        }
    ])
})

app.listen(5050, () => {
    console.log("Funcionando na porta 5050")
})