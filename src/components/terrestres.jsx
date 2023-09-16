import Header from "./header";
import Footer from "./footer";
import Actividad from "./actividad";
import Evento from "./evento";
import Mapa from "./mapa";
import styles from '../css/actividad.module.css';
function Terrestres (){
return(
    <>
  
    <Header/>

    <Mapa/>
 
    <div className={`${styles.titulo}`}>
      <h1>Actividades Anuales</h1>
    </div>
    <div className={`${styles.cuerpo}`}>   
    <div className={`${styles.actividadesa}`}>   
    <Actividad
    img='futbola.jpg'
    fecha='Del 01/01/23 al 12/12/2023'
		deporte='Futsal'
	  descripcion='Pacticas de futsal recreativo dictadas por Luciano acosta en el club atletico praga martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs'
		/>
    </div>
    <div className={`${styles.eventos}`}>  
    <Evento
    img='eventoremo.PNG'
		deporte='Remo'
		titulo='Se realizará la 4ta fecha del circuito nacional de remo'
    descripcion='En las costas del Rio Negro este 2 de septiembre se realizará la 4ta fecha del circuito nacional de remo, en la cual participarán más de 16 clubes de todo el país. Las competencias empezarán a las 8:00hs y culminará aproximadamente a las 17:00hs, habra stands de comidas de la sub comisión de remo y demas sorteos.'
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
 export default Terrestres;