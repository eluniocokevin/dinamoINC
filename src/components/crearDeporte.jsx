import stylesCrearDeporte from "../css/crearDeporte.module.css";
import React, { useState } from 'react';

function CrearDeporte( props ){
   
  const [activo, setActivo] = useState(false);
  const [arriba, setArriba] =useState(false);

  const toggleActivo = () => {
    setActivo(!activo);
    setArriba(!arriba);
  };




  const [titulo, setTitulo] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [deporte, setDeporte] = useState('')
  const [ubicacion, setUbicacion] = useState('')
 
 const handleSubmitForm = async(e)=>{
  e.preventDefault();
  const localidad = document.getElementById('localidad').value;
  const option = document.getElementById('option').value;
  const formData = new FormData();
  formData.append('deporte', deporte);
  formData.append('descripcion', Descripcion);
  formData.append('fecha', fecha);
  formData.append('archivo', archivo);
  formData.append('localidad',localidad);
  formData.append('ubicacion',ubicacion);
  formData.append('option1',option);

  try {
    const response = await fetch('http://localhost/archivos2/deportes/recibirDeportes.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Actividad creada con éxito');

      setDeporte('');
      setDescripcion('');
      setFecha('');
      setArchivo(null);
       
      document.getElementById('file').value = '';
    } else {

      console.error('Error al crear la actividad');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
 }
  /*  */
  const abrirDeporte =()=>{
   const form = document.getElementById('agregar');
    form.style.transform='translateX(0)';
  }
  const cerrarDeporte =()=>{
    const form = document.getElementById('agregar');
    form.style.transform='translateX(-2000px)';
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      cerrarDeporte();
    }
  });



  
  const handleFormDelete = async (id) => {


    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este deporte?");
  
    if (!confirmDelete) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost/archivos2/deportes/borrarDeporte.php?id=${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Deporte eliminada con éxito');
        const updatedNoticias = noticias.filter((noticia) => noticia.id !== id);
        setNoticias(updatedNoticias);
      } else {
        const errorData = await response.json();
        setError(true);
        setErrorMsg(errorData.response);
        console.error('Error al eliminar el deporte');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };


    return(<>

{/* Acá aparecen los deportes */}



      <div className={`${stylesCrearDeporte.tabla}`}>


        <div className={`${stylesCrearDeporte.actividades}`} id={props.id}>
          <div className={`${stylesCrearDeporte.actividad}`}> <h2 className={`${stylesCrearDeporte.h2}`}>{props.deporte}</h2></div>
          <div className={`${stylesCrearDeporte.actividad}`}> <h2 className={`${stylesCrearDeporte.h2}`}>{props.fecha}</h2></div>
          <div className={`${stylesCrearDeporte.actividad}`}><img className={`${stylesCrearDeporte.img}`} src={`data:image/jpeg;base64,${props.imagen_base64}`}alt="Imagen"/> </div>
          <div className={`${stylesCrearDeporte.actividad}`}> <h2 className={`${stylesCrearDeporte.h2}`}>{props.localidad}</h2></div>
          <div className={`${stylesCrearDeporte.actividad}`}> <h2 className={`${stylesCrearDeporte.h2}`}onClick={() =>{props.modal()}}>ver mas</h2></div>
          <div className={`${stylesCrearDeporte.actividad}`}>
            <div className={`${stylesCrearDeporte.btns}`}>
              <div className={`${stylesCrearDeporte.btn_edit}`}>
                <svg className={`${stylesCrearDeporte.edit}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535" rx="0" ry="0">
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                        <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                          <path rx="0" ry="0" d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                          </path>
                        </g>
                      </g>
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                        <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                          <path rx="0" ry="0" d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`${stylesCrearDeporte.btn_del}`} onClick={() => handleFormDelete(props.id)}>
                <svg className={`${stylesCrearDeporte.del}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
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

{/* <div className={`${stylesCrearDeporte.btn_abajo}`}>
          
        </div> */}
      

{/* ---------------mobile--------------- */}

   
<div className={`${stylesCrearDeporte.cont_tabla}`}>

<div className={`${stylesCrearDeporte.tabla_mobile}`}>
  
  <div className={`${stylesCrearDeporte.fila1}`}>
    <div className={`${stylesCrearDeporte.actividad_mobile}` } id={props.id}>
      <p className={`${stylesCrearDeporte.p}`}>{props.deporte}</p>
    </div>
  </div>

  <div className={`${stylesCrearDeporte.fila2} ${activo ? `${stylesCrearDeporte.activo}` : ''}`}>

    <div className={`${stylesCrearDeporte.text}`}><h1 className={`${stylesCrearDeporte.h1}`}>...</h1></div>

    <div className={`${stylesCrearDeporte.actividad_m}`}><p className={`${stylesCrearDeporte.izquierda} ${stylesCrearDeporte.p}`}>Titulo:</p> <p className={`${stylesCrearDeporte.derecha} ${stylesCrearDeporte.p}`}>{props.titulo}</p></div>
    <div className={`${stylesCrearDeporte.actividad_m}`}><p className={`${stylesCrearDeporte.izquierda} ${stylesCrearDeporte.p}`}>Deporte:</p> <p className={`${stylesCrearDeporte.derecha} ${stylesCrearDeporte.p}`}>{props.deporte}</p></div>
    <div className={`${stylesCrearDeporte.actividad_m}`}><p className={`${stylesCrearDeporte.izquierda} ${stylesCrearDeporte.p}`}>Descripcion:</p> <p className={`${stylesCrearDeporte.derecha} ${stylesCrearDeporte.p}`}>{props.descripcion}</p></div>
    <div className={`${stylesCrearDeporte.actividad_m}`}><p className={`${stylesCrearDeporte.izquierda} ${stylesCrearDeporte.p}`}>Fecha:</p> <p className={`${stylesCrearDeporte.derecha} ${stylesCrearDeporte.p}`}>{props.fecha}</p></div>

  </div>

  <div className={`${stylesCrearDeporte.fila3}`}>
    <div className={`${stylesCrearDeporte.espacio}`}></div>
    <div className={`${stylesCrearDeporte.espacio}`}></div>
    <div className={`${stylesCrearDeporte.btn_edit_m} ${stylesCrearDeporte.espacio}`}>
      <svg className={`${stylesCrearDeporte.edit_m}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42"  rx="0" ry="0">
          <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535"  rx="0" ry="0">
            <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
              <g className="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                <path rx="0" ry="0"  d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                </path>
              </g>
            </g>
            <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
              <g className="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                <path rx="0" ry="0"  d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div className={`${stylesCrearDeporte.espacio}`}></div>
    <div className={`${stylesCrearDeporte.espacio}`}></div>
    <div className={`${stylesCrearDeporte.btn_del_m} ${stylesCrearDeporte.espacio}`} onClick={() => handleFormDelete(props.id)}>
      <svg className={`${stylesCrearDeporte.del_m} ${stylesCrearDeporte.svg}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
          <g className="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
            <path rx="0" ry="0"  d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
            </path>
          </g>
        </g>
      </svg>
    </div>

    <div className={`${stylesCrearDeporte.espacio}`}></div>

    <div className={`${stylesCrearDeporte.btn_arriba_abajo} ${stylesCrearDeporte.espacio}`}>

      <svg className={`${stylesCrearDeporte.abajo} ${stylesCrearDeporte.svg} ${arriba ? `${stylesCrearDeporte.arriba}` : ''}`} onClick={toggleActivo} id="botonAbajo" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="19.866" xmlns="http://www.w3.org/2000/svg"   version="1.1" viewBox="3085.067 1251.067 19.866 19.866" height="19.866">
        <g id="shape-fc514b5e-bea0-802b-8002-f23cb262ec63"  rx="0" ry="0">
          <g id="shape-fc514b5e-bea0-802b-8002-f23cb262ec64"  rx="0" ry="0">
            <g id="shape-fc514b5e-bea0-802b-8002-f23cb2635a8e">
              <g className={`${stylesCrearDeporte.fills}`} id="fills-fc514b5e-bea0-802b-8002-f23cb2635a8e">
                <path rx="0" ry="0" d="M3095.350,1262.850C3095.258,1262.944,3095.132,1262.996,3095.000,1262.996C3094.868,1262.996,3094.742,1262.944,3094.650,1262.850L3091.650,1259.850C3091.460,1259.656,3091.462,1259.345,3091.654,1259.154C3091.845,1258.962,3092.156,1258.960,3092.350,1259.150L3095.000,1261.790L3097.650,1259.150C3097.844,1258.960,3098.155,1258.962,3098.346,1259.154C3098.538,1259.345,3098.540,1259.656,3098.350,1259.850Z">
                </path>
              </g>
            </g>
            <g id="shape-fc514b5e-bea0-802b-8002-f23cb26386aa">
              <g className="fills" id="fills-fc514b5e-bea0-802b-8002-f23cb26386aa">
                <path rx="0" ry="0" d="M3104.933,1261.000C3104.933,1266.486,3100.486,1270.933,3095.000,1270.933C3089.514,1270.933,3085.067,1266.486,3085.067,1261.000C3085.067,1255.514,3089.514,1251.067,3095.000,1251.067C3100.483,1251.073,3104.927,1255.517,3104.933,1261.000ZZM3086.067,1261.000C3086.067,1265.934,3090.066,1269.933,3095.000,1269.933C3099.934,1269.933,3103.933,1265.934,3103.933,1261.000C3103.933,1256.066,3099.934,1252.067,3095.000,1252.067C3090.069,1252.073,3086.073,1256.069,3086.067,1261.000ZZ">
                </path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>

  </div>

</div>

</div>



{/* Acá se agregan los deportes */}


<div id="agregar" className={`${stylesCrearDeporte.agrega}`}>
        <form id="form" onSubmit={handleSubmitForm} className={`${stylesCrearDeporte.form}`}>

          <div onClick={cerrarDeporte} className={`${stylesCrearDeporte.cerrar}`}>
            <img className={`${stylesCrearDeporte.img_cerrar}`} src="/cross2.png" alt="" />
          </div>

          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Nombre del deporte</label>
          <input className={`${stylesCrearDeporte.input}`} value={deporte} onChange={(e)=>{setDeporte(e.target.value)}} placeholder="" type="text" />
          


          
          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Descripción</label>
          <textarea className={`${stylesCrearDeporte.textarea}`} value={Descripcion} onChange={(e)=>{setDescripcion(e.target.value)}}  placeholder="Descripcion del deporte"cols="30" rows="10"></textarea>

          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Fecha</label>
          <input className={`${stylesCrearDeporte.input}`} value={fecha} onChange={(e)=>{setFecha(e.target.value)}} type="date" placeholder="" />

          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Ubicacion LINK</label>
                <input className={`${stylesCrearDeporte.input}`} value={ubicacion} onChange={(e)=>{setUbicacion(e.target.value)}} type="text" placeholder="Link" />




          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Seleccione si el evento es temporal o anual</label>
          <select className={`${stylesCrearDeporte.select}`} id="option">
            <option className={`${stylesCrearDeporte.option}`} value="s">select</option>
            <option className={`${stylesCrearDeporte.option}`} value="temporal">Temporal</option>
            <option className={`${stylesCrearDeporte.option}`} value="anual">Anual</option>
          </select>

          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Localidad</label>
          <select className={`${stylesCrearDeporte.select}`} name="Localidad" id="localidad">
            <option  className={`${stylesCrearDeporte.option}`}value="s">select</option>
            <option  className={`${stylesCrearDeporte.option}`}value="mercedes">Mercedes</option>
            <option  className={`${stylesCrearDeporte.option}`}value="dolores">Dolores</option>
            <option  className={`${stylesCrearDeporte.option}`}value="risso">Risso</option>
            <option  className={`${stylesCrearDeporte.option}`}value="egaña">Egaña</option>
            <option  className={`${stylesCrearDeporte.option}`}value="cardona">Cardona</option>
            <option  className={`${stylesCrearDeporte.option}`}value="santacatalina">Santa Catalina</option>
            <option  className={`${stylesCrearDeporte.option}`}value="rodo">Rodó</option>
            <option  className={`${stylesCrearDeporte.option}`}value="palmitas">Palmitas</option>
            <option  className={`${stylesCrearDeporte.option}`}value="villasoriano">Villa Soriano</option>
            <option  className={`${stylesCrearDeporte.option}`}value="cañadanieto">Cañada Nieto</option>
            <option  className={`${stylesCrearDeporte.option}`}value="palmar">Palmar</option>
            <option  className={`${stylesCrearDeporte.option}`}value="laresyperseverano">Lares y Perseverano</option>
            <option  className={`${stylesCrearDeporte.option}`}value="agraciada">Agraciada</option>
            <option  className={`${stylesCrearDeporte.option}`}value="palosolo">Palo Solo</option>
            <option  className={`${stylesCrearDeporte.option}`}value="villadarwin">Villa Darwin</option>
          </select>


          <label className={`${stylesCrearDeporte.label} ${stylesCrearDeporte.custom_file_upload}`}htmlFor="file"> Subir imagen de portada
              <img className={`${stylesCrearDeporte.img}`} src="/public/file-earmark.svg" alt="" />
          </label>
          <input className={`${stylesCrearDeporte.hidden}`} onChange={(e)=>{setArchivo(e.target.files[0])}} type="file" accept="image/*"id="file" required />



          <div className={`${stylesCrearDeporte.div_btns}`}>
            <button onClick={cerrarDeporte} className={`${stylesCrearDeporte.btn_cancelar} ${stylesCrearDeporte.button}`}>
              Cancelar <svg className={`${stylesCrearDeporte.svg}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="30" xmlns="http://www.w3.org/2000/svg" id="screenshot-c5eece6e-48df-8016-8002-ef9151833b03" version="1.1" viewBox="1401.652 2681 30 30" height="30">
                <g id="shape-c5eece6e-48df-8016-8002-ef9151833b03">
                  <g className="fills" id="fills-c5eece6e-48df-8016-8002-ef9151833b03">
                    <path rx="0" ry="0" d="M1416.652,2681.000C1408.369,2681.000,1401.652,2687.717,1401.652,2696.000C1401.652,2704.283,1408.369,2711.000,1416.652,2711.000C1424.936,2711.000,1431.652,2704.283,1431.652,2696.000C1431.652,2687.717,1424.936,2681.000,1416.652,2681.000ZZM1422.190,2701.699L1419.981,2701.689L1416.652,2697.721L1413.328,2701.685L1411.114,2701.695C1410.967,2701.695,1410.847,2701.578,1410.847,2701.427C1410.847,2701.364,1410.870,2701.304,1410.910,2701.253L1415.266,2696.064L1410.910,2690.877C1410.870,2690.828,1410.847,2690.767,1410.847,2690.703C1410.847,2690.556,1410.967,2690.435,1411.114,2690.435L1413.328,2690.445L1416.652,2694.413L1419.977,2690.449L1422.187,2690.439C1422.334,2690.439,1422.455,2690.556,1422.455,2690.706C1422.455,2690.770,1422.431,2690.830,1422.391,2690.881L1418.042,2696.067L1422.395,2701.257C1422.435,2701.307,1422.458,2701.367,1422.458,2701.431C1422.458,2701.578,1422.338,2701.699,1422.190,2701.699ZZ">
                    </path>
                  </g>
                </g>
              </svg>
            </button>
            <button className={`${stylesCrearDeporte.btn_agregar} ${stylesCrearDeporte.button}`} type="submit">
              Agregar <svg className={`${stylesCrearDeporte.svg}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="29.023" xmlns="http://www.w3.org/2000/svg" id="screenshot-c5eece6e-48df-8016-8002-ef8dfd3e07c1" version="1.1" viewBox="1726.792 2678 29.023 30" height="30">
                <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c1" rx="0" ry="0">
                  <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c0">
                    <g className="fills" id="fills-c5eece6e-48df-8016-8002-ef8dfd3e07c0">
                      <rect fill="none" rx="14.511278195488671" ry="14.511278195488671" x="1726.7919799498748" y="2677.9999922487805" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="29.022556390977343" height="30">
                      </rect>
                    </g>
                  </g>
                  <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c2" rx="0" ry="0">
                    <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c3">
                      <g className="fills" id="fills-c5eece6e-48df-8016-8002-ef8dfd3e07c3">
                        <path rx="0" ry="0" d="M1744.592,2693.569L1741.853,2693.569L1741.853,2696.400C1741.853,2696.713,1741.608,2696.966,1741.306,2696.966C1741.003,2696.966,1740.758,2696.713,1740.758,2696.400L1740.758,2693.569L1738.019,2693.569C1737.716,2693.569,1737.471,2693.315,1737.471,2693.002C1737.471,2692.690,1737.716,2692.436,1738.019,2692.436L1740.758,2692.436L1740.758,2689.605C1740.758,2689.292,1741.003,2689.039,1741.306,2689.039C1741.608,2689.039,1741.853,2689.292,1741.853,2689.605L1741.853,2692.436L1744.592,2692.436C1744.895,2692.436,1745.140,2692.690,1745.140,2693.002C1745.140,2693.315,1744.895,2693.569,1744.592,2693.569ZZ">
                        </path>
                      </g>
                      <g id="strokes-c5eece6e-48df-8016-8002-ef8dfd3e07c3" className="strokes">
                        <g className="stroke-shape">
                          <path rx="0" ry="0" d="M1744.592,2693.569L1741.853,2693.569L1741.853,2696.400C1741.853,2696.713,1741.608,2696.966,1741.306,2696.966C1741.003,2696.966,1740.758,2696.713,1740.758,2696.400L1740.758,2693.569L1738.019,2693.569C1737.716,2693.569,1737.471,2693.315,1737.471,2693.002C1737.471,2692.690,1737.716,2692.436,1738.019,2692.436L1740.758,2692.436L1740.758,2689.605C1740.758,2689.292,1741.003,2689.039,1741.306,2689.039C1741.608,2689.039,1741.853,2689.292,1741.853,2689.605L1741.853,2692.436L1744.592,2692.436C1744.895,2692.436,1745.140,2692.690,1745.140,2693.002C1745.140,2693.315,1744.895,2693.569,1744.592,2693.569ZZ">
                          </path>
                        </g>
                      </g>
                    </g>
                    <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c4">
                      <g className="fills" id="fills-c5eece6e-48df-8016-8002-ef8dfd3e07c4">
                        <path rx="0" ry="0" d="M1741.306,2704.250C1736.903,2704.251,1732.934,2701.510,1731.249,2697.306C1729.564,2693.102,1730.495,2688.263,1733.608,2685.045C1736.721,2681.828,1741.402,2680.865,1745.469,2682.607C1749.536,2684.349,1752.188,2688.452,1752.187,2693.002C1752.179,2699.211,1747.312,2704.243,1741.306,2704.250ZZM1741.306,2682.884C1737.347,2682.883,1733.777,2685.347,1732.261,2689.128C1730.746,2692.908,1731.582,2697.260,1734.381,2700.154C1737.180,2703.048,1741.390,2703.915,1745.048,2702.349C1748.705,2700.784,1751.091,2697.095,1751.091,2693.002C1751.086,2687.418,1746.708,2682.891,1741.306,2682.884ZZ">
                        </path>
                      </g>
                      <g id="strokes-c5eece6e-48df-8016-8002-ef8dfd3e07c4" className="strokes">
                        <g className="stroke-shape">
                          <path rx="0" ry="0" d="M1741.306,2704.250C1736.903,2704.251,1732.934,2701.510,1731.249,2697.306C1729.564,2693.102,1730.495,2688.263,1733.608,2685.045C1736.721,2681.828,1741.402,2680.865,1745.469,2682.607C1749.536,2684.349,1752.188,2688.452,1752.187,2693.002C1752.179,2699.211,1747.312,2704.243,1741.306,2704.250ZZM1741.306,2682.884C1737.347,2682.883,1733.777,2685.347,1732.261,2689.128C1730.746,2692.908,1731.582,2697.260,1734.381,2700.154C1737.180,2703.048,1741.390,2703.915,1745.048,2702.349C1748.705,2700.784,1751.091,2697.095,1751.091,2693.002C1751.086,2687.418,1746.708,2682.891,1741.306,2682.884ZZ">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </form>
      </div>







    </>);
}
export default CrearDeporte;
