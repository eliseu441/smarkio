require("./database/connection");
const express= require("express");
const cors = require('cors');
//importar o express instalado
const app= express();
//vai chamar a função do express
const commentaryController = require("./controllers/CommentaryController");


app.use(cors());
app.use(express.json());


app.post("/", commentaryController.create);
app.get('/', commentaryController.index);


app.use('/files', express.static('./tmp', {
    etag: false
}));

app.listen(3333,()=>{
    console.log("servidor rodando na porta 3333")
});
