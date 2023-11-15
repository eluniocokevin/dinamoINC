import stylesCrearDeporte from "../css/CrearDeporte.module.css";
import React, { useState,useEffect } from 'react';



function EditarUsuario (){


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
        <div className={`${stylesCrearDeporte.cont_h1}`}><h1 className={`${stylesCrearDeporte.h1}`}>Usuarios</h1></div>

        <div className={`${stylesCrearDeporte.atributos}`}>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.fecha}`}> <h2 className={`${stylesCrearDeporte.h2}`}>DEPORTE</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.nombre}`}> <h2 className={`${stylesCrearDeporte.h2}`}>DESCRIPCION</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.docente}`}> <h2 className={`${stylesCrearDeporte.h2}`}>FECHA</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.horario}`}> <h2 className={`${stylesCrearDeporte.h2}`}>IMAGEN</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.lugar}`}> <h2 className={`${stylesCrearDeporte.h2}`}>LOCALIDAD</h2></div>
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

export default EditarUsuario;