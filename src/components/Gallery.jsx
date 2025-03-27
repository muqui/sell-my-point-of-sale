import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import mainImage from '../assets/png/main.png'; 
import productsImage from '../assets/png/products.png'; 
import InventoryImage from '../assets/png/inventario.png'; 
const Gallery = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center">📸 Galería de Imágenes</h2>
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"  // Tiempo de intervalo de las imágenes en milisegundos
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mainImage} className="d-block w-100" alt="Imagen 1" />
          </div>
          <div className="carousel-item">
            <img src={productsImage} className="d-block w-100" alt="Imagen 2" />
          </div>
          <div className="carousel-item">
            <img src={InventoryImage} className="d-block w-100" alt="Imagen 3" />
          </div>
        </div>
        
        {/* Puntos de navegación */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="0"
            className="active bg-primary "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to="1"
              className="bg-primary "
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExample"
             className="bg-primary "
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* Botones de control */}
        <button
          className="carousel-control-prev  "
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon " aria-hidden="true"></span>
          <span className="visually-hidden ">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
