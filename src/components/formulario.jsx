import stylesform from "../css/formulario.module.css";
import Header from "./header";
import Footer from "./footer";
import React, { useState } from 'react';

function Formulario () {

        const [nombre, setNombre] = useState('');
        const [apellido, setApellido] = useState('');
        const [ci, setCi] = useState('');
        const [nacimiento, setNacimiento] = useState('');
        const [sexo, setSexo] = useState('');
        const [cedulafoto, setCedulafoto] = useState(null); 
        const [carnetfoto, setCarnetfoto] = useState(null);
        const [domicilio, setDomicilio] = useState('');
        const [celular, setCelular] = useState('');
        const [asistencia, setAsistencia] = useState('');
        const [asistencianombre, setAsistencianombre] = useState('');
        const [diabetes, setDiabetes] = useState(false);
        const [hipertension, setHipertension] = useState(false);
        const [asma, setAsma] = useState(false);
        const [alergias, setAlergias] = useState(false);
        const [fracturas, setFracturas] = useState(false);
        const [otros, setOtros] = useState('');
        const [lentes, setLentes] = useState(false);
        const [tipolentes, setTipolentes] = useState('');
        const [nombretutor, setNombretutor] = useState('');
        const [roltutor, setRoltutor] = useState('');
        const [lugar, setLugar] = useState('');
        const [citutor, setCitutor] = useState('');
      
        const handleFormSubmit = async (e) => {
            e.preventDefault();
          
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('apellido', apellido);
            formData.append('ci', ci);
            formData.append('nacimiento', nacimiento);
            formData.append('sexo', sexo);
            formData.append('cedulafoto', cedulafoto);
            formData.append('carnetfoto', carnetfoto);
            formData.append('domicilio', domicilio);
            formData.append('celular', celular);
            formData.append('asistencia', asistencia);
            formData.append('asistencianombre', asistencianombre);
            formData.append('diabetes', diabetes);
            formData.append('hipertension', hipertension);
            formData.append('asma', asma);
            formData.append('alergias', alergias);
            formData.append('fracturas', fracturas);
            formData.append('otros', otros);
            formData.append('lentes', lentes);
            formData.append('tipolentes', tipolentes);
            formData.append('nombretutor', nombretutor);
            formData.append('roltutor', roltutor);
            formData.append('lugar', lugar);
            formData.append('citutor', citutor);
          
            try {
              const response = await fetch('http://localhost/archivos2/usuarios/subirUsuario.php', {
                method: 'POST',
                body: formData,
              });
          
              if (response.ok) {
                console.log('Noticia creada con éxito');
          
                // Reset form fields after successful submission
                setNombre('');
                setApellido('');
                setCi('');
                setNacimiento('');
                setSexo('');
                setCedulafoto(null);
                setCarnetfoto(null);
                setDomicilio('');
                setCelular('');
                setAsistencia('');
                setAsistencianombre('');
                setDiabetes(false);
                setHipertension(false);
                setAsma(false);
                setAlergias(false);
                setFracturas(false);
                setOtros('');
                setLentes(false);
                setTipolentes('');
                setNombretutor('');
                setRoltutor('');
                setLugar('');
                setCitutor('');
          
    
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





return(
    <>
<Header/>

        <div className={`${stylesform.formulario}`}>
        <div className={`${stylesform.titulo}`}>
            <h1 className={`${stylesform.form_h1}`}>Formulario de actividad</h1>
            <img className={`${stylesform.formuimg}`} src="/formu.png" alt="formulario icono" />
        </div>
        <form className={`${stylesform.form}`} id="form" onSubmit={handleFormSubmit} >

            <div className={`${stylesform.personales}`}>
            
<label className={`${stylesform.form_label}`} htmlFor="nombre">Ingrese su nombre</label>
<input className={`${stylesform.form_input}`} type="text" name="nombre" id="nombre" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

<label className={`${stylesform.form_label}`} htmlFor="apellido">Ingrese apellido</label>
<input className={`${stylesform.form_input}`} type="text" name="apellido" id="apellido" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} required />

<label className={`${stylesform.form_label}`} htmlFor="fecha_nacimiento">Ingrese su fecha de nacimiento</label>
<input className={`${stylesform.form_input}`} type="date" min="1930-12-12" max="2020-01-01" name="fecha_nacimiento" id="fecha_nacimiento" value={nacimiento} onChange={(e) => setNacimiento(e.target.value)} required />

<label className={`${stylesform.form_label}`} htmlFor="cedula">Ingrese su cédula</label>
<input className={`${stylesform.form_input}`} type="number" max="99999999" name="cedula" id="cedula" placeholder="12345678" value={ci} onChange={(e) => setCi(e.target.value)} required />

<div className={`${stylesform.sexo}`}>
  <label className={`${stylesform.form_label}`} htmlFor="sexo">Sexo</label>
  <input className={`${stylesform.form_input}`} type="radio" name="sexo" id="sexoM" value="M" checked={sexo === 'M'} onChange={() => setSexo('M')} required />M
  <input className={`${stylesform.form_input}`} type="radio" name="sexo" id="sexoF" value="F" checked={sexo === 'F'} onChange={() => setSexo('F')} required />F
</div>

<label className={`${stylesform.form_label} ${stylesform.custom_file_upload}`} htmlFor="cedulaImg"> Cargar imagen de cédula
  <img className={`${stylesform.img}`} src="/public/file-earmark.svg" alt="" />
</label>
<input className={`${stylesform.hidden}`} type="file" accept="image/*" name="cedula" id="cedulaImg" onChange={(e) => setCedulafoto(e.target.files[0])} required />

<label className={`${stylesform.form_label} ${stylesform.custom_file_upload}`} htmlFor="carnet_salud">Cargar imagen de carnet de salud
  <img className={`${stylesform.img}`} src="/public/file-earmark.svg" alt="" />
</label>
<input className={`${stylesform.hidden}`} type="file" accept="image/*" name="carnet_salud" id="carnet_salud" onChange={(e) => setCarnetfoto(e.target.files[0])} required />

<label className={`${stylesform.form_label}`} htmlFor="domicilio">Ingrese domicilio</label>
<input className={`${stylesform.form_input}`} type="text" name="domicilio" id="domicilio" placeholder="Domicilio" value={domicilio} onChange={(e) => setDomicilio(e.target.value)} required />

<label className={`${stylesform.form_label}`} htmlFor="celular">Ingrese su celular</label>
<input className={`${stylesform.form_input}`} type="number" max="99999999" name="celular" id="celular" placeholder="12345678" value={celular} onChange={(e) => setCelular(e.target.value)} required />

            </div>

            <div className={`${stylesform.medico}`}>
  <div className={`${stylesform.medico1}`}>
    <label className={`${stylesform.form_label} ${stylesform.asis_medica}`} htmlFor="">Asistencia Médica</label>

    <div className={`${stylesform.radio_si}`}>
      <label className={`${stylesform.form_label} ${stylesform.label_si}`}>Si</label>
      <input className={`${stylesform.form_input} ${stylesform.input_si}`} type="radio" name="asistencia" id="asistenciaSi" value="si" onChange={(e) => setAsistencia(e.target.value)} required />
    </div>

    <div className={`${stylesform.radio_no}`}>
      <label className={`${stylesform.form_label} ${stylesform.label_no}`}>No</label>
      <input className={`${stylesform.form_input} ${stylesform.input_no}`} type="radio" name="asistencia" id="asistenciaNo" value="no" onChange={(e) => setAsistencia(e.target.value)} required />
    </div>

    <label className={`${stylesform.form_label}`} htmlFor="asistencianombre">Cual:</label>
    <input className={`${stylesform.form_input}`} type="text" name="asistencianombre" id="asistencianombre" placeholder="Asistencia" value={asistencianombre} onChange={(e) => setAsistencianombre(e.target.value)} required />
  </div>

  <label className={`${stylesform.form_label}`} htmlFor="enfermedades">Enfermedades que tiene o ha tenido</label>
  <div className={`${stylesform.enfermedades}`}>
    <div className={`${stylesform.diabetes}`}>
      <p className={`${stylesform.p}`}> Diabetes</p>
      <input className={`${stylesform.form_input}`} type="checkbox" name="diabetes" id="enfermedadDiabetes" checked={diabetes} onChange={() => setDiabetes(!diabetes)} value="diabetes" />
    </div>
    <div className={`${stylesform.hipertension}`}>
      <p className={`${stylesform.p}`}> Hipertensión</p>
      <input className={`${stylesform.form_input}`} type="checkbox" name="hipertension" id="enfermedadHipertension" checked={hipertension} onChange={() => setHipertension(!hipertension)} value="hipertension" />
    </div>
    <div className={`${stylesform.asma}`}>
      <p className={`${stylesform.p}`}> Asma</p>
      <input className={`${stylesform.form_input}`} type="checkbox" name="asma" id="enfermedadAsma" checked={asma} onChange={() => setAsma(!asma)} value="asma" />
    </div>
    <div className={`${stylesform.alergias}`}>
      <p className={`${stylesform.p}`}> Alergias</p>
      <input className={`${stylesform.form_input}`} type="checkbox" name="alergias" id="enfermedadAlergias" checked={alergias} onChange={() => setAlergias(!alergias)} value="alergias" />
    </div>
    <div className={`${stylesform.fracturas}`}>
      <p className={`${stylesform.p}`}> Fracturas</p>
      <input className={`${stylesform.form_input}`} type="checkbox" name="fractura" id="fractura" checked={fracturas} onChange={() => setFracturas(!fracturas)} value="fractura" />
    </div>
    <div className={`${stylesform.otros}`}>
      <p className={`${stylesform.p}`}> Otros: </p>
      <input className={`${stylesform.otros_input}`} type="text" name="otros" id="enfermedadOtros" value={otros} onChange={(e) => setOtros(e.target.value)} />
    </div>
  </div>

  <div className={`${stylesform.lentes}`}>
    <div className={`${stylesform.usa_lentes}`}>
      <p className={`${stylesform.p}`}>Usa lentes:</p>
      <input className={`${stylesform.form_input}`} type="checkbox" name="lentes" id="lentes" checked={lentes} onChange={() => setLentes(!lentes)} value="lentes" />
    </div>
    <div className={`${stylesform.tipo_lentes}`}>
      <p className={`${stylesform.p}`}>De qué tipo?</p>
      <input className={`${stylesform.input_tipo_lentes}`} type="text" name="tipo_lentes" id="tipo_lentes" value={tipolentes} onChange={(e) => setTipolentes(e.target.value)} />
    </div>
  </div>

  <div className={`${stylesform.permiso}`}>
    <div className={`${stylesform.enunciado_permiso}`}>
      <p>Yo <input type="text" id="nombretutor" value={nombretutor} onChange={(e) => setNombretutor(e.target.value)} /> en mi carácter de <input type="text" id="roltutor" value={roltutor} onChange={(e) => setRoltutor(e.target.value)} /> autorizo a mi hijo/a a practicar actividades deportivas y recreativas promovidas por la División Deportes y Recreación de la intendencia de Soriano, deslindando a esta repartición municipal de todo tipo de responsabilidad relacionada con enfermedades o lesiones o accidentes o pérdida de valores materiales (vestimenta, calzado, dinero, etc.) que mi hijo/a pudiera sufrir realizando actividades en este marco de trabajo.</p>
    </div>
  </div>

  <div className={`${stylesform.firmas}`}>
    <label className={`${stylesform.form_label}`} htmlFor="lugar">Ingrese Lugar</label>
    <input className={`${stylesform.form_input}`} type="text" name="lugar" id="lugar" placeholder="Lugar" value={lugar} onChange={(e) => setLugar(e.target.value)} />
  </div>

  <label className={`${stylesform.form_label}`} htmlFor="ci_tutor">CI Tutor</label>
  <input className={`${stylesform.form_input}`} type="text" name="ci_tutor" id="ci_tutor" placeholder="CI tutor" value={citutor} onChange={(e) => setCitutor(e.target.value)} />
</div>


            <div className={`${stylesform.form_btns}`}>
                <button type="reset" className={`${stylesform.form_button}`}>
                    Cancelar

                    <svg className={`${stylesform.form_btn_cancel}`} xmlnsXlink="http://www.w3.org/1999/xlink" width="25" xmlns="http://www.w3.org/2000/svg"  id="screenshot-d1c45c01-21bf-80bd-8002-e936b42db4b9" version="1.1" viewBox="601.652 1532 30 30" height="25">
                        <g id="shape-d1c45c01-21bf-80bd-8002-e936b42db4b9">
                            <g className="fills" id="fills-d1c45c01-21bf-80bd-8002-e936b42db4b9">
                                <path rx="0" ry="0"  d="M616.652,1532.000C608.369,1532.000,601.652,1538.717,601.652,1547.000C601.652,1555.283,608.369,1562.000,616.652,1562.000C624.936,1562.000,631.652,1555.283,631.652,1547.000C631.652,1538.717,624.936,1532.000,616.652,1532.000ZZM622.190,1552.699L619.981,1552.689L616.652,1548.721L613.328,1552.685L611.114,1552.695C610.967,1552.695,610.847,1552.578,610.847,1552.427C610.847,1552.364,610.870,1552.304,610.910,1552.253L615.266,1547.064L610.910,1541.877C610.870,1541.828,610.847,1541.767,610.847,1541.703C610.847,1541.556,610.967,1541.435,611.114,1541.435L613.328,1541.445L616.652,1545.413L619.977,1541.449L622.187,1541.439C622.334,1541.439,622.455,1541.556,622.455,1541.706C622.455,1541.770,622.431,1541.830,622.391,1541.881L618.042,1547.067L622.395,1552.257C622.435,1552.307,622.458,1552.367,622.458,1552.431C622.458,1552.578,622.338,1552.699,622.190,1552.699ZZ">
                                </path>
                            </g>
                        </g>
                    </svg>

                </button>

                <button className={`${stylesform.form_button}`} name="save_multiple_checkbox">
                    Finalizar <svg className={`${stylesform.form_btn_check}`} xmlnsXlink="http://www.w3.org/1999/xlink" width="25" xmlns="http://www.w3.org/2000/svg"  id="screenshot-d1c45c01-21bf-80bd-8002-e936479fafb6" version="1.1" viewBox="948.238 1532 30 30" height="25">
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

    <Footer/>

    </>
);
};

export default Formulario;