import "../css/sports.css";
function Sports() {
  return (
    <>
      <div className="Sports">
        <div className="target-sports">
          <div className="cont-img">
            <img src="src/assets/futbola.jpg" alt="" />
          </div>
          <div className="text">
            <span>Deportes Anuales</span>
            <a href="terrestres">Ver más</a>
          </div>
        </div>

        <div className="target-sports">
          <div className="cont-img">
            <img src="src/assets/remo.jpg" alt="" />
          </div>
          <div className="text">
            <span>Actividades Temporales</span>
            <a href="acuaticos">Ver más</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sports;
