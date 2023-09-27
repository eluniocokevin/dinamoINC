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
    <div className="fullheader">
      <div className="header">
      <div className={`login-funcionarios ${showLogin ? "show" : ""}`}>
        <LoginFuncionarios/>
      </div>
      <div className={`localidades ${showlocation ? "show" : ""}`}>
        <a  className="a-button" onClick={handleButton}><i className="bi bi-x"></i></a>
       
      </div>

        <div className="div-img">
        <a href="/"><img src="/logo_escudo.svg" alt="logo de mi web" /></a> 
        </div>


        
        <div className="menu">
            <a href="#" className="zoom" id="menuButton"><img src="/list.svg" /></a>
            <div className="dropdown-content" id="dropdownContent">
              <a href="#" onClick={toggleLogin}>Login <img  className="menuimg1" src="/funcionariomenu.png" alt="imagen funcionarios" /></a>
              <a href="preguntas" >Preguntas <img className="menuimg2" src="/preguntas.png" alt="imagen localidad" /></a>
            </div>
          </div>

          <script src="script.js"></script>
        
        <div className="funcionario" onClick={toggleLogin}>
           <a className="zoom"> <img src="/funcionario.svg" alt="imagen funcionarios" /></a>
        </div>
        <div className="localidad" onClick={toggleLocation}>
           <a href="preguntas" className="zoom"> <img src="/preguntas2.png" alt="imagen localidad" /></a>
        </div>
      </div>
      
      <div className="barra-redes"></div>
      <div className="div-redes">
      <a href="https://www.youtube.com/channel/UCJy8LxMOrPTqkbpPciC-unQ/featured" className="social-icon youtube" >
            <img src="/youtube.svg" />
        </a>
        <a href="https://www.facebook.com/intendenciasoriano" className="social-icon facebook">
            <img src="/facebook.svg"/>
        </a>
        <a href="https://www.instagram.com/sorianofertil/" className="social-icon instagram">
            <img src="/instagram.svg"/>
        </a>
        <a href="https://twitter.com/sorianofertil?lang=es" className="social-icon twitter">
            <img src="/twitter.svg"/>
        </a>
      </div>
      </div>
    </>
  );
}
export default Header;
