import React from 'react';
import './App.css';
import Carousel from './Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nombre Apellido</h1>
        <h3>Profesión</h3>
      </header>
      <div className="Info-container">
        <div className="Left-column">
          <h2>Resumen</h2>
          <p>Un breve resumen sobre tu experiencia y habilidades.</p>
          <h2>Habilidades</h2>
          <ul>
            <li>Habilidad 1</li>
            <li>Habilidad 2</li>
            <li>Habilidad 3</li>
            <li>Habilidad 4</li>
          </ul>
          <h2>Idiomas</h2>
          <ul>
            <li>Idioma 1 - Nivel</li>
            <li>Idioma 2 - Nivel</li>
            <li>Idioma 3 - Nivel</li>
          </ul>
        </div>
        <div className="Right-column">
          <h2>Experiencia</h2>
          <div className="Experience-item">
            <h3>Empresa 1</h3>
            <p>Posición - Fecha</p>
            <ul>
              <li>Logro 1</li>
              <li>Logro 2</li>
              <li>Logro 3</li>
            </ul>
          </div>
          <div className="Experience-item">
            <h3>Empresa 2</h3>
            <p>Posición - Fecha</p>
            <ul>
              <li>Logro 1</li>
              <li>Logro 2</li>
              <li>Logro 3</li>
            </ul>
          </div>
          <h2>Formación Académica</h2>
          <div className="Education-item">
            <h3>Institución 1</h3>
            <p>Título - Fecha</p>
          </div>
          <div className="Education-item">
            <h3>Institución 2</h3>
            <p>Título - Fecha</p>
          </div>
        </div>
      </div>
      <h2>Proyectos</h2>
      {/* Aquí se agrega el carrusel de proyectos */}
      <Carousel />
      <footer>
        <p>Contacto: correo@correo.com | Teléfono: (123) 456-7890</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/tu_perfil" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/tu_usuario" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
