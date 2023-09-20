import stylesCrearDeporte from "../css/crearDeporte.module.css";


function CrearDeporte(){
   
    return(<>


    <div className={`${stylesCrearDeporte.tabla}`}>
        <div className={`${stylesCrearDeporte.h1}`}><h1 >Deportes</h1></div>

        <div className={`${stylesCrearDeporte.atributos}`}>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.fecha}`}> <h2>FECHA</h2></div>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.nombre}`}> <h2>NOMBRE</h2></div>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.docente}`}> <h2>DOCENTE</h2></div>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.lugar}`}> <h2>LUGAR</h2></div>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.horario}`}> <h2>HOARIO</h2></div>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.localidad}`}> <h2>LOCALIDAD</h2></div>
            <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.agregar}`}>
                <div className={`${stylesCrearDeporte.btn_add}`}>
              <div className={`${stylesCrearDeporte.add}`}>
                <svg className={`${stylesCrearDeporte.svg_add}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0" version="1.1" viewBox="2352 447.621 30 31.558">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c39b0"  rx="0" ry="0">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
                      <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3c9636">
                        <path rx="0" ry="0"  d="M2371.533,464.197L2367.758,464.197L2367.758,468.168C2367.758,468.607,2367.420,468.962,2367.003,468.962C2366.586,468.962,2366.248,468.607,2366.248,468.168L2366.248,464.197L2362.473,464.197C2362.056,464.197,2361.718,463.842,2361.718,463.403C2361.718,462.964,2362.056,462.609,2362.473,462.609L2366.248,462.609L2366.248,458.638C2366.248,458.199,2366.586,457.844,2367.003,457.844C2367.420,457.844,2367.758,458.199,2367.758,458.638L2367.758,462.609L2371.533,462.609C2371.950,462.609,2372.288,462.964,2372.288,463.403C2372.288,463.842,2371.950,464.197,2371.533,464.197ZZ">
                        </path>
                      </g>
                    </g>
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
                      <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87cc3cdd5f">
                        <path rx="0" ry="0"  d="M2367.003,479.179C2360.936,479.180,2355.465,475.336,2353.143,469.440C2350.820,463.543,2352.103,456.756,2356.394,452.243C2360.684,447.729,2367.136,446.380,2372.742,448.823C2378.347,451.266,2382.001,457.021,2382.000,463.403C2381.990,472.111,2375.282,479.168,2367.003,479.179ZZM2367.003,449.211C2361.547,449.210,2356.627,452.666,2354.538,457.968C2352.449,463.271,2353.602,469.375,2357.460,473.434C2361.317,477.493,2367.120,478.708,2372.161,476.513C2377.202,474.317,2380.489,469.143,2380.490,463.403C2380.483,455.570,2374.449,449.222,2367.003,449.211ZZ">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg>
            </div>

          </div> </div>
        </div>

        <div className={`${stylesCrearDeporte.actividades}`}>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>1/6/23</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Futbol</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Diego Lugano</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Plaza Deporte</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>14hs a 16hs</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Mercedes</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}>
                <div className={`${stylesCrearDeporte.btns}`}> 
                    <div className={`${stylesCrearDeporte.btn_edit}`}>
                        <svg className={`${stylesCrearDeporte.edit}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42"  rx="0" ry="0">
                        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535"  rx="0" ry="0">
                            <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                            <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                                <path rx="0" ry="0"  d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                                </path>
                            </g>
                            </g>
                            <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                            <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                                <path rx="0" ry="0"  d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                                </path>
                            </g>
                            </g>
                        </g>
                        </g>
                    </svg>
                </div>
            <div className={`${stylesCrearDeporte.btn_del}`}>
                <svg className={`${stylesCrearDeporte.del}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                      <path rx="0" ry="0"  d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
                      </path>
                    </g>
                  </g>
                </svg>
              </div>  
            </div>
        </div>
        </div>

            <div className={`${stylesCrearDeporte.actividades}`}>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>30/5/23</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Natación</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Michel Phelps</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Piscina Municipal</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>6hs a 10hs</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}> <h2>Risso</h2></div>
            <div className={`${stylesCrearDeporte.actividad}`}>
            <div className={`${stylesCrearDeporte.btns}`}> 
                <div className={`${stylesCrearDeporte.btn_edit}`}>
                    <svg className={`${stylesCrearDeporte.edit}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="40" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42" version="1.1" viewBox="2341.048 584.263 17.9 18.739" height="40">
                    <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c8ae42"  rx="0" ry="0">
                      <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c90535"  rx="0" ry="0">
                        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                          <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780c9d58f">
                            <path rx="0" ry="0"  d="M2341.548,603.003L2358.448,603.003C2358.724,603.003,2358.948,602.768,2358.948,602.478C2358.948,602.188,2358.724,601.952,2358.448,601.952L2341.548,601.952C2341.272,601.952,2341.048,602.188,2341.048,602.478C2341.048,602.768,2341.272,603.003,2341.548,603.003ZZ">
                            </path>
                          </g>
                        </g>
                        <g id="shape-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                          <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef8780cadb2e">
                            <path rx="0" ry="0"  d="M2347.710,599.056C2348.132,598.932,2348.518,598.697,2348.830,598.373L2358.370,588.354C2359.050,587.637,2359.050,586.477,2358.370,585.760L2357.430,584.783C2356.739,584.090,2355.651,584.090,2354.960,584.783L2345.420,594.792C2345.111,595.118,2344.890,595.524,2344.780,595.968L2344.040,598.867C2343.969,599.136,2344.041,599.426,2344.230,599.623C2344.372,599.769,2344.562,599.852,2344.760,599.854ZM2348.120,597.628C2347.936,597.825,2347.704,597.966,2347.450,598.037L2346.480,598.310L2345.480,597.260L2345.740,596.241C2345.810,595.975,2345.944,595.733,2346.130,595.538L2346.510,595.149L2348.500,597.239ZM2349.210,596.493L2347.220,594.403L2353.950,587.335L2355.940,589.425ZM2357.660,587.619L2356.650,588.680L2354.660,586.590L2355.670,585.519C2355.810,585.370,2356.001,585.287,2356.200,585.287C2356.399,585.287,2356.590,585.370,2356.730,585.519L2357.660,586.506C2357.950,586.814,2357.950,587.310,2357.660,587.619ZZ">
                            </path>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              <div className={`${stylesCrearDeporte.btn_del}`}>
                <svg className={`${stylesCrearDeporte.del}`} xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" width="17.901" xmlns="http://www.w3.org/2000/svg"  id="screenshot-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3" version="1.1" viewBox="2381.054 585.184 17.901 16.865" height="16.865">
                  <g id="shape-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                    <g className={`${stylesCrearDeporte.fills}`} id="fills-ef9f8d7b-7ae6-8023-8002-ef87828ab5a3">
                      <path rx="0" ry="0"  d="M2398.454,600.997L2391.444,600.997L2398.064,594.034C2398.622,593.454,2398.935,592.663,2398.934,591.839C2398.935,591.027,2398.621,590.249,2398.064,589.686L2394.644,586.073C2393.499,584.884,2391.654,584.888,2390.514,586.084L2381.934,595.086C2380.801,596.291,2380.801,598.229,2381.934,599.434L2383.414,600.999L2381.554,600.999C2381.278,600.999,2381.054,601.234,2381.054,601.524C2381.054,601.814,2381.278,602.049,2381.554,602.049L2398.454,602.049C2398.731,602.049,2398.955,601.814,2398.955,601.523C2398.955,601.232,2398.731,600.997,2398.454,600.997ZZM2391.214,586.819C2391.974,586.041,2393.184,586.041,2393.944,586.819L2397.364,590.431C2397.730,590.803,2397.936,591.315,2397.934,591.849C2397.934,592.389,2397.729,592.907,2397.364,593.288L2391.724,599.211L2385.574,592.742ZM2390.024,600.997L2384.824,600.997L2382.644,598.686C2381.897,597.896,2381.897,596.620,2382.644,595.830L2384.874,593.488L2391.024,599.947Z">
                      </path>
                    </g>
                  </g>
                </svg>
              </div>  
          </div></div>
        </div>

    </div>


    </>);
}
export default CrearDeporte;