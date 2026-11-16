import React from 'react';
import { Link } from 'react-router';

/*
 * Floating "PORTFOLIO ↗" pill. Sits directly below the WhatsApp button
 * (same right edge, same layer) and above the mobile bottom navigation.
 */
const PortfolioButton = () => {
    return (
        <Link
            to="/portfolio"
            aria-label="View our portfolio"
            className="fixed bottom-20 right-5 z-[90] lg:bottom-10 lg:right-10 group block no-underline rounded-full p-px bg-linear-to-r from-[#f4103f] to-[#1140aa] shadow-2xl transition-transform duration-500 hover:-translate-y-0.5 active:scale-95"
        >
            {/* Tighter on phones so the pill stays clear of the hero's centred "Scroll Down" label */}
            <span className="flex items-center gap-1 lg:gap-2 h-9 pl-2.5 pr-2 lg:px-4 rounded-full bg-[#0a0a0a]/95 group-hover:bg-[#0a0a0a]/0 backdrop-blur-xl transition-colors duration-500">
                <span className="text-[9px] lg:text-[10px] text-white uppercase tracking-[0.05em] lg:tracking-[0.2em] font-medium leading-none">
                    Portfolio
                </span>
                <svg
                    width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true"
                    className="text-white transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        </Link>
    );
};

export default PortfolioButton;
