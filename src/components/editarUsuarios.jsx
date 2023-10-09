import stylesEditarUsuarios from "../css/editarUsuarios.module.css";

function EditarUsuarios (){

return(

    <>
{/* Acá aparecen los usuarios */}



      <div className={`${stylesEditarUsuarios.tabla}`}>
        <div className={`${stylesEditarUsuarios.cont_h1}`}><h1 className={`${stylesEditarUsuarios.h1}`}>Usuarios</h1></div>

        <div className={`${stylesEditarUsuarios.atributos}`}>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.fecha}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>FECHA</h2></div>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.nombre}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>NOMBRE</h2></div>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.docente}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>DOCENTE</h2></div>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.lugar}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>LUGAR</h2></div>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.horario}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>HOARIO</h2></div>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.localidad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>LOCALIDAD</h2></div>
          <div className={`${stylesEditarUsuarios.atributo} ${stylesEditarUsuarios.agregar}`}>
            <div className={`${stylesEditarUsuarios.btn_add}`}>
              <div className={`${stylesEditarUsuarios.add}`}>
                <svg className={`${stylesEditarUsuarios.svg_add}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" version="1.1" viewBox="2352 447.621 30 31.558">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
                      <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
                        <path rx="0" ry="0" d="M2371.533,464.197L2367.758,464.197L2367.758,468.168C2367.758,468.607,2367.420,468.962,2367.003,468.962C2366.586,468.962,2366.248,468.607,2366.248,468.168L2366.248,464.197L2362.473,464.197C2362.056,464.197,2361.718,463.842,2361.718,463.403C2361.718,462.964,2362.056,462.609,2362.473,462.609L2366.248,462.609L2366.248,458.638C2366.248,458.199,2366.586,457.844,2367.003,457.844C2367.420,457.844,2367.758,458.199,2367.758,458.638L2367.758,462.609L2371.533,462.609C2371.950,462.609,2372.288,462.964,2372.288,463.403C2372.288,463.842,2371.950,464.197,2371.533,464.197ZZ">
                        </path>
                      </g>
                    </g>
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
                      <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
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

        <div className={`${stylesEditarUsuarios.actividades}`}>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>1/6/23</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Futbol</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Diego Lugano</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Plaza Deporte</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>14hs a 16hs</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Mercedes</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}>
            <div className={`${stylesEditarUsuarios.btns}`}>
              <div className={`${stylesEditarUsuarios.btn_edit}`}>
                <svg className={`${stylesEditarUsuarios.edit}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535" rx="0" ry="0">
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                        <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                          <path rx="0" ry="0" d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                          </path>
                        </g>
                      </g>
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                        <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                          <path rx="0" ry="0" d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`${stylesEditarUsuarios.btn_del}`}>
                <svg className={`${stylesEditarUsuarios.del}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                      <path rx="0" ry="0" d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
                      </path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={`${stylesEditarUsuarios.actividades}`}>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>30/5/23</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Natación</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Michel Phelps</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Piscina Municipal</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>6hs a 10hs</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}> <h2 className={`${stylesEditarUsuarios.h2}`}>Risso</h2></div>
          <div className={`${stylesEditarUsuarios.actividad}`}>
            <div className={`${stylesEditarUsuarios.btns}`}>
              <div className={`${stylesEditarUsuarios.btn_edit}`}>
                <svg className={`${stylesEditarUsuarios.edit}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535" rx="0" ry="0">
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                        <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                          <path rx="0" ry="0" d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                          </path>
                        </g>
                      </g>
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                        <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                          <path rx="0" ry="0" d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className={`${stylesEditarUsuarios.btn_del}`}>
                <svg className={`${stylesEditarUsuarios.del}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg" id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <g className={`${stylesEditarUsuarios.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
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


      

{/* ---------------mobile--------------- */}

<div className={`${stylesEditarUsuarios.cont_tabla}`}>

      <div className={`${stylesEditarUsuarios.tabla_mobile}`}>
        
        <div className={`${stylesEditarUsuarios.fila1}`}>
          <div className={`${stylesEditarUsuarios.actividad_mobile} ${stylesEditarUsuarios.act_deporte}`}>
            <p className={`${stylesEditarUsuarios.p}`}>Futbol</p>
          </div>
          <div className={`${stylesEditarUsuarios.actividad_mobile} ${stylesEditarUsuarios.act_localidad}`}>
            <p className={`${stylesEditarUsuarios.p}`}>Risso</p>
          </div>
        </div>

        <div className={`${stylesEditarUsuarios.fila2}`}>
          <div className={`${stylesEditarUsuarios.actividad}`}><p className={`${stylesEditarUsuarios.izquierda} ${stylesEditarUsuarios.p}`}>Docente:</p> <p className={`${stylesEditarUsuarios.derecha} ${stylesEditarUsuarios.p}`}>Diego Lugano</p></div>
          <div className={`${stylesEditarUsuarios.actividad}`}><p className={`${stylesEditarUsuarios.izquierda} ${stylesEditarUsuarios.p}`}>Lugar:</p> <p className={`${stylesEditarUsuarios.derecha} ${stylesEditarUsuarios.p}`}>Plaza deportes</p></div>
          <div className={`${stylesEditarUsuarios.actividad}`}><p className={`${stylesEditarUsuarios.izquierda} ${stylesEditarUsuarios.p}`}>Fecha:</p> <p className={`${stylesEditarUsuarios.derecha} ${stylesEditarUsuarios.p}`}>1/6/23</p></div>
          <div className={`${stylesEditarUsuarios.actividad}`}><p className={`${stylesEditarUsuarios.izquierda} ${stylesEditarUsuarios.p}`}>Horario:</p> <p className={`${stylesEditarUsuarios.derecha} ${stylesEditarUsuarios.p}`}>14hs a 16hs</p></div>

        </div>

        <div className={`${stylesEditarUsuarios.fila3}`}>
          <div className={`${stylesEditarUsuarios.espacio}`}></div>
          <div className={`${stylesEditarUsuarios.espacio}`}></div>
          <div className={`${stylesEditarUsuarios.btn_edit_m} ${stylesEditarUsuarios.espacio}`}>
            <svg className={`${stylesEditarUsuarios.edit_m}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
              <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42"  rx="0" ry="0">
                <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535"  rx="0" ry="0">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                    <g class="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                      <path rx="0" ry="0"  d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                      </path>
                    </g>
                  </g>
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                    <g class="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                      <path rx="0" ry="0"  d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                      </path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div className={`${stylesEditarUsuarios.espacio}`}></div>
          <div className={`${stylesEditarUsuarios.espacio}`}></div>
          <div className={`${stylesEditarUsuarios.brn_del_m} ${stylesEditarUsuarios.espacio}`}>
            <svg className={`${stylesEditarUsuarios.del_m} ${stylesEditarUsuarios.svg}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
              <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                <g class="fills" id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                  <path rx="0" ry="0"  d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
                  </path>
                </g>
              </g>
            </svg>
          </div>

          <div className={`${stylesEditarUsuarios.espacio}`}></div>

          <div className={`${stylesEditarUsuarios.btn_arriba} ${stylesEditarUsuarios.espacio}`}>
            <svg className={`${stylesEditarUsuarios.arriba} ${stylesEditarUsuarios.svg}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="19.866" xmlns="http://www.w3.org/2000/svg" id="screenshot-fc514b5e-bea0-802b-8002-f23abc56fadc" version="1.1" viewBox="3085.067 1080.068 19.866 19.866" height="19.866">
              <g id="shape-fc514b5e-bea0-802b-8002-f23abc56fadc" rx="0" ry="0">
                <g id="shape-fc514b5e-bea0-802b-8002-f23abc573a95" rx="0" ry="0">
                  <g id="shape-fc514b5e-bea0-802b-8002-f23abc57c894">
                    <g class="fills" id="fills-fc514b5e-bea0-802b-8002-f23abc57c894">
                      <path rx="0" ry="0" d="M3094.650,1088.150C3094.742,1088.056,3094.868,1088.004,3095.000,1088.004C3095.132,1088.004,3095.258,1088.056,3095.350,1088.150L3098.350,1091.150C3098.540,1091.344,3098.538,1091.655,3098.346,1091.846C3098.155,1092.038,3097.844,1092.040,3097.650,1091.850L3095.000,1089.210L3092.350,1091.850C3092.156,1092.040,3091.845,1092.038,3091.654,1091.846C3091.462,1091.655,3091.460,1091.344,3091.650,1091.150Z">
                      </path>
                    </g>
                  </g>
                  <g id="shape-fc514b5e-bea0-802b-8002-f23abc580381">
                    <g class="fills" id="fills-fc514b5e-bea0-802b-8002-f23abc580381">
                      <path rx="0" ry="0" d="M3085.067,1090.000C3085.068,1084.514,3089.515,1080.068,3095.001,1080.068C3100.486,1080.068,3104.933,1084.516,3104.933,1090.001C3104.933,1095.487,3100.486,1099.934,3095.000,1099.934C3089.516,1099.928,3085.073,1095.484,3085.067,1090.000ZZM3103.933,1090.000C3103.932,1085.067,3099.933,1081.068,3094.999,1081.068C3090.066,1081.068,3086.067,1085.068,3086.067,1090.001C3086.067,1094.935,3090.067,1098.934,3095.000,1098.934C3099.932,1098.928,3103.928,1094.932,3103.933,1090.000ZZ">
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


  <div className={`${stylesEditarUsuarios.cont_tabla}`}>

    <div className={`${stylesEditarUsuarios.tabla_mobile_cerrada}`}>
      <div className={`${stylesEditarUsuarios.fila1_cerrada}`}>
        <div className={`${stylesEditarUsuarios.actividad_mobile} ${stylesEditarUsuarios.act_deporte}`}>
          <p className={`${stylesEditarUsuarios.p}`}>Natación</p>
        </div>
        <div className={`${stylesEditarUsuarios.actividad_mobile} ${stylesEditarUsuarios.act_localidad}`}>
          <p className={`${stylesEditarUsuarios.p}`}>Mercedes</p>
        </div>
      </div>

      <div className={`${stylesEditarUsuarios.fila2_cerrada}`}>
      </div>

      <div className={`${stylesEditarUsuarios.fila3_cerrada}`}>
        <div className={`${stylesEditarUsuarios.espacio}`}></div>
        <p className={`${stylesEditarUsuarios.p}`}>6hs A 10hs</p>
        <div className={`${stylesEditarUsuarios.btn_abajo}`}>
          <svg className={`${stylesEditarUsuarios.abajo}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="19.866" xmlns="http://www.w3.org/2000/svg"  id="screenshot-fc514b5e-bea0-802b-8002-f23cb262ec63" version="1.1" viewBox="3085.067 1251.067 19.866 19.866" height="19.866">
            <g id="shape-fc514b5e-bea0-802b-8002-f23cb262ec63"  rx="0" ry="0">
              <g id="shape-fc514b5e-bea0-802b-8002-f23cb262ec64"  rx="0" ry="0">
                <g id="shape-fc514b5e-bea0-802b-8002-f23cb2635a8e">
                  <g class="fills" id="fills-fc514b5e-bea0-802b-8002-f23cb2635a8e">
                    <path rx="0" ry="0" d="M3095.350,1262.850C3095.258,1262.944,3095.132,1262.996,3095.000,1262.996C3094.868,1262.996,3094.742,1262.944,3094.650,1262.850L3091.650,1259.850C3091.460,1259.656,3091.462,1259.345,3091.654,1259.154C3091.845,1258.962,3092.156,1258.960,3092.350,1259.150L3095.000,1261.790L3097.650,1259.150C3097.844,1258.960,3098.155,1258.962,3098.346,1259.154C3098.538,1259.345,3098.540,1259.656,3098.350,1259.850Z">
                    </path>
                  </g>
                </g>
                <g id="shape-fc514b5e-bea0-802b-8002-f23cb26386aa">
                  <g class="fills" id="fills-fc514b5e-bea0-802b-8002-f23cb26386aa">
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


{/* Acá se agregan los usuarios */}



<div className={`${stylesEditarUsuarios.agrega}`}>

<form className={`${stylesEditarUsuarios.form}`} action="">
  <h1 className={`${stylesEditarUsuarios.h1}`}>Añadir deporte</h1>

  <label className={`${stylesEditarUsuarios.label}`} for="">Fecha</label>
  <input className={`${stylesEditarUsuarios.input}`} type="text" placeholder="XX/XX/XXXX" />

  <label className={`${stylesEditarUsuarios.label}`} for="">Nombre</label>
  <input className={`${stylesEditarUsuarios.input}`} type="text" placeholder="Nombre" />

  <label className={`${stylesEditarUsuarios.label}`} for="">Lugar</label>
  <input className={`${stylesEditarUsuarios.input}`} type="text" placeholder="Lugar" />

  <label className={`${stylesEditarUsuarios.label}`} for="">Horario</label>
  <input className={`${stylesEditarUsuarios.input}`} type="text" placeholder="Horario" />


  <label className={`${stylesEditarUsuarios.label}`} for="">Localidad</label>
  <input className={`${stylesEditarUsuarios.input}`} type="text" placeholder="Localidad" />

  <div className={`${stylesEditarUsuarios.div_btns}`}>
    <button className={`${stylesEditarUsuarios.btn_cancelar} ${stylesEditarUsuarios.button}`}>
      Cancelar <svg className={`${stylesEditarUsuarios.svg}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="30" xmlns="http://www.w3.org/2000/svg" id="screenshot-c5eece6e-48df-8016-8002-ef9151833b03" version="1.1" viewBox="1401.652 2681 30 30" height="30">
        <g id="shape-c5eece6e-48df-8016-8002-ef9151833b03">
          <g class="fills" id="fills-c5eece6e-48df-8016-8002-ef9151833b03">
            <path rx="0" ry="0" d="M1416.652,2681.000C1408.369,2681.000,1401.652,2687.717,1401.652,2696.000C1401.652,2704.283,1408.369,2711.000,1416.652,2711.000C1424.936,2711.000,1431.652,2704.283,1431.652,2696.000C1431.652,2687.717,1424.936,2681.000,1416.652,2681.000ZZM1422.190,2701.699L1419.981,2701.689L1416.652,2697.721L1413.328,2701.685L1411.114,2701.695C1410.967,2701.695,1410.847,2701.578,1410.847,2701.427C1410.847,2701.364,1410.870,2701.304,1410.910,2701.253L1415.266,2696.064L1410.910,2690.877C1410.870,2690.828,1410.847,2690.767,1410.847,2690.703C1410.847,2690.556,1410.967,2690.435,1411.114,2690.435L1413.328,2690.445L1416.652,2694.413L1419.977,2690.449L1422.187,2690.439C1422.334,2690.439,1422.455,2690.556,1422.455,2690.706C1422.455,2690.770,1422.431,2690.830,1422.391,2690.881L1418.042,2696.067L1422.395,2701.257C1422.435,2701.307,1422.458,2701.367,1422.458,2701.431C1422.458,2701.578,1422.338,2701.699,1422.190,2701.699ZZ">
            </path>
          </g>
        </g>
      </svg>
    </button>
    <button className={`${stylesEditarUsuarios.btn_agregar} ${stylesEditarUsuarios.button}`}>
      Agregar <svg className={`${stylesEditarUsuarios.svg}`} xmlns: xlink="http://www.w3.org/1999/xlink" fill="none" width="29.023" xmlns="http://www.w3.org/2000/svg" id="screenshot-c5eece6e-48df-8016-8002-ef8dfd3e07c1" version="1.1" viewBox="1726.792 2678 29.023 30" height="30">
        <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c1" rx="0" ry="0">
          <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c0">
            <g class="fills" id="fills-c5eece6e-48df-8016-8002-ef8dfd3e07c0">
              <rect fill="none" rx="14.511278195488671" ry="14.511278195488671" x="1726.7919799498748" y="2677.9999922487805" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="29.022556390977343" height="30">
              </rect>
            </g>
          </g>
          <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c2" rx="0" ry="0">
            <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c3">
              <g class="fills" id="fills-c5eece6e-48df-8016-8002-ef8dfd3e07c3">
                <path rx="0" ry="0" d="M1744.592,2693.569L1741.853,2693.569L1741.853,2696.400C1741.853,2696.713,1741.608,2696.966,1741.306,2696.966C1741.003,2696.966,1740.758,2696.713,1740.758,2696.400L1740.758,2693.569L1738.019,2693.569C1737.716,2693.569,1737.471,2693.315,1737.471,2693.002C1737.471,2692.690,1737.716,2692.436,1738.019,2692.436L1740.758,2692.436L1740.758,2689.605C1740.758,2689.292,1741.003,2689.039,1741.306,2689.039C1741.608,2689.039,1741.853,2689.292,1741.853,2689.605L1741.853,2692.436L1744.592,2692.436C1744.895,2692.436,1745.140,2692.690,1745.140,2693.002C1745.140,2693.315,1744.895,2693.569,1744.592,2693.569ZZ">
                </path>
              </g>
              <g id="strokes-c5eece6e-48df-8016-8002-ef8dfd3e07c3" class="strokes">
                <g class="stroke-shape">
                  <path rx="0" ry="0" d="M1744.592,2693.569L1741.853,2693.569L1741.853,2696.400C1741.853,2696.713,1741.608,2696.966,1741.306,2696.966C1741.003,2696.966,1740.758,2696.713,1740.758,2696.400L1740.758,2693.569L1738.019,2693.569C1737.716,2693.569,1737.471,2693.315,1737.471,2693.002C1737.471,2692.690,1737.716,2692.436,1738.019,2692.436L1740.758,2692.436L1740.758,2689.605C1740.758,2689.292,1741.003,2689.039,1741.306,2689.039C1741.608,2689.039,1741.853,2689.292,1741.853,2689.605L1741.853,2692.436L1744.592,2692.436C1744.895,2692.436,1745.140,2692.690,1745.140,2693.002C1745.140,2693.315,1744.895,2693.569,1744.592,2693.569ZZ">
                  </path>
                </g>
              </g>
            </g>
            <g id="shape-c5eece6e-48df-8016-8002-ef8dfd3e07c4">
              <g class="fills" id="fills-c5eece6e-48df-8016-8002-ef8dfd3e07c4">
                <path rx="0" ry="0" d="M1741.306,2704.250C1736.903,2704.251,1732.934,2701.510,1731.249,2697.306C1729.564,2693.102,1730.495,2688.263,1733.608,2685.045C1736.721,2681.828,1741.402,2680.865,1745.469,2682.607C1749.536,2684.349,1752.188,2688.452,1752.187,2693.002C1752.179,2699.211,1747.312,2704.243,1741.306,2704.250ZZM1741.306,2682.884C1737.347,2682.883,1733.777,2685.347,1732.261,2689.128C1730.746,2692.908,1731.582,2697.260,1734.381,2700.154C1737.180,2703.048,1741.390,2703.915,1745.048,2702.349C1748.705,2700.784,1751.091,2697.095,1751.091,2693.002C1751.086,2687.418,1746.708,2682.891,1741.306,2682.884ZZ">
                </path>
              </g>
              <g id="strokes-c5eece6e-48df-8016-8002-ef8dfd3e07c4" class="strokes">
                <g class="stroke-shape">
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
    
    
    
    
    
    
    
    
    </>
);


}

export default EditarUsuarios;

