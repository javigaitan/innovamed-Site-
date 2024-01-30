import React from "react";
import Navbar from "./Componentes/Navbar/Navbar";
import Banner from "./Componentes/Banner/Banner";
import Servicios from "./Componentes/Servicios/Servicios";
import Nosotros from "./Componentes/Nosotros/Nosotros";
import Footer from "./Componentes/Footer/Footer";
import WhatsAppButton from "./Componentes/BtnWs/WhatsAppButton";
import Cta from "./Componentes/CTA/Cta";
import Contacto from "./Componentes/Contacto/Contacto";
import DisfuncionErectil from "./Componentes/pages/DisfuncionErectil";
import TerapiaOndasFocales from "./Componentes/pages/TerapiaOndasFocales";
import FaltaDeseo from "./Componentes/pages/FaltaDeseo";
import TratamientoReemplazoHormonal from "./Componentes/pages/TratamientoReemplazoHormonal";
import TratamientoReemplazoTestosterona from "./Componentes/pages/TratamientoReemplazoTestosterona";
import EyaculacionPrecoz from "./Componentes/pages/EyaculacionPrecoz";
import GaleriaPage from "./Componentes/Galeria/GaleriaPage";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        {/* Agrega Navbar y WhatsAppButton a la estructura principal */}
        <Navbar />
        <WhatsAppButton />
        <Routes>
          {/* Configura la ruta principal '/' para renderizar el contenido central */}
          <Route path="/" element={<Central />} />
          <Route path="/disfuncion-erectil" element={<DisfuncionErectil />} />
          <Route path="/terapia-ondas-focales" element={<TerapiaOndasFocales />} />
          <Route path="/Falta-deseo" element={<FaltaDeseo />} />
          <Route path="/Tratamiento-reemplazo-hormonal" element={<TratamientoReemplazoHormonal />} />
          <Route path="/Tratamiento-testosterona" element={<TratamientoReemplazoTestosterona />} />
          <Route path="/Eyaculacion-precoz" element={<EyaculacionPrecoz />} />
          <Route path="/galeria" element={<GaleriaPage />} />

        </Routes>
        <br /><br /><br />
        <Footer />
      </>
    </BrowserRouter>
  );
}

// Componente para la página central
function Central({ children }) {
  return (
    <>
      <Banner />
      {/* Agrega Servicios, Nosotros, Contacto y Footer a la estructura central */}
      {children}
      <Servicios />
      <Nosotros />
      <Contacto />

    </>
  );
}

export default App;
