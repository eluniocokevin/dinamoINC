import stylesContacto from "../css/contact.module.css"
import React, { useState } from 'react';
function Contacto(){
const [nombre, setNombre] = useState('');
const [email, setEmail] = useState('');
const [telefono, setTelefono] = useState('');
const [asunto, setAsunto] = useState('');
const [mensaje, setMensaje] = useState('')


 
const handleSubmitForm = async(e)=>{
  e.preventDefault();
  const formData = new FormData();
  formData.append('nombre', nombre);
  formData.append('email', email);
  formData.append('telefono', telefono);
  formData.append('asunto', asunto);
  formData.append('mensaje',mensaje);
 

  try {
    const response = await fetch('http://localhost/archivos2/contacto/subirContacto.php', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Evento creado con éxito');

      setNombre('');
      setEmail('');
      setTelefono('');
      setAsunto('');
      setMensaje('');
    
       
      document.getElementById('file').value = '';
    } else {

      console.error('Error al crear la noticia');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
 }


  return (
    <>
    <div className={`${stylesContacto.contact_form_container}`}>
      
      <form className={`${stylesContacto.form}`}  onSubmit={handleSubmitForm} >
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`}  htmlFor="name">Nombre:</label>
          <input className={`${stylesContacto.input}`}
            type="text"
            id="name"
            name="name"
            value={nombre} onChange={(e)=>{setNombre(e.target.value)}}
            required
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="email">Correo Electrónico:</label>
          <input className={`${stylesContacto.input}`}
            type="email"
            id="email"
            name="email"
            value={email} onChange={(e)=>{setEmail(e.target.value)}}
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="phone">Teléfono:</label>
          <input className={`${stylesContacto.input}`}
            type="tel"
            id="phone"
            name="phone"
            value={telefono} onChange={(e)=>{setTelefono(e.target.value)}}
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="subject">Asunto:</label>
          <input className={`${stylesContacto.input}`}
            type="text"
            id="subject"
            name="subject"
            value={asunto} onChange={(e)=>{setAsunto(e.target.value)}}
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="message">Mensaje:</label>
          <textarea className={`${stylesContacto.textarea}`}
            id="message"
            name="message"
            value={mensaje} onChange={(e)=>{setMensaje(e.target.value)}}
            required
          ></textarea>
        </div>
        <button className={`${stylesContacto.button}`} type="submit">Enviar</button>
      </form>
    </div>
  
  </>);
 }


export default Contacto;