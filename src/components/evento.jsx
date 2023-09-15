

import styles from '../css/actividad.module.css';

function Evento(props){
return(
    <>



<div className={`${styles.tarjetaevento}`}>
<div className={`${styles.imagene}`}>
  <img className={`${styles.imagene}`}src={`/${props.img}`} alt="imagen actividad"/>
  <p className={`${styles.tipo}`}>{props.deporte}</p>
</div>

<div className={`${styles.textoe}`}>
  <h2>{props.titulo}</h2><br/>
<p>{props.descripcion}</p>
</div>
<div className={`${styles.fechae}`}><p>{props.fecha}</p></div>
</div>


<div className={`${styles.cuerpom}`}>
<div className={`${styles.eventos}`}>
  
  <div className={`${styles.tarjetaevento}`}>
  <div className={`${styles.imagene}`}>
    <img className={`${styles.imagene}`}src={`/${props.img}`} alt="imagen actividad"/>
    <p className={`${styles.tipo}`}>{props.deporte}Remo</p>
  </div>
  
  <div className={`${styles.textoe}`}>
    <h2>{props.titulo}Se realizará la 4ta fecha del circuito nacional de remo</h2><br/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.</p>
  </div>
  <div className={`${styles.fechae}`}><p>{props.fecha}02/09/2023</p></div>
  </div>
  
  </div>
  
  </div>



    </>
  );
}

export default Evento;
