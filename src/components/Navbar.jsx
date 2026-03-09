import React, { useState } from "react";
import logo from "../assets/MAHAT LOGOwhite.png";
import mahatIcon from "../assets/MAHATicon.png";
import navdetails from "../assets/NAV-DETAILS.png";
import menuIcon from "../assets/menu-white.svg";


const NAV_LINKS = [
    { name: "HOME", href: "#home" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing" },
    { name: "TEMPLATES", href: "#templates" },
    // { name: "PROJECTS", href: "#projects" },
    { name: "CONTACTS", href: "#contacts" }
];

const Navbar = ({ setIsContactOpen, setIsTemplatesOpen }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isHovered, setIsHovered] = useState(false);

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const targetId = href.startsWith('#') ? href.slice(1) : href;
        const element = document.getElementById(targetId);

        if (element) {
            // For Home, we want to scroll to the very top
            if (targetId === 'home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
        setIsMenuOpen(false);
    };


    React.useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            if (scrollPos > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Force Home as active when at the top
            // This handles the sticky Home section which doesn't trigger IntersectionObserver re-entry
            if (scrollPos < 100) {
                setActiveSection("home");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    React.useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: 0.1,
        };

        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersect, observerOptions);

        NAV_LINKS.forEach((link) => {
            const sectionSelector = link.href.startsWith("#") ? link.href.slice(1) : null;
            if (sectionSelector) {
                const element = document.getElementById(sectionSelector);
                if (element) {
                    observer.observe(element);
                }
            }
        });

        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);
    return (
        <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-[5%] pt-2 pb-2 z-[1000] box-border transition-all duration-300 ${scrolled ? "bg-[#041947]/20 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
            <div className={`transition-all duration-700 ${scrolled ? "h-[40px] xs:h-[50px] md:h-[70px]" : "h-[60px] xs:h-[70px] md:h-[110px]"} max-w-full `}>
                <img src={scrolled ? mahatIcon : logo} alt="MAHAT Logo" className="h-full object-contain" />
            </div>

            <div className="flex gap-4 sm:gap-7 md:gap-9 justify-between items-center">
                <div
                    className="hidden lg:flex relative items-center group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Desktop Nav Links */}
                    <div className={`flex items-center transition-all duration-700 ease-in-out ${isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20 pointer-events-none"}`}>
                        <ul className="flex gap-4 sm:gap-7 md:gap-9 list-none m-0 p-0 mr-12">
                            {NAV_LINKS.filter(link => link.href.slice(1) !== activeSection).map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className={`no-underline uppercase text-xs tracking-[0.2em] font-normal transition-colors duration-500 text-white hover:text-[#f4103f]`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Active Section Trigger with Icon */}
                    <div className={`flex items-center gap-3 transition-all duration-500 ease-in-out ${isHovered ? "text-[#999999]" : "text-white"}`}>
                        <span className="transition-transform duration-500">
                            {isHovered ? (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            ) : (
                                <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            )}
                        </span>
                        <a
                            href={`#${activeSection}`}
                            className="text-xs tracking-[0.3em] font-normal uppercase text-white no-underline hover:text-[#f4103f] transition-colors"
                        >
                            {NAV_LINKS.find(link => link.href.slice(1) === activeSection)?.name}
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4 sm:gap-9 md:gap-10">
                    <button
                        onClick={() => setIsTemplatesOpen(true)}
                        className="m-0 p-0 w-8 sm:w-10 bg-transparent border-none cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95"
                    >
                        <img src={navdetails} alt="navdetails" className="h-full w-full object-contain" />
                    </button>


                    <button
                        onClick={() => setIsContactOpen()}
                        className="hidden lg:block bg-gradient-to-r from-[#f4103f] to-[#1140aa] text-white tracking-[0.2em] py-4 px-6 border-none rounded font-normal uppercase text-xs cursor-pointer transition-all duration-200 button-wave"
                    >
                        GET IN TOUCH
                    </button>

                    <button
                        className="lg:hidden cursor-pointer z-[1001] p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <img src={menuIcon} alt="Menu" className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl z-[1000] flex flex-col items-center justify-center p-6 transition-all duration-500 ease-in-out ${isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}`}>
                <ul className="flex flex-col gap-4 xs:gap-6 items-center list-none m-0 p-0 text-center">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className={`no-underline uppercase text-xl xs:text-2xl tracking-[0.2em] xs:tracking-[0.3em] font-light transition-colors ${activeSection === link.href.slice(1) ? "text-[#f4103f]" : "text-white hover:text-[#f4103f]"}`}
                                onClick={(e) => scrollToSection(e, link.href)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="mt-8 bg-gradient-to-r from-[#f4103f] to-[#1140aa] text-white tracking-[0.2em] py-4 px-10 border-none rounded font-normal uppercase text-xs xs:text-sm cursor-pointer button-wave"
                    onClick={() => {
                        setIsMenuOpen(false);
                        setIsContactOpen();
                    }}
                >
                    GET IN TOUCH
                </button>
            </div>

        </nav>
    );
};

export default Navbar;
