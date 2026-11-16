import React from 'react';

const CategoryFilter = ({ options, active, onChange }) => {
    return (
        <div
            role="group"
            aria-label="Filter projects by category"
            className="flex gap-3 overflow-x-auto md:flex-wrap md:overflow-visible -mx-[5vw] px-[5vw] md:mx-0 md:px-0 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
            {options.map((option) => {
                const isActive = option.id === active;
                return (
                    <button
                        key={option.id}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => onChange(option.id)}
                        className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-full border text-[10px] uppercase tracking-[0.2em] font-medium cursor-pointer transition-all duration-300 ${
                            isActive
                                ? 'bg-linear-to-r from-[#f4103f] to-[#1140aa] border-transparent text-white'
                                : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/30'
                        }`}
                    >
                        {option.label}
                        <span className={`text-[9px] ${isActive ? 'text-white/80' : 'text-white/30'}`}>
                            {String(option.count).padStart(2, '0')}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};

export default CategoryFilter;
