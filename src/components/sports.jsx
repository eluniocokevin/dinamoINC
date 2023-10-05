import stylesSports from "../css/sports.module.css";
function Sports() {
  return (
    <>
      <div className={`${stylesSports.Sports}`}>
        <div className={`${stylesSports.target_sports} ${stylesSports.target1}`}>
          <div className={`${stylesSports.cont_img}`}>
            <img className={`${stylesSports.img}`} src="/futbola.webp" alt="" />
          </div>
          <div className={`${stylesSports.text}`}>
            <span className={`${stylesSports.span}`}>Deportes Anuales</span>
            <a className={`${stylesSports.a}`} href="terrestres">Ver más</a>
          </div>
        </div>
        
        <div className={`${stylesSports.target_sports} ${stylesSports.target2}`}>
          <div className={`${stylesSports.cont_img}`}>
            <img className={`${stylesSports.img}`} src="/remo3.jpg" alt="" />
          </div>
          <div className={`${stylesSports.text}`}>
            <span className={`${stylesSports.span}`}>Actividades Temporales</span>
            <a className={`${stylesSports.a}`} href="acuaticos">Ver más</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sports;
