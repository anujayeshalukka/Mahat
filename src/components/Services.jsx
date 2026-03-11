import React from 'react';
import uiuxIcon from '../assets/uiux.svg';
import digitalIcon from '../assets/digital.svg';
import developmentIcon from '../assets/developement.svg';
import brandingIcon from '../assets/branding.svg';

const Services = ({ setIsContactOpen }) => {
    const services = [
        {
            title: "BRANDING",
            description: "Creative Design team on demand that can design, build, ship and scale your real vision.",
            icon: brandingIcon
        },
        {
            title: "UI/UX DESIGNING",
            description: "We design clean, user-friendly, and modern interfaces that improve user experience and engagement.",
            icon: uiuxIcon
        },
        {
            title: "DEVELOPMENT",
            description: "Creative Design team on demand that can design, build, ship and scale your real vision.",
            icon: developmentIcon
        },
        {
            title: "DIGITAL MARKETING",
            description: "Creative Design team on demand that can design, build, ship and scale your real vision.",
            icon: digitalIcon
        }
    ];

    return (
        <section id="services" className="services-section">

            <div className="container mx-auto px-[5%] relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Column */}
                    <div className="lg:w-1/2">
                        {/* <div className="flex items-center gap-4 mb-8">
                            <span className="text-sm uppercase tracking-widest opacity-60">Our Special Services</span>
                            <div className="h-[1px] w-12 bg-white opacity-40"></div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                                <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div> */}
                        <div className="flex items-center gap-6 mb-6">
                            <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                Our Special Services
                            </span>
                            <div className="w-16 h-[0.5px] bg-white/20 relative">
                                <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                            </div>
                        </div>



                        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            Services We Provide to Make Our 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]"> Client Happy</span>
                            {/* <span className="service-highlight font-light whitespace-nowrap sm:whitespace-normal">Client Happy</span> */}
                        </h2>

                        <p className="mt-6 md:mt-10 text-white text-sm md:text-base lg:text-lg leading-[1.8] font-normal max-w-[750px] opacity-90">
                            <span className="font-extralight text-[10px] mr-5 md:mr-10 uppercase tracking-[0.5em] block md:inline mb-4 md:mb-0">SERVICES</span>
                           At MAHAT, we help businesses bring their ideas to life online. From website design and UI/UX development to landing pages and custom web solutions, we create digital experiences that are both beautiful and easy to use. Our goal is to build websites that not only look great but also help brands connect with their audience, grow their presence, and move closer to their business goals.
                        </p>

                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="cursor-pointer group mt-10"
                        >
                            <div className="flex flex-col items-end w-fit">
                                <span className="text-white text-xs tracking-[0.1em] uppercase font-light">Consult</span>
                                <div className="w-full h-[1px] bg-gradient-to-r from-[#f4103f] to-[#1140aa] mt-1.5 relative">
                                    <span className="absolute right-0 -top-[3px] border-t border-r border-[#1140aa] w-[7px] h-[7px] rotate-45"></span>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Right Column */}
                    <div className="lg:w-1/2 w-full">
                        <div className="flex flex-col">
                            {services.map((service, index) => (
                                <div key={index} className="service-card group">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="service-icon"
                                    />
                                    <div className="service-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;
