import stylesCrearDeporte from "../css/VerMasDeporte.module.css"
const VerMasDeporte = (props) =>{
return(

<>





<div className={`${stylesCrearDeporte.ver_mas}`}>
      

        <form className={`${stylesCrearDeporte.form_m}`}>
          <div id="cerrar" className={`${stylesCrearDeporte.icon_close}`} onClick={() =>{props.cerrar()}}>
            <img src="/cross2.png" alt="cosa" className={`${stylesCrearDeporte.img} ${stylesCrearDeporte.close}`}/>
          </div>
          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Nombre del deporte:</label>
          <label htmlFor="" className={`${stylesCrearDeporte.label}`}>{props.deporte}</label>
          
          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Descripción:</label>
          <label htmlFor="" className={`${stylesCrearDeporte.label}`}>{props.descripcion}</label>

          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Fecha:</label>
          <label htmlFor="" className={`${stylesCrearDeporte.label}`}>{props.fecha}</label>

          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Localidad:</label>
          <label htmlFor="" className={`${stylesCrearDeporte.label}`}>{props.localidad}</label>

          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">ubicacion:</label>
          <label htmlFor="" className={`${stylesCrearDeporte.label}`}>{props.ubicacion}</label>

          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Anual/Temporal:</label>
          <label htmlFor="" className={`${stylesCrearDeporte.label}`}>{props.option1}</label>

          <label className={`${stylesCrearDeporte.label_m}`}>imagen:</label>
          <img className={`${stylesCrearDeporte.img_m}`} src={`data:image/jpeg;base64,${props.imagen_base64}`}></img>

        </form>
      </div>




</>
)

}



export default VerMasDeporte