
import React from 'react';
import FeatureCard from './FeatureCard';
import { PartyIcon, BriefcaseIcon, StarIcon, PaletteIcon, CheckCircleIcon, TruckIcon } from './icons';
import Gallery from './Gallery'; 

const featuresData = [
  {
    icon: <PartyIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Cotillón y Gorras Temáticas para Eventos',
    description: 'Diseñamos gorras publicitarias, gorras personalizadas para 15 años, gorras para niños, remeras y artículos de cotillón únicos. Anima tus fiestas con detalles promocionales memorables.',
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Gorras Publicitarias y Merchandising Empresarial',
    description: 'Fortalece tu marca con gorras publicitarias de alta calidad, gorras trucker para empresas, remeras y regalos corporativos. Soluciones de merchandising empresarial efectivas para toda Argentina, desde nuestras oficinas en Vicente López.',
  },
  {
    icon: <StarIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Calidad Premium en Gorras y Estampados',
    description: 'Compromiso con la excelencia en cada gorra publicitaria y gorra trucker. Utilizamos materiales de primera y técnicas avanzadas (sublimación, DTF, vinilo) para asegurar durabilidad y acabados impecables.',
  },
  {
    icon: <PaletteIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Diseño Creativo para Gorras Promocionales',
    description: 'Nuestro equipo transforma tu idea en gorras publicitarias, gorras trucker sublimadas y productos impactantes. Desde logos para merchandising Argentina hasta diseños complejos, creamos artículos únicos.',
  },
];

const printingTechniquesAndProducts = [
  'Gorras Publicitarias de alto impacto para campañas y eventos.',
  'Gorras Trucker Personalizadas: Diseños exclusivos para tu marca o evento.',
  'Gorras Publicitarias por Mayor: Soluciones para grandes pedidos y campañas.',
  'Estampado para Gorras Trucker Sublimadas: Colores vibrantes y durabilidad excepcional.',
  'Gorras Trucker para Sublimar: Calidad preparada para tu creatividad.',
  'Gorras para Ocasiones Especiales: Personalización para 15 años, fiestas infantiles y más.',
  'Merchandising para Empresas en Argentina: Artículos promocionales de impacto.',
  'Estampado DTF Textil: Alta definición para logos en gorras publicitarias y remeras.',
  'Vinilo Textil Premium: Acabados especiales para gorras promocionales con un toque distintivo.',
  'Sublimación Full-Print: Diseños vibrantes, ideal para gorras publicitarias y remeras temáticas.',
  'Remeras Promocionales Personalizadas: Calidad y estampados duraderos para tu marca.',
  'Pilusos Publicitarios y Merchandising Original.',
  'Asesoramiento en Diseño de Logos para Gorras y Productos Promocionales.'
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Expertos en Gorras Publicitarias</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Soluciones Promocionales que Destacan tu Marca en Argentina
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Creamos gorras publicitarias, trucker personalizadas y productos promocionales de alta calidad (opciones por mayor) para toda Argentina desde Vicente López. Nuestro diseño y técnicas de estampado (sublimación, DTF, vinilo) garantizan excelencia. Clientes satisfechos nos avalan.
          </p>
        </div>

        <Gallery /> 

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
            Excelencia en Técnicas de Estampado para tus Gorras Publicitarias y Trucker
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Aplicamos avanzadas técnicas de estampado para gorras publicitarias, trucker (incluyendo sublimación de alta calidad) y productos personalizados, asegurando calidad, durabilidad e impacto visual para tu marca:
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
              <span>¡Enviamos tus gorras y productos a toda Argentina! Entregas seguras y puntuales a nivel nacional.</span>
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