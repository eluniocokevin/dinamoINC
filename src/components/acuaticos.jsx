import Header from "./header";
import Footer from "./footer";
import Actividad from "./actividad";
import Evento from "./evento";
import Mapa from "./mapa";
import Iconos from "./iconos";
import stylesAcuaticos from '../css/actividad.module.css';
function Acuaticos (){
return(
  <>
  <Header/>

  <Mapa/>

  <div className={`${stylesAcuaticos.titulo}`}>
    <h1>Actividades Anuales</h1>
  </div>
<div className={`${stylesAcuaticos.cuerpo}`}>

  

    <div className={`${stylesAcuaticos.iconosa}`}>
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
  
    <div className={`${stylesAcuaticos.fila}`}>
      
      <div className={`${stylesAcuaticos.actividadesa}`}>
        <Actividad
          img='futbola.webp'
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

      <div className={`${stylesAcuaticos.eventos}`}>  
        <Evento
          img='eventoremo.webp'
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

{/* ----------------mobile------------------- */}


  <div className={`${stylesAcuaticos.cuerpom}`}>  

    <div className={`${stylesAcuaticos.iconosm}`}>
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

  <div className={`${stylesAcuaticos.filam}`}>

  

      <div className={`${stylesAcuaticos.actividadesm}`}>   
        <Actividad
          img='futbola.webp'
          fecha='Del 01/01/23 al 12/12/2023'
          deporte='FUTSAL'
          descripcion='Pacticas de futsal recreativo dictadas por Luciano Acosta en el club atletico praga martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs.'
        />
        <Actividad
          img='img3v.webp'
          fecha='Del 01/01/23 al 12/11/2023'
          deporte='REMO'
          descripcion='Pacticas de remo recreativo dictadas por Pablo Camessaca en el puerto martes y viernes de 9:30hs a 11:30hs en la mañana y por la tarde de 14:00hs a 16:00hs'
          />
      </div>
      <div className={`${stylesAcuaticos.eventosm}`}>  
        <Evento
          img='eventoremo.webp'
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
 export default Acuaticos;