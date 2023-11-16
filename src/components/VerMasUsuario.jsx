import stylesVerMasUsuario from "../css/VerMasDeporte.module.css"
const VerMasDeporte = (props) =>{
return(

<>





<div className={`${stylesVerMasUsuario.ver_mas}`}>
      

        <form className={`${stylesVerMasUsuario.form_m}`}>
          <div id="cerrar" className={`${stylesVerMasUsuario.icon_close}`} onClick={() =>{props.cerrar()}}>
            <img src="/cross2.png" alt="cosa" className={`${stylesVerMasUsuario.img} ${stylesVerMasUsuario.close}`}/>
          </div>
          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Ci:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.ci}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Nombre:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.nombre}</label>
          
          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Apellido:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.apellido}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Nacimiento:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.nacimiento}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Celular:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.celular}</label>



          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Nombre asistencia:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.asistencianombre}</label>


<div className={`${stylesVerMasUsuario.enfermedades}`}>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Asistencia:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.asistencia}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Diabetes:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.diabetes}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Hipertension:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.hipertension}</label>

     
</div>
       
<div className={`${stylesVerMasUsuario.enfermedades2}`}>  

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Asma:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.asma}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Alergias:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.alergias}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Fracturas:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.fracturas}</label>
       
</div>

 <div className={`${stylesVerMasUsuario.enfermedades3}`}>  

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Lentes:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.lentes}</label>
 </div>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Otros:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.otros}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Tipo de lentes:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.tipoLentes}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Lugar:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.lugar}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Fecha del registro:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.fechaUsuario}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Cedula Tutor:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.ciTutor}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Nombre de Tutor:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.nombreTutor}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Rol del Tutor:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.rolTutor}</label>

          <label className={`${stylesVerMasUsuario.label_m}`} htmlFor="">Deporte que realiza:</label>
          <label htmlFor="" className={`${stylesVerMasUsuario.label}`}>{props.deporteId} </label>

          <label className={`${stylesVerMasUsuario.label_m}`}>imagen:</label>
          <img className={`${stylesVerMasUsuario.img_m}`} src={`data:image/jpeg;base64,${props.imagen_base64}`}></img>

        </form>
      </div>




</>
)

}



export default VerMasDeporte