import React from 'react';

const Hero: React.FC = () => {
  const phoneNumber = "5491173671724"; 
  const message = "Hola! Quisiera cotizar gorras personalizadas con mi logo."; // Updated message
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
          Gorras Personalizadas, Estampadas y con tu Logo
        </h1>
        <p className="mt-6 max-w-md mx-auto text-lg text-gray-300 sm:text-xl md:mt-8 md:max-w-3xl drop-shadow-sm">
          Creamos gorras personalizadas y estampadas con tu logo para fiestas, eventos y empresas. Calidad superior en modelos trucker y diseños exclusivos. Atendemos pedidos por mayor a toda Argentina desde Vicente López.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Cotiza tus Gorras Personalizadas
        </a>
      </div>
    </div>
  );
};

export default Hero;