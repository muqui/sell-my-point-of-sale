import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; // Importar el componente Navbar

import AboutScreen from './components/AboutScreen';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import { Description } from './components/Description';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Coloca el Navbar aquí para que se vea en toda la aplicación */}
      <Navbar />

     <Description />
      <AboutScreen />
      <Features />
      <Gallery />
      <Pricing />
    </div>
  );
}

export default App;
