import React, { useEffect } from 'react';
import "../css/preguntas.css";
import Header from "./header";
import Footer from "./footer";



 

function Preguntas() {
  useEffect(() => {

    const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces ponemos un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}
   
		// [Opcional] Reiniciamos las demas preguntas
		preguntas.forEach((elemento) => {
			// Solamente queremos ejecutar el codigo para las preguntas que no 
			// sean la pregunta a la que le dimos click.
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = 'null';
			}
		});
    


	});
});
  }, []);
 
  return (
   
    <>
 <Header/>
 <div className="centrado">
 <div className="todo">
 <div className="titulos">
			<h1>Preguntas Frecuentes</h1><br/>
			
			<h3>
				Hemos recopilado algunas de las preguntas frecuentes que se 
				realizan a través de la Secretaría de Deportes y Recreación del 
				Departamento de Soriano, proporcionando respuestas breves a las mismas. 
				Si su consulta no queda resuelta aquí, le invitamos a ponerse en contacto 
				con nuestra Secretaría de Deportes y Recreación o visitarnos en nuestras 
				oficinas.
			</h3>
			</div>
		<div className="preguntas">
		
			
			<div className="contenedor-preguntas activo" >
				<div className="contenedor-pregunta">
					<p className="pregunta">¿Qué actividades hay? <img src="src/assets/suma.svg" alt="Abrir Respuesta" /></p>
					<p className="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit.</p>
				</div>
				<div className="contenedor-pregunta">
					<p className="pregunta">¿En que horario se desarrollan las actividades? <img src="src/assets/suma.svg" alt="Abrir Respuesta" /></p>
					<p className="respuesta">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.adipisicing elit. Voluptatum laborum porro voluptates, sequi aliquam mollitia! Nostrum eius iure sapiente, voluptates soluta adipisci, perferendis voluptatibus eligendi vel saepe harum. Consectetur, doloribus.</p>
				</div>
			</div>

			


		</div>
    </div>
    </div>
 <Footer/> 
    </>
  );

}

export default Preguntas;
