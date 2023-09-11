import styles from "../css/footer.module.css";
function Footer() {
  return (
    <>
      <div className={`${styles.footer}`}>
        <div className={`${styles.dinamo}`}>
          <h4>Dynamo INC</h4>
          <p>Natanael Fernandez</p>
          <p>Javier Hernandez</p>
          <p>Ignacio Martinez</p>
          <p>Kevin Correa</p>
          <p>Diego Lopez</p>
        </div>
        <div className={`${styles.logo}`}>
          <div className={`${styles.img}`}>
            <img src="src/assets/logo_escudo.svg" alt="" />
          </div>
          <div className={`${styles.redes}`}>
          <a href="https://www.youtube.com/channel/UCJy8LxMOrPTqkbpPciC-unQ/featured" className={`${styles.social_icone} ${styles.youtube}`} >
                    <img src="src/assets/youtubew.svg" />
                </a>
                <a href="https://www.facebook.com/intendenciasoriano" className={`${styles.social_icone} ${styles.facebook}`}>
                    <img src="src/assets/facebookw.svg"/>
                </a>
                <a href="https://www.instagram.com/sorianofertil/" className={`${styles.social_icone} ${styles.instagrame}`}>
                    <img src="src/assets/instagramw.svg"/>
                </a>
                <a href="https://twitter.com/sorianofertil?lang=es" className={`${styles.social_icone} ${styles.twitter}`}>
                    <img src="src/assets/twitterw.svg"/>
                </a>
          </div>
        </div>
        <div className={`${styles.contacto}`}>
        <h3>CONTACTO </h3>
        <h3>Mercedes-Soriano, Eusebio Giménez 643.</h3> 
            <h3>intendencia@soriano.gub.uy</h3>
            <h3>(+598) 4532 2201</h3>
            <h3>8:00 a 14:00 horas</h3>
          </div>

      </div>
      <div className={`${styles.copyright}`}>
        <span>Copyright © 2023 Dynamo INC </span>
      </div>
    </>
  );
}
export default Footer;
