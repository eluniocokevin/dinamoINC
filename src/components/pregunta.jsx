

import '../css/preguntas.css';
import React, { useEffect, useState } from 'react';

 
function Pregunta(props){
    const [preguntasActivas, setPreguntasActivas] = useState([]);
  
    const togglePregunta = (index) => {
      if (preguntasActivas.includes(index)) {
        setPreguntasActivas(preguntasActivas.filter(item => item !== index));
      } else {
        setPreguntasActivas([...preguntasActivas, index]);
      }
    };
    return(
        <div className="contenedor-preguntas activo">
        <div className={`contenedor-pregunta ${preguntasActivas.includes(0) ? 'activa' : ''}`} onClick={() => togglePregunta(0)}>
          <p className="pregunta">{props.pregunta}<img src="src/assets/suma.svg" alt="Abrir Respuesta" /></p>
  
            <p className="respuesta">{props.respuesta}</p>
        
        </div>
        </div>
      
    )
}
export default Pregunta;


