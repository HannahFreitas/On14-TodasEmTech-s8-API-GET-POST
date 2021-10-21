const express = require("express");
const app = express();

app.get("/oi", (req, res) => {
    res.status(200).json(["Salve, mundão"])
})

app.get("/frutas", (req, res) => {
    res.status(200).json(["jaca, morango, melancia"])
})

app.listen(8080, () => {
    console.log("Meu servidor ta rodando na porta 8080")
})