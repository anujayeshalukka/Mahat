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
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            <div className="bg-black/20 backdrop-blur-3xl border-t border-white/20 px-4 py-1 flex justify-around items-center rounded-t-2xl">
                <button 
                    onClick={scrollToTop}
                    className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-all duration-300 group"
                >
                    <div className="p-1 rounded-lg group-hover:bg-linear-to-r group-hover:from-[#f4103f] group-hover:to-[#1140aa] transition-all duration-300">
                        <IoHomeOutline size={20} className="group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-normal">Home</span>
                </button>

                <button 
                    onClick={scrollToServices}
                    className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-all duration-300 group"
                >
                    <div className="p-1 rounded-lg group-hover:bg-linear-to-r group-hover:from-[#f4103f] group-hover:to-[#1140aa] transition-all duration-300">
                        <IoGridOutline size={20} className="group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-normal">Services</span>
                </button>

                <button 
                    onClick={() => setIsTemplatesOpen(true)}
                    className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-all duration-300 group"
                >
                    <div className="p-1 rounded-lg group-hover:bg-linear-to-r group-hover:from-[#f4103f] group-hover:to-[#1140aa] transition-all duration-300">
                        <IoAlbumsOutline size={20} className="group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-normal">Series</span>
                </button>

                <button 
                    onClick={() => setIsContactOpen(true)}
                    className="flex flex-col items-center gap-1 p-2 text-white/50 hover:text-white transition-all duration-300 group"
                >
                    <div className="p-1 rounded-lg group-hover:bg-linear-to-r group-hover:from-[#f4103f] group-hover:to-[#1140aa] transition-all duration-300">
                        <IoChatbubbleEllipsesOutline size={20} className="group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[9px] uppercase tracking-widest font-normal">Talk</span>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;
