
import stylesActividad from '../css/actividad.module.css';

function Actividad(props){
return(
    <>

    
     
    <div className={`${stylesActividad.tarjetaactividad}`}>
      <div className={`${stylesActividad.izquierda}`}>
        <div className={`${stylesActividad.imagenac}`}>
          <img className={`${stylesActividad.imagenac}`} src={`/${props.img}`} alt="imagen actividad" />
        </div>
        <div className={`${stylesActividad.fecha}`}>
          <p>{props.fecha}</p>
        </div>
      </div>
      <div className={`${stylesActividad.derecha}`}>
        <div className={`${stylesActividad.texto}`}>
          <h2>{props.deporte}</h2>
          <p>
            {props.descripcion}
          </p>
        </div>
        <div className={`${stylesActividad.boton}`}>
          <a className={`${stylesActividad.btn}`} href="https://goo.gl/maps/9nekR7SRYQ8yVAop7">
            <p>Ubicación</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="30"
              version="1.1"
              viewBox="1067.5 1594.5 41 41"
              height="30"
            >
              <g id="shape-d1c45c01-21bf-80bd-8002-e91ef74d71ca" style={{ fill: '#000000' }} className={`${stylesActividad.icon}`} rx="0" ry="0">
                <g id="shape-d1c45c01-21bf-80bd-8002-e91ef74f4831">
                  <g className={`${stylesActividad.fills}`} id="fills-d1c45c01-21bf-80bd-8002-e91ef74f4831">
                    <path
                      rx="0"
                      ry="0"
                      style={{ fill: '#f3f3f3', fillOpacity: 1 }}
                      d="M1101.383,1606.293C1100.647,1604.597,1099.587,1603.062,1098.262,1601.773C1096.932,1600.473,1095.364,1599.442,1093.645,1598.734C1091.855,1597.992,1089.957,1597.617,1088.000,1597.617C1086.043,1597.617,1084.145,1597.992,1082.355,1598.730C1080.625,1599.445,1079.074,1600.469,1077.738,1601.770C1076.414,1603.059,1075.354,1604.594,1074.617,1606.289C1073.855,1608.047,1073.469,1609.914,1073.469,1611.836C1073.469,1614.594,1074.129,1617.340,1075.426,1619.988C1076.469,1622.117,1077.926,1624.191,1079.762,1626.164C1082.898,1629.531,1086.188,1631.590,1087.121,1632.141C1087.386,1632.297,1087.688,1632.379,1087.996,1632.379C1088.301,1632.379,1088.602,1632.301,1088.871,1632.141C1089.805,1631.590,1093.094,1629.531,1096.230,1626.164C1098.066,1624.195,1099.523,1622.117,1100.566,1619.988C1101.871,1617.344,1102.531,1614.602,1102.531,1611.840C1102.531,1609.918,1102.145,1608.051,1101.383,1606.293ZZM1088.000,1629.383C1085.426,1627.746,1076.281,1621.266,1076.281,1611.840C1076.281,1608.797,1077.496,1605.938,1079.703,1603.781C1081.918,1601.621,1084.863,1600.430,1088.000,1600.430C1091.137,1600.430,1094.082,1601.621,1096.297,1603.785C1098.504,1605.938,1099.719,1608.797,1099.719,1611.840C1099.719,1621.266,1090.574,1627.746,1088.000,1629.383ZZM1088.000,1605.273C1084.203,1605.273,1081.125,1608.352,1081.125,1612.148C1081.125,1615.945,1084.203,1619.023,1088.000,1619.023C1091.797,1619.023,1094.875,1615.945,1094.875,1612.148C1094.875,1608.352,1091.797,1605.273,1088.000,1605.273ZZM1091.094,1615.242C1090.274,1616.064,1089.161,1616.525,1088.000,1616.523C1086.832,1616.523,1085.734,1616.066,1084.906,1615.242C1084.084,1614.423,1083.623,1613.309,1083.625,1612.148C1083.625,1610.980,1084.082,1609.883,1084.906,1609.055C1085.734,1608.227,1086.832,1607.773,1088.000,1607.773C1089.168,1607.773,1090.266,1608.227,1091.094,1609.055C1091.922,1609.883,1092.375,1610.980,1092.375,1612.148C1092.375,1613.316,1091.922,1614.414,1091.094,1615.242ZZ"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </a>
          <a className={`${stylesActividad.btn}`} href="formulario">
            <p>Inscribirse</p>
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="30" xmlns="http://www.w3.org/2000/svg" style={{ WebkitPrintColorAdjust: 'exact' }} id="screenshot-33974a92-cec0-8016-8002-e29df2e96217" version="1.1" viewBox="1298.216 1596.608 38.951 40.405" height="30">
              <g id="shape-33974a92-cec0-8016-8002-e29df2e96217" style={{ fill: '#000000' }} className={`${stylesActividad.icon}`} rx="0" ry="0">
                <g id="shape-33974a92-cec0-8016-8002-e29df2eb3a7c">
                  <g className={`${stylesActividad.fills}`} id="fills-33974a92-cec0-8016-8002-e29df2eb3a7c">
                    <path
                      rx="0"
                      ry="0"
                      style={{ fill: '#ffffff', fillOpacity: 1 }}
                      d="M1309.475,1606.472C1309.308,1606.472,1309.171,1606.614,1309.171,1606.788L1309.171,1608.682C1309.171,1608.855,1309.308,1608.997,1309.475,1608.997L1324.082,1608.997C1324.250,1608.997,1324.386,1608.855,1324.386,1608.682L1324.386,1606.788C1324.386,1606.614,1324.250,1606.472,1324.082,1606.472L1309.475,1606.472ZZM1316.474,1612.154L1309.475,1612.154C1309.308,1612.154,1309.171,1612.296,1309.171,1612.470L1309.171,1614.364C1309.171,1614.537,1309.308,1614.679,1309.475,1614.679L1316.474,1614.679C1316.642,1614.679,1316.779,1614.537,1316.779,1614.364L1316.779,1612.470C1316.779,1612.296,1316.642,1612.154,1316.474,1612.154ZZM1314.649,1630.226L1306.128,1630.226L1306.128,1602.447L1327.430,1602.447L1327.430,1615.074C1327.430,1615.248,1327.566,1615.390,1327.734,1615.390L1329.864,1615.390C1330.031,1615.390,1330.168,1615.248,1330.168,1615.074L1330.168,1600.869C1330.168,1600.171,1329.624,1599.606,1328.951,1599.606L1304.607,1599.606C1303.933,1599.606,1303.389,1600.171,1303.389,1600.869L1303.389,1631.804C1303.389,1632.503,1303.933,1633.067,1304.607,1633.067L1314.649,1633.067C1314.816,1633.067,1314.953,1632.925,1314.953,1632.751L1314.953,1630.541C1314.953,1630.368,1314.816,1630.226,1314.649,1630.226ZZM1331.386,1626.754L1325.908,1626.754L1325.908,1625.309C1327.669,1624.765,1328.951,1623.076,1328.951,1621.072C1328.951,1618.629,1327.045,1616.652,1324.691,1616.652C1322.336,1616.652,1320.430,1618.629,1320.430,1621.072C1320.430,1623.072,1321.712,1624.765,1323.474,1625.309L1323.474,1626.754L1317.996,1626.754C1317.661,1626.754,1317.387,1627.038,1317.387,1627.385L1317.387,1633.382C1317.387,1633.730,1317.661,1634.014,1317.996,1634.014L1331.386,1634.014C1331.720,1634.014,1331.994,1633.730,1331.994,1633.382L1331.994,1627.385C1331.994,1627.038,1331.720,1626.754,1331.386,1626.754ZZM1322.789,1621.072C1322.789,1619.983,1323.641,1619.099,1324.691,1619.099C1325.741,1619.099,1326.593,1619.983,1326.593,1621.072C1326.593,1622.161,1325.741,1623.044,1324.691,1623.044C1323.641,1623.044,1322.789,1622.161,1322.789,1621.072ZZM1329.636,1631.567L1319.746,1631.567L1319.746,1629.200L1329.636,1629.200L1329.636,1631.567ZZ"
                    />
                  </g>
                </g>
              </g>
            </svg>







          </a>
        </div>
      </div>
    </div>





    <div className={`${stylesActividad.cuerpom}`}>
      <div className={`${stylesActividad.actividadesam}`}>
        <div className={`${stylesActividad.tarjetaactividadm}`}>
          <div className={`${stylesActividad.titulom}`}>
            <h2>{props.deporte}</h2>
          </div>
          <div className={`${stylesActividad.imagenacm}`}>
            <img className={`${stylesActividad.imagenacm}`} src={`/${props.img}`} alt="imagen actividad" />
          </div>
          <div className={`${stylesActividad.textom}`}>
            <p>
              {props.descripcion}
            </p>
          </div>
          <div className={`${stylesActividad.boton}`}>

            <a className={`${stylesActividad.btn}`} href="https://goo.gl/maps/9nekR7SRYQ8yVAop7">
              <p>Ubicación</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="30"
                version="1.1"
                viewBox="1067.5 1594.5 41 41"
                height="30"
              >
                <g id="shape-d1c45c01-21bf-80bd-8002-e91ef74d71ca" style={{ fill: '#000000' }} className={`${stylesActividad.icon}`} rx="0" ry="0">
                  <g id="shape-d1c45c01-21bf-80bd-8002-e91ef74f4831">
                    <g className={`${stylesActividad.fills}`} id="fills-d1c45c01-21bf-80bd-8002-e91ef74f4831">
                      <path
                        rx="0"
                        ry="0"
                        style={{ fill: '#f3f3f3', fillOpacity: 1 }}
                        d="M1101.383,1606.293C1100.647,1604.597,1099.587,1603.062,1098.262,1601.773C1096.932,1600.473,1095.364,1599.442,1093.645,1598.734C1091.855,1597.992,1089.957,1597.617,1088.000,1597.617C1086.043,1597.617,1084.145,1597.992,1082.355,1598.730C1080.625,1599.445,1079.074,1600.469,1077.738,1601.770C1076.414,1603.059,1075.354,1604.594,1074.617,1606.289C1073.855,1608.047,1073.469,1609.914,1073.469,1611.836C1073.469,1614.594,1074.129,1617.340,1075.426,1619.988C1076.469,1622.117,1077.926,1624.191,1079.762,1626.164C1082.898,1629.531,1086.188,1631.590,1087.121,1632.141C1087.386,1632.297,1087.688,1632.379,1087.996,1632.379C1088.301,1632.379,1088.602,1632.301,1088.871,1632.141C1089.805,1631.590,1093.094,1629.531,1096.230,1626.164C1098.066,1624.195,1099.523,1622.117,1100.566,1619.988C1101.871,1617.344,1102.531,1614.602,1102.531,1611.840C1102.531,1609.918,1102.145,1608.051,1101.383,1606.293ZZM1088.000,1629.383C1085.426,1627.746,1076.281,1621.266,1076.281,1611.840C1076.281,1608.797,1077.496,1605.938,1079.703,1603.781C1081.918,1601.621,1084.863,1600.430,1088.000,1600.430C1091.137,1600.430,1094.082,1601.621,1096.297,1603.785C1098.504,1605.938,1099.719,1608.797,1099.719,1611.840C1099.719,1621.266,1090.574,1627.746,1088.000,1629.383ZZM1088.000,1605.273C1084.203,1605.273,1081.125,1608.352,1081.125,1612.148C1081.125,1615.945,1084.203,1619.023,1088.000,1619.023C1091.797,1619.023,1094.875,1615.945,1094.875,1612.148C1094.875,1608.352,1091.797,1605.273,1088.000,1605.273ZZM1091.094,1615.242C1090.274,1616.064,1089.161,1616.525,1088.000,1616.523C1086.832,1616.523,1085.734,1616.066,1084.906,1615.242C1084.084,1614.423,1083.623,1613.309,1083.625,1612.148C1083.625,1610.980,1084.082,1609.883,1084.906,1609.055C1085.734,1608.227,1086.832,1607.773,1088.000,1607.773C1089.168,1607.773,1090.266,1608.227,1091.094,1609.055C1091.922,1609.883,1092.375,1610.980,1092.375,1612.148C1092.375,1613.316,1091.922,1614.414,1091.094,1615.242ZZ"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
            <a className={`${stylesActividad.btn}`} href="formulario.html">
              <p>Inscribirse</p>
              <svg xmlnsXlink="http://www.w3.org/1999/xlink" fill="none" width="30" xmlns="http://www.w3.org/2000/svg" style={{ WebkitPrintColorAdjust: 'exact' }} id="screenshot-33974a92-cec0-8016-8002-e29df2e96217" version="1.1" viewBox="1298.216 1596.608 38.951 40.405" height="30">
                <g id="shape-33974a92-cec0-8016-8002-e29df2e96217" style={{ fill: '#000000' }} className={`${stylesActividad.icon}`} rx="0" ry="0">
                  <g id="shape-33974a92-cec0-8016-8002-e29df2eb3a7c">
                    <g className={`${stylesActividad.fills}`} id="fills-33974a92-cec0-8016-8002-e29df2eb3a7c">
                      <path
                        rx="0"
                        ry="0"
                        style={{ fill: '#ffffff', fillOpacity: 1 }}
                        d="M1309.475,1606.472C1309.308,1606.472,1309.171,1606.614,1309.171,1606.788L1309.171,1608.682C1309.171,1608.855,1309.308,1608.997,1309.475,1608.997L1324.082,1608.997C1324.250,1608.997,1324.386,1608.855,1324.386,1608.682L1324.386,1606.788C1324.386,1606.614,1324.250,1606.472,1324.082,1606.472L1309.475,1606.472ZZM1316.474,1612.154L1309.475,1612.154C1309.308,1612.154,1309.171,1612.296,1309.171,1612.470L1309.171,1614.364C1309.171,1614.537,1309.308,1614.679,1309.475,1614.679L1316.474,1614.679C1316.642,1614.679,1316.779,1614.537,1316.779,1614.364L1316.779,1612.470C1316.779,1612.296,1316.642,1612.154,1316.474,1612.154ZZM1314.649,1630.226L1306.128,1630.226L1306.128,1602.447L1327.430,1602.447L1327.430,1615.074C1327.430,1615.248,1327.566,1615.390,1327.734,1615.390L1329.864,1615.390C1330.031,1615.390,1330.168,1615.248,1330.168,1615.074L1330.168,1600.869C1330.168,1600.171,1329.624,1599.606,1328.951,1599.606L1304.607,1599.606C1303.933,1599.606,1303.389,1600.171,1303.389,1600.869L1303.389,1631.804C1303.389,1632.503,1303.933,1633.067,1304.607,1633.067L1314.649,1633.067C1314.816,1633.067,1314.953,1632.925,1314.953,1632.751L1314.953,1630.541C1314.953,1630.368,1314.816,1630.226,1314.649,1630.226ZZM1331.386,1626.754L1325.908,1626.754L1325.908,1625.309C1327.669,1624.765,1328.951,1623.076,1328.951,1621.072C1328.951,1618.629,1327.045,1616.652,1324.691,1616.652C1322.336,1616.652,1320.430,1618.629,1320.430,1621.072C1320.430,1623.072,1321.712,1624.765,1323.474,1625.309L1323.474,1626.754L1317.996,1626.754C1317.661,1626.754,1317.387,1627.038,1317.387,1627.385L1317.387,1633.382C1317.387,1633.730,1317.661,1634.014,1317.996,1634.014L1331.386,1634.014C1331.720,1634.014,1331.994,1633.730,1331.994,1633.382L1331.994,1627.385C1331.994,1627.038,1331.720,1626.754,1331.386,1626.754ZZM1322.789,1621.072C1322.789,1619.983,1323.641,1619.099,1324.691,1619.099C1325.741,1619.099,1326.593,1619.983,1326.593,1621.072C1326.593,1622.161,1325.741,1623.044,1324.691,1623.044C1323.641,1623.044,1322.789,1622.161,1322.789,1621.072ZZM1329.636,1631.567L1319.746,1631.567L1319.746,1629.200L1329.636,1629.200L1329.636,1631.567ZZ"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className={`${stylesActividad.fecham}`}>
            <p>{props.fecha}</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Actividad;
