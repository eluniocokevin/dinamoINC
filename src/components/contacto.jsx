import React, { Component } from 'react';
import stylesContacto from "../css/contact.module.css"

class Contacto extends Component {
constructor(props) {
  super(props);
  this.state = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };
}

handleChange = (e) => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};

handleSubmit = (e) => {
  e.preventDefault();
  // Aquí puedes manejar la lógica para enviar el formulario, como enviar los datos a un servidor.
  // Por ahora, solo mostraremos los datos en la consola.
  console.log(this.state);
};

render() {
  return (
    <div className={`${stylesContacto.contact_form_container}`}>
      
      <form className={`${stylesContacto.form}`} onSubmit={this.handleSubmit}>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="name">Nombre:</label>
          <input className={`${stylesContacto.input}`}
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="email">Correo Electrónico:</label>
          <input className={`${stylesContacto.input}`}
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="phone">Teléfono:</label>
          <input className={`${stylesContacto.input}`}
            type="tel"
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="subject">Asunto:</label>
          <input className={`${stylesContacto.input}`}
            type="text"
            id="subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
          />
        </div>
        <div className={`${stylesContacto.form_group}`}>
          <label className={`${stylesContacto.label}`} htmlFor="message">Mensaje:</label>
          <textarea className={`${stylesContacto.textarea}`}
            id="message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            required
          ></textarea>
        </div>
        <button className={`${stylesContacto.button}`} type="submit">Enviar</button>
      </form>
    </div>
  );
}
}

export default Contacto;