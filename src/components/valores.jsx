import '../css/valores.css'

function Valores(){
return(
    /*
<>
<div className="conte">
<div className='vision'>
<div className='imge'> <img src="/binocular.png" alt="" /></div>
<div className='titu'><h1>VISIÓN</h1></div>
<div className='tex'><p>Facilitar y promover la participación activa en el deporte para todas las edades en el Departamento de Soriano, a través de una plataforma digital accesible y eficiente. Nuestra misión es simplificar y agilizar los procesos de registro en actividades deportivas, fomentando un estilo de vida saludable y activo en nuestra comunidad.</p></div>
</div>
<div className='mision'>
<div className='imge'><img src="/montaña.png" alt="" /></div>
<div className='titu'><h1>MISIÓN</h1></div>
<div className='tex'><p>Ser la plataforma de referencia en el Departamento de Soriano que inspire y facilite la práctica del deporte en todas las etapas de la vida. Buscamos convertirnos en un referente en la promoción de la actividad física, proporcionando herramientas innovadoras y recursos de calidad que impulsen la participación deportiva y contribuyan al bienestar de la comunidad.</p></div>
</div>
<dir className="valores">
<div className='imge'><img src="/valores}.png" alt="" /></div>
<div className='titu'><h1>VALORES</h1></div>
<div className='tex'><p>En nuestra plataforma, valoramos la accesibilidad, eficiencia y salud, promoviendo un estilo de vida activo e inclusivo. Nos comprometemos con la comunidad y la innovación, manteniendo una comunicación transparente. Estos valores son fundamentales para nuestra misión de fomentar el deporte en Soriano.</p></div>
</dir>

</div>


</>
*/
<>



<div className="cards-grid">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front" >
         
         <img  className="photo" src="/binocular2.png" alt="VISON" />
         <h1>VISIÓN</h1>
                </div>
                <div  className="flip-card-back">
                <p>Facilitar y promover la participación activa en el deporte para todas las edades en el Departamento de Soriano, a través de una plataforma digital accesible y eficiente. Nuestra misión es simplificar y agilizar los procesos de registro en actividades deportivas, fomentando un estilo de vida saludable y activo en nuestra comunidad.</p>
                </div>
            </div>
        </div>

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                
                <img  className="photo" src="/montaña2.png" alt="MISION" />
                <h1>MISIÓN</h1>
                </div>
                <div className="flip-card-back">
              <p>  Ser la plataforma de referencia en el Departamento de Soriano que inspire y facilite la práctica del deporte en todas las etapas de la vida. Buscamos convertirnos en un referente en la promoción de la actividad física, proporcionando herramientas innovadoras y recursos de calidad que impulsen la participación deportiva y contribuyan al bienestar de la comunidad.</p>
                </div>
            </div>
        </div>

        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                
                <img className="photo"src="/valores2.png" alt="VALORES" />
                <h1>VALORES</h1>
                </div>
                <div className="flip-card-back">
               <p> En nuestra plataforma, valoramos la accesibilidad, eficiencia y salud, promoviendo un estilo de vida activo e inclusivo. Nos comprometemos con la comunidad y la innovación, manteniendo una comunicación transparente. Estos valores son fundamentales para nuestra misión de fomentar el deporte en Soriano.</p>
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default Valores;