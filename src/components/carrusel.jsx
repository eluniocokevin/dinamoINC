import React, { useEffect, useState } from 'react'; 
import '../css/carrusel.css';

function Carrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
 
      const nextIndex = (currentIndex + 1) % 3; 

      setCurrentIndex(nextIndex);

    
      const grande = document.querySelector('.grande');
      const operacion = nextIndex * -50; 
      grande.style.transform = `translateX(${operacion}%)`;
    }, 3000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <>
      <div className="carrousel">
        <div className="grande">
          <img src="/nautico.jpg" alt="Imagen 1" className="imgc" />
          <img src="/agua.JPG" alt="Imagen 2" className="imgc" />
          <img src="/arena.JPG" alt="Imagen 3" className="imgc" />
        </div>
       
        <ul className="puntos">
          <li className={`punto ${currentIndex === 0 ? 'activo' : ''}`} onClick={() => handlePointClick(0)}></li>
          <li className={`punto ${currentIndex === 1 ? 'activo' : ''}`} onClick={() => handlePointClick(1)}></li>
          <li className={`punto ${currentIndex === 2 ? 'activo' : ''}`} onClick={() => handlePointClick(2)}></li>
        </ul>
      </div>
    </>
  );


  function handlePointClick(index) {
    setCurrentIndex(index);
    const grande = document.querySelector('.grande');
    const operacion = index * -50;
    grande.style.transform = `translateX(${operacion}%)`;
  }
}

export default Carrusel;