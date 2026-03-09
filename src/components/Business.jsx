import React, { useEffect, useRef, useState } from 'react';
import ParticleWaves from './ParticleWaves';
import mahat3d from '../assets/mahat_3d.png';

const ScrollReveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        }, { threshold: 0.1 });

        const { current } = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            ref={domRef}
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            {children}
        </div>
    );
};

const Business = () => {
    return (
        <section id="business" className="relative w-full min-h-screen overflow-hidden bg-black">
            {/* Background Waves */}
            <div className="absolute inset-0 z-0">
                <ParticleWaves />
            </div>

            <div className="relative z-10 w-full min-h-screen flex flex-col justify-center px-[5%] py-20">
                <ScrollReveal>
                    <div className="flex flex-col items-center text-center gap-12">
                        <div className="relative animate-bounce-slow">
                            <img
                                src={mahat3d}
                                alt="MAHAT 3D Logo"
                                className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] h-auto object-contain mix-blend-screen"
                            />
                        </div>

                        <h2 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
                            Ready to scale your
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]"> Business?</span>
                            
                        </h2>

                        <button
                            onClick={() => {
                                const element = document.getElementById('contacts');
                                if (element) {
                                    element.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                            className="cursor-pointer group flex flex-col items-end w-fit bg-transparent border-none p-0"
                        >
                            <span className="text-white text-xs tracking-[0.1em] uppercase font-light group-hover:text-[#f4103f] transition-colors">Consult</span>
                            <div className="w-full h-[1px] bg-gradient-to-r from-[#f4103f] to-[#1140aa] mt-1.5 relative">
                                <span className="absolute right-0 -top-[3px] border-t border-r border-[#1140aa] w-[7px] h-[7px] rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></span>
                            </div>
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Business;
