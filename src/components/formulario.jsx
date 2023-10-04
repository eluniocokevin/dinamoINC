import stylesform from "../css/formulario.module.css";
import Header from "./header";
import Footer from "./footer";

function Formulario () {
return(
    <>


        <div className={`${stylesform.formulario}`}>
            <h1 className={`${stylesform.form_h1}`}>Formulario de actividad</h1>

        <form className={`${stylesform.form}`} action="code.php" method="POST">
            <label className={`${stylesform.form_label}`}for="">Ingrese su cédula</label>
            <input className={`${stylesform.form_input}`} type="number" max="99999999" name="cedula" id="cedula" placeholder="12345678" required />

            <label className={`${stylesform.form_label}`}for="">Ingrese su nombre</label>
            <input className={`${stylesform.form_input}`} type="text" name="nombre" id="nombre" placeholder="Nombre" required />

            <label className={`${stylesform.form_label}`}for="">Ingrese apellido</label>
            <input className={`${stylesform.form_input}`} type="text" name="apellido" id="apellido" placeholder="Apellido" required />

            <label className={`${stylesform.form_label}`}for="">Ingrese su celular</label>
            <input className={`${stylesform.form_input}`} type="number" max="99999999" name="celular" id="celular" placeholder="12345678" required />

            <label className={`${stylesform.form_label}`}for="">Ingrese su fecha de nacimiento</label>
            <input className={`${stylesform.form_input}`} type="date" min="1930-12-12" max="2020-01-01" name="fecha_nacimiento" id="fecha_nacimiento" required />









            <div className={`${stylesform.form_btns}`}>
                <button type="reset" className={`${stylesform.form_button}`}>
                    Cancelar

                    <svg className={`${stylesform.form_btn_cancel}`} xmlns:xlink="http://www.w3.org/1999/xlink" width="25" xmlns="http://www.w3.org/2000/svg"  id="screenshot-d1c45c01-21bf-80bd-8002-e936b42db4b9" version="1.1" viewBox="601.652 1532 30 30" height="25">
                        <g id="shape-d1c45c01-21bf-80bd-8002-e936b42db4b9">
                            <g className="fills" id="fills-d1c45c01-21bf-80bd-8002-e936b42db4b9">
                                <path rx="0" ry="0"  d="M616.652,1532.000C608.369,1532.000,601.652,1538.717,601.652,1547.000C601.652,1555.283,608.369,1562.000,616.652,1562.000C624.936,1562.000,631.652,1555.283,631.652,1547.000C631.652,1538.717,624.936,1532.000,616.652,1532.000ZZM622.190,1552.699L619.981,1552.689L616.652,1548.721L613.328,1552.685L611.114,1552.695C610.967,1552.695,610.847,1552.578,610.847,1552.427C610.847,1552.364,610.870,1552.304,610.910,1552.253L615.266,1547.064L610.910,1541.877C610.870,1541.828,610.847,1541.767,610.847,1541.703C610.847,1541.556,610.967,1541.435,611.114,1541.435L613.328,1541.445L616.652,1545.413L619.977,1541.449L622.187,1541.439C622.334,1541.439,622.455,1541.556,622.455,1541.706C622.455,1541.770,622.431,1541.830,622.391,1541.881L618.042,1547.067L622.395,1552.257C622.435,1552.307,622.458,1552.367,622.458,1552.431C622.458,1552.578,622.338,1552.699,622.190,1552.699ZZ">
                                </path>
                            </g>
                        </g>
                    </svg>

                </button>

                <button className={`${stylesform.form_button}`} name="save_multiple_checkbox">
                    Finalizar <svg className={`${stylesform.form_btn_check}`} xmlns:xlink="http://www.w3.org/1999/xlink" width="25" xmlns="http://www.w3.org/2000/svg"  id="screenshot-d1c45c01-21bf-80bd-8002-e936479fafb6" version="1.1" viewBox="948.238 1532 30 30" height="25">
                        <g id="shape-d1c45c01-21bf-80bd-8002-e936479fafb6">
                            <g className="fills" id="fills-d1c45c01-21bf-80bd-8002-e936479fafb6">
                                <path rx="0" ry="0" d="M963.238,1532.000C954.954,1532.000,948.238,1538.717,948.238,1547.000C948.238,1555.283,954.954,1562.000,963.238,1562.000C971.521,1562.000,978.238,1555.283,978.238,1547.000C978.238,1538.717,971.521,1532.000,963.238,1532.000ZL963.238,1532.000ZM969.717,1542.102L962.665,1551.878C962.465,1552.157,962.143,1552.323,961.800,1552.323C961.456,1552.323,961.134,1552.157,960.934,1551.878L956.759,1546.093C956.632,1545.915,956.759,1545.667,956.977,1545.667L958.547,1545.667C958.888,1545.667,959.213,1545.831,959.414,1546.113L961.798,1549.421L967.061,1542.122C967.262,1541.844,967.584,1541.676,967.929,1541.676L969.499,1541.676C969.717,1541.676,969.844,1541.924,969.717,1542.102ZL969.717,1542.102Z">
                                </path>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
        </form>
    </div>



    </>
);
};

export default Formulario;