import "../css/footer.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="dinamo">
          <h4>Dynamo INC</h4>
          <p>Natanael Fernandez</p>
          <p>Javier Hernandez</p>
          <p>Ignacio Martinez</p>
          <p>Kevin Correa</p>
          <p>Diego Lopez</p>
        </div>
        <div className="logo">
          <div className="img">
            <img src="src/assets/logo_escudo.svg" alt="" />
          </div>
          <div className="redes">
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
        <div className="contacto">
        <h3>CONTACTO </h3>
            <h3>Mercedes-Soriano, Eusebio Giménez 643.</h3> 
            <h3>intendencia@soriano.gub.uy</h3>
            <h3>(+598) 4532 2201</h3>
            <h3>8:00 a 14:00 horas</h3>
          </div>
       
      </div>
      <div className="copyright">
        <span>Copyright © 2023 Dynamo INC </span>
      </div>
    </>
  );
}
export default Footer;
