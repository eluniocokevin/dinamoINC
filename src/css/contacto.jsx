import React, { Component } from 'react';
import "../css/contact.css"

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
      <div className="contact-form-container">
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Asunto:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}

export default Contacto;