import React from 'react';
import { Link } from 'react-router';
import logo from '../../assets/MAHAT LOGOwhite.png';

const PortfolioHeader = () => {
    return (
        <header className="fixed top-0 left-0 w-full z-[1000] bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
            <div className="flex justify-between items-center px-[5%] py-2">
                <Link to="/" aria-label="MAHAT home" className="block h-[50px] xs:h-[60px] md:h-[70px]">
                    <img src={logo} alt="MAHAT" className="h-full w-auto object-contain" />
                </Link>

                <Link
                    to="/"
                    className="group flex items-center gap-3 py-3 no-underline uppercase text-[10px] sm:text-xs tracking-[0.2em] font-normal text-white hover:text-[#f4103f] transition-colors duration-500"
                >
                    <svg
                        width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-x-1"
                    >
                        <path d="M15 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </header>
    );
};

export default PortfolioHeader;
