
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
import { Popup,Marker } from 'react-leaflet';
import style from '../css/leaflet.css';
function Mapa() {
    return (
      <>
<div className='mapa'>
<MapContainer center={[-33.505271, -57.808147]} zoom={9} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
  <Marker position={[-33.250953044554095, -58.0295996290304]}>
    <Popup>
    Deportes en <br /> Mercedes
    </Popup>
  </Marker>

  <Marker position={[-33.5300, -58.2170]}>
    <Popup>
    Deportes en <br /> Dolores
    </Popup>
  </Marker>

  <Marker position={[-33.62241826051648, -57.57199068758437]}>
    <Popup>
    Deportes en <br /> Risso
    </Popup>
  </Marker>

  <Marker position={[-33.601577148845024, -57.626995878335535]}>
    <Popup>
    Deportes en <br /> Egaña
    </Popup>
  </Marker>

  <Marker position={[-33.8650252848595, -57.37303854222891]}>
    <Popup>
    Deportes en <br /> Cardona
    </Popup>
  </Marker>

  <Marker position={[-33.79039122144177, -57.48958745651217]}>
    <Popup>
    Deportes en <br /> Santa Catalina
    </Popup>
  </Marker>

  <Marker position={[-33.6967784000407, -57.53376805212432]}>
    <Popup>
    Deportes en <br /> Rodó
    </Popup>
  </Marker>

  <Marker position={[-33.50933235235269, -57.800851050023084]}>
    <Popup>
    Deportes en <br /> Palmitas
    </Popup>
  </Marker>

  <Marker position={[-33.398101058564684, -58.31770708137367]}>
    <Popup>
    Deportes en <br /> Villa Soriano
    </Popup>
  </Marker>

  <Marker position={[-33.69900269672159, -58.111733824090244]}>
    <Popup>
    Deportes en <br /> Cañada Nieto
    </Popup>
  </Marker>

  <Marker position={[-33.06136836232029, -57.45812142654608]}>
    <Popup>
    Deportes en <br /> Palmar
    </Popup>
  </Marker>

  <Marker position={[-33.82986631876721, -57.789428536832816]}>
    <Popup>
    Deportes en <br /> Lares y Perseverano
    </Popup>
  </Marker>

  <Marker position={[-33.809577519404506, -58.26537095818607]}>
    <Popup>
    Deportes en <br /> Agraciada
    </Popup>
  </Marker>

  <Marker position={[-33.828728, -58.022985]}>
    <Popup>
    Deportes en <br /> Palo Solo
    </Popup>
  </Marker>

  <Marker position={[-33.119399, -57.632369]}>
    <Popup>
    Deportes en <br /> Villa Darwin
    </Popup>
  </Marker>

</MapContainer>
</div>
  </>
  );
}


export default Mapa;
