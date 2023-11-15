import Header from "./header";
import Footer from "./footer";
import Actividad from "./actividad";
import Evento from "./evento";
import Mapa from "./mapa";
import { useState,useEffect } from "react";
import stylesTerrestres from '../css/actividad.module.css';
import Iconos from "./iconos";
/*mapa imports*/
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Popup,Marker } from 'react-leaflet';
import LoginUsuarios from "./LoginUsuarios";






function Terrestres (){

  const [ActividadId, setActividadId] = useState(true);
  const [ActividadNombre, setActividadNombre] = useState(true);


  /*mapa code */
  const center = [-33.505271, -57.808147];
  const maxBounds = [
    [center[0] - 0.7, center[1] - 0.7], // Esquina superior izquierda
    [center[0] + 0.7, center[1] + 0.7]  // Esquina inferior derecha
  ];

  
  const mapOptions = {
    maxBounds: maxBounds,
    maxBoundsViscosity: 1, 
  }
  /**/
  
  const [Localidad,setLocalidad] = useState('mercedes');
  const [Eventos, setEventos] = useState([]);
  const [Deportes,setDeporte] = useState([]);
  const [Actividades,setActividades] = useState(['']);


  useEffect(() => {
    if (Localidad) {
      const eventApiUrl = `http://localhost/archivos2/eventos/recibirEvento.php?localidad=${Localidad}`;
      fetch(eventApiUrl)
        .then((response) => response.json())
        .then((data) => {
          setEventos(data);
        })
        .catch((error) => console.error("Error al obtener los eventos:", error));
    }
  }, [Localidad]);

  useEffect(() => {
    if (Localidad && Deportes) { 
      const activApiUrl = `http://localhost/archivos2/deportes/recibirDeportes.php?localidad=${Localidad}&deporte=${Deportes}`;
      fetch(activApiUrl)
        .then((response) => response.json())
        .then((data) => {
          setActividades(data);
        })
        .catch((error) => console.error("Error al obtener los eventos:", error));
    }
  }, [Localidad, Deportes]); 
  

  useEffect(() => {
    if (Localidad && Deportes) { 
      const activApiUrl = `http://localhost/archivos2/deportes/recibirDeportestemp.php?localidad=${Localidad}&deporte=${Deportes}`;
      fetch(activApiUrl)
        .then((response) => response.json())
        .then((data) => {
          setActividades(data);
        })
        .catch((error) => console.error("Error al obtener los eventos:", error));
    }
  }, [Localidad, Deportes]); 

  const [showLogin, setShowLogin] = useState(false);

  const toggleLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };  

  const closeLogin = ()=>{
    setShowLogin((prevShowLogin) => !prevShowLogin);
  }
  




return(
  <>
  
  <Header/>

      <div className={`${stylesTerrestres.login_funcionarios} ${showLogin ? `${stylesTerrestres.show}` : ``}`} id="algo">
        <div id="cerrar" onClick={closeLogin} className={`${stylesTerrestres.icon_close}`}>
          <img src="/cross2.png" alt="cosa" className={`${stylesTerrestres.img} ${stylesTerrestres.close}`}/>
        </div>
        <LoginUsuarios ActividadId={ActividadId}  Nombre={ActividadNombre}/>
      </div>



    <div className={`${stylesTerrestres.mapa}`}>
      <MapContainer center={[-33.505271, -55.808147]} zoom={9} scrollWheelZoom={false} {...mapOptions}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[-33.250953044554095, -58.0295996290304]} >
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('mercedes')} className='boton'>Mercedes</div>
          </Popup>
        </Marker>

        <Marker position={[-33.5300, -58.2170]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('dolores')} className='boton'>Dolores</div>
          </Popup>
        </Marker>

        <Marker position={[-33.62241826051648, -57.57199068758437]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('risso')} className='boton'>Risso</div>
          </Popup>
        </Marker>

        <Marker position={[-33.601577148845024, -57.626995878335535]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('egaña')} className='boton'>Egaña</div>
          </Popup>
        </Marker>

        <Marker position={[-33.8650252848595, -57.37303854222891]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('cardona')} className='boton'>Cardona</div>
          </Popup>
        </Marker>

        <Marker position={[-33.79039122144177, -57.48958745651217]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('santacatalina')} className='boton'>Santa Catalina</div>
          </Popup>
        </Marker>

        <Marker position={[-33.6967784000407, -57.53376805212432]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('rodo')} className='boton'>Rodó</div>
          </Popup>
        </Marker>

        <Marker position={[-33.50933235235269, -57.800851050023084]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('palmitas')} className='boton'>Palmitas</div>
          </Popup>
        </Marker>

        <Marker position={[-33.398101058564684, -58.31770708137367]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('villasoriano')} className='boton'>Villa Soriano</div>
          </Popup>
        </Marker>

        <Marker position={[-33.69900269672159, -58.111733824090244]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('cañadanieto')} className='boton'>Cañada Nieto</div>
          </Popup>
        </Marker>

        <Marker position={[-33.06136836232029, -57.45812142654608]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('palmar')} className='boton'>Palmar</div>
          </Popup>
        </Marker>

        <Marker position={[-33.82986631876721, -57.789428536832816]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('laresyperseverano')} className='boton'>Lares y Perseverano</div>
          </Popup>
        </Marker>

        <Marker position={[-33.809577519404506, -58.26537095818607]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('agraciada')} className='boton'>Agraciada</div>
          </Popup>
        </Marker>

        <Marker position={[-33.828728, -58.022985]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('palosolo')} className='boton'>Palo Solo</div>
          </Popup>
        </Marker>

        <Marker position={[-33.119399, -57.632369]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('villadarwin')} className='boton'>Villa Darwin</div>
          </Popup>
        </Marker>

      </MapContainer>
    </div>

    <div className={`${stylesTerrestres.titulo}`}>
      <h1>Actividades Anuales</h1>
    </div>
    <div className={`${stylesTerrestres.cuerpo}`}>



      <div className={`${stylesTerrestres.iconosa}`}>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('futbol')}>
          <Iconos
            deporte='FÚTBOL'
            img='futbol.png'
          />
        </div>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('natacion')}>
          <Iconos
            deporte='NATACIÓN'
            img='natacion.png'
          />
        </div>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('remo')}>
          <Iconos
            deporte='REMO'
            img='remo.png'
          />
        </div>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('canotaje')}>
          <Iconos
            deporte='CANOTAJE'
            img='canoa.png'
          />
        </div>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('baile')}>
          <Iconos
            deporte='BAILE'
            img='baile.png'
          /></div>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('yoga')}>
          <Iconos
            deporte='YOGA'
            img='yoga.png'
          /></div>

        <div className={`${stylesTerrestres.icono}`} onClick={() => setDeporte('karate')}>
          <Iconos
            deporte='KARATE'
            img='karate.png'
          /></div>
      </div>

      <div className={`${stylesTerrestres.fila}`}>

        {/* --------------------actividades------------------ */}

        <div className={`${stylesTerrestres.actividadesa}`}>

          {Localidad ? (Actividades.map((actividad) => (
            <Actividad
              img={`data:image/jpeg;base64, ${actividad.imagen_base64}`}
              fecha={actividad.fecha}
              deporte={actividad.deporte}
              descripcion={actividad.descripcion}
              ubicacion={actividad.ubicacion}
              modal={() => {setActividadNombre(actividad.deporte);setActividadId(actividad.id); toggleLogin() } }
            />
          ))) : (<p>no has seleccionado ninguna localidad</p>)}

        </div>
        {/* ---------------------eventos-------------- */}

        <div className={`${stylesTerrestres.eventos}`}>

          {Localidad ? (Eventos.map((evento) => (
            <Evento
              key={evento.id}
              img={`data:image/jpeg;base64, ${evento.imagen_base64}`}
              deporte={evento.deporte}
              titulo={evento.titulo}
              descripcion={evento.info}
              fecha={evento.fecha}
            />
          ))) : (<p>no has seleccionado ninguna localidad</p>)}


        </div>

      </div>
    </div>


    <Footer />
  </>
);
 }
 export default Terrestres;