import stylesCrearEvento from "../css/CrearEvento.module.css";
import React, { useState,useEffect } from 'react';



function crearEvento (props){


  const [activo, setActivo] = useState(false);
  const [arriba, setArriba] =useState(false);

  const toggleActivo = () => {
    setActivo(!activo);
    setArriba(!arriba);
  };


  
  
    const [titulo, setTitulo] = useState('');
    const [deporte, setDeporte] = useState('')
    const [Info, setInfo] = useState('');
    const [fecha, setFecha] = useState('');
    const [archivo, setArchivo] = useState(null);
  
   
   const handleSubmitForm = async(e)=>{
    e.preventDefault();
    const localidad = document.getElementById('localidad').value;
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('deporte', deporte);
    formData.append('info', Info);
    formData.append('fecha', fecha);
    formData.append('archivo', archivo);
    formData.append('localidad',localidad);
  
  
    try {
      const response = await fetch('http://localhost/archivos2/eventos/subirEvento.php', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        console.log('Evento creado con éxito');
  
        setTitulo('');
        setDeporte('');
        setInfo('');
        setFecha('');
        setArchivo(null);
         
        document.getElementById('file').value = '';
      } else {
  
        console.error('Error al crear la noticia');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
   }
  
   const abrirEvento = () => {
    const form = document.getElementById('agregar');
    form.style.transform = 'translateX(0)';
  }
  
  const cerrarEvento = () => {
    const form = document.getElementById('agregar');
    form.style.transform = 'translateX(-2000px)';
  }

  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      cerrarEvento();
    }
  });


  
  const handleFormDelete = async (id) => {


    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este evento?");
  
    if (!confirmDelete) {
      return;
    }
  
    try {
      const response = await fetch(`http://localhost/archivos2/eventos/borrarEvento.php?id=${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log('Evento eliminada con éxito');
        const updatedEvento = evento.filter((Evento) => Evento.id !== id);
        setEvento(updatedEvento);
      } else {
        const errorData = await response.json();
        setError(true);
        setErrorMsg(errorData.response);
        console.error('Error al eliminar la Evento');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };
  


return(
    <>
    <div className={`${stylesCrearEvento.tabla}`}>
        <div className={`${stylesCrearEvento.actividades}`} id={props.id}>
          <div className={`${stylesCrearEvento.actividad}`}> <h2 className={`${stylesCrearEvento.h2}`}>{props.titulo}</h2></div>
          <div className={`${stylesCrearEvento.actividad}`}> <h2 className={`${stylesCrearEvento.h2}`}>{props.deporte}</h2></div>
          <div className={`${stylesCrearEvento.actividad}`}> <h2 className={`${stylesCrearEvento.h2}`}>{props.info}</h2></div>
          <div className={`${stylesCrearEvento.actividad}`}> <h2 className={`${stylesCrearEvento.h2}`}>{props.localidad}</h2></div>
          <div className={`${stylesCrearEvento.actividad}`}> <h2 className={`${stylesCrearEvento.h2}`}>{props.fecha}</h2></div>
          <div className={`${stylesCrearEvento.actividad}`}><img className={`${stylesCrearEvento.img}`} src={`data:image/jpeg;base64,${props.imagen_base64}`}alt="Imagen"/> </div>
          <div className={`${stylesCrearEvento.actividad}`}>
            <div className={`${stylesCrearEvento.btns}`}>
              <div className={`${stylesCrearEvento.btn_edit}`}>
                <svg className={`${stylesCrearEvento.edit}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535" rx="0" ry="0">
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                        <g className={`${stylesCrearEvento.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                          <path rx="0" ry="0" d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                          </path>
                        </g>
                      </g>
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                        <g className={`${stylesCrearEvento.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                          <path rx="0" ry="0" d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`${stylesCrearEvento.btn_del}`}  onClick={() => handleFormDelete(props.id)}>
                <svg className={`${stylesCrearEvento.del}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <g className={`${stylesCrearEvento.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
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


{/* Acá se agregan los eventos */}



<div id="agregar" className={`${stylesCrearEvento.agrega}`}>
        <form id="form" onSubmit={handleSubmitForm} className={`${stylesCrearEvento.form}`}>

          <div onClick={cerrarEvento} className={`${stylesCrearEvento.cerrar}`}>
            <img className={`${stylesCrearEvento.img_cerrar}`} src="/cross2.png" alt="" />
          </div>

          <label className={`${stylesCrearEvento.label}`} htmlFor="">Titulo del evento</label>
          <input className={`${stylesCrearEvento.input}`} value={titulo} onChange={(e)=>{setTitulo(e.target.value)}} placeholder="" type="text" />
          
          <label className={`${stylesCrearEvento.label}`} htmlFor=""> Nombre del deporte</label>
          <input className={`${stylesCrearEvento.input}`} value={deporte} onChange={(e)=>{setDeporte(e.target.value)}} type="text" placeholder="" />
          
          <label className={`${stylesCrearEvento.label}`} htmlFor="">Descripción</label>
          <textarea className={`${stylesCrearEvento.textarea}`} value={Info} onChange={(e)=>{setInfo(e.target.value)}}  placeholder="Descripcion del evento"cols="30" rows="10"></textarea>

          <label className={`${stylesCrearEvento.label}`} htmlFor="">Fecha del evento</label>
          <input className={`${stylesCrearEvento.input}`} onChange={(e)=>{setFecha(e.target.value)}} type="date" />


      

          <label className={`${stylesCrearEvento.label}`} htmlFor="">Localidad</label>
          <select className={`${stylesCrearEvento.select}`} name="Localidad" id="localidad">
            <option  className={`${stylesCrearEvento.option}`}value="s">select</option>
            <option  className={`${stylesCrearEvento.option}`}value="mercedes">Mercedes</option>
            <option  className={`${stylesCrearEvento.option}`}value="dolores">Dolores</option>
            <option  className={`${stylesCrearEvento.option}`}value="risso">Risso</option>
            <option  className={`${stylesCrearEvento.option}`}value="egaña">Egaña</option>
            <option  className={`${stylesCrearEvento.option}`}value="cardona">Cardona</option>
            <option  className={`${stylesCrearEvento.option}`}value="santacatalina">Santa Catalina</option>
            <option  className={`${stylesCrearEvento.option}`}value="rodo">Rodó</option>
            <option  className={`${stylesCrearEvento.option}`}value="palmitas">Palmitas</option>
            <option  className={`${stylesCrearEvento.option}`}value="villasoriano">Villa Soriano</option>
            <option  className={`${stylesCrearEvento.option}`}value="cañadanieto">Cañada Nieto</option>
            <option  className={`${stylesCrearEvento.option}`}value="palmar">Palmar</option>
            <option  className={`${stylesCrearEvento.option}`}value="laresyperseverano">Lares y Perseverano</option>
            <option  className={`${stylesCrearEvento.option}`}value="agraciada">Agraciada</option>
            <option  className={`${stylesCrearEvento.option}`}value="palosolo">Palo Solo</option>
            <option  className={`${stylesCrearEvento.option}`}value="villadarwin">Villa Darwin</option>
          </select>


          <label className={`${stylesCrearEvento.label} ${stylesCrearEvento.custom_file_upload}`}htmlFor="file"> Subir imagen de portada
              <img className={`${stylesCrearEvento.img}`} src="/public/file-earmark.svg" alt="" />
          </label>
          <input className={`${stylesCrearEvento.hidden}`} onChange={(e)=>{setArchivo(e.target.files[0])}} type="file" accept="image/*"id="file" required />



          <div className={`${stylesCrearEvento.div_btns}`}>
            <button onClick={cerrarEvento} className={`${stylesCrearEvento.btn_cancelar} ${stylesCrearEvento.button}`}>
              Cancelar <svg className={`${stylesCrearEvento.svg}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="30" xmlns="http://www.w3.org/2000/svg" id="screenshot-c5eece6e-48df-8016-8002-ef9151833b03" version="1.1" viewBox="1401.652 2681 30 30" height="30">
                <g id="shape-c5eece6e-48df-8016-8002-ef9151833b03">
                  <g className="fills" id="fills-c5eece6e-48df-8016-8002-ef9151833b03">
                    <path rx="0" ry="0" d="M1416.652,2681.000C1408.369,2681.000,1401.652,2687.717,1401.652,2696.000C1401.652,2704.283,1408.369,2711.000,1416.652,2711.000C1424.936,2711.000,1431.652,2704.283,1431.652,2696.000C1431.652,2687.717,1424.936,2681.000,1416.652,2681.000ZZM1422.190,2701.699L1419.981,2701.689L1416.652,2697.721L1413.328,2701.685L1411.114,2701.695C1410.967,2701.695,1410.847,2701.578,1410.847,2701.427C1410.847,2701.364,1410.870,2701.304,1410.910,2701.253L1415.266,2696.064L1410.910,2690.877C1410.870,2690.828,1410.847,2690.767,1410.847,2690.703C1410.847,2690.556,1410.967,2690.435,1411.114,2690.435L1413.328,2690.445L1416.652,2694.413L1419.977,2690.449L1422.187,2690.439C1422.334,2690.439,1422.455,2690.556,1422.455,2690.706C1422.455,2690.770,1422.431,2690.830,1422.391,2690.881L1418.042,2696.067L1422.395,2701.257C1422.435,2701.307,1422.458,2701.367,1422.458,2701.431C1422.458,2701.578,1422.338,2701.699,1422.190,2701.699ZZ">
                    </path>
                  </g>
                </g>
              </svg>
            </button>
            <button className={`${stylesCrearEvento.btn_agregar} ${stylesCrearEvento.button}`} type="submit">
              Agregar <svg className={`${stylesCrearEvento.svg}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="29.023" xmlns="http://www.w3.org/2000/svg" id="screenshot-c5eece6e-48df-8016-8002-ef8dfd3e07c1" version="1.1" viewBox="1726.792 2678 29.023 30" height="30">
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


{/* ---------------mobile--------------- */}

<div className={`${stylesCrearEvento.cont_tabla}`}>

<div className={`${stylesCrearEvento.tabla_mobile}`}>
  
  <div className={`${stylesCrearEvento.fila1}`}>
    <div className={`${stylesCrearEvento.actividad_mobile} ${stylesCrearEvento.act_deporte}`}>
      <p className={`${stylesCrearEvento.p}`}>Futbol</p>
    </div>
    <div className={`${stylesCrearEvento.actividad_mobile} ${stylesCrearEvento.act_localidad}`}>
      <p className={`${stylesCrearEvento.p}`}>Risso</p>
    </div>
  </div>

  <div className={`${stylesCrearEvento.fila2} ${activo ? `${stylesCrearEvento.activo}` : ''}`}>

    <div className={`${stylesCrearEvento.text}`}><h1 className={`${stylesCrearEvento.h1}`}>...</h1></div>

    <div className={`${stylesCrearEvento.actividad}`}><p className={`${stylesCrearEvento.izquierda} ${stylesCrearEvento.p}`}>Docente:</p> <p className={`${stylesCrearEvento.derecha} ${stylesCrearEvento.p}`}>Diego Lugano</p></div>
    <div className={`${stylesCrearEvento.actividad}`}><p className={`${stylesCrearEvento.izquierda} ${stylesCrearEvento.p}`}>Lugar:</p> <p className={`${stylesCrearEvento.derecha} ${stylesCrearEvento.p}`}>Plaza deportes</p></div>
    <div className={`${stylesCrearEvento.actividad}`}><p className={`${stylesCrearEvento.izquierda} ${stylesCrearEvento.p}`}>Fecha:</p> <p className={`${stylesCrearEvento.derecha} ${stylesCrearEvento.p}`}>1/6/23</p></div>
    <div className={`${stylesCrearEvento.actividad}`}><p className={`${stylesCrearEvento.izquierda} ${stylesCrearEvento.p}`}>Horario:</p> <p className={`${stylesCrearEvento.derecha} ${stylesCrearEvento.p}`}>14hs a 16hs</p></div>

  </div>

  <div className={`${stylesCrearEvento.fila3}`}>
    <div className={`${stylesCrearEvento.espacio}`}></div>
    <div className={`${stylesCrearEvento.espacio}`}></div>
    <div className={`${stylesCrearEvento.btn_edit_m} ${stylesCrearEvento.espacio}`}>
      <svg className={`${stylesCrearEvento.edit_m}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
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
    <div className={`${stylesCrearEvento.espacio}`}></div>
    <div className={`${stylesCrearEvento.espacio}`}></div>
    <div className={`${stylesCrearEvento.brn_del_m} ${stylesCrearEvento.espacio}`}>
      <svg className={`${stylesCrearEvento.del_m} ${stylesCrearEvento.svg}` } xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865" >
        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
          <g className="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
            <path rx="0" ry="0"  d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
            </path>
          </g>
        </g>
      </svg>
    </div>

    <div className={`${stylesCrearEvento.espacio}`}></div>

    <div className={`${stylesCrearEvento.btn_arriba_abajo} ${stylesCrearEvento.espacio}`}>

      <svg className={`${stylesCrearEvento.abajo} ${stylesCrearEvento.svg} ${arriba ? `${stylesCrearEvento.arriba}` : ''}`} onClick={toggleActivo} id="botonAbajo" xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="19.866" xmlns="http://www.w3.org/2000/svg"   version="1.1" viewBox="3085.067 1251.067 19.866 19.866" height="19.866">
        <g id="shape-fc514b5e-bea0-802b-8002-f23cb262ec63"  rx="0" ry="0">
          <g id="shape-fc514b5e-bea0-802b-8002-f23cb262ec64"  rx="0" ry="0">
            <g id="shape-fc514b5e-bea0-802b-8002-f23cb2635a8e">
              <g className={`${stylesCrearEvento.fills}`} id="fills-fc514b5e-bea0-802b-8002-f23cb2635a8e">
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
    </>
)

}

export default crearEvento;










