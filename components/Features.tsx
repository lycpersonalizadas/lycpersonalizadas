import React from 'react';
import FeatureCard from './FeatureCard';
import { PartyIcon, BriefcaseIcon, StarIcon, PaletteIcon, CheckCircleIcon, TruckIcon, WhatsAppIcon, EnvelopeIcon } from './icons'; // Added WhatsAppIcon, EnvelopeIcon
import Gallery from './Gallery'; 

const orderSteps = [
  {
    icon: <WhatsAppIcon className="h-7 w-7" aria-hidden="true" />, // Using WhatsApp as primary, email mentioned in text.
    title: 'Paso 1: Contacto y Asesoramiento',
    description: 'Contáctanos vía WhatsApp o email. Nuestros asesores te guiarán con valores, productos y diseños disponibles para tu proyecto.',
  },
  {
    icon: <CheckCircleIcon className="h-7 w-7" aria-hidden="true" />,
    title: 'Paso 2: Proceso de Producción',
    description: 'Una vez acordados los detalles y confirmada tu orden, iniciamos la producción de tus artículos personalizados.',
  },
  {
    icon: <TruckIcon className="h-7 w-7" aria-hidden="true" />,
    title: 'Paso 3: Entrega o Envío',
    description: 'Finalizada la fabricación, preparamos tu pedido para la entrega o el envío a cualquier punto de Argentina.',
  },
];

const featuresData = [
  {
    icon: <PartyIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Gorras para Fiestas y Eventos Especiales',
    description: 'Creamos gorras con motivos especiales, modelos para quinceañeras y niños, remeras y cotillón original. Dale vida a tus eventos con elementos publicitarios inolvidables.',
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Gorras con Logo para Empresas y Merchandising',
    description: 'Impulsa tu identidad corporativa con gorras trucker de primera línea, remeras y obsequios empresariales. Ofrecemos soluciones de material de marca efectivas en todo el territorio argentino, operando desde Vicente López.',
  },
  {
    icon: <StarIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Excelencia en Materiales y Técnicas de Impresión',
    description: 'Nuestro compromiso es la máxima calidad en cada gorra estampada y modelo trucker. Empleamos insumos superiores y métodos de vanguardia (sublimación, DTF, vinilo) para garantizar resistencia y terminaciones perfectas.',
  },
  {
    icon: <PaletteIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Diseño de Gorras Personalizadas y con Logo',
    description: 'Nuestro equipo convierte tu visión en gorras con diseños propios y logos para merchandising. Creamos piezas de gran impacto visual y artículos exclusivos que representan tu marca.',
  },
];

const printingTechniquesAndProducts = [
  'Diseño y estampado de gorras personalizadas para campañas y celebraciones.',
  'Gorras con logo para empresas, vendidas por mayor para publicidad efectiva.',
  'Gorras estampadas con logo para acciones de marketing y eventos corporativos.',
  'Gorras personalizadas para fiestas de 15, casamientos y cumpleaños.',
  'Impresión en gorras trucker sublimadas: tonos intensos y resistencia superior.',
  'Bases de gorras trucker para sublimación: calidad lista para tu ingenio.',
  'Impresión DTF textil: máxima definición para logos en gorras y prendas.',
  'Vinilo textil de alta gama para acabados especiales en artículos publicitarios.',
  'Sublimación completa: creaciones coloridas para gorras temáticas y camisetas.',
  'Pilusos de promoción y artículos de merchandising creativos.',
  'Consultoría en diseño de logos para gorras exclusivas y material publicitario.'
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Especialistas en Gorras Personalizadas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Gorras con tu Logo que Realzan tu Marca
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Desde Vicente López, Lycpersonalizadas se especializa en gorras trucker, estampadas y con diseños propios para impulsar tu marca en todo el país. Contamos con más de una década de experiencia ofreciendo calidad superior para merchandising, gorras para fiestas, remeras y pilusos.
          </p>
        </div>

        {/* Pasos para realizar el pedido */}
        <div className="mt-16 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
              Realizar tu Pedido es Muy Sencillo
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
            {orderSteps.map((step) => (
              <FeatureCard
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>

        <Gallery /> 

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
            Maestría en Estampado para tus Gorras Exclusivas
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Utilizamos métodos de impresión de última generación para tus gorras personalizadas y estampadas, garantizando acabados de alta calidad, resistencia e impacto para tu identidad visual:
          </p>
          <div className="mt-8 max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-left">
              {printingTechniquesAndProducts.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-indigo-500 flex-shrink-0 mr-2 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-green-100 text-green-700 font-semibold py-2 px-4 rounded-lg shadow">
              <TruckIcon className="h-6 w-6 mr-2" aria-hidden="true" />
              <span>¡Despachamos tus pedidos a cualquier rincón de Argentina! Entregas fiables y puntuales en todo el país.</span>
            </div>
          </div>

        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {featuresData.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;