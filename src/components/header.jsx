import "../css/header.css";
import LoginFuncionarios from "./LoginFuncionarios";
import Localidades from "./localidades";
import { useState } from "react";
function Header() {
  const [showLogin, setShowLogin] = useState(false);
  const [showlocation, setLocation] = useState(false);
  const toggleLocation=()=>{
    setLocation((prevshowLocation)=>!prevshowLocation);
  }
  const toggleLogin = () => {
    setShowLogin((prevShowLogin) => !prevShowLogin);
  };

const handleButton=()=>{
  setLocation(false);
}

  return (
    <>
      <div className="header">
      <div className={`login-funcionarios ${showLogin ? "show" : ""}`}>
        <LoginFuncionarios/>
      </div>
      <div className={`localidades ${showlocation ? "show" : ""}`}>
        <a className="a-button" onClick={handleButton}><i class="bi bi-x"></i></a>
        <Localidades/>
      </div>

        <div className="div-img">
          <img src="src/assets/logo_escudo.svg" alt="logo de mi web" />
        </div>
        <div className="funcionario" onClick={toggleLogin}>
          <img src="src/assets/funcionario.svg" alt="imagen funcionarios" />
        </div>
        <div className="localidad"  onClick={toggleLocation}>
          <img src="src/assets/LOCALIDADES.png" alt="imagen localidad" />
        </div>
      </div>
      
      <div className="barra-redes"></div>
      <div className="div-redes">
        <a href="https://www.youtube.com/channel/UCJy8LxMOrPTqkbpPciC-unQ/featured">
          <i className="bi bi-youtube"></i>
        </a>
        <a href="https://www.facebook.com/intendenciasoriano">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/sorianofertil/">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="">
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </>
  );
}
export default Header;
