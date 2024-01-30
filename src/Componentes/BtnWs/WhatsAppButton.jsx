import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  const mensajeWhatsApp = "Hola, quiero sacar un turno en Innovamed soy ";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=3512117686&text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Muestra el botón de WhatsApp 
      setIsVisible(scrollPosition > windowHeight / 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El efecto se ejecutará solo una vez al montar el componente

  return (
    <div className={`whatsapp-button ${isVisible ? 'visible' : ''}`} onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
}

export default WhatsAppButton;
