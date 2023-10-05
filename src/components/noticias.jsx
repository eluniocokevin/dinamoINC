import stylesNoticias from "../css/noticias.module.css";
function Noticias() {
  return (
    <>
      <div className={`${stylesNoticias.conteiner_noticias}`}>
        <div className={`${stylesNoticias.target_noticias}`}>
          <div className={`${stylesNoticias.cont_img}`}>
            <img className={`${stylesNoticias.img}`} src="/noticia1.jpg" alt="" />
          </div>
          <div className={`${stylesNoticias.type}`}><h6 className={`${stylesNoticias.h6}`}>Remo</h6></div>
          <div className={`${stylesNoticias.info}`}>
            <div className={`${stylesNoticias.text}`}>
              <h3 className={`${stylesNoticias.h3}`}>Se inagura el centro de alto rendimiento del Club De Remeros Mercedes</h3>
              <p className={`${stylesNoticias.p}`}>
              El  Club de Remeros Mercedes inauguró la obra de su Centro Deportivo Integrado  un amplio 
              edificio junto al río Negro que pretende convertirse  en un centro de alto
               rendimiento no solamente para deportistas de esa institución, sino también de la región.
              </p>
            </div>
          </div>
          <span className={`${stylesNoticias.span}`}>30/5/2024</span>
        </div>
        <div className={`${stylesNoticias.target_noticias}`}>
          <div className={`${stylesNoticias.cont_img}`}>
            <img className={`${stylesNoticias.img}`} src="/yoga.jpg" alt="" />
          </div>
          <div className={`${stylesNoticias.type}`}><h6 className={`${stylesNoticias.h6}`}>Yoga</h6></div>
          <div className={`${stylesNoticias.info}`}>
            <div className={`${stylesNoticias.text}`}>
              <h3 className={`${stylesNoticias.h3}`}>Encuentro de Yoga: un espacio para la conexión y la participación</h3>
              <p className={`${stylesNoticias.p}`}>
              En el marco del Día Internacional del Yoga, se concretó una linda instancia 
              con más de 50 personas en Sociedad Italiana de Mercedes. Impulsamos permanentemente hábitos saludables.
              </p>
            </div>
          </div>
          <span className={`${stylesNoticias.span}`}>28/6/2023</span>
        </div>

        <div className={`${stylesNoticias.target_noticias}`}>
          <div className={`${stylesNoticias.cont_img}`}>
            <img className={`${stylesNoticias.img}`} src="/corre.jpeg" alt="" />
          </div>
          <div className={`${stylesNoticias.type}`}><h6 className={`${stylesNoticias.h6}`}>Atletismo</h6></div>
          <div className={`${stylesNoticias.info}`}>
            <div className={`${stylesNoticias.text}`}>
              <h3 className={`${stylesNoticias.h3}`}>Última fecha de las 8 de Soriano en Cardona</h3>
              <p className={`${stylesNoticias.p}`}>
              Un gran cierre para un competición que recorrió en sus diversas etapas distintos puntos del departamento,
               impulsando el ánimo deportivo de las personas que participaron activamente de la misma.
              </p>
            </div>
          </div>
          <span className={`${stylesNoticias.span}`}>24/6/2023</span>
        </div>

        <div className={`${stylesNoticias.target_noticias}`}>
          <div className={`${stylesNoticias.cont_img}`}>
            <img className={`${stylesNoticias.img}`} src="/SKATE.jpeg" alt="" />
          </div>
          <div className={`${stylesNoticias.type}`}><h6 className={`${stylesNoticias.h6}`}>Skate</h6></div>
          <div className={`${stylesNoticias.info}`}>
            <div className={`${stylesNoticias.text}`}>
              <h3 className={`${stylesNoticias.h3}`}>Pateando la pista: inauguramos Skate Park Mercedes</h3>
              <p className={`${stylesNoticias.p}`}>
              Una destacada e innovadora obra con incidencia deportiva y recreativa que ha significado una importante inversión
               impulsada por la Intendencia. Un espacio renovado para disfrutar y preservar.
              </p>
            </div>
          </div>
          <span className={`${stylesNoticias.span}`}>30/5/2023</span>
        </div>
        <div className={`${stylesNoticias.target_noticias}`}>
          <div className={`${stylesNoticias.cont_img}`}>
            <img className={`${stylesNoticias.img}`} src="/futbolfem.jpg" alt="" />
          </div>
          <div className={`${stylesNoticias.type}`}><h6 className={`${stylesNoticias.h6}`}>Futbol</h6></div>
          <div className={`${stylesNoticias.info}`}>
            <div className={`${stylesNoticias.text}`}>
              <h3 className={`${stylesNoticias.h3}`}>Partido amistoso del plantel femenino U2030</h3>
              <p className={`${stylesNoticias.p}`}>
              Las integrantes del Proyecto U2030, se enfrentaron amistosamente con su similares de Laureles, 
              en la ciudad de Fray Bentos. Una instancia que promueve la aptitud deportiva y la confraternidad.
              </p>
            </div>
          </div>
          <span className={`${stylesNoticias.span}`}>02/4/2024</span>
        </div>
        <div className={`${stylesNoticias.target_noticias}`}>
          <div className={`${stylesNoticias.cont_img}`}>
            <img className={`${stylesNoticias.img}`} src="/skateestreno.webp" alt="" />
          </div>
          <div className={`${stylesNoticias.type}`}><h6 className={`${stylesNoticias.h6}`}>Skate</h6></div>
          <div className={`${stylesNoticias.info}`}>
            <div className={`${stylesNoticias.text}`}>
              <h3 className={`${stylesNoticias.h3}`}>Se inaugura Skate Park Mercedes</h3>
              <p className={`${stylesNoticias.p}`}>
              La obra será finalmente inaugurada el próximo domingo 23 de julio, a la hora 11 en Manzana 19. 
              En esa ocasión, habrá diversas demostraciones y un cierre final con bandas en vivo.
              </p>
            </div>
          </div>
          <span className={`${stylesNoticias.span}`}>30/5/2024</span>
        </div>











      </div>
    </>
  );
}
export default Noticias;
