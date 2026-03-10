import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import About from './components/About'
import Services from './components/Services'
import Pricing from './components/Pricing'
import TemplateSale from './components/TemplateSale'
import Business from './components/Business'
import Footer from './components/Footer'
import ParticleWaves from './components/ParticleWaves'
import ContactModal from './components/ContactModal'
import TemplatesOverlay from './components/TemplatesOverlay'
import MobileBottomNav from './components/MobileBottomNav'
import StickyContact from './components/StickyContact'
import WhatsAppButton from './components/WhatsAppButton'

import './App.css'

function App() {
  const [showWaves, setShowWaves] = useState(false);
  const [showLines, setShowLines] = useState(false);
  const [homeOpacity, setHomeOpacity] = useState(1);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isTemplatesOpen, setIsTemplatesOpen] = useState(false);

  const openContactWithPlan = (plan = null) => {
    setSelectedPlan(plan);
    setIsContactOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const opacity = Math.max(0, 1 - (scrollY / (windowHeight * 0.8)));
      setHomeOpacity(opacity);

      const isHome = scrollY < windowHeight * 0.8;
      const servicesSection = document.getElementById('services');
      const reachedServices = servicesSection ? (scrollY + windowHeight * 0.5 > servicesSection.offsetTop) : false;
      const isFooter = scrollY + windowHeight > document.documentElement.scrollHeight - 200;

      setShowWaves(!isHome && !reachedServices && !isFooter);
      setShowLines(!isHome);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar
        setIsContactOpen={openContactWithPlan}
        setIsTemplatesOpen={setIsTemplatesOpen}
      />
      <StickyContact />

      <div
        className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 ${showWaves ? 'opacity-100' : 'opacity-0'}`}
      >
        <ParticleWaves />
      </div>

      {/* Global Background Lines */}
      <div className={`fixed inset-0 z-[1] pointer-events-none overflow-hidden transition-opacity duration-1000 ${showLines ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-0 bottom-0 left-[15%] w-[0.5px] bg-white opacity-[0.08]"></div>
        <div className="absolute top-0 bottom-0 left-[35%] w-[0.5px] bg-white opacity-[0.08]"></div>
        {/* <div className="absolute top-0 bottom-0 left-[60%] w-[0.5px] bg-white opacity-[0.08] hidden lg:block"></div> */}
        <div className="absolute top-0 bottom-0 left-[80%] w-[0.5px] bg-white opacity-[0.08]"></div>
      </div>

      <main className="relative">
        <Home opacity={homeOpacity} setIsContactOpen={openContactWithPlan} />
        <About setIsContactOpen={openContactWithPlan} />
        <Services setIsContactOpen={openContactWithPlan} />
        <Pricing setIsContactOpen={openContactWithPlan} />
        <TemplateSale />
        
        <Business />
        <Footer />
      </main>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => {
          setIsContactOpen(false);
          setSelectedPlan(null);
        }}
        selectedPlan={selectedPlan}
      />

      <TemplatesOverlay
        isOpen={isTemplatesOpen}
        onClose={() => setIsTemplatesOpen(false)}
      />

      <MobileBottomNav
        setIsTemplatesOpen={setIsTemplatesOpen}
        setIsContactOpen={openContactWithPlan}
      />
      <WhatsAppButton />
    </>
  )
}

export default App
