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
    <Actividad/></div>
    <div className={`${styles.eventos}`}>  
    <Evento/></div>
    </div>

    <div className={`${styles.cuerpom}`}>   
    <div className={`${styles.actividadesam}`}>   
    <Actividad/></div>
    <div className={`${styles.eventosm}`}>  
    <Evento/></div>
    </div>

    <Footer/>
    </>
);
 }
 export default Terrestres;