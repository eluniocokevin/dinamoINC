import stylesHeader from "../css/header.module.css";
import LoginFuncionarios from "./LoginFuncionarios";
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

const closeLogin = ()=>{
  setShowLogin((prevShowLogin) => !prevShowLogin);
}



const algo = document.getElementById('cerrar');

  return (
    
      <>
    <div className={`${stylesHeader.fullheader}`}>
      <div className={`${stylesHeader.header}`}>

      

      <div className={`${stylesHeader.login_funcionarios} ${showLogin ? `${stylesHeader.show}` : ``}`} id="algo">
        <div id="cerrar" onClick={closeLogin} className={`${stylesHeader.icon_close}`}>
          <img src="/cross2.png" alt="cosa" className={`${stylesHeader.img} ${stylesHeader.close}`}/>
        </div>
        <LoginFuncionarios/>
      </div>


      <div className={`${stylesHeader.localidades} ${stylesHeader.showlocation ? `${stylesHeader.show}` : ``}`}>
      </div>

        <div className={`${stylesHeader.div_img}`}>
          <a className={`${stylesHeader.a}`} href="/"><img className={`${stylesHeader.img}`} src="/logo_escudo.svg" alt="logo de mi web" /></a> 
        </div>


        
        <div className={`${stylesHeader.menu}`}>
            <a className={`${stylesHeader.a} ${stylesHeader.zoom}`} href="#"  id="menuButton"><img className={`${stylesHeader.img}`} src="/list.svg" /></a>
            <div className={`${stylesHeader.dropdown_content}`} id="dropdownContent">
              <a className={`${stylesHeader.a}`} href="#" onClick={toggleLogin}>Login <img  className={`${stylesHeader.menuimg1} ${stylesHeader.img}`} src="/funcionariomenu.png" alt="imagen funcionarios" /></a>
              <a className={`${stylesHeader.a}`} href="preguntas" >Preguntas <img className={`${stylesHeader.menuimg2} ${stylesHeader.img}`} src="/preguntas.png" alt="imagen localidad" /></a>
            </div>
          </div>

          <script src="script.js"></script>
        
        <div className={`${stylesHeader.funcionario}`} onClick={toggleLogin}>
           <a className={`${stylesHeader.a} ${stylesHeader.zoom}`}> <img className={`${stylesHeader.img}`} src="/funcionario.svg" alt="imagen funcionarios" /></a>
        </div>
        <div className={`${stylesHeader.localidad}`} onClick={toggleLocation}>
           <a href="preguntas" className={`${stylesHeader.a} ${stylesHeader.zoom}`}> <img className={`${stylesHeader.img}`} src="/preguntas2.png" alt="imagen localidad" /></a>
        </div>
      </div>
      
      <div className={`${stylesHeader.barra_redes}`}></div>
        <div className={`${stylesHeader.div_redes}`}>
          <a className={`${stylesHeader.a} ${stylesHeader.social_icon} ${stylesHeader.youtube}`} href="https://www.youtube.com/channel/UCJy8LxMOrPTqkbpPciC-unQ/featured">
              <img  src="/youtube.svg" />
          </a>
          <a href="https://www.facebook.com/intendenciasoriano" className={`${stylesHeader.a} ${stylesHeader.social_icon} ${stylesHeader.facebook}`}>
              <img className={`${stylesHeader.img}`} src="/facebook.svg"/>
          </a>
          <a href="https://www.instagram.com/sorianofertil/" className={`${stylesHeader.a} ${stylesHeader.social_icon} ${stylesHeader.instagram}`}>
              <img className={`${stylesHeader.img}`} src="/instagram.svg"/>
          </a>
          <a href="https://twitter.com/sorianofertil?lang=es" className={`${stylesHeader.a} ${stylesHeader.social_icon} ${stylesHeader.twitter}`}>
              <img className={`${stylesHeader.img}`} src="/twitter.svg"/>
          </a>
        </div>
      </div>
    </>
  );
}
export default Header;
