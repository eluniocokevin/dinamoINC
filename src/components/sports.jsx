import "../css/sports.css";
function Sports() {
  return (
    <>
      <div className="Sports">
        <div className="target-sports">
          <div className="cont-img">
            <img src="src/assets/terrestre.jpg" alt="" />
          </div>
          <div className="text">
            <span>Deportes terrestres</span>
            <a href="/terrestres">Ver más</a>
          </div>
        </div>

        <div className="target-sports">
          <div className="cont-img">
            <img src="src/assets/remo.jpg" alt="" />
          </div>
          <div className="text">
            <span>Deportes acuaticos</span>
            <a href="acuaticos">Ver más</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sports;
