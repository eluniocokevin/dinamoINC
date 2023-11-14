import { popup } from "leaflet";
import stylesHeader from "../css/header.module.css";
import { useRef, useState} from "react";


function LoginUsuarios(props) {

const [ErrorRegistro, setErrorRegistro] = useState(false);

const [ErrorMsg, setErrorMsg] = useState(false);
const [InputHide, setInputHide] = useState(true);
const [showPopup, setShowPopup] = useState(false);
const [showLogin, setShowLogin] = useState(false);

const refCedula = useRef(null);
const refContrasena = useRef(null);

const toggleLogin = () => {
  setShowLogin((prevShowLogin) => !prevShowLogin);
};



const closeLogin = ()=>{
setShowLogin((prevShowLogin) => !prevShowLogin);
}



function Popup({ message, onClose }) {
  return (
    
    <div className={stylesHeader.popup}>
      <p>{message}</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
     
    
   
  );
}


const url = "http://localhost/archivos2/usuarios/inscribirUsuario.php";
const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    cedula: refCedula.current.value,
    contrasena: refContrasena.current.value,
    ActividadId: props.ActividadId,
    
  };


  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const json = await res.json();
      if (json.success) {
        setShowPopup(true);
        setErrorRegistro(false);
      } else {
        console.log(json.error);
        setErrorMsg(json.error);
        setErrorRegistro(true);
      }
    } else {
      console.log("Error en la solicitud");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};





return(
    <>
{/* Pop-up */}
{showPopup && (
        <Popup message= {`Has sido registrado en la actividad ${props.Nombre}`} onClose={() => setShowPopup(false)} />
      )}

<div id="cerrar"     onClick={  () => {closeLogin(); setShowPopup(false)} }  className={`${stylesHeader.icon_close}`}>
          <img src="/cross2.png" alt="cosa" className={`${stylesHeader.img} ${stylesHeader.close}`}/>
        </div>

    <div className={`${stylesHeader.cont_logo}`}>
        <div className={`${stylesHeader.cont_img}`}>
          <img className={`${stylesHeader.img}`} src="/sorianodeptofertil.png" alt="icono soriano" />
        </div>

      </div>
      <h2 className={`${stylesHeader.h2}`}>¡Ingrese para Inscribirse!</h2>
      <form className={`${stylesHeader.form}`}>

        <div className={`${stylesHeader.input1}`} data-error={`${ErrorRegistro}`}>
          <input className={`${stylesHeader.input}`} type="text" ref={refCedula} required onChange={( ) => setErrorRegistro(false)}/>
          <label className={`${stylesHeader.lbl_nombre}`}>
            <span className={`${stylesHeader.text_nomb}`}>Cedula</span>
          </label>
          <div className={`${stylesHeader.cont_ico}`}><img className={`${stylesHeader.ico1}`} src="/user.svg" alt="" /></div>
        </div>

        <div className={`${stylesHeader.input2}`} data-error={`${ErrorRegistro}`}>
          <input className={`${stylesHeader.input}`} type={InputHide ? 'password': 'text'}  ref={refContrasena} required onChange={( ) => setErrorRegistro(false)}/>
          <label className={`${stylesHeader.lbl_nombre2}`}>
            <span className={`${stylesHeader.text_nomb2}`}>Contraseña</span>
          </label>
          <div className={`${stylesHeader.cont_ico}`}  onClick={( ) => setInputHide(!InputHide)} ><img className={`${stylesHeader.ico2}`} src={InputHide ? '/hide.svg' : '/view.svg'} alt="" /></div>
        </div>

        <span> {ErrorRegistro && ErrorMsg} </span>
        
        
        <div className={`${stylesHeader.cont_btn_login}`}>
          <button className={`${stylesHeader.boton_login}`} type="submit"  onClick={handleSubmit} >
            Ingresar
          </button>
        </div>
      </form>
    
    </>
)

}

export default LoginUsuarios;