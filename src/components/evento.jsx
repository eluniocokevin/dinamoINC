

import styles from '../css/actividad.module.css';

function Evento(){
return(
    <>



<div class={`${styles.tarjetaevento}`}>
<div class={`${styles.imagene}`}>
  <img class={`${styles.imagene}`}src="src/assets/eventoremo.png" alt="imagen actividad"/>
  <p class={`${styles.tipo}`}>Remo</p>
</div>

<div class={`${styles.textoe}`}>
  <h2>Se realizará la 4ta fecha del circuito nacional de remo</h2><br/>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.</p>
</div>
<div class={`${styles.fechae}`}><p>02/09/2023</p></div>
</div>


<div class={`${styles.cuerpom}`}>
<div class={`${styles.eventos}`}>
  
  <div class={`${styles.tarjetaevento}`}>
  <div class={`${styles.imagene}`}>
    <img class={`${styles.imagene}`}src="src/assets/eventoremo.png" alt="imagen actividad"/>
    <p class={`${styles.tipo}`}>Remo</p>
  </div>
  
  <div class={`${styles.textoe}`}>
    <h2>Se realizará la 4ta fecha del circuito nacional de remo</h2><br/>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.</p>
  </div>
  <div class={`${styles.fechae}`}><p>02/09/2023</p></div>
  </div>
  
  </div>
  
  </div>



    </>
  );
}

export default Evento;
