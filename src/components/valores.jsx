import stylesValores from '../css/valores.module.css'

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



<div className={`${stylesValores.cards_grid}`}>
        <div className={`${stylesValores.flip_card}`}>
            <div className={`${stylesValores.flip_card_inner}`}>
                <div className={`${stylesValores.flip_card_front}`}>
         
         <img  className={`${stylesValores.photo}`} src="/binocular2.png" alt="VISON" />
         <h1 className={`${stylesValores.vision} ${stylesValores.h1}`}>VISIÓN</h1>
                </div>
                <div  className={`${stylesValores.flip_card_back} ${stylesValores.card_back_vision}`}>
                <p className={`${stylesValores.p}`}>Facilitar y promover la participación activa en el deporte para todas las edades en el Departamento de Soriano, a través de una plataforma digital accesible y eficiente. Nuestra misión es simplificar y agilizar los procesos de registro en actividades deportivas, fomentando un estilo de vida saludable y activo en nuestra comunidad.</p>
                </div>
            </div>
        </div>

        <div className={`${stylesValores.flip_card}`}>
            <div className={`${stylesValores.flip_card_inner}`}>
                <div className={`${stylesValores.flip_card_front}`}>
                
                <img  className={`${stylesValores.photo}`} src="/montaña2.png" alt="MISION" />
                <h1 className={`${stylesValores.mision} ${stylesValores.h1}`}>MISIÓN</h1>
                </div>
                <div className={`${stylesValores.flip_card_back} ${stylesValores.card_back_mision}`}>
              <p className={`${stylesValores.p}`}>  Ser la plataforma de referencia en el Departamento de Soriano que inspire y facilite la práctica del deporte en todas las etapas de la vida. Buscamos convertirnos en un referente en la promoción de la actividad física, proporcionando herramientas innovadoras y recursos de calidad que impulsen la participación deportiva y contribuyan al bienestar de la comunidad.</p>
                </div>
            </div>
        </div>

        <div className={`${stylesValores.flip_card}`}>
            <div className={`${stylesValores.flip_card_inner}`}>
                <div className={`${stylesValores.flip_card_front}`}>
                
                <img className={`${stylesValores.photo}`} src="/valores2.png" alt="VALORES" />
                <h1 className={`${stylesValores.valores} ${stylesValores.h1}`}>VALORES</h1>
                </div>
                <div className={`${stylesValores.flip_card_back} ${stylesValores.card_back_valores}`}>
               <p className={`${stylesValores.p}`}> En nuestra plataforma, valoramos la accesibilidad, eficiencia y salud, promoviendo un estilo de vida activo e inclusivo. Nos comprometemos con la comunidad y la innovación, manteniendo una comunicación transparente. Estos valores son fundamentales para nuestra misión de fomentar el deporte en Soriano.</p>
                </div>
            </div>
        </div>
    </div>
</>
);
}

export default Valores;