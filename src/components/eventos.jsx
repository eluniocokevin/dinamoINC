import '../css/eventos.css'
import { useState } from 'react';
function Eventos(){
    const [file,setFile] = useState(null);
    const archivoHandler = (e)=>{
     setFile(e.target.files[0]);
    }
    const enviarHandler =()=>{
        if(!file){
            alert('no has seleccionado ningun archivo'); return
        }
     const formdata = new FormData();
      formdata.append('image',file);
      fetch('http://localhost:9000/images/post',{
      method:'POST',
      body:formdata
      })
      .then(res=>res.text())
      .then(res=>console.log(res))
      .catch(err=>{
        console.error(err);
      });
      setFile(null);
      document.getElementById('in').value=null;
    }
    return(
        <>
        <div className="target">
            <h2>agrega un nuevo evento</h2>
           <input id='in' onChange={archivoHandler} type="file" className="input"/>
           <button onClick={enviarHandler}>enviar</button>
        </div>
        </>
    );
}
export default Eventos;