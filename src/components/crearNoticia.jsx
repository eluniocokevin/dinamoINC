import stylesCrearNoticia from '../css/crearNoticia.module.css';
import React, { useState,useEffect } from 'react';



function CrearNoticia( props ) {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
      // Realiza una solicitud GET al archivo PHP que obtiene las noticias
      fetch("http://localhost/archivos2/noticias/subirNoticia.php")
        .then((response) => response.json())
        .then((data) => setNoticias(data))
        .catch((error) => console.error("Error al obtener las noticias:", error));
    }, []);


  const [titulo, setTitulo] = useState('');
  const [deporte, setDeporte] = useState('')
  const [informacion, setInformacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [error, setError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState('');






  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('deporte', deporte);
    formData.append('informacion', informacion);
    formData.append('fecha', fecha);
    formData.append('archivo', archivo);

    try {
      const response = await fetch('http://localhost/archivos2/noticias/subirNoticia.php', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Noticia creada con éxito');

        setTitulo('');
        setDeporte('');
        setInformacion('');
        setFecha('');
        setArchivo(null);

        document.getElementById('file').value = '';
      } else {  
        const errorData = await response.json();
        setError(true);
        setErrorMsg(errorData.response);
        console.error('Error al crear la noticia');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const abrirNoticia = () => {
    const form = document.getElementById('agregar');
    form.style.transform = 'translateX(0)';
  }
  

  const cerrarNoticia = () => {
    const form = document.getElementById('agregar');
    form.style.transform = 'translateX(-2000px)';
  }






  return (<>
        {/* Acá aparecen las noticias*/}


    <div className={`${stylesCrearNoticia.tabla}`}>
        
      <div className={`${stylesCrearNoticia.actividades}`}>
        <div className={`${stylesCrearNoticia.actividad}`}> <h2 className={`${stylesCrearNoticia.h2}`}>{props.titulo}</h2></div>
        <div className={`${stylesCrearNoticia.actividad}`}> <h2 className={`${stylesCrearNoticia.h2}`}>{props.deporte}</h2></div>
        <div className={`${stylesCrearNoticia.actividad}`}> <h2 className={`${stylesCrearNoticia.h2}`}>{props.descripcion}</h2></div>
        <div className={`${stylesCrearNoticia.actividad}`}> <h2 className={`${stylesCrearNoticia.h2}`}>{props.fecha}</h2></div>
        <div className={`${stylesCrearNoticia.actividad}`}> <h2 className={`${stylesCrearNoticia.h2}`}>{props.imagen}</h2></div>
        <div className={`${stylesCrearNoticia.actividad}`}>
          <div className={`${stylesCrearNoticia.btns}`}>
            <div className={`${stylesCrearNoticia.btn_edit}`}>
              <svg className={`${stylesCrearNoticia.edit}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" rx="0" ry="0">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                      <g className={`${stylesCrearNoticia.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                        <path rx="0" ry="0" d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                        </path>
                      </g>
                    </g>
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                      <g className={`${stylesCrearNoticia.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                        <path rx="0" ry="0" d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                        </path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className={`${stylesCrearNoticia.btn_del}`}>
              <svg className={`${stylesCrearNoticia.del}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                  <g className={`${stylesCrearNoticia.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <path rx="0" ry="0" d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
                    </path>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

    </div>



{/* 
<form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder="Titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Información sobre la noticia"
        value={informacion}
        onChange={(e) => setInformacion(e.target.value)}
        rows="15"
      ></textarea>
      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />
      <input
        type="file"
        id='file'
        onChange={(e) => setArchivo(e.target.files[0])}
      />
      <button type="submit">Enviar</button>
    </form>
    <div className="render-noticias">
           {noticias.map((noticia)=>{
            <div key={noticia.id}>
             <h1>nombre noticia: {noticia.titulo}</h1>
            </div>
           })}
    </div> */}
    </>
  );
}

export default CrearNoticia;