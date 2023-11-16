import stylesVerMasUsuario from "../css/VerMasDeporte.module.css"
const VerMasDeporte = (props) =>{
return(

<>





<div className={`${stylesVerMasUsuario.ver_mas}`}>
      

        <form className={`${stylesVerMasUsuario.form_m}`}>
          <div id="cerrar" className={`${stylesVerMasUsuario.icon_close}`} onClick={() =>{props.cerrar()}}>
            <img src="/cross2.png" alt="cosa" className={`${stylesVerMasUsuario.img} ${stylesVerMasUsuario.close}`}/>
          </div>
          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Nombre:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.nombre}</label>
          
          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Apellido:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.apellido}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Fecha:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.fecha}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Localidad:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.localidad}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">ubicacion:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.ubicacion}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Anual/Temporal:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.option1}</label>

          <label className={`${stylesVerMasUsuario.label_m}`}>imagen:</label>
          <img className={`${stylesVerMasUsuario.img_m}`} src={`data:image/jpeg;base64,${props.imagen_base64}`}></img>

        </form>
      </div>




</>
)

}



export default VerMasDeporte