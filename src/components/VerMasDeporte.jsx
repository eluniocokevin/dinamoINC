import stylesCrearDeporte from "../css/VerMasDeporte.module.css"
const VerMasDeporte = (props) =>{
return(

<>


<div className={`${stylesCrearDeporte.ver_mas}`}>
        <form className={`${stylesCrearDeporte.form_m}`}>


          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Nombre del deporte</label>
          <label htmlFor="">{props.deporte}</label>
          
          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Descripción</label>
          <label htmlFor="">{props.descripcion}</label>

          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Fecha</label>
          <label htmlFor="">{props.fecha}</label>

          <label className={`${stylesCrearDeporte.label_m}`} htmlFor="">Localidad</label>
          <label htmlFor="">{props.localidad}</label>

          <label className={`${stylesCrearDeporte.label_m}`}>imagen</label>
          <img src={`data:image/jpeg;base64,${props.imagen_base64}`}></img>

        </form>
      </div>




</>
)

}



export default VerMasDeporte