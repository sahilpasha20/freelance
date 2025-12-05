import React from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Stats } from './components/sections/Stats';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { Process } from './components/sections/Process';
import { Contact } from './components/sections/Contact';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-stone-800 bg-stone-50 selection:bg-gold-200 selection:text-stone-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Stats />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Process />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
