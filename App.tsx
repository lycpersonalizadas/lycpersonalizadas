
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
// import Gallery from './components/Gallery'; // Gallery is now inside Features
import ContactAndFooter from './components/ContactAndFooter';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        {/* <Gallery />  Gallery component moved into Features.tsx */}
      </main>
      <ContactAndFooter />
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;