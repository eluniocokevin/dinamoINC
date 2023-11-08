import stylesIconos from "../css/iconos.module.css";


function Iconos (props) {    

return(
<>

    <div className={`${stylesIconos.deporte}`}>
        <div className={`${stylesIconos.cont}`}>
        <p>{props.deporte}</p>
        <img  className={`${stylesIconos.img}`} src={`/${props.img}`} alt=""  />
        </div>
    </div>

</>
);

}

export default Iconos;