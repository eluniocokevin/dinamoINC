import Header from "./header";
import Footer from "./footer";
import Actividad from "./actividad";
import Evento from "./evento";
import Mapa from "./mapa";
import stylesTerrestres from '../css/actividad.module.css';
import Iconos from "./iconos";
function Terrestres (){
return(
    <>
  
    <Header/>

    <Mapa/>
 
    <div className={`${stylesTerrestres.titulo}`}>
      <h1>Actividades Anuales</h1>
    </div>
  <div className={`${stylesTerrestres.cuerpo}`}>

    

      <div className={`${stylesTerrestres.iconosa}`}>
        <Iconos
          deporte='NATACIÓN'
          img='natacion.png'
        />
        <Iconos
          deporte='REMO'
          img='remo.png'
        />
        <Iconos
          deporte='CANOTAJE'
          img='canoa.png'
        />
        <Iconos
        deporte='BAILE'
        img='baile.png'
        />
        <Iconos
        deporte='YOGA'
        img='yoga.png'
        />
        <Iconos
        deporte='KARATE'
        img='karate.png'
        />

      </div>
    
      <div className={`${stylesTerrestres.fila}`}>
        
        <div className={`${stylesTerrestres.actividadesa}`}>
          <Actividad
            img='futbola.jpg'
            fecha='Del 01/01/23 al 12/12/2023'
            deporte='FUTSAL'
            descripcion='Pacticas de futsal recreativo dictadas por Luciano Acosta en el club atletico praga martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs'
            />

       <Actividad
            img='remo3.jpg'
            fecha='Del 01/01/23 al 12/11/2023'
            deporte='REMO'
            descripcion='Pacticas de remo recreativo dictadas por Pablo Camessaca en el puerto martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs'
            />
        </div>

        <div className={`${stylesTerrestres.eventos}`}>  
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
    </div>

    <div className={`${stylesTerrestres.cuerpom}`}>  

      <div className={`${stylesTerrestres.iconosm}`}>
        <Iconos
            deporte='NATACIÓN'
            img='natacion.png'
          />
          <Iconos
            deporte='REMO'
            img='remo.png'
          />
          <Iconos
            deporte='CANOTAJE'
            img='canoa.png'
          />
          <Iconos
          deporte='BAILE'
          img='baile.png'
          />
          <Iconos
          deporte='YOGA'
          img='yoga.png'
          />
          <Iconos
          deporte='KARATE'
          img='karate.png'
          />

      </div>

    <div className={`${stylesTerrestres.filam}`}>

    

        <div className={`${stylesTerrestres.actividadesm}`}>   
          <Actividad
            img='futbola.jpg'
            fecha='Del 01/01/23 al 12/12/2023'
            deporte='FUTSAL'
            descripcion='Pacticas de futsal recreativo dictadas por Luciano Acosta en el club atletico praga martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs.'
          />
          <Actividad
            img='img3v.jpg'
            fecha='Del 01/01/23 al 12/11/2023'
            deporte='REMO'
            descripcion='Pacticas de remo recreativo dictadas por Pablo Camessaca en el puerto martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs'
            />
        </div>
        <div className={`${stylesTerrestres.eventosm}`}>  
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
    </div>
    <Footer/>
    </>
);
 }
 export default Terrestres;