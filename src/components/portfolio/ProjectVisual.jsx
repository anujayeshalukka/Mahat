import React from 'react';
import { getMissingImageLabel, getProjectName, getProjectNumber } from '../../constants/projects';

/* Different glow positions so neighbouring temporary blocks do not look identical. */
const GLOWS = [
    { red: '18% 22%', blue: '85% 88%' },
    { red: '82% 18%', blue: '12% 85%' },
    { red: '50% 0%', blue: '50% 110%' },
    { red: '10% 80%', blue: '90% 15%' },
    { red: '88% 70%', blue: '15% 20%' },
    { red: '30% 100%', blue: '75% 0%' },
];

/*
 * Project image. Shows the real thumbnail when one exists; otherwise a
 * branded temporary block that is clearly labelled as awaiting the image.
 */
const ProjectVisual = ({ project, className = '', eager = false }) => {
    const number = getProjectNumber(project);

    if (project.thumbnail) {
        return (
            <img
                src={project.thumbnail}
                alt={`${getProjectName(project)} — project preview`}
                loading={eager ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full object-cover ${className}`}
                style={{ objectPosition: project.thumbnailPosition || 'top' }}
            />
        );
    }

    const glow = GLOWS[(Number(number) - 1) % GLOWS.length];

    return (
        <div
            className={`relative w-full h-full overflow-hidden bg-[#0a0a0a] ${className}`}
            style={{
                backgroundImage: `radial-gradient(circle at ${glow.red}, rgba(244,16,63,0.38), transparent 55%), radial-gradient(circle at ${glow.blue}, rgba(17,64,170,0.5), transparent 60%)`,
            }}
        >
            {/* Fine grid */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                }}
                aria-hidden="true"
            ></div>

            {/* Outlined project number */}
            <span
                className="absolute inset-0 flex items-center justify-center text-[5.5rem] sm:text-[7rem] font-bold tracking-tighter text-transparent select-none"
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.28)' }}
                aria-hidden="true"
            >
                {number}
            </span>

            <span className="absolute left-4 bottom-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[8px] text-white/70 uppercase tracking-[0.25em] font-medium">
                {getMissingImageLabel(project)}
            </span>
        </div>
    );
};

export default ProjectVisual;
