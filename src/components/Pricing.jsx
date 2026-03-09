import React from 'react';

const Pricing = ({ setIsContactOpen }) => {
    const plans = [
        {
            name: "Starter",
            subtitle: "Business Website",
            description: "Best for small businesses & personal brands (Landing/Multiple Pages)",
            price: "₹18,000",
            features: [
                "Custom UI/UX Design",
                "Up to 5 Fully Responsive Pages",
                "App-like User Experience",
                "Lead Capture & Contact Forms",
                "SEO-Ready Website Structure",
                "Free Cloud Hosting Deployment"
            ],
            bonus: [
                "3 Months Free Support",
                "Minor Design & Content Updates",
                "Basic SEO Assistance",
                "Social Media Support (2 posts/month)",
                "Technical Support"
            ],
            color: "#f4103f",
            icon: "🟢"
        },
        {
            name: "Growth",
            subtitle: "Product / Catalog Website",
            description: "Best for shops & showrooms (no online payment)",
            price: "₹30,000",
            features: [
                "Product Listings",
                "Admin Panel / CMS",
                "Product Image Galleries",
                "Category & Product Management",
                "SEO-Ready Structure",
                "Smooth App-like User Experience",
                "WhatsApp Inquiry Integration"
            ],
            bonus: [
                "4 Months Free Support",
                "Minor Updates & Bug Fixes",
                "Basic SEO support",
                "Social Media Support (4 posts/month)",
                "Technical assistance"
            ],
            color: "#ffc107", // Growth yellow from prompt
            icon: "🟡"
        },
        {
            name: "Pro",
            subtitle: "Dynamic Website",
            description: "Best for bookings, dashboards, custom systems (online payment)",
            price: "₹45,000",
            features: [
                "Modern React Frontend",
                "Backend Setup (Supabase / PHP)",
                "Database Integration & User Authentication",
                "Secure Admin Dashboard",
                "Deployment & Launch Support",
                "WhatsApp Inquiry Integration",
                "User Login / Member System",
                "Online Payment Gateway"
            ],
            bonus: [
                "6 Months Free Support",
                "Minor updates & fixes",
                "Basic SEO support",
                "Social Media Support (4 posts/month)",
                "Technical assistance"
            ],
            color: "#1140aa", // Pro blue
            icon: "🔵"
        }
    ];

    return (
        <section id="pricing" className="pricing-section py-20 relative overflow-hidden bg-[#050505]">

            <div className="container mx-auto px-[5%] relative z-10">
                {/* Header Section */}
                <div className="flex flex-col mb-16">

                    <div className="flex items-center gap-6 mb-6">
                        <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                            Pricing Packages
                        </span>
                        <div className="w-16 h-[0.5px] bg-white/20 relative">
                            <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                        </div>
                    </div>

                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                        Flexible Plans for 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f4103f] to-[#1140aa]"> Every Need ?</span>
                        {/* <span className="service-highlight font-light whitespace-nowrap sm:whitespace-normal">Every Need</span> */}
                    </h2>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="pricing-card group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:-translate-y-2 border-white/10 bg-white/5 flex flex-col h-full"
                        >
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="text-xs uppercase tracking-widest opacity-50 mb-2 block">{plan.icon} {plan.name}</span>
                                        <h3 className="text-2xl font-bold text-white mb-2">{plan.subtitle}</h3>
                                        <p className="text-xs text-[#007de0] leading-relaxed min-h-[40px]">{plan.description}</p>
                                    </div>
                                </div>

                                <div className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3 group/feature">
                                            <div className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center transition-colors group-hover:border-[#f4103f]/50">
                                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                                                    <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="text-xs text-white/80 group-hover:text-white transition-colors">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Bonus Section */}
                                <div className="pt-6 border-t border-white/10 mb-8">
                                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#f4103f] mb-4 block">Complimentary Launch Support</span>
                                    <div className="space-y-3">
                                        {plan.bonus.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#5e5e5e]/60"></div>
                                                <span className="text-[11px] text-white/60">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto">
                                <div className="mt-2 mb-5">
                                    <div className="text-xl font-bold text-white mb-2 tracking-tight flex items-baseline gap-1">
                                        {plan.price}
                                        <span className="text-xs font-normal opacity-40 lowercase">onwards</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsContactOpen({ name: plan.name, price: plan.price })}
                                    className="w-full py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 text-xs uppercase tracking-[0.2em] font-bold relative overflow-hidden group/btn"
                                >
                                    <span className="relative z-10">Choose Package</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#f4103f] to-[#1140aa] translate-y-full transition-transform duration-500 group-hover/btn:translate-y-0"></div>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#f4103f]/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#1140aa]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
        </section>
    );
};

export default Pricing;
