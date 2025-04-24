import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  // Función para cerrar el menú cuando se hace clic en un elemento
  const closeMenu = (e) => {
    // Prevenir la acción predeterminada del enlace
    e.preventDefault();

    // Cerrar el menú hamburguesa
    const menu = document.getElementById("navbarNav");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }

    // Redirigir a la sección de la página
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Título o logo */}
        <a className="navbar-brand" href="/">Navarro POS</a>

        {/* Botón hamburguesa en pantallas pequeñas */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#top" onClick={closeMenu}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeMenu}>Características</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={closeMenu}>Galería</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={closeMenu}>Precios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
