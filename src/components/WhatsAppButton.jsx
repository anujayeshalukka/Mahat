import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

const WhatsAppButton = () => {
  const phoneNumber = "919747429019";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-[90] lg:bottom-10 lg:right-10 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
        <span className="text-[10px] text-white uppercase tracking-[0.2em] font-medium">Chat with us</span>
      </div>

      {/* Button Container */}
      <div className="relative">
        {/* Pulse effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
        
        {/* Main Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-black/20 backdrop-blur-xl border border-white/10 rounded-full hover:border-[#25D366]/50 transition-all duration-500 hover:scale-110 shadow-2xl">
          <div className="absolute inset-0 bg-linear-to-br from-[#25D366]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
          <IoLogoWhatsapp 
            size={28} 
            className="text-white group-hover:text-[#25D366] transition-colors duration-500" 
          />
        </div>

        {/* Status Indicator */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#050505] rounded-full"></div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
