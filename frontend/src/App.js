import { useState, useEffect } from 'react';
import api from './services/api';

import './app.css';

function App() {
  const [commentary, setCommentary] = useState('');
  const [commentaries, setCommentaries] = useState([]);

  useEffect(() => {
    async function getCommentariesInfo() {
      const response  = await api.get('/');
      setCommentaries(response.data);
    }
    getCommentariesInfo();
  }, [commentaries]);


  const handleSubmit = async (e) => {
    e.preventDefault(e);
    
    await api.post('/', {
      texto: commentary,
    });
    
    const response  = await api.get('/');
    
    setCommentaries(response.data);

    setCommentary('');
  }

  return (
    <div className="container">
      <div className="form-container">
        <div className="content-wrapper">
          <h1>Comentário</h1>
          <form onSubmit={handleSubmit}>
            <textarea type="textarea" value={commentary} onChange={ e => setCommentary(e.target.value)}/>

            <button type="submit"> cadastrar</button>
          </form>
        </div>
      </div>

      <div className="vertical-row"/>

      <div className="commentaries-container">
        <div className="content-wrapper">
          <h1>Comentários</h1>

          <div className="commentaries-wrapper">
            { commentaries &&  commentaries.map( (item, index) => (
              <div className="commentary" key={item.id}>
                <p>
                {item.comentario}
                </p>                
                <button type="button" onClick={() => {} }>
                  Ouvir
                </button>

                <audio controls>
                  <source src={`http://localhost:3333/files/${item.audio}`} />
                </audio>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
/*<!DOCTYPE html>
<html lang="pt-BR">
<style>
    reader {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .meubotao {
        background-color: Gainsboro;
        border-radius: 5px;
        transform: scale(1.05);
        margin-left: 4px;
    }
    


 
</style>

<head>
    <meta charset="UTF-8">
    <title>
        Teste Smarkio
    </title>
<link rel="stylesheet" type="text/css" media="all" href="css/style.css"/>

</head>

<body>

    <body bgcolor=WhiteSmoke> </body>
    <div id="linha">
    <div class="coluna-50">
        <reader id="topo-primeira-coluna">
            <b>Comentário</b>
        </reader>
        <p>
            <textarea rows="7" cols="30" style="resize: none"></textarea>
        </p>
        <input type="Button" class="meubotao" style="width:225px; height:26px" value="Cadastrar">
    </div>
    <div class="coluna-50">
    <reader id="topo-segunda-coluna">
        <b>Comentários</b>
    </reader>
    <h1>
        Num ninho de mafagafos há sete mafagafinhos.
        Quando a mafagafa gafa, gafam os sete mafagafinhos
    </h1>
    </div>


    </div>

</body>

</html>*/