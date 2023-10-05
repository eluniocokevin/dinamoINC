import stylesPreguntas from '../css/preguntas.module.css';
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
        <div className={`${stylesPreguntas.contenedor_preguntas} ${stylesPreguntas.activo}`}>
        <div className={`${stylesPreguntas.contenedor_pregunta} ${preguntasActivas.includes(0) ? `${stylesPreguntas.activa}` : ''}`} onClick={() => togglePregunta(0)}>
          <p className={`${stylesPreguntas.pregunta} ${stylesPreguntas.p}`}>{props.pregunta}<img src="/suma.svg" alt="Abrir Respuesta" /></p>
  
            <p className={`${stylesPreguntas.respuesta} ${stylesPreguntas.p}`}>{props.respuesta}</p>
        
        </div>
        </div>
      
    )
}
export default Pregunta;


