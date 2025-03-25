import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Features = () => {
  return (
    <div className="container py-4">
      <h2 className="text-center">🔹 Características Principales</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">🛒 Gestión de Ventas</h3>
            <ul className="list-unstyled">
              <li>- Registro rápido de ventas con la opción de aplicar descuentos.</li>
              <li>- Administración de productos por unidad o en paquetes.</li>
              <li>- Control de ventas por departamentos para una mejor organización.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">📦 Inventario Inteligente</h3>
            <ul className="list-unstyled">
              <li>- Control preciso de las entradas y salidas de productos.</li>
              <li>- Filtros por fecha y departamento para una mejor visualización.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">📊 Reportes Detallados</h3>
            <ul className="list-unstyled">
              <li>- Visualización clara de ventas, ingresos y egresos.</li>
              <li>- Informe completo del estado del negocio para tomar decisiones acertadas.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">💰 Gestión de Caja</h3>
            <ul className="list-unstyled">
              <li>- Registro de ingresos y egresos para llevar el control financiero.</li>
              <li>- Visualización detallada de los movimientos diarios.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">🔧 Módulo de Reparaciones</h3>
            <ul className="list-unstyled">
              <li>- Creación, edición y control de órdenes de reparación.</li>
              <li>- Resumen de ganancias y filtros por fecha para un mejor análisis.</li>
            </ul>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card shadow-sm p-3">
            <h3 className="text-primary mb-3">🔒 Seguridad y Estabilidad</h3>
            <ul className="list-unstyled">
              <li>- Información protegida gracias a PostgreSQL.</li>
              <li>- Desarrollado con NestJS para garantizar velocidad y confiabilidad.</li>
              <li>- Interfaz intuitiva creada con JavaFX para una experiencia cómoda.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
