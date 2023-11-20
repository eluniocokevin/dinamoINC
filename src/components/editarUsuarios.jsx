import stylesCrearDeporte from "../css/editarUsuarios.module.css";
import React, { useState,useEffect } from 'react';



function EditarUsuario (){


  const abrirDeporte = () => {
    const form = document.getElementById('agregar');
    form.style.transform = 'translateX(0)';
  }
  

  const cerrarDeporte = () => {
    const form = document.getElementById('agregar');
    form.style.transform = 'translateX(-2000px)';
  }
  
  


return(
    <>
    <div className={`${stylesCrearDeporte.tabla}`}>
        <div className={`${stylesCrearDeporte.cont_h1}`}><h1 className={`${stylesCrearDeporte.h1}`}>Usuarios</h1></div>

        <div className={`${stylesCrearDeporte.atributos}`}>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.fecha}`}> <h2 className={`${stylesCrearDeporte.h2}`}>CI</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.nombre}`}> <h2 className={`${stylesCrearDeporte.h2}`}>NOMBRE</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.docente}`}> <h2 className={`${stylesCrearDeporte.h2}`}>APELLIDO</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.horario}`}> <h2 className={`${stylesCrearDeporte.h2}`}>CELULAR</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.horario}`}> <h2 className={`${stylesCrearDeporte.h2}`}>NACIMIENTO</h2></div>    
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.lugar}`}> <h2 className={`${stylesCrearDeporte.h2}`}>VER MAS</h2></div>
          <div className={`${stylesCrearDeporte.atributo} ${stylesCrearDeporte.agregar}`}>
          
          </div>
        </div>
    </div>






{/* boton para llamar los eventos -------- MOBILE----------- */}



    </>
)

}

export default EditarUsuario;