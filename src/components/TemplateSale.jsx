import React from 'react';
import { templates } from '../constants/templates';
import TemplateEnquiryModal from './TemplateEnquiryModal';

const TemplateSale = () => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [selectedTemplate, setSelectedTemplate] = React.useState(null);

    const openEnquiryModal = (e, template) => {
        e.stopPropagation(); // Prevent card click from triggering
        setSelectedTemplate(template);
        setIsModalOpen(true);
    };

    const handlePreview = (template) => {
        const newWindow = window.open();
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${template.alt} - Live Preview</title>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        background-color: #050505;
                        overflow-x: hidden;
                    }
                    img {
                        width: 100%;
                        height: auto;
                        display: block;
                    }
                </style>
            </head>
            <body>
                <img src="${template.img}" alt="${template.alt}">
            </body>
            </html>
        `);
        newWindow.document.close();
    };

    return (
        <section id="templates" className="py-24 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-[5%] relative z-10">
                {/* Header Section */}
                <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-10 md:gap-20 w-full mb-16">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6 md:gap-10">
                        <div className="flex items-center gap-6">
                            <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                Instant Launch Hub
                            </span>
                            <div className="w-16 h-[0.5px] bg-white/20 relative">
                                <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                            </div>
                        </div>

                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                            Ready-Made Website 
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]"> Templates</span>
                        
                        </h2>

                        <p className="text-white text-sm md:text-base lg:text-lg leading-[1.8] font-normal max-w-[750px] opacity-90">
                            Accelerate your digital presence with our high-performance website templates. We offer a curated selection of pre-built, premium layouts designed to give your business a professional edge without the long development wait. Each design is optimized for speed, conversion, and seamless user experience.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-[#007de0] uppercase tracking-widest text-xs font-bold mb-4">Perfect for:</h4>
                                <ul className="grid grid-cols-3">
                                    {['Small businesses', 'Freelancers', 'Quick launches'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-1 text-white/80 text-sm">
                                            <div className="w-1 h-1 rounded-full bg-[#f4103f]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col justify-between py-10">
                        <div className="flex flex-col gap-6">
                            <p className="text-white/80 text-sm md:text-base lg:text-lg leading-[1.6] font-normal max-w-[500px]">
                                Looking for a budget-friendly option? Our ready-made series allows you to skip the design phase and go live instantly.
                            </p>
                            <div className="p-4 rounded-xl relative overflow-hidden group/note">
                                <div className="absolute inset-0 bg-white/5 opacity-50"></div>
                                <p className="relative z-10 text-xs text-white/70 italic leading-relaxed">
                                    "We professionally customize the logo, images, and content to match your brand's specific needs."
                                </p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <div className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-xl">
                                <span className="text-xs text-white/50 uppercase tracking-widest block mb-1">Fixed Price</span>
                                <span className="text-3xl font-bold text-white">₹15,000</span>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            onClick={() => handlePreview(template)}
                            className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 aspect-[4/5] transition-all duration-500 hover:border-[#f4103f]/50 cursor-pointer shadow-2xl"
                        >
                            <img
                                src={template.img}
                                alt={template.alt}
                                className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                                <span className="text-white text-lg font-bold tracking-[0.2em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    Full View
                                </span>
                                <div className="w-12 h-[2px] bg-gradient-to-r from-[#f4103f] to-[#1140aa] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></div>
                                
                                <button
                                    onClick={(e) => openEnquiryModal(e, template)}
                                    className="mt-8 px-6 py-2 rounded-full border border-white/20 bg-white/5 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 delay-100"
                                >
                                    Enquire Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                {/* <div className="mt-16 flex justify-center">
                    <button
                        onClick={() => openEnquiryModal(templates[0])}
                        className="px-10 py-5 rounded-2xl bg-gradient-to-r from-[#f4103f] to-[#1140aa] text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_0_30px_rgba(244,16,63,0.3)] transition-all duration-500 button-wave"
                    >
                        Purchase A Template
                    </button>
                </div> */}
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f4103f]/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1140aa]/5 rounded-full blur-[120px] pointer-events-none"></div>

            <TemplateEnquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                template={selectedTemplate}
            />
        </section>
    );
};

export default TemplateSale;
