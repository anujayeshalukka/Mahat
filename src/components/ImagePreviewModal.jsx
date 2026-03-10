import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const ImagePreviewModal = ({ isOpen, onClose, image, alt }) => {
    // Prevent scrolling when modal is open
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

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 backdrop-blur-2xl transition-all duration-500 overflow-hidden">
            {/* Overlay Background Animation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f4103f]/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#1140aa]/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            {/* Header / Toolbar */}
            <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-center z-50 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex flex-col">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-1">Template Preview</span>
                    <h3 className="text-white text-lg md:text-xl font-medium tracking-tight">{alt}</h3>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 md:p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f4103f] hover:border-[#f4103f] transition-all duration-500 hover:rotate-90 group"
                >
                    <IoClose className="text-xl md:text-3xl group-hover:scale-110 transition-transform" />
                </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-6 md:p-12 lg:p-20 overflow-hidden">
                <div className="w-full max-w-[800px] aspect-[4/5] relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 group cursor-default">
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-full object-cover object-top transition-all duration-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImagePreviewModal;
