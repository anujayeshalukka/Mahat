import React from 'react';
import { IoHomeOutline, IoGridOutline, IoAlbumsOutline, IoChatbubbleEllipsesOutline } from 'react-icons/io5';

const MobileBottomNav = ({ setIsTemplatesOpen, setIsContactOpen }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] lg:hidden w-[90%] max-w-[400px]">
            <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 flex justify-around items-center shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <button 
                    onClick={scrollToTop}
                    className="flex flex-col items-center gap-1 p-2 text-white/60 hover:text-[#f4103f] transition-all duration-300 group"
                >
                    <IoHomeOutline size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Home</span>
                </button>

                <button 
                    onClick={scrollToServices}
                    className="flex flex-col items-center gap-1 p-2 text-white/60 hover:text-[#f4103f] transition-all duration-300 group"
                >
                    <IoGridOutline size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Services</span>
                </button>

                <button 
                    onClick={() => setIsTemplatesOpen(true)}
                    className="flex flex-col items-center gap-1 p-2 text-white/60 hover:text-[#f4103f] transition-all duration-300 group"
                >
                    <IoAlbumsOutline size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Series</span>
                </button>

                <button 
                    onClick={() => setIsContactOpen()}
                    className="flex flex-col items-center gap-1 p-2 text-white/60 hover:text-[#f4103f] transition-all duration-300 group"
                >
                    <IoChatbubbleEllipsesOutline size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="text-[10px] uppercase tracking-widest font-medium">Talk</span>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;
