import React from 'react';

const DOT = {
    live: 'bg-[#25D366]',
    accent: 'bg-linear-to-r from-[#f4103f] to-[#1140aa]',
    neutral: 'bg-white/50',
};

/* Small project-status pill: Live, Completed, Coming Soon, Confidential, In Development. */
const StatusBadge = ({ status, className = '' }) => {
    if (!status) return null;

    return (
        <span
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[8px] text-white uppercase tracking-[0.25em] font-medium whitespace-nowrap ${className}`}
        >
            <span className={`w-1.5 h-1.5 rounded-full ${DOT[status.tone] || DOT.neutral}`} aria-hidden="true"></span>
            {status.label}
        </span>
    );
};

export default StatusBadge;
