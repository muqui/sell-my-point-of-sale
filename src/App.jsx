import { useState } from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; // Importar el componente Navbar
import posImage from './assets/png/pos.png'; 
import AboutScreen from './components/AboutScreen';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Coloca el Navbar aquí para que se vea en toda la aplicación */}
      <Navbar />
      
      <div className="container mt-5">
        {/* Fila principal */}
        <div className="row align-items-center">
          {/* Columna izquierda */}
          <div className="col-lg-6 col-md-12">
            <h2>El POS que lleva tu negocio al siguiente nivel</h2>
            <p>Controla tu inventario y ventas en un solo lugar</p>
            <p>Gestión de ventas rápida, segura y eficiente</p>
            <button className="btn btn-primary">Descargar ahora</button>
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
     <AboutScreen />
     <Features/>
     <Gallery/> 
     <Pricing/>
    </div>
  );
}

export default App;
