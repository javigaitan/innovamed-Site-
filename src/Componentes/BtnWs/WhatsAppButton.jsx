import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';


function WhatsAppButton(){
  const mensajeWhatsApp = "Hola, quiero sacar un turno en Innovamed soy ";

  const handleWhatsAppClick = () => {
    window.open(`https://api.whatsapp.com/send?phone=3512117686&text=${encodeURIComponent(mensajeWhatsApp)}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleWhatsAppClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsAppButton;
