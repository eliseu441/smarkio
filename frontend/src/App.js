import { useState, useEffect, useRef } from 'react';
import api from './services/api';

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
    
    const response  = await api.get('/');
    
    setCommentaries(response.data);

    setCommentary('');

    window.location.reload();
  }

  const handleListen = () => {
    audioRef.current.play(); 
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
                <button type="button" onClick={handleListen}>
                  Ouvir
                </button>

                <audio ref={audioRef}>
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
