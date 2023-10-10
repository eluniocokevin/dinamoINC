import stylesHeader from "../css/header.module.css";
import { useRef} from "react";

function LoginFuncionarios() {
  
  const refCedula = useRef(null);
  const refContrasena = useRef(null);

  const url = "http://localhost/archivos/registrar.php";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      cedula: refCedula.current.value,
      contrasena: refContrasena.current.value,
      
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
          const userRol = json.role;
          if (userRol === "administrador") {
            window.location.href = `http://localhost:5173/funcionarios?userRol=${userRol}`;
          } else {
            console.log("no eres administrador");
          }
        } else {
          console.log(json.error);
        }
      } else {
        console.log("Error en la solicitud");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
 
  return (
    <>

      <div className={`${stylesHeader.cont_logo}`}>
        <div className={`${stylesHeader.cont_img}`}>
          <img className={`${stylesHeader.img}`} src="/sorianodeptofertil.png" alt="icono soriano" />
        </div>

      </div>
      <h2 className={`${stylesHeader.h2}`}>¡Ingrese como funcionario!</h2>
      <form className={`${stylesHeader.form}`}>

        <div className={`${stylesHeader.input1}`}>
          <input className={`${stylesHeader.input}`} type="text" ref={refCedula} required />
          <label className={`${stylesHeader.lbl_nombre}`}>
            <span className={`${stylesHeader.text_nomb}`}>Cedula</span>
          </label>
          <div className={`${stylesHeader.cont_ico}`}><img className={`${stylesHeader.ico1}`} src="/user.svg" alt="" /></div>
        </div>

        <div className={`${stylesHeader.input2}`}>
          <input className={`${stylesHeader.input}`} type="text" ref={refContrasena} required/>
          <label className={`${stylesHeader.lbl_nombre2}`}>
            <span className={`${stylesHeader.text_nomb2}`}>Contraseña</span>
          </label>
          <div className={`${stylesHeader.cont_ico}`}><img className={`${stylesHeader.ico2}`} src="/code.svg" alt="" /></div>
        </div>




        {/* <input className="input" ref={refCedula} type="text" placeholder="Cedula" />
        <input className="input" ref={refContrasena} type="password" placeholder="Contraseña" /> */}
        
        
        <div className={`${stylesHeader.cont_btn_login}`}>
          <button className={`${stylesHeader.boton_login}`} onClick={handleSubmit} type="submit">
            Ingresar
          </button>
        </div>
      </form>

    </>
  );
}

export default LoginFuncionarios;
