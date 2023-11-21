import stylesConsulta from "../css/consultas.module.css";

function Consultas ( props ){


return(
    <>

    <div className={`${stylesConsulta.tabla}`}>
        <div className={`${stylesConsulta.cont_h1}`}><h1 className={`${stylesConsulta.h1}`}>Consultas</h1></div>

        <div className={`${stylesConsulta.atributos}`}>
          <div className={`${stylesConsulta.atributo} ${stylesConsulta.fecha}`}> <h2 className={`${stylesConsulta.h2}`}>NOMBRE</h2></div>
          <div className={`${stylesConsulta.atributo} ${stylesConsulta.nombre}`}> <h2 className={`${stylesConsulta.h2}`}>EMAIL</h2></div>
          <div className={`${stylesConsulta.atributo} ${stylesConsulta.docente}`}> <h2 className={`${stylesConsulta.h2}`}>TELEFONO</h2></div>
          <div className={`${stylesConsulta.atributo} ${stylesConsulta.lugar}`}> <h2 className={`${stylesConsulta.h2}`}>ASUNTO</h2></div>
          <div className={`${stylesConsulta.atributo} ${stylesConsulta.localidad}`}> <h2 className={`${stylesConsulta.h2}`}>MENSAJE</h2></div>
          <div className={`${stylesConsulta.atributo} ${stylesConsulta.horario}`}> <h2 className={`${stylesConsulta.h2}`}>VER MAS               </h2></div>

        </div>



      </div>


    </>
)
}


export default Consultas;