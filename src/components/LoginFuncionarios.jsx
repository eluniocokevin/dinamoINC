import "../css/LoginFuncionarios.css";
import { useRef } from "react";

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
        <img src="src/assets/sorianodeptofertil.png" alt="" />
      </div>
      <h2>¡Ingrese como funcionario!</h2>
      <form>
        <input ref={refCedula} type="text" placeholder="Cedula" />
        <input ref={refContrasena} type="password" placeholder="Contraseña" />
        <button onClick={handleSubmit} type="submit">
          Ingresar
        </button>
      </form>
    </>
  );
}

export default LoginFuncionarios;
