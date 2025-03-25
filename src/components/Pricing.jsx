import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Pricing = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">💰 Planes de Precios</h2>
      <div className="row">
        {/* Plan Básico */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="card-title">Plan Básico</h4>
              <p className="card-text">Ideal para pequeñas tiendas o emprendedores.</p>
              <h5 className="card-price">$19.99/mes</h5>
              <ul className="list-unstyled">
                <li>Hasta 100 productos</li>
                <li>Acceso a ventas e inventario</li>
                <li>Soporte básico</li>
              </ul>
              <a href="#" className="btn btn-primary">Seleccionar</a>
            </div>
          </div>
        </div>

        {/* Plan Estándar */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="card-title">Plan Estándar</h4>
              <p className="card-text">Ideal para negocios medianos con mayor volumen de ventas.</p>
              <h5 className="card-price">$49.99/mes</h5>
              <ul className="list-unstyled">
                <li>Hasta 500 productos</li>
                <li>Acceso a reportes y estadísticas</li>
                <li>Soporte prioritario</li>
              </ul>
              <a href="#" className="btn btn-primary">Seleccionar</a>
            </div>
          </div>
        </div>

        {/* Plan Premium */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h4 className="card-title">Plan Premium</h4>
              <p className="card-text">Ideal para grandes negocios con muchas necesidades avanzadas.</p>
              <h5 className="card-price">$99.99/mes</h5>
              <ul className="list-unstyled">
                <li>Productos ilimitados</li>
                <li>Acceso completo a todos los módulos</li>
                <li>Soporte 24/7</li>
              </ul>
              <a href="#" className="btn btn-primary">Seleccionar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
