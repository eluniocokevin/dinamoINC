import React, { useEffect } from 'react'; 
import '../css/carrusel.css';


function Carrusel() {
  useEffect(() => {
  
    Carruseljs();
  }, []); 

  return (
    <>
      <div className="carrousel">
        <div className="grande">
        <img src="src/assets/nautico.jpg" alt="Imagen 1" className="imgc"/>
        
        <img src="src/assets/agua.jpg" alt="Imagen 2" className="imgc"/>
       <img src="src/assets/arena.jpg" alt="Imagen 3" className="imgc"/>
        </div>
       
        <ul className="puntos">
        
            <li className="punto activo"></li>
            <li className="punto"></li>
            <li className="punto"></li>
   
        </ul>
      </div>
    </>
  );
}

export default Carrusel;


function Carruseljs() {
  'use strict';

  const grande = document.querySelector('.grande');
  const punto = document.querySelectorAll('.punto');

  punto.forEach((cadaPunto, i) => {
    punto[i].addEventListener('click', () => {
      let posicion = i;
      let operacion = posicion * -50;

      grande.style.transform = `translateX(${operacion}%)`;

      punto.forEach((cadaPunto, i) => {
        punto[i].classList.remove('activo');
      });

      punto[i].classList.add('activo');
    });
  });
}
