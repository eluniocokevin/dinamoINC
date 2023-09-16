import Header from "./header";
import Footer from "./footer";
import Actividad from "./actividad";
import Evento from "./evento";
import Mapa from "./mapa";
import styles from '../css/actividad.module.css';
function Acuaticos (){
return(
    <>
    <Header/>
    <Mapa/>
    <div className={`${styles.titulo}`}>
      <h1>Actividades Temporales</h1>
    </div>
    <div className={`${styles.cuerpo}`}>   
    <div className={`${styles.actividadesa}`}>   
    <Actividad
    img='futbola.jpg'
    fecha='Del 01/01/23 al 12/12/2023'
		deporte='Futbol'
	  descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.'
		/>
    </div>
    <div className={`${styles.eventos}`}>  
    <Evento
    img='eventoremo.PNG'
		deporte='Remo'
		titulo='Se realizará la 4ta fecha del circuito nacional de remo'
    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.'
		fecha='02/09/2023'
		/>

<Evento
    img='SKATE.jpeg'
		deporte='Skate'
		titulo='Pateando la pista: inauguramos Skate Park Mercedes'
    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.'
		fecha='02/09/2023'
		/>


    </div>
    </div>

    <div className={`${styles.cuerpom}`}>   
    <div className={`${styles.actividadesam}`}>   
    <Actividad
    img='futbola.jpg'
    fecha='Del 01/01/23 al 12/12/2023'
		deporte='Futbol'
	  descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.'
		/></div>
    <div className={`${styles.eventosm}`}>  
    <Evento
    img='eventoremo.PNG'
		deporte='Remo'
		titulo='Se realizará la 4ta fecha del circuito nacional de remo'
    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.'
		fecha='02/09/2023'
		/>
    <Evento
    img='SKATE.jpeg'
		deporte='Skate'
		titulo='Pateando la pista: inauguramos Skate Park Mercedes'
    descripcion='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi placeat laudantium necessitatibus corrupti id aspernatur qui soluta eaque enim, facere sed, quos quis voluptate quidem nam, nemo minima itaque.'
		fecha='02/09/2023'
		/></div>
    </div>

    <Footer/>
    </>
);
 }
 export default Acuaticos;