import React, { useState } from 'react';

const Footer = () => {
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
                    service: formData.service,
                    message: formData.message,
                    _subject: `New Footer Enquiry from ${formData.name}`,
                    _template: "table",
                    _captcha: "false"
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'Web Development',
                    message: ''
                });
                setTimeout(() => setSubmitStatus(null), 5000);
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
        <footer id="contacts" className="w-full pt-32 pb-12 px-[5%] bg-[#050505] relative z-20 border-t border-white/5 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#f4103f]/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
                    
                    {/* Left Side: Brand & Contact Info */}
                    <div className="flex flex-col justify-between space-y-12">
                        <div>
                          <div className="flex items-center gap-6 mb-3">
                            <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                Let's Connect
                            </span>
                            <div className="w-16 h-[0.5px] bg-white/20 relative">
                                <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                            </div>
                           </div>


                            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8 leading-tight">
                                Ready to Start Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]">Next Project?</span>
                            </h2>
                            <p className="text-white/40 text-lg max-w-md leading-relaxed">
                                We turn complex ideas into seamless digital experiences. Reach out and let's discuss how we can help your business grow.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Contact Information</h4>
                                <div className="space-y-4">
                                    <a href="mailto:wearemahat@gmail.com" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#f4103f] group-hover:border-[#f4103f] transition-all">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                        </div>
                                        <span className="text-lg">wearemahat@gmail.com</span>
                                    </a>
                                    <a href="tel:+919747429019" className="group flex items-center gap-4 text-white/70 hover:text-white transition-colors">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#f4103f] group-hover:border-[#f4103f] transition-all">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                        </div>
                                        <span className="text-lg">+91 9747 429019</span>
                                    </a>
                                </div>
                            </div>

                            {/* <div className="flex gap-6">
                                {['Instagram', 'LinkedIn', 'Twitter'].map((social) => (
                                    <a key={social} href="#" className="text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors">
                                        {social}
                                    </a>
                                ))}
                            </div> */}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#f4103f] to-[#1140aa] rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
                            
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Full Name</label>
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/[0.08] transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Email Address</label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="your@email.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/[0.08] transition-all text-sm"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Phone Number</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            type="tel"
                                            placeholder="+91"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/[0.08] transition-all text-sm"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Interest</label>
                                        <div className="relative group/select">
                                            <div
                                                onClick={() => setIsServiceOpen(!isServiceOpen)}
                                                className={`w-full bg-white/5 border ${isServiceOpen ? 'border-[#f4103f]/50 bg-white/[0.08]' : 'border-white/10'} rounded-2xl px-5 py-4 text-white transition-all text-sm cursor-pointer flex justify-between items-center`}
                                            >
                                                <span>{formData.service}</span>
                                                <div className={`transition-transform duration-300 text-white/40 ${isServiceOpen ? 'rotate-180 text-[#f4103f]' : ''}`}>
                                                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </div>
                                            </div>

                                            {isServiceOpen && (
                                                <>
                                                    <div
                                                        className="fixed inset-0 z-[10]"
                                                        onClick={() => setIsServiceOpen(false)}
                                                    ></div>
                                                    <div className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl z-[11] overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                                        {["Web Development", "Graphic Design", "Branding", "Social Media", "Other"].map((option) => (
                                                            <div
                                                                key={option}
                                                                onClick={() => {
                                                                    setFormData(prev => ({ ...prev, service: option }));
                                                                    setIsServiceOpen(false);
                                                                }}
                                                                className={`px-5 py-3 text-sm cursor-pointer transition-colors ${formData.service === option ? 'bg-[#f4103f]/10 text-[#f4103f] font-medium' : 'text-white/60 hover:bg-white/5 hover:text-white'}`}
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

                                <div className="space-y-2">
                                    <label className="text-[10px] text-white/30 uppercase tracking-widest ml-1 font-bold">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#f4103f]/50 focus:bg-white/[0.08] transition-all text-sm resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full py-5 rounded-2xl bg-gradient-to-r ${submitStatus === 'success' ? 'from-green-500 to-green-600' : 'from-[#f4103f] to-[#1140aa]'} text-white font-bold uppercase tracking-[0.2em] text-xs hover:shadow-[0_15px_35px_rgba(244,16,63,0.3)] transition-all duration-500 transform hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50`}
                                >
                                    {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
                                </button>

                                {submitStatus === 'error' && (
                                    <p className="text-red-500 text-[10px] text-center mt-2 font-bold uppercase tracking-widest">
                                        Error! Please try again or email us directly.
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col items-center md:items-start">
                        <p className="text-white/20 text-[10px] text-center md:text-left uppercase tracking-[0.4em]">© 2024 MAHAT STUDIO. ALL RIGHTS RESERVED.</p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                        <div className="h-px w-8 bg-white/10"></div>
                        <p className="text-[10px] text-white/20 text-center uppercase tracking-[0.3em] font-medium">Visualising ideas</p>
                        <div className="h-px w-8 bg-white/10"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

