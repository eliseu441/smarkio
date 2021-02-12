import { useState, useEffect, useRef } from 'react';
import api from './services/api';

import Commentary from './components/Commentary';

import './app.css';

function App() {
  const audioRef = useRef(null);

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
    
    setTimeout(window.location.reload(), 2000);

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
              <Commentary key={item.id} comentario={item} />
            ))}
          </div>
        </div>
      </div>
    </div>  
  );
}

export default App;
