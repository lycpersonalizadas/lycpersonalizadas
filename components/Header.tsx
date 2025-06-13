
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <img src="https://ik.imagekit.io/lmpdfv6pk/WhatsApp%20Image%202023-02-20%20at%2021.56.07.jpeg?updatedAt=1749420232079" alt="Lycpersonalizadas Logo" className="h-10 w-auto" />
              <span className="ml-3 text-lg font-semibold text-gray-700 hover:text-indigo-600 transition-colors">MERCHANDISING PERSONALIZADO</span>
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Servicios</a>
            <a href="#gallery" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Galería</a>
            <a href="#contact" className="text-gray-500 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contacto</a>
          </nav>
          {/* Mobile menu button could be added here if needed */}
        </div>
      </div>
    </header>
  );
};

export default Header;