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
        <img src="src/assets/nautico.jpg" alt="Imagen 1" class="imgc"/>
        
        <img src="src/assets/puerto.jpg" alt="Imagen 2" class="imgc"/>
       <img src="src/assets/puerto.jpg" alt="Imagen 3" class="imgc"/>
        </div>
       
        <ul className="puntos">
        
            <li class="punto activo"></li>
            <li class="punto"></li>
            <li class="punto"></li>
   
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
