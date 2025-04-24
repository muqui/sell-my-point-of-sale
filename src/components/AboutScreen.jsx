import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutScreen = () => {
  return (
    <section id="about" className="bg-light mt-5">
  
    <div className="container">
      <h1 className="text-center mb-3">Acerca de Nuestro Software de Punto de Venta</h1>
      <p className="text-center">
        Nuestro software está diseñado para tiendas de abarrotes y negocios similares. Es una herramienta fácil de usar que le ayudará a gestionar mejor su negocio y aumentar su productividad.
      </p>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card  p-3 border-0">
            <h3 className="text-primary mb-3">Tecnología</h3>
            <ul className="list-unstyled">
              <li>- Interfaz moderna con JavaFX</li>
              <li>- Backend potente con NestJS</li>
              <li>- Base de datos segura con PostgreSQL</li>
          
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card  p-3 border-0">
            <h3 className="text-primary mb-3">Beneficios</h3>
            <ul className="list-unstyled">
              <li>✅ Fácil de usar</li>
              <li>✅ Rápido y eficiente</li>
              <li>✅ Ideal para tiendas de abarrotes y negocios similares</li>
              <li>✅ Todo en un solo sistema</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
        
    </section>
  );
};

export default AboutScreen;
