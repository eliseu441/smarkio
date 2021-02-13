import { useState, useEffect } from 'react';
import api from './services/api';

import Commentary from './components/Commentary';

import './app.css';

function App() {
  const [commentary, setCommentary] = useState('');
  const [commentaries, setCommentaries] = useState([]);

  useEffect(() => {
    async function getCommentariesInfo() {
      const response  = await api.get('/');
      console.log(response.data);
      setCommentaries(response.data);
    }
    getCommentariesInfo();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault(e);
    
    await api.post('/', {
      texto: commentary,
    });
    
    const response  = await api.get('/');
    console.log(response.data);
    
    setTimeout(window.location.reload(), 5000);
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
            {commentaries && commentaries.map( (item, index) => (
              <Commentary key={item.id} comentario={item} />
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
