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
          <div className="cont-img">
            <img src="src/assets/logo_escudo.svg" alt="" />
          </div>
          <div className="redes">
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
        </div>
        <div className="contacto">
          <div className="cosas">
            <h3>CONTACTO Mercedes-Soriano, Eusebio Giménez 643.</h3>
            <h3>intendencia@soriano.gub.uy</h3>
            <h3>(+598) 4532 2201 8:00 a 14:00 horas</h3>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>Copyright © 2023 Dynamo INC </span>
      </div>
    </>
  );
}
export default Footer;
