import React from 'react';

const StickyContact = () => {
    return (
        // left-0 top-0 items-center justify-center
        <div className="fixed w-[5%] h-screen z-[100] hidden lg:flex flex-col items-center justify-center pointer-events-none">
            <div className="flex items-center gap-6 -rotate-90 whitespace-nowrap pointer-events-auto">
                <a 
                    href="mailto:wearemahat@gmail.com" 
                    className="text-white/30 hover:text-white text-[9px] tracking-[0.4em] font-light uppercase no-underline transition-all duration-300 hover:tracking-[0.5em]"
                >
                    wearemahat@gmail.com
                </a>
                <div className="w-12 h-[1px] bg-white/10"></div>
                <a 
                    href="tel:+919747429019" 
                    className="text-white/30 hover:text-white text-[9px] tracking-[0.4em] font-light uppercase no-underline transition-all duration-300 hover:tracking-[0.5em]"
                >
                    +91 9747 429019
                </a>
            </div>
        </div>
    );
};

export default StickyContact;
