import stylesCrearDeporte from "../css/CrearDeporte.module.css";
import React, { useState,useEffect } from 'react';



function noticiasAdmins (){



  
  
  const [titulo, setTitulo] = useState('');
  const [Descripcion, setDescripcion] = useState('');
  const [fecha, setFecha] = useState('');
  const [archivo, setArchivo] = useState(null);
  const [deporte, setDeporte] = useState('')
  const [ubicacion, setUbicacion] = useState('')
  
  
  const [fileSelected, setFileSelected] = useState(false);

  const handleChange = (event) => {
  
    setArchivo(event.target.files[0]);
  
    setFileSelected(!!event.target.files.length);
  };
  
  
  
    const handleFormSubmit = async (e) => {
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
        const response = await fetch('http://localhost/archivos2/deportes/subirDeportes.php', {
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
  
    const abrirDeporte = () => {
      const form = document.getElementById('agregar');
      form.style.transform = 'translateX(0)';
    }
    
  
    const cerrarDeporte = () => {
      const form = document.getElementById('agregar');
      form.style.transform = 'translateX(-2000px)';
    }
  


return(
    <>
    <div className={`${stylesCrearDeporte.tabla}`}>
        <div className={`${stylesCrearDeporte.cont_h1}`}><h1 className={`${stylesCrearDeporte.h1}`}>Deportes</h1></div>

        <div className={`${stylesCrearDeporte.atributos}`}>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.fecha}`}> <h2 className={`${stylesCrearDeporte.h2}`}>DEPORTE</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.docente}`}> <h2 className={`${stylesCrearDeporte.h2}`}>FECHA</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.horario}`}> <h2 className={`${stylesCrearDeporte.h2}`}>IMAGEN</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.lugar}`}> <h2 className={`${stylesCrearDeporte.h2}`}>LOCALIDAD</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.nombre}`}> <h2 className={`${stylesCrearDeporte.h2}`}>Ver mas...</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.agregar}`}>
            <div className={`${stylesCrearDeporte.btn_add}`}>
              <div onClick={abrirDeporte} className={`${stylesCrearDeporte.add}`}>
                <svg className={`${stylesCrearDeporte.svg_add}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" version="1.1" viewBox="2352 447.621 30 31.558">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
                      <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
                        <path rx="0" ry="0" d="M2371.533,464.197L2367.758,464.197L2367.758,468.168C2367.758,468.607,2367.420,468.962,2367.003,468.962C2366.586,468.962,2366.248,468.607,2366.248,468.168L2366.248,464.197L2362.473,464.197C2362.056,464.197,2361.718,463.842,2361.718,463.403C2361.718,462.964,2362.056,462.609,2362.473,462.609L2366.248,462.609L2366.248,458.638C2366.248,458.199,2366.586,457.844,2367.003,457.844C2367.420,457.844,2367.758,458.199,2367.758,458.638L2367.758,462.609L2371.533,462.609C2371.950,462.609,2372.288,462.964,2372.288,463.403C2372.288,463.842,2371.950,464.197,2371.533,464.197ZZ">
                        </path>
                      </g>
                    </g>
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
                      <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
                        <path rx="0" ry="0" d="M2367.003,479.179C2360.936,479.180,2355.465,475.336,2353.143,469.440C2350.820,463.543,2352.103,456.756,2356.394,452.243C2360.684,447.729,2367.136,446.380,2372.742,448.823C2378.347,451.266,2382.001,457.021,2382.000,463.403C2381.990,472.111,2375.282,479.168,2367.003,479.179ZZM2367.003,449.211C2361.547,449.210,2356.627,452.666,2354.538,457.968C2352.449,463.271,2353.602,469.375,2357.460,473.434C2361.317,477.493,2367.120,478.708,2372.161,476.513C2377.202,474.317,2380.489,469.143,2380.490,463.403C2380.483,455.570,2374.449,449.222,2367.003,449.211ZZ">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
    </div>


{/* Acá se agregan los eventos */}



<div id="agregar" className={`${stylesCrearDeporte.agrega}`}>
        <form id="form" onSubmit={handleFormSubmit} className={`${stylesCrearDeporte.form}`}>

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




          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Seleccione si el deporte es temporal o anual</label>
          <select className={`${stylesCrearDeporte.select}`} id="option">
            <option className={`${stylesCrearDeporte.option}`} value="s">select</option>
            <option className={`${stylesCrearDeporte.option}`} value="temporal">Temporal</option>
            <option className={`${stylesCrearDeporte.option}`} value="anual">Anual</option>
          </select>

          <label className={`${stylesCrearDeporte.label}`} htmlFor="">Localidad</label>
          <select className={`${stylesCrearDeporte.select}`} name="Localidad" id="localidad">
            <option  className={`${stylesCrearDeporte.option}`}value="s">select</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Mercedes">Mercedes</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Dolores">Dolores</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Risso">Risso</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Egaña">Egaña</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Cardona">Cardona</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Santacatalina">Santa Catalina</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Rodo">Rodó</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Palmitas">Palmitas</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Villasoriano">Villa Soriano</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Cañadanieto">Cañada Nieto</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Palmar">Palmar</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Laresyperseverano">Lares y Perseverano</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Agraciada">Agraciada</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Palosolo">Palo Solo</option>
            <option  className={`${stylesCrearDeporte.option}`}value="Villadarwin">Villa Darwin</option>
          </select>


          

          <label className={`${stylesCrearDeporte.label} ${stylesCrearDeporte.custom_file_upload} ${fileSelected ? stylesCrearDeporte.fileSelected : ''}`}htmlFor="file">
            {fileSelected ? 'Archivo seleccionado' : 'Subir imagen de portada'}
              <img className={`${stylesCrearDeporte.img}`} src="/public/file-earmark.svg" alt="" />
          </label>
          <input className={`${stylesCrearDeporte.hidden}`} onChange={handleChange}  type="file" accept="image/*"id="file" required />







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



{/* boton para llamar los eventos -------- MOBILE----------- */}


<div className={`${stylesCrearDeporte.cont_add}`}>


    <div onClick={abrirDeporte} className={`${stylesCrearDeporte.add_m}`}>
      <svg className={`${stylesCrearDeporte.svg_add_m}`} xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" version="1.1" viewBox="2352 447.621 30 31.558">
        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" rx="0" ry="0">
          <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
            <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
              <path rx="0" ry="0" d="M2371.533,464.197L2367.758,464.197L2367.758,468.168C2367.758,468.607,2367.420,468.962,2367.003,468.962C2366.586,468.962,2366.248,468.607,2366.248,468.168L2366.248,464.197L2362.473,464.197C2362.056,464.197,2361.718,463.842,2361.718,463.403C2361.718,462.964,2362.056,462.609,2362.473,462.609L2366.248,462.609L2366.248,458.638C2366.248,458.199,2366.586,457.844,2367.003,457.844C2367.420,457.844,2367.758,458.199,2367.758,458.638L2367.758,462.609L2371.533,462.609C2371.950,462.609,2372.288,462.964,2372.288,463.403C2372.288,463.842,2371.950,464.197,2371.533,464.197ZZ">
              </path>
            </g>
          </g>
          <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
            <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
              <path rx="0" ry="0" d="M2367.003,479.179C2360.936,479.180,2355.465,475.336,2353.143,469.440C2350.820,463.543,2352.103,456.756,2356.394,452.243C2360.684,447.729,2367.136,446.380,2372.742,448.823C2378.347,451.266,2382.001,457.021,2382.000,463.403C2381.990,472.111,2375.282,479.168,2367.003,479.179ZZM2367.003,449.211C2361.547,449.210,2356.627,452.666,2354.538,457.968C2352.449,463.271,2353.602,469.375,2357.460,473.434C2361.317,477.493,2367.120,478.708,2372.161,476.513C2377.202,474.317,2380.489,469.143,2380.490,463.403C2380.483,455.570,2374.449,449.222,2367.003,449.211ZZ">
              </path>
            </g>
          </g>
        </g>
      </svg>
    </div>
</div>

    </>
)

}

export default noticiasAdmins;