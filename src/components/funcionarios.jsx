import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import "../css/funcionarios.css";
import CrearNoticia from "./crearnoticia";
import CrearEvento from "./crearEvento";
import CrearDeporte from "./crearDeporte";
function Funcionarios() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userRol = searchParams.get("userRol");
  if (userRol !== "administrador") {
    return (
      <>
        <h1 className="acces_N" style={{ textAlign: "center" }}>
          Acceso Denegado
        </h1>
      </>
    );
  }
  const [mostrarCrearNoticia, setMostrarCrearNoticia] = useState(false);
  const [mostrarCrearEvento, setMostrarCrearEvento] = useState(false);
  const [mostrarCrearDeporte, setMostrarCrearDeporte] = useState(false);
    const handleNoticia = () => {
      setMostrarCrearEvento(false)
      setMostrarCrearDeporte(false);
      setMostrarCrearNoticia(!mostrarCrearNoticia);
    }
    const handleEvento=()=>{
        setMostrarCrearNoticia(false);
        setMostrarCrearDeporte(false);
        setMostrarCrearEvento(!mostrarCrearEvento);
    }
    const handleDeporte=()=>{
        setMostrarCrearNoticia(false);
        setMostrarCrearEvento(false)
        setMostrarCrearDeporte(!mostrarCrearDeporte);
    }

  return (
    <>
      <div className="conteiner">
        <div className="side">
          <a onClick={handleEvento}>eventos</a>
          <a onClick={handleDeporte}>deportes</a>
          <a onClick={handleNoticia}>noticias</a>
        </div>
        <div id="crear">
        {mostrarCrearNoticia && <CrearNoticia />}
        {mostrarCrearEvento && <CrearEvento/>}
        {mostrarCrearDeporte && <CrearDeporte/>}
        </div>
      </div>
    </>
  );
}


export default Funcionarios;
