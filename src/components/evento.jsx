

import styles from '../css/actividad.module.css';

function Evento(){
return(
    <>



<div className={`${styles.tarjetaevento}`}>
<div className={`${styles.imagene}`}>
  <img className={`${styles.imagene}`}src="src/assets/eventoremo.png" alt="imagen actividad"/>
  <p className={`${styles.tipo}`}>Remo</p>
</div>

<div className={`${styles.textoe}`}>
  <h2>Se realizará la 4ta fecha del circuito nacional de remo</h2><br/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.</p>
</div>
<div className={`${styles.fechae}`}><p>02/09/2023</p></div>
</div>


<div className={`${styles.cuerpom}`}>
<div className={`${styles.eventos}`}>
  
  <div className={`${styles.tarjetaevento}`}>
  <div className={`${styles.imagene}`}>
    <img className={`${styles.imagene}`}src="src/assets/eventoremo.png" alt="imagen actividad"/>
    <p className={`${styles.tipo}`}>Remo</p>
  </div>
  
  <div className={`${styles.textoe}`}>
    <h2>Se realizará la 4ta fecha del circuito nacional de remo</h2><br/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.</p>
  </div>
  <div className={`${styles.fechae}`}><p>02/09/2023</p></div>
  </div>
  
  </div>
  
  </div>



    </>
  );
}

export default Evento;
