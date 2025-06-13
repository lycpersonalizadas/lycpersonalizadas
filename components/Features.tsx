
import React from 'react';
import FeatureCard from './FeatureCard';
import { PartyIcon, BriefcaseIcon, StarIcon, PaletteIcon, CheckCircleIcon, TruckIcon } from './icons';
import Gallery from './Gallery'; 

const featuresData = [
  {
    icon: <PartyIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Artículos Festivos y Gorras Temáticas para Celebraciones',
    description: 'Creamos gorras con motivos especiales, modelos para quinceañeras y niños, remeras y cotillón original. Dale vida a tus eventos con elementos publicitarios inolvidables.',
  },
  {
    icon: <BriefcaseIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Gorras Estilo Camionero y Artículos Corporativos',
    description: 'Impulsa tu identidad corporativa con gorras trucker de primera línea, remeras y obsequios empresariales. Ofrecemos soluciones de material de marca efectivas en todo el territorio argentino, operando desde Vicente López.',
  },
  {
    icon: <StarIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Excelencia en Materiales y Técnicas de Impresión',
    description: 'Nuestro compromiso es la máxima calidad en cada gorra a medida y modelo trucker. Empleamos insumos superiores y métodos de estampado de vanguardia (sublimación, DTF, vinilo) para garantizar resistencia y terminaciones perfectas.',
  },
  {
    icon: <PaletteIcon className="h-6 w-6" aria-hidden="true" />,
    title: 'Ingenio en Diseño para Artículos Publicitarios',
    description: 'Nuestro equipo convierte tu visión en gorras con diseños propios, modelos trucker sublimados y piezas de gran impacto visual. Desde la creación de logos para tu merchandising hasta conceptos elaborados, desarrollamos artículos exclusivos.',
  },
];

const printingTechniquesAndProducts = [
  'Gorras con diseños únicos de gran impacto para campañas y celebraciones.',
  'Modelos Trucker a Medida: Diseños originales para tu marca o festejo.',
  'Venta de Gorras al Por Mayor: Ideal para pedidos voluminosos y publicidad.',
  'Impresión en Gorras Trucker Sublimadas: Tonos intensos y resistencia superior.',
  'Bases de Gorras Trucker para Sublimación: Calidad lista para tu ingenio.',
  'Gorras Conmemorativas: Adaptación para quinceaños, eventos infantiles, etc.',
  'Material de Marca para Negocios en Argentina: Elementos publicitarios que destacan.',
  'Impresión DTF Textil: Máxima definición para logos en gorras y prendas.',
  'Vinilo Textil de Alta Gama: Terminaciones especiales para artículos publicitarios con un sello único.',
  'Sublimación Completa: Creaciones coloridas, perfectas para gorras temáticas y camisetas.',
  'Prendas Publicitarias a Medida: Calidad y estampas resistentes para tu identidad.',
  'Pilusos de Promoción y Artículos de Merchandising Creativos.',
  'Consultoría en Diseño de Logos para Gorras Exclusivas y Material Publicitario.'
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 bg-gray-100 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Especialistas en Gorras Trucker y Creaciones Distintivas</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Artículos Publicitarios que Realzan tu Marca a Nivel Nacional
          </p>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
            Desde Vicente López, Lycpersonalizadas se especializa en gorras trucker con diseños propios y conceptos originales para impulsar tu marca en todo el país. Contamos con más de una década de experiencia ofreciendo calidad superior para estrategias de marketing, artículos de merchandising, celebraciones (como fiestas de 15), remeras y pilusos.
          </p>
        </div>

        <Gallery /> 

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-gray-800 sm:text-3xl">
            Maestría en Estampado para tus Gorras Exclusivas y Trucker
          </h3>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
            Utilizamos métodos de impresión de última generación para gorras a medida, modelos trucker (incluida sublimación superior) y artículos distintivos, garantizando acabados de alta calidad, resistencia e impacto para tu identidad visual:
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