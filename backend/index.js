require("./database/connection")
const express= require("express")
//importar o express instalado
const app= express()
//vai chamar a função do express
const CommentaryController = require("./controllers/CommentaryController")

app.use(express.json());
app.post("/",CommentaryController.create);

app.listen(3333,()=>{
    console.log("servidor rodando na porta 3333")
})
