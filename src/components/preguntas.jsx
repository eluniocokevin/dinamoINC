import React, { useEffect, useState } from 'react';
import "../css/preguntas.css";
import Header from "./header";
import Footer from "./footer";
import Pregunta from "./pregunta";
import Contacto from "./contacto";
function Preguntas() {


 
  return (
   
    <>
 <Header/>
 <div className="centrado">
 <div className="todo">
 <div className="titulos"> 
 <div className='imagen'>  
 <img className="preguntado" src="/pregunta.png" alt="preguntas icon" /> 
</div>
			<h1>Preguntas Frecuentes   </h1>
			
			<h3>
				Hemos recopilado algunas de las preguntas frecuentes que se 
				realizan a través de la Secretaría de Deportes y Recreación del 
				Departamento de Soriano, proporcionando respuestas breves a las mismas. 
				Si su consulta no queda resuelta aquí, le invitamos a ponerse en contacto 
				con nuestra Secretaría de Deportes y Recreación o visitarnos en nuestra
				oficinas.
			</h3>
			</div>
		<div className="preguntas">
			
		<Pregunta
		pregunta='¿Qué actividades hay?'
		respuesta='Las actividades que proporcionamos se encuentran en la sección de deportes'
		/>
		<Pregunta
		pregunta='¿En que horarios se desarrollan las actividades?'
		respuesta='Las actividades se pueden realizar desde las 10:00 hrs hasta las 18.00 hrs'
		/>

		<Pregunta
		pregunta='Luegares de las actividades'
		respuesta='Las actividades a las cuales puede acceder depende de la localidad en la que se encuentre, normalmente se realizan en lugares públicos '
		/>

		<Pregunta
		pregunta='¿Que necesito para hacer las actividades?'
		respuesta='Para realizar las actividades se debe utilizar ropa la cual considere cómoda, en caso de ser necesario algún extra se especificará en la tarjeta de la actividad'
		/>
		
		<Pregunta
		pregunta='¿Hay limites de edad para hacer deportes?'
		respuesta='No hay límite de edad para realizar las actividades '
		/>

		<Pregunta
		pregunta='¿Donde me inscribo para hacer deportes?'
		respuesta='En la sección de actividades de la página web o presentándote en nuestras oficinas'
		/>

		<Pregunta
		pregunta='¿Cuáles son los horarios de oficina?'
		respuesta='En la sección de actividades de la página web o presentándote en nuestras oficinas'
		/>
		
		<Pregunta
		pregunta='¿Las actividades tienen costo?'
		respuesta='Las actividade son completamente gratis para todos los que quieran participar'
		/>
</div>
<div className='contacto'>

<h1>Contacto</h1>
<Contacto/> 

</div>
    </div>
    </div>
 <Footer/> 
    </>
  );

}

export default Preguntas;
