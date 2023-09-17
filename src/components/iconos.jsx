import styles from "../css/iconos.module.css";


function Iconos (props) {    

return(
<>

    <div className={`${styles.deporte}`}>
        <div className={`${styles.cont}`}>
        <p>{props.deporte}</p>
        <img className={`${styles.img}`} src={`/${props.img}`} alt="" />
        </div>
    </div>

</>
);

}

export default Iconos;