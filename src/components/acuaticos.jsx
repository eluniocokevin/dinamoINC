import Header from "./header";
import Footer from "./footer";
import Actividad from "./actividad";
import Evento from "./evento";
import Mapa from "./mapa";
import { useState,useEffect } from "react";
import stylesAcuaticos from '../css/actividad.module.css';
import Iconos from "./iconos";
/*mapa imports*/
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Popup,Marker } from 'react-leaflet';
import LoginFuncionarios from "./LoginFuncionarios";
import LoginUsuarios from "./LoginUsuarios";


function Acuaticos (){

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
  
  const [Localidad,setLocalidad] = useState('Mercedes');
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

      <div className={`${stylesAcuaticos.login_funcionarios} ${showLogin ? `${stylesAcuaticos.show}` : ``}`} id="algo">
      <div id="cerrar" onClick={toggleLogin} className={`${stylesAcuaticos.icon_close}`}>
          <img src="/cross2.png" alt="cosa" className={`${stylesAcuaticos.img} ${stylesAcuaticos.close}`}/>
        </div>
        <LoginUsuarios ActividadId={ActividadId} Nombre={ActividadNombre}/>
      </div>



  <div className={`${stylesAcuaticos.mapa}`}>
  <MapContainer center={[-33.505271, -55.808147]} zoom={9} scrollWheelZoom={false} {...mapOptions}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

<Marker position={[-33.250953044554095, -58.0295996290304]} >
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div   href="#fila" onClick={() => setLocalidad('Mercedes')} className='boton'> <a className="a" href="#titulo">Mercedes</a> </div>
          </Popup>
        </Marker>

        <Marker position={[-33.5300, -58.2170]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Dolores')} className='boton'><a className="a" href="#titulo">Dolores</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.62241826051648, -57.57199068758437]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Risso')} className='boton'><a className="a" href="#titulo">Risso</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.601577148845024, -57.626995878335535]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Egaña')} className='boton'><a className="a" href="#titulo">Egaña</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.8650252848595, -57.37303854222891]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Cardona')} className='boton'><a className="a" href="#titulo">Cardona</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.79039122144177, -57.48958745651217]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Santacatalina')} className='boton'><a className="a" href="#titulo">Santa Catalina</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.6967784000407, -57.53376805212432]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Rodo')} className='boton'><a className="a" href="#titulo">Rodó</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.50933235235269, -57.800851050023084]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Palmitas')} className='boton'><a className="a" href="#titulo">Palmitas</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.398101058564684, -58.31770708137367]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Villasoriano')} className='boton'><a className="a" href="#titulo">Villa Soriano</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.69900269672159, -58.111733824090244]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Cañadanieto')} className='boton'><a className="a" href="#titulo">Cañada Nieto</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.09136836232029, -57.45812142654608]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Palmar')} className='boton'><a className="a" href="#titulo">Palmar</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.82986631876721, -57.789428536832816]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Laresyperseverano')} className='boton'><a className="a" href="#titulo">Lares y Perseverano</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.809577519404506, -58.26537095818607]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Agraciada')} className='boton'><a className="a" href="#titulo">Agraciada</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.828728, -58.022985]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Palosolo')} className='boton'><a className="a" href="#titulo">Palo solo</a></div>
          </Popup>
        </Marker>

        <Marker position={[-33.119399, -57.632369]}>
          <Popup>
            <div className='texto_deportes'>Deportes en</div> <div onClick={() => setLocalidad('Villadarwin')} className='boton'><a className="a" href="#titulo">Villa Darwin</a></div>
          </Popup>
        </Marker>

      </MapContainer>
    </div>

  <div id="titulo" className={`${stylesAcuaticos.titulo}`}>
    <h1>Actividades Temporales</h1> <a className={`${stylesAcuaticos.a}`} href="formulario">Registrarse</a> 
    <a className={`${stylesAcuaticos.a}`} href="consultasUser">¿En qué estoy anotado?</a>
  </div>
<div className={`${stylesAcuaticos.cuerpo}`}>

  

    <div className={`${stylesAcuaticos.iconosa}`}>

    <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Futbol')}>
            <Iconos
              deporte='FÚTBOL'
              img='futbol.png'
            />
          </div>
      
    <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Natacion')}>
            <Iconos
              deporte='NATACIÓN'
              img='natacion.png'
            />
          </div>
          
        <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Remo')}>
          <Iconos
            deporte='REMO'
            img='remo.png'
          />
        </div>

        <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Canotaje')}>
          <Iconos
            deporte='CANOTAJE'
            img='canoa.png'
          />
        </div>

        <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Baile')}>
        <Iconos
        deporte='BAILE'
        img='baile.png'
        /></div>

        <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Yoga')}>
        <Iconos
        deporte='YOGA'
        img='yoga.png'
        /></div>

        <div className={`${stylesAcuaticos.icono}`} onClick={()=>setDeporte('Karate')}>
        <Iconos
        deporte='KARATE'
        img='karate.png'
        /></div>
    </div>
  
    <div className={`${stylesAcuaticos.fila}`}>
      
      <div className={`${stylesAcuaticos.actividadesa}`}>
  



{Localidad?( Actividades.map((actividad)=>(
            <Actividad
              img={`data:image/jpeg;base64, ${actividad.imagen_base64}`}
              fecha={actividad.fecha}
              deporte={actividad.deporte}
              descripcion={actividad.descripcion}
              ubicacion={actividad.ubicacion}
              modal={() => {setActividadNombre(actividad.deporte); setActividadId(actividad.id); toggleLogin() } }
            />
          ))) : (<p>no has seleccionado ninguna localidad</p>)}



   
      </div>

      <div className={`${stylesAcuaticos.eventos}`}>  




      {Localidad ?( Eventos.map((evento)=>(
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

  <Footer/>
  </>
);
 }
 export default Acuaticos;
