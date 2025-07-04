
import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, InstagramIcon, FacebookIcon, HeartIcon, WhatsAppIcon } from './icons'; // Added WhatsAppIcon

// For Google Analytics event tracking
declare const gtag: (command: string, action: string, params: { [key: string]: string; }) => void;
declare function gtagSendEvent(url: string, params: { [key: string]: string; }): boolean;

const ContactAndFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const phoneNumber = "5491173671724"; 
  const message = "Hola! Quisiera más información sobre sus gorras con diseños propios y productos."; // Adjusted message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const instagramHandle = "lycpersonalizadas"; // Your Instagram handle

  const emailLink = "mailto:Lycpersonalizadasventas@gmail.com";
  const phoneLink = "tel:+5491173671724";

  return (
    <>
      {/* Information Card Section (Remains First) */}
      <section id="contact" className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {/* Información Directa Column */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Información Directa (Oficinas)</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <a 
                        href={emailLink}
                        onClick={(e) => { e.preventDefault(); typeof gtagSendEvent === 'function' && gtagSendEvent(emailLink, { 'method': 'email_link' }); }}
                        className="text-gray-700 hover:text-indigo-600 transition-colors">
                        Lycpersonalizadasventas@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <a 
                        href={phoneLink}
                        onClick={(e) => { e.preventDefault(); typeof gtagSendEvent === 'function' && gtagSendEvent(phoneLink, { 'method': 'phone_link' }); }}
                        className="text-gray-700 hover:text-indigo-600 transition-colors">
                        +549 1173671724
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-indigo-600 flex-shrink-0 mr-3 mt-1" aria-hidden="true" />
                    <address className="text-gray-700 not-italic">
                      Oficinas en: Vicente López, Buenos Aires, Argentina
                    </address>
                  </li>
                </ul>
                <div className="mt-6">
                  <a
                    href={emailLink}
                    onClick={(e) => { e.preventDefault(); typeof gtagSendEvent === 'function' && gtagSendEvent(emailLink, { 'method': 'email_button' }); }}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
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
      
      {/* Top Title Section (Remains Second) */}
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

      {/* New Footer Design - Indigo Theme */}
      <footer className="bg-indigo-600 text-indigo-50 pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Column 1: Brand Info */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">MERCHANDISING PERSONALIZADO</h5>
              <p className="text-sm text-indigo-100">
                Gorras estilo camionero, diseños a medida y artículos publicitarios de alta gama. Vicente López. Cobertura nacional.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Navegación</h5>
              <ul className="space-y-2 text-sm text-indigo-100">
                <li><a href="#features" className="hover:text-white transition-colors">Servicios</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Galería</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            {/* Column 3: Quote Contact */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Cotiza Ahora</h5>
              <a
                href={whatsappLink}
                onClick={(e) => { e.preventDefault(); typeof gtagSendEvent === 'function' && gtagSendEvent(whatsappLink, { 'method': 'whatsapp_footer_button' }); }}
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 transition-colors shadow-md"
              >
                <WhatsAppIcon className="h-5 w-5 mr-2" />
                Consultar Precios
              </a>
              <p className="text-xs mt-2 text-indigo-100">Ideal para pedidos por mayor y empresas.</p>
            </div>

            {/* Column 4: Follow Us */}
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">Síguenos</h5>
              <div className="flex space-x-4 mb-2">
                <a href="https://www.instagram.com/lycpersonalizadas?igsh=NnMzMTR4ejlieTJs" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Lycpersonalizadas" className="text-indigo-100 hover:text-white transition-colors">
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/share/16piV9T2vA/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Lycpersonalizadas" className="text-indigo-100 hover:text-white transition-colors">
                  <FacebookIcon className="h-6 w-6" />
                </a>
                <a href={whatsappLink} aria-label="WhatsApp de Lycpersonalizadas" className="text-indigo-100 hover:text-white transition-colors"
                  onClick={(e) => { e.preventDefault(); typeof gtagSendEvent === 'function' && gtagSendEvent(whatsappLink, { 'method': 'whatsapp_footer_icon' }); }}>
                  <WhatsAppIcon className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm text-indigo-100">@{instagramHandle}</p>
            </div>
          </div>

          <hr className="border-t border-indigo-400 my-8" />

          <div className="text-center text-sm text-indigo-100">
            <p>&copy; {currentYear} LYCPERSONALIZADAS. Todos los derechos reservados. Tu gorra, tu estampa.</p>
            <p className="mt-1 flex items-center justify-center">
              Creado con <HeartIcon className="h-4 w-4 text-red-500 mx-1" aria-hidden="true" /> para impulsar marcas.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactAndFooter;