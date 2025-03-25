// src/components/Navbar.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Título o logo */}
        <a className="navbar-brand" href="#">Navarro POS</a>

        {/* Botón hamburguesa en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Acerca de</a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link" href="#">Características</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Galería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Precios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Preguntas Frecuentes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
