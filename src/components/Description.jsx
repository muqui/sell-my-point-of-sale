import React from 'react'
import posImage from '../assets/png/pos.png';
export const Description = () => {
  return (
    <section id="top" className="mt-5 bg-light">
    <div className="container ">
    {/* Fila principal */}
    <div className="row align-items-center">
      {/* Columna izquierda */}
      <div className="col-lg-6 col-md-12">
        <h2>El POS que lleva tu negocio al siguiente nivel</h2>
        <p>Controla tu inventario y ventas en un solo lugar</p>
        <p>Gestión de ventas rápida, segura y eficiente</p>
        <p>Módulo de gestión de reparación de equipos electrónicos</p>
        <a href="https://github.com/muqui/punto-venta-javaFX/releases/download/java/NavarroPOS.exe"  class="btn btn-success" download>
          Descargar NavarroPOS
        </a>

      </div>

      {/* Columna derecha */}
      <div className="col-lg-6 col-md-12">
        <img
          src={posImage} // Aquí pon la URL de tu imagen
          alt="Imagen del POS"
          className="img-fluid"
        />
      </div>
    </div>
  </div>
  </section>
  )
}
