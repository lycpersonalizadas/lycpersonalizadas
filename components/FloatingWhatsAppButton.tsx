
import React from 'react';
import { WhatsAppIcon } from './icons';

// Declare gtagSendEvent from the global scope for TypeScript
declare function gtagSendEvent(url: string, method: string): boolean;

const FloatingWhatsAppButton: React.FC = () => {
  // Actualizado el número de WhatsApp
  const phoneNumber = "5491173671724"; 
  const message = "Hola! Quisiera cotizar gorras trucker con diseños propios.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      onClick={(e) => {
        e.preventDefault();
        gtagSendEvent(whatsappLink, 'whatsapp_floating');
      }}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 z-50 flex items-center justify-center"
      aria-label="Chatea con nosotros por WhatsApp"
      title="Chatea con nosotros por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
    </a>
  );
};

export default FloatingWhatsAppButton;