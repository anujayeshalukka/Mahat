import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import logo from '../assets/MAHATicon.png';
import PhoneInput from './PhoneInput';

const ContactModal = ({ isOpen, onClose, selectedPlan }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Web Development',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone) => {
        // Remove country code for length check
        const number = phone.split(' ')[1] || '';
        return number.length >= 8 && number.length <= 15;
    };

    // Handle selected plan pre-fill
    useEffect(() => {
        if (isOpen && selectedPlan && selectedPlan.name) {
            setFormData(prev => ({
                ...prev,
                service: `Pricing Package: ${selectedPlan.name}`,
                message: `I'm interested in the ${selectedPlan.name} package (${selectedPlan.price}).`
            }));
        } else if (isOpen) {
            // Reset to default if no plan (e.g. opened from navbar)
            setFormData(prev => ({
                ...prev,
                service: 'Web Development',
                message: ''
            }));
        }
    }, [isOpen, selectedPlan]);

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Strict Validation
        const newErrors = {};
        if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!validatePhone(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
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
                    service: formData.service,
                    message: formData.message,
                    _subject: `New Contact Enquiry from ${formData.name}`,
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
                    service: 'Web Development',
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

    return (
        <div className="fixed inset-0 z-9999 flex items-start justify-center bg-black/80 backdrop-blur-xl transition-all duration-500 overflow-y-auto p-4 md:p-8 py-10 md:py-20">
            {/* Close Button - Outside modal to prevent clipping */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 md:p-2 rounded-full bg-black/20 border border-white/20 text-white/80 hover:bg-[#f4103f] hover:border-[#f4103f] hover:text-white transition-all duration-300"
            >
                <IoClose className="text-xl md:text-2xl" />
            </button>

            <div className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-4xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-150">

                {/* Left Side: Brand Info */}
                <div className="w-full md:w-[35%] p-10 md:p-12 bg-linear-to-br from-[#06112a] to-[#041947] border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-8 h-8">
                            <img src={logo} alt="MAHAT Logo" className="h-full object-contain" />
                        </div>

                        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 leading-tight">
                            Let's build something <span className="text-[#f4103f]">extraordinary</span> together.
                        </h2>

                        <p className="text-white/60 text-sm md:text-base leading-relaxed mb-8">
                            Have a project in mind? We'd love to hear about it. Tell us your vision and we'll help you bring it to life.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-black/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-[#f4103f]/20 group-hover:text-[#f4103f] transition-all">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Email Us</p>
                                <p className="text-white/80 text-sm">wearemahat@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                            <div className="w-10 h-10 rounded-full bg-black/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-[#f4103f]/20 group-hover:text-[#f4103f] transition-all">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <p className="text-[10px] text-white/30 uppercase tracking-widest font-bold">Call Us</p>
                                <p className="text-white/80 text-sm">+91 9747 429019</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="w-full md:w-[65%] p-10 md:p-12 flex flex-col justify-center bg-[#0a0a0a]">
                    <div className="mb-8 md:mb-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                        <p className="text-white/50 text-sm md:text-base">We'll get back to you within 24 hours.</p>
                    </div>

                    {selectedPlan && selectedPlan.name && (
                        <div className="mb-6 p-4 rounded-2xl bg-[#f4103f]/10 border border-[#f4103f]/20 flex items-center justify-between">
                            <div>
                                <span className="text-[10px] text-[#f4103f] uppercase tracking-widest font-bold block mb-1">Enquiring for Package</span>
                                <h4 className="text-white font-bold text-lg">{selectedPlan.name}</h4>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] text-white/30 uppercase tracking-widest font-bold block mb-1">Starting Price</span>
                                <span className="text-white font-bold text-lg">{selectedPlan.price}</span>
                            </div>
                        </div>
                    )}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm placeholder:text-white/20 shadow-sm"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className={`w-full bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm placeholder:text-white/20 shadow-sm`}
                                />
                                {errors.email && <p className="text-[10px] text-red-500 ml-1">{errors.email}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Phone Number</label>
                                <PhoneInput
                                    required
                                    value={formData.phone}
                                    onChange={(val) => setFormData(prev => ({ ...prev, phone: val }))}
                                    placeholder="00000 00000"
                                    error={errors.phone}
                                />
                                {errors.phone && <p className="text-[10px] text-red-500 ml-1">{errors.phone}</p>}
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Interest</label>
                                <div className="relative group/select">
                                    <div
                                        onClick={() => setIsServiceOpen(!isServiceOpen)}
                                        className={`w-full bg-white/5 border ${isServiceOpen ? 'border-[#f4103f]/50 bg-white/10 ring-4 ring-[#f4103f]/5' : 'border-white/10'} rounded-xl px-4 py-3 text-white transition-all text-sm shadow-sm cursor-pointer flex justify-between items-center`}
                                    >
                                        <span>{formData.service}</span>
                                        <div className={`transition-transform duration-300 text-white/30 ${isServiceOpen ? 'rotate-180 text-[#f4103f]' : ''}`}>
                                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>

                                    {isServiceOpen && (
                                        <>
                                            <div
                                                className="fixed inset-0 z-10"
                                                onClick={() => setIsServiceOpen(false)}
                                            ></div>
                                            <div className="absolute top-full left-0 w-full mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-2xl z-[60] overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                                {["Web Development", "Graphic Design", "Branding", "Social Media", "Other"].map((option) => (
                                                    <div
                                                        key={option}
                                                        onClick={() => {
                                                            setFormData(prev => ({ ...prev, service: option }));
                                                            setIsServiceOpen(false);
                                                        }}
                                                        className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${formData.service === option ? 'bg-[#f4103f]/20 text-[#f4103f] font-medium' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}
                                                    >
                                                        {option}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Message</label>
                            <textarea
                                required
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="3"
                                placeholder="Tell us about your project..."
                                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-5 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/10 transition-all text-sm resize-none placeholder:text-white/20 shadow-sm"
                            ></textarea>
                        </div>

                        <div className="pt-6">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full py-5 rounded-2xl bg-linear-to-r from-[#f4103f] to-[#1140aa] text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_15px_35px_rgba(244,16,63,0.3)] transition-all duration-500 transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:translate-y-0 ${submitStatus === 'success' ? 'from-green-500 to-green-600' : ''}`}
                            >
                                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>
                            {submitStatus === 'error' && (
                                <p className="text-red-500 text-[10px] text-center mt-2 font-bold uppercase tracking-widest">
                                    Something went wrong. Please try again or email us directly.
                                </p>
                            )}
                            {submitStatus === 'success' && (
                                <p className="text-green-500 text-[10px] text-center mt-2 font-bold uppercase tracking-widest">
                                    Thank you! We'll get back to you soon.
                                </p>
                            )}
                        </div>

                        <div className="pt-4 flex items-center justify-center gap-2">
                            <div className="h-px w-8 bg-white/10"></div>
                            <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.3em] font-semibold">
                                Visualising !deas | MAHAT
                            </p>
                            <div className="h-px w-8 bg-white/10"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
