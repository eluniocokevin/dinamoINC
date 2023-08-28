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
        <a className="a-button" onClick={handleButton}><i class="bi bi-x"></i></a>
        <Localidades/>
      </div>

        <div className="div-img">
        <a href="https://www.soriano.gub.uy/"><img src="src/assets/logo_escudo.svg" alt="logo de mi web" /></a> 
        </div>


        
        <div className="menu">
            <a href="#" className="zoom" id="menuButton"><img src="src/assets/list.svg" /></a>
            <div className="dropdown-content" id="dropdownContent">
              <a href="#">Terrestres</a>
              <a href="#">Acuaticas</a>
            </div>
          </div>

          <script src="script.js"></script>
        
        <div class="funcionario" onClick={toggleLogin}>
           <a class="zoom"> <img src="src/assets/funcionario.svg" alt="imagen funcionarios" /></a>
        </div>
        <div class="localidad" onClick={toggleLocation}>
           <a class="zoom"> <img src="src/assets/LOCALIDADES.png" alt="imagen localidad" /></a>
        </div>
      </div>
      
      <div className="barra-redes"></div>
      <div className="div-redes">
      <a href="https://www.youtube.com/channel/UCJy8LxMOrPTqkbpPciC-unQ/featured" class="social-icon youtube" >
            <img src="src/assets/youtube.svg" />
        </a>
        <a href="https://www.facebook.com/intendenciasoriano" class="social-icon facebook">
            <img src="src/assets/facebook.svg"/>
        </a>
        <a href="https://www.instagram.com/sorianofertil/" class="social-icon instagram">
            <img src="src/assets/instagram.svg"/>
        </a>
        <a href="https://twitter.com/sorianofertil?lang=es" class="social-icon twitter">
            <img src="src/assets/twitter.svg"/>
        </a>
      </div>
      </div>
    </>
  );
}
export default Header;
