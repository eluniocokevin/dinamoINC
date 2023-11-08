import stylesEvento from '../css/actividad.module.css';

function Evento(props){
return(
    <>



<div className={`${stylesEvento.tarjetaevento}`}>
  <div className={`${stylesEvento.imagene}`}>
    <img className={`${stylesEvento.imagene}`}src={`${props.img}`} alt="imagen actividad"/>
    <p className={`${stylesEvento.tipo}`}>{props.deporte}</p>
  </div>

  <div className={`${stylesEvento.textoe}`}>
    <h2>{props.titulo}</h2><br/>
    <p>{props.descripcion}</p>
  </div>

  <div className={`${stylesEvento.fechae}`}><p>{props.fecha}</p></div>
</div>


    </>
  );
}

export default Evento;
