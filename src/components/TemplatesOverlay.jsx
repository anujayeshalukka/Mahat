import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { templates } from '../constants/templates';
import TemplateEnquiryModal from './TemplateEnquiryModal';

const TemplatesOverlay = ({ isOpen, onClose }) => {
    const [isEnquiryOpen, setIsEnquiryOpen] = React.useState(false);
    const [selectedTemplate, setSelectedTemplate] = React.useState(null);

    // Prevent scrolling when overlay is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            const handleEsc = (e) => {
                if (e.key === 'Escape') onClose();
            };
            window.addEventListener('keydown', handleEsc);
            return () => {
                window.removeEventListener('keydown', handleEsc);
                document.body.style.overflow = 'unset';
            };
        }
    }, [isOpen, onClose]);

    const handleEnquire = (template) => {
        setSelectedTemplate(template);
        setIsEnquiryOpen(true);
    };

    const handleFullView = (template) => {
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-start justify-center bg-black/40 backdrop-blur-2xl transition-all duration-500 overflow-hidden">
            {/* Overlay Background Animation */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f4103f]/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1140aa]/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="relative w-full h-full flex flex-col p-6 md:p-12 lg:p-20 z-10 overflow-y-auto overscroll-contain overflow-x-hidden py-10 md:py-20">
                {/* Close Button - Moved out for visibility */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f4103f] hover:border-[#f4103f] transition-all duration-500 hover:rotate-90 group"
                >
                    <IoClose className="text-xl md:text-3xl group-hover:scale-110 transition-transform" />
                </button>
                {/* Header Section */}
                <div className="flex justify-between items-start mb-12 md:mb-16">


<div className="flex flex-col mb-5">
                  
                    <div className="flex items-center gap-6 mb-6">
                                    <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                       Ready-Made Series
                                    </span>
                                    <div className="w-16 h-[0.5px] bg-white/20 relative">
                                        <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                                    </div>
                                </div>

                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                        Premium Website<span className="service-highlight font-light sm:whitespace-normal"> Templates</span>
                    </h2>
                </div>


                </div>

                {/* Templates Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
                    {templates.map((template, idx) => (
                        <div
                            key={template.id}
                            className="group relative flex flex-col gap-6 animate-fadeInUp"
                            style={{ animationDelay: `${idx * 150}ms` }}
                        >
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-[#f4103f]/30 transition-all duration-700">
                                    <img
                                        src={template.img}
                                        alt={template.alt}
                                        className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out cursor-pointer"
                                    />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 gap-3">
                                    <button
                                        onClick={() => handleFullView(template)}
                                        className="w-full py-3 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-[#f4103f] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                    >
                                        Full View
                                    </button>
                                    <button
                                        onClick={() => handleEnquire(template)}
                                        className="w-full py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] uppercase tracking-widest hover:bg-[#f4103f] hover:border-[#f4103f] transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                                    >
                                        Enquire Now
                                    </button>
                                </div>
                            </div>

                            <div className="px-2">
                                <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2 block">Template 0{template.id}</span>
                                <h3 className="text-white text-lg font-normal group-hover:text-[#f4103f] transition-colors duration-300">{template.alt}</h3>
                                <div className="mt-2 flex items-center gap-3">
                                    <span className="text-white font-bold">₹15,000</span>
                                    {/* <span className="text-white/30 line-through text-sm">₹25,000</span> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Info */}
                <div className="mt-auto pt-12 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Instant Setup", desc: "Launch within 48-72 hours" },
                        { title: "Customized Branding", desc: "Colors & logo matched to your brand" },
                        { title: "Full Support", desc: "Technical setup & domain integration" }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start">
                            <div className="w-2 h-2 rounded-full bg-[#f4103f] mt-2"></div>
                            <div>
                                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">{item.title}</h4>
                                <p className="text-white/40 text-xs">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <TemplateEnquiryModal
                isOpen={isEnquiryOpen}
                onClose={() => setIsEnquiryOpen(false)}
                template={selectedTemplate}
            />
        </div>
    );
};

export default TemplatesOverlay;
