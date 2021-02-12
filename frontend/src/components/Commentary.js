import { useRef } from 'react';

function Commentary({ comentario }) {
  const audioRef = useRef(null);

  const handleListen = () => {
    audioRef.current.play(); 
  }

  return (
    <div className="commentary" key={comentario.id}>
      <p>
        {comentario.comentario}
      </p>
      <button type="button" onClick={handleListen}>
        Ouvir
      </button>

      <audio ref={audioRef}>
        <source src={`http://localhost:3333/files/${comentario.audio}`} />
      </audio>
    </div>
  );
}

export default Commentary;