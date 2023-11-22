import stylesVerMasUsuario from "../css/VerMasConsulta.module.css"
const VerMasConsultas = (props) =>{
return(

<>





<div className={`${stylesVerMasUsuario.ver_mas}`}>
      

        <form className={`${stylesVerMasUsuario.form_m}`}>
          <div id="cerrar" className={`${stylesVerMasUsuario.icon_close}`} onClick={() =>{props.cerrar()}}>
            <img src="/cross2.png" alt="cosa" className={`${stylesVerMasUsuario.img} ${stylesVerMasUsuario.close}`}/>
          </div>
          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Nombre:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.nombre}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Email:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.email}</label>
          
          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Telefono:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.telefono}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Asunto:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.asunto}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Mensaje:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.mensaje}</label>



        </form>
      </div>




</>
)

}



export default VerMasConsultas;