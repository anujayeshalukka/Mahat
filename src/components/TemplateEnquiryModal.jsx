import React, { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

const TemplateEnquiryModal = ({ isOpen, onClose, template }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState(null); // 'success' | 'error' | null

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("https://formsubmit.co/ajax/wearemahat@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    _subject: `New Template Enquiry: ${template?.alt || 'Template'} (ID: #${template?.id})`,
                    template_id: template?.id,
                    template_name: template?.alt,
                    _template: "table",
                    _captcha: "false"
                }),
            });

            console.log("FormSubmit Response:", response.status);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
                setTimeout(() => {
                    onClose();
                    setSubmitStatus(null);
                }, 3000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleFullView = () => {
        if (!template?.img) return;
        const newWindow = window.open();
        newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>${template?.alt || 'Template'} - Live Preview</title>
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
    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl transition-all duration-500 overflow-y-auto">
            <div className="relative w-full min-h-screen md:h-auto md:max-h-[90vh] md:w-[95%] lg:w-[85%] bg-[#0a0a0a] border border-white/10 rounded-none md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-1.5 md:p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f4103f] hover:border-[#f4103f] transition-all duration-300"
                >
                    <IoClose className="text-lg md:text-2xl" />
                </button>

                {/* Left Side: Template details */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-8 group cursor-pointer">
                        <img
                            src={template?.img}
                            alt={template?.alt}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                            <button
                                onClick={handleFullView}
                                className="px-6 py-3 rounded-xl bg-white text-black font-bold text-[10px] uppercase tracking-widest hover:bg-[#f4103f] hover:text-white transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                            >
                                Full View
                            </button>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className="px-3 py-1 rounded-full bg-[#f4103f]/10 text-[#f4103f] text-[10px] font-bold uppercase tracking-wider">
                                Ready-Made Series
                            </span>
                            <span className="text-white/50 text-xs">ID: #{template?.id || '001'}</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                            {template?.alt || 'Premium Template'}
                        </h2>

                        <div className="flex items-baseline gap-4">
                            <span className="text-4xl md:text-5xl font-bold text-white">₹15,000</span>
                            <span className="text-white/40 line-through text-lg">₹25,000</span>
                            <span className="text-[#00c853] text-sm font-bold">40% OFF</span>
                        </div>

                        <div className="space-y-4">
                            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                                Get this professionally designed layout fully customized for your brand. Our expert team will handle the heavy lifting while you focus on your business.
                            </p>

                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {[
                                    'Logo Customization',
                                    'Content Updates',
                                    'Image Replacements',
                                    'Color Theme Match',
                                    'Responsive Optimization',
                                    'Domain Integration'
                                ].map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-white/80 text-xs md:text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#f4103f]"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-white/5">
                            <p className="text-white/40 text-[10px] uppercase tracking-widest font-medium">
                                Estimated Delivery: 2-3 Business Days
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Side: Enquiry Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 bg-white/[0.02] flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Enquire Now</h3>
                            <p className="text-white/50 text-sm">Fill out the form below and we'll get back to you within 24 hours.</p>
                        </div>

                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                                <input
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Phone Number</label>
                                    <input
                                        required
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs text-white/40 uppercase tracking-widest ml-1">Your Message (Optional)</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your brand..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm resize-none"
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-4 rounded-xl bg-gradient-to-r ${submitStatus === 'success' ? 'from-green-500 to-green-600' : 'from-[#f4103f] to-[#1140aa]'} text-white font-bold uppercase tracking-widest text-xs hover:shadow-[0_0_20px_rgba(244,16,63,0.3)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50`}
                            >
                                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Enquiry Sent!' : 'Send Enquiry'}
                            </button>

                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-[10px] text-center mt-2 font-bold uppercase tracking-widest leading-relaxed">
                                    Something went wrong. Please try again later.
                                </p>
                            )}

                            <p className="text-[10px] text-white/30 text-center uppercase tracking-tighter">
                                By clicking send, you agree to our contact terms and conditions.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemplateEnquiryModal;
