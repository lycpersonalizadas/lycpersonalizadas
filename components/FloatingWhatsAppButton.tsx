
import React from 'react';
import { WhatsAppIcon } from './icons';

// For Google Analytics event tracking
declare const gtag: (command: string, action: string, params: { [key: string]: string; }) => void;

const FloatingWhatsAppButton: React.FC = () => {
  // Actualizado el número de WhatsApp
  const phoneNumber = "5491173671724"; 
  const message = "Hola! Quisiera cotizar gorras trucker con diseños propios.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => typeof gtag === 'function' && gtag('event', 'contact', { 'method': 'whatsapp_floating' })}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chatea con nosotros por WhatsApp"
      title="Chatea con nosotros por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;
