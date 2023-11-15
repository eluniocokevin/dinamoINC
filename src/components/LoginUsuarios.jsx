import { popup } from "leaflet";
import stylesLoginUsuario from "../css/LoginUsuarios.module.css";
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
    
    <div className={stylesLoginUsuario.popup}>
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

       

    <div className={`${stylesLoginUsuario.cont_logo}`}>
        <div className={`${stylesLoginUsuario.cont_img}`}>
          <img className={`${stylesLoginUsuario.img}`} src="/sorianodeptofertil.png" alt="icono soriano" />
        </div>

      </div>
      <h2 className={`${stylesLoginUsuario.h2}`}>¡Ingrese para Inscribirse!</h2>
      <form className={`${stylesLoginUsuario.form}`}>

        <div className={`${stylesLoginUsuario.input1}`} data-error={`${ErrorRegistro}`}>
          <input className={`${stylesLoginUsuario.input}`} type="text" ref={refCedula} required onChange={( ) => setErrorRegistro(false)}/>
          <label className={`${stylesLoginUsuario.lbl_nombre}`}>
            <span className={`${stylesLoginUsuario.text_nomb}`}>Cedula</span>
          </label>
          <div className={`${stylesLoginUsuario.cont_ico}`}><img className={`${stylesLoginUsuario.ico1}`} src="/user.svg" alt="" /></div>
        </div>

        <div className={`${stylesLoginUsuario.input2}`} data-error={`${ErrorRegistro}`}>
          <input className={`${stylesLoginUsuario.input}`} type={InputHide ? 'password': 'text'}  ref={refContrasena} required onChange={( ) => setErrorRegistro(false)}/>
          <label className={`${stylesLoginUsuario.lbl_nombre2}`}>
            <span className={`${stylesLoginUsuario.text_nomb2}`}>Contraseña</span>
          </label>
          <div className={`${stylesLoginUsuario.cont_ico}`}  onClick={( ) => setInputHide(!InputHide)} ><img className={`${stylesLoginUsuario.ico2}`} src={InputHide ? '/hide.svg' : '/view.svg'} alt="" /></div>
        </div>

        <span> {ErrorRegistro && ErrorMsg} </span>
        
        
        <div className={`${stylesLoginUsuario.cont_btn_login}`}>
          <button className={`${stylesLoginUsuario.boton_login}`} type="submit"  onClick={handleSubmit} >
            Ingresar
          </button>
        </div>

      {/* Pop-up */}
      {showPopup && (
              <Popup message= { <p className={`${stylesLoginUsuario.p}`}>Has sido registrado en la actividad {`${props.Nombre}`}! </p> } onClose={() => setShowPopup(false)} className={`${stylesLoginUsuario.popup}`} />
            )}
            
      </form>
    
    </>
)

}

export default LoginUsuarios;