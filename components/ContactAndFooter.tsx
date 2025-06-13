
import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, InstagramIcon, FacebookIcon, HeartIcon, WhatsAppIcon } from './icons'; // Added WhatsAppIcon

const ContactAndFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "5491173671724"; 
  const message = "Hola! Quisiera más información sobre sus gorras con diseños propios y productos."; // Adjusted message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Information Card Section (Now First) */}
      <section id="contact" className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Información Directa Column */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Información Directa (Oficinas)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-red-600 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <a href="mailto:Lycpersonalizadasventas@gmail.com" className="text-gray-700 hover:text-red-600 transition-colors">
                        Lycpersonalizadasventas@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-red-600 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <a href="tel:+5491173671724" className="text-gray-700 hover:text-red-600 transition-colors">
                        +549 1173671724
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-red-600 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
                    <address className="text-gray-700 not-italic">
                      Oficinas en: Vicente López, Buenos Aires, Argentina
                    </address>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href="mailto:Lycpersonalizadasventas@gmail.com"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                  >
                    <EnvelopeIcon className="h-5 w-5 mr-2 -ml-1" aria-hidden="true" />
                    Enviar Email
                  </a>
                </div>
              </div>

              {/* Horario de Atención Column */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Atención Online</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Asistencia online personalizada para tus consultas.</p>
                  <p>Comunícate para solicitar gorras estilo camionero, remeras y otros artículos, desde toda Argentina.</p>
                </div>
                <p className="mt-6 text-gray-600 italic">
                  ¡Explora nuestras redes y conoce nuestros proyectos de material de marca y soluciones para celebraciones!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Title Section (Now Second) */}
      <section className="bg-gray-50 pb-16 sm:pb-24 pt-12 sm:pt-16"> {/* Added pt padding to maintain separation */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            SOLICITA PRESUPUESTO PARA TUS GORRAS CON DISEÑO PROPIO Y TRUCKER EN ARGENTINA
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            ¿Interesado en gorras trucker al por mayor, modelos para quinceañeras, con sublimación o material de marca de primera? Comunícate desde Vicente López; atendemos a nivel nacional. Escríbenos por WhatsApp o email para desarrollar tus ideas exclusivas.
          </p>
        </div>
      </section>

      {/* Bottom Footer Bar */}
      <footer style={{ backgroundColor: '#0D1A2E' }} className="text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://www.instagram.com/lycpersonalizadas?igsh=NnMzMTR4ejlieTJs" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Lycpersonalizadas" className="text-gray-400 hover:text-white transition-colors">
              <InstagramIcon className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com/share/16piV9T2vA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Lycpersonalizadas" className="text-gray-400 hover:text-white transition-colors">
              <FacebookIcon className="h-6 w-6" />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp de Lycpersonalizadas" className="text-gray-400 hover:text-white transition-colors">
              <WhatsAppIcon className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm">&copy; {currentYear} LYCPERSONALIZADAS. Gorras estilo camionero, diseños a medida y artículos publicitarios de alta gama. Vicente López. Cobertura nacional. Tu gorra, tu estampa.</p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Creado con <HeartIcon className="h-4 w-4 text-red-500 mx-1" aria-hidden="true" /> para impulsar marcas en todo el país.
          </p>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;