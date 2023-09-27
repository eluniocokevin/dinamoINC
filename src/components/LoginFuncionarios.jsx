import "../css/LoginFuncionarios.css";
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
      <div className="img">
        <img src="/sorianodeptofertil.png" alt="icono soriano" />
      </div>
      <span className="icon-close">
        <img src="/cross2.png" className="close" alt="cerrar"/>
    </span>
      <h2>¡Ingrese como funcionario!</h2>
      <form className="form">

        <div className="input1">
          <input className="input" type="text" ref={refCedula} required/>
          <label class="lbl-nombre">
            <span class="text-nomb">Cedula</span>
          </label>
          <span className="cont_ico"><img className="ico1" src="/user.svg" alt="" /></span>
        </div>

        <div className="input2">
          <input className="input" type="text" ref={refCedula} required/>
          <label class="lbl-nombre2">
            <span class="text-nomb2">Contraseña</span>
          </label>
          <span className="cont_ico"><img className="ico2" src="/code.svg" alt="" /></span>
        </div>




        {/* <input className="input" ref={refCedula} type="text" placeholder="Cedula" />
        <input className="input" ref={refContrasena} type="password" placeholder="Contraseña" /> */}
        
        
        <div className="cont_btn_login">
          <button className="boton_login" onClick={handleSubmit} type="submit">
            Ingresar
          </button>
        </div>
      </form>

    </>
  );
}

export default LoginFuncionarios;
