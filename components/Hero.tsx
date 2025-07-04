
import React from 'react';

// For Google Analytics event tracking
declare const gtag: (command: string, action: string, params: { [key: string]: string; }) => void;
declare function gtagSendEvent(url: string, params: { [key: string]: string; }): boolean;

const Hero: React.FC = () => {
  const phoneNumber = "5491173671724"; 
  const message = "Hola! Quisiera cotizar gorras publicitarias."; // Updated message to match button
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="relative bg-gray-900">
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <img
          src="https://ik.imagekit.io/lmpdfv6pk/ssssss.jpg?updatedAt=1749420143323"
          alt="Fondo de gorras personalizadas y productos promocionales de Lycpersonalizadas, servicio para toda Argentina"
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-80"></div>
      <div className="relative max-w-4xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-48 lg:px-0">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl drop-shadow-md">
          Gorras Únicas para tu Empresa : La Mejor Calidad al mejor Precio
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl drop-shadow-sm">
          Diseñamos gorras trucker con diseños propios, creaciones originales y artículos publicitarios de primer nivel (ventas por mayor disponibles) para todo el país, con base en Vicente López. La excelencia en diseño y estampado (sublimación, DTF, vinilo) es nuestra garantía. La satisfacción de nuestros clientes es nuestro mejor respaldo.
        </p>
        <a
          href={whatsappLink}
          onClick={(e) => {
            e.preventDefault();
            if (typeof gtagSendEvent === 'function') {
              gtagSendEvent(whatsappLink, { 'method': 'whatsapp_hero' });
            }
          }}
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Cotiza tus Gorras publicitarias
        </a>
      </div>
    </div>
  );
};

export default Hero;