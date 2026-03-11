import React, { useEffect, useRef, useState } from 'react';
import computerImg from '../assets/computer.png';
import aboutVideo from '../assets/about.mp4';


const ScrollReveal = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we can stop observing
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

const About = ({ setIsContactOpen }) => {
    return (
        <section
            id="about"
            className="relative w-full bg-black/40"
        >
            <div className="relative z-10 w-full flex flex-col pt-20">
                {/* Slide 1: Main Intro */}
                <div className="w-full min-h-screen flex items-center px-[5%] ">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 md:gap-20 w-full">
                            {/* Left Column */}
                            <div className="flex flex-col gap-6 md:gap-10">
                                <div className="flex items-center gap-6">
                                    <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                        Visualising Ideas into Digital Experiences
                                    </span>
                                    <div className="w-16 h-[0.5px] bg-white/20 relative">
                                        <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                                    </div>
                                </div>

                                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                    Fast Digital Agency <br />
                                    in a 
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]"> Simple Way</span>
                                    
                                </h2>

                                <p className="text-white text-sm md:text-base lg:text-lg leading-[1.8] font-normal max-w-[750px] opacity-90">
                                    <span className="font-extralight text-[10px] mr-5 md:mr-10 uppercase tracking-[0.5em] block md:inline mb-4 md:mb-0">ABOUT</span>
                                    MAHAT is a creative digital studio built to deliver complete solutions—from design to development to marketing. We collaborate with businesses, startups, and personal brands to create strong digital identities and high-performing websites. With a combination of UI/UX expertise, frontend development, and creative design, we ensure every project is both visually appealing and functionally effective.
                                </p>
                            </div>

                            {/* Right Column */}
                            <div className="flex flex-col justify-between py-10">
                                <div className="flex flex-col gap-6">
                                    <p className="text-white/80 text-sm md:text-base lg:text-lg leading-[1.6] font-normal max-w-[500px]">
                                        From UI/UX design to robust web development and performance marketing, we provide end-to-end services that drive growth and build lasting connections between brands and their customers.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setIsContactOpen(true)}
                                    className="cursor-pointer group"
                                >
                                    <div className="flex flex-col items-end w-fit">
                                        <span className="text-white text-xs tracking-[0.1em] uppercase font-light">Consult</span>
                                        <div className="w-full h-[1px] bg-gradient-to-r from-[#f4103f] to-[#1140aa] mt-1.5 relative">
                                            <span className="absolute right-0 -top-[3px] border-t border-r border-[#1140aa] w-[7px] h-[7px] rotate-45"></span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Slide 2: Computer Visual */}
                {/* Stats Section */}
                <div className="w-full px-[5%]">
                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-8">
                            {/* Stat 1 */}


                            <div className="flex items-center gap-4">
                                <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">05</span>
                                <div className="flex flex-col">
                                    <span className="text-white text-base md:text-xl font-light leading-tight">Year</span>
                                    <span className="text-white text-base md:text-xl font-light leading-tight">Experience</span>
                                </div>
                            </div>

                            {/* Stat 2 */}
                            <div className="flex items-center gap-4">
                                <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">2.5k</span>
                                <div className="flex flex-col">
                                    <span className="text-white text-base md:text-xl font-light leading-tight">Happy</span>
                                    <span className="text-white text-base md:text-xl font-light leading-tight">Customers</span>
                                </div>
                            </div>

                            {/* Stat 3 */}
                            <div className="flex items-center gap-4">
                                <span className="text-white text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">1.5k</span>
                                <div className="flex flex-col">
                                    <span className="text-white text-base md:text-xl font-light leading-tight">Projects</span>
                                    <span className="text-white text-base md:text-xl font-light leading-tight">Completed</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
                {/* Slide 3: Capabilities */}
                <div className="w-full min-h-screen flex items-center px-[5%] py-20">
                    <ScrollReveal>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                            {/* Left Column: Video with 3D Perspective */}
                            <div className="flex items-center justify-center order-2 lg:order-1 perspective-[1200px]">
                                <div className="relative transition-transform duration-700 hover:scale-105 lg:rotate-y-[20deg] lg:rotate-x-[2deg]" style={{ transformStyle: 'preserve-3d' }}>
                                    <video
                                        src={aboutVideo}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full max-w-[600px] h-auto object-contain mix-blend-screen shadow-[20px_20px_50px_rgba(0,0,0,0.5)]"
                                    />
                                    {/* Subtle Depth Highlight */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Right Column: Content */}
                            <div className="flex flex-col gap-6 order-1 lg:order-2">
                                <div className="flex items-center gap-6">
                                    <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                       Next Creative Digital Agency
                                    </span>
                                    <div className="w-16 h-[0.5px] bg-white/20 relative">
                                        <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                                    </div>
                                </div>
                                <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                    End-to-end Services that
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]"> Drive Growth</span>
                                    
                                </h2>
                                <p className="text-white/80 text-lg leading-[1.8] font-light">
                                <span className="font-extralight text-[10px] mr-5 md:mr-10 uppercase tracking-[0.5em] block md:inline mb-4 md:mb-0">MAHAT</span>
                                    Crafting Digital interfaces That Inspire and Convert. We are a forward-thinking digital studio dedicated to transforming complex challenges into elegant solutions. Our multidisciplinary team combines strategic thinking with pixel-perfect design to help brands stand out in the digital landscape.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default About;
