import stylesFooter from "../css/footer.module.css";
function Footer() {
  return (
    <>
      <div className={`${stylesFooter.footer}`}>
        <div className={`${stylesFooter.dinamo}`}>
          <h4>Dynamo INC</h4>
          <p>Natanael Fernandez</p>
          <p>Javier Hernandez</p>
          <p>Ignacio Martinez</p>
          <p>Kevin Correa</p>
          <p>Diego Lopez</p>
        </div>
        <div className={`${stylesFooter.logo}`}>
          <div className={`${stylesFooter.img}`}>
            <img src="/logo_escudo.svg" alt="" />
          </div>
          <div className={`${stylesFooter.redes}`}>
          <a href="https://www.youtube.com/channel/UCJy8LxMOrPTqkbpPciC-unQ/featured" className={`${stylesFooter.social_icone} ${stylesFooter.youtube}`} >
                    <img src="/youtubew.svg" />
                </a>
                <a href="https://www.facebook.com/intendenciasoriano" className={`${stylesFooter.social_icone} ${stylesFooter.facebook}`}>
                    <img src="/facebookw.svg"/>
                </a>
                <a href="https://www.instagram.com/sorianofertil/" className={`${stylesFooter.social_icone} ${stylesFooter.instagrame}`}>
                    <img src="/instagramw.svg"/>
                </a>
                <a href="https://twitter.com/sorianofertil?lang=es" className={`${stylesFooter.social_icone} ${stylesFooter.twitter}`}>
                    <img src="/twitterw.svg"/>
                </a>
          </div>
        </div>
        <div className={`${stylesFooter.contacto}`}>
        <h3>CONTACTO </h3>
        <h3>Mercedes-Soriano, Eusebio Giménez 643.</h3> 
            <h3>intendencia@soriano.gub.uy</h3>
            <h3>(+598) 4532 2201</h3>
            <h3>8:00 a 14:00 horas</h3>
          </div>

      </div>
      <div className={`${stylesFooter.copyright}`}>
        <span>Copyright © 2023 Dynamo INC </span>
      </div>
    </>
  );
}
export default Footer;
