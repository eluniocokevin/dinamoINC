import stylesConsulta from "../css/consultas.module.css";

function Consulta ( props ){
return(
<>

<div className={`${stylesConsulta.tabla}`}>
        <div className={`${stylesConsulta.actividades}`} id={props.id}>
          <div className={`${stylesConsulta.actividad}`}> <h2 className={`${stylesConsulta.h2}`}>{props.nombre}</h2></div>
          <div className={`${stylesConsulta.actividad}`}> <h2 className={`${stylesConsulta.h2}`}>{props.email}</h2></div>
          <div className={`${stylesConsulta.actividad}`}> <h2 className={`${stylesConsulta.h2}`}>{props.telefono}</h2></div>
          <div className={`${stylesConsulta.actividad}`}> <h2 className={`${stylesConsulta.h2}`}>{props.asunto}</h2></div>
          <div className={`${stylesConsulta.actividad}`}> <h2 className={`${stylesConsulta.h2}`}>{props.mensaje}</h2></div>
          <div className={`${stylesConsulta.actividad}`}> <h2 className={`${stylesConsulta.h2}`} onClick={() =>{props.modal()}}>Ver mas...</h2></div>

        </div>

    </div>




</>
)
}

export default Consulta;