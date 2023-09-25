
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Popup,Marker } from 'react-leaflet';
import style from '../css/leaflet.css';

 


function Mapa() {
  const center = [-33.505271, -57.808147];
  const maxBounds = [
    [center[0] - 0.7, center[1] - 0.7], // Esquina superior izquierda
    [center[0] + 0.7, center[1] + 0.7]  // Esquina inferior derecha
  ];

  
  const mapOptions = {
    maxBounds: maxBounds,
    maxBoundsViscosity: 1, // Ajusta este valor según tus necesidades (0 a 1)
  }
    
    return (
      <>
<div className='mapa'>
<MapContainer center={[-33.505271, -57.808147]} zoom={9} scrollWheelZoom={false} {...mapOptions}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  <Marker position={[-33.250953044554095, -58.0295996290304]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'>Mercedes</div>
    </Popup>
  </Marker>

  <Marker position={[-33.5300, -58.2170]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Dolores </div>
    </Popup>
  </Marker>

  <Marker position={[-33.62241826051648, -57.57199068758437]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Risso </div>
    </Popup>
  </Marker>

  <Marker position={[-33.601577148845024, -57.626995878335535]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Egaña </div>
    </Popup>
  </Marker>

  <Marker position={[-33.8650252848595, -57.37303854222891]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Cardona </div>
    </Popup>
  </Marker>

  <Marker position={[-33.79039122144177, -57.48958745651217]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Santa Catalina </div>
    </Popup>
  </Marker>

  <Marker position={[-33.6967784000407, -57.53376805212432]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Rodó </div>
    </Popup>
  </Marker>

  <Marker position={[-33.50933235235269, -57.800851050023084]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Palmitas </div>
    </Popup>
  </Marker>

  <Marker position={[-33.398101058564684, -58.31770708137367]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Villa Soriano </div>
    </Popup>
  </Marker>

  <Marker position={[-33.69900269672159, -58.111733824090244]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Cañada Nieto </div>
    </Popup>
  </Marker>

  <Marker position={[-33.06136836232029, -57.45812142654608]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Palmar </div>
    </Popup>
  </Marker>

  <Marker position={[-33.82986631876721, -57.789428536832816]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Lares y Perseverano </div>
    </Popup>
  </Marker>

  <Marker position={[-33.809577519404506, -58.26537095818607]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Agraciada </div>
    </Popup>
  </Marker>

  <Marker position={[-33.828728, -58.022985]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Palo Solo </div>
    </Popup>
  </Marker>

  <Marker position={[-33.119399, -57.632369]}>
    <Popup>
    <div className='texto_deportes'>Deportes en</div> <div className='boton'> Villa Darwin </div>
    </Popup>
  </Marker>

</MapContainer>
</div>
  </>
  );
}


export default Mapa;
