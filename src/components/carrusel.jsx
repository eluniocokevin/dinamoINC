// import React, { useEffect, useState } from 'react'; 
// import '../css/carrusel.css';

// function Carrusel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
 
//       const nextIndex = (currentIndex + 1) % 3; 

//       setCurrentIndex(nextIndex);

    
//       const grande = document.querySelector('.grande');
//       const operacion = nextIndex * -50; 
//       grande.style.transform = `translateX(${operacion}%)`;
//     }, 3000); 

//     return () => clearInterval(interval);
//   }, [currentIndex]); 

//   return (
//     <>
//       <div className="carrousel">
//         <div className="grande">
//           <img src="/nautico.jpg" alt="Imagen 1" className="imgc" />
//           <img src="/agua.JPG" alt="Imagen 2" className="imgc" />
//           <img src="/arena.JPG" alt="Imagen 3" className="imgc" />
//         </div>
       
//         <ul className="puntos">
//           <li className={`punto ${currentIndex === 0 ? 'activo' : ''}`} onClick={() => handlePointClick(0)}></li>
//           <li className={`punto ${currentIndex === 1 ? 'activo' : ''}`} onClick={() => handlePointClick(1)}></li>
//           <li className={`punto ${currentIndex === 2 ? 'activo' : ''}`} onClick={() => handlePointClick(2)}></li>
//         </ul>
//       </div>
//     </>
//   );


//   function handlePointClick(index) {
//     setCurrentIndex(index);
//     const grande = document.querySelector('.grande');
//     const operacion = index * -50;
//     grande.style.transform = `translateX(${operacion}%)`;
//   }
// }

// export default Carrusel;



import React, { useEffect, useRef, useState } from 'react';
import { data } from '/data';
import '../css/carrusel.css';

function Carrusel() {

  //slider touch
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        scrollToImage('prev'); // Deslizar hacia la izquierda
      } else if (deltaX < -50) {
        scrollToImage('next'); // Deslizar hacia la derecha
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };


  

  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [isEntering, setIsEntering] = useState(true); // Controla la animación

  useEffect(() => {
    if (isAutoScrolling) {
      // Cuando el carrusel se desplaza automáticamente, inicia la animación
      setIsEntering(true);
      const timeout = setTimeout(() => {
        setIsEntering(false);
      }, 1000); // Duración de la animación en milisegundos
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAutoScrolling]);

  const scrollToImage = (direction) => {
    setIsAutoScrolling(false); // Indicar que el carrusel se está moviendo manualmente

    if (direction === 'prev') {
      setCurrentIndex((prevIndex) => {
        const isFirstSlide = prevIndex === 0;
        return isFirstSlide ? data.length - 1 : prevIndex - 1;
      });
    } else {
      setCurrentIndex((prevIndex) => {
        const isLastSlide = prevIndex === data.length - 1;
        return isLastSlide ? 0 : prevIndex + 1;
      });
    }
  }

  useEffect(() => {
    // Iniciar el movimiento automático cada 3 segundos
    const autoScrollInterval = setInterval(() => {
      setIsAutoScrolling(true); // Indicar que el carrusel se está moviendo automáticamente
      scrollToImage('next'); // Mover al siguiente slide automáticamente
    }, 5000);

    return () => {
      clearInterval(autoScrollInterval); // Limpiar el intervalo al desmontar el componente
    };
  }, []);

  return (
    <div className="carrousel">
      <div className="grande">
        <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
        <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
        <div className="carrousel-cont-img">
          <ul
            ref={listRef}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {data.map((item, index) => (
              <li
                key={item.id}
                className={index === currentIndex ? 'active' : ''}
              >
                <img className='img-carrusel' src={item.imgUrl} alt={`Slide ${index}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="dots-container">
          {data.map((_, idx) => (
            <div
              key={idx}
              className={`dot-container-item ${idx === currentIndex ? "active" : ""}`}
              onClick={() => setIsAutoScrolling(false) || setCurrentIndex(idx)}
            >
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

export default Carrusel;


