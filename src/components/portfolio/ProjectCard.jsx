import React from 'react';
import { Link } from 'react-router';
import { getProjectName, getProjectNumber } from '../../constants/projects';
import ProjectVisual from './ProjectVisual';
import StatusBadge from './StatusBadge';

const ProjectCard = ({ project, index = 0 }) => {
    const name = getProjectName(project);
    const detailPath = `/portfolio/${project.slug}`;

    return (
        <article
            className="group relative flex flex-col gap-6 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <Link
                to={detailPath}
                aria-label={`View ${name}`}
                className="relative block aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-white/5 group-hover:border-[#f4103f]/30 transition-all duration-700"
            >
                <ProjectVisual
                    project={project}
                    className="group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <StatusBadge
                    status={project.status}
                    className={`absolute top-4 ${project.badgeSide === 'left' ? 'left-4' : 'right-4'}`}
                />
            </Link>

            <div className="px-2 flex flex-col grow">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                        {getProjectNumber(project)}
                    </span>
                    <span className="w-6 h-px bg-white/15 shrink-0"></span>
                    <span className="text-[#f4103f] text-[10px] uppercase tracking-widest font-medium">
                        {project.categoryLabel}
                    </span>
                </div>

                <h3 className="text-white text-lg md:text-xl font-normal mb-2 group-hover:text-[#f4103f] transition-colors duration-300">
                    <Link to={detailPath} className="no-underline text-inherit">{name}</Link>
                </h3>

                <p className="text-white/60 text-xs leading-relaxed mb-5">{project.description}</p>

                <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
                    <Link
                        to={detailPath}
                        className="group/link inline-flex items-center gap-2 no-underline text-white text-[10px] uppercase tracking-[0.2em] font-medium hover:text-[#f4103f] transition-colors duration-300"
                    >
                        {project.actionLabel || 'View Project'}
                        <svg width="14" height="8" viewBox="0 0 16 10" fill="none" aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">
                            <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Link>

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit the ${name} website (opens in a new tab)`}
                            className="inline-flex items-center gap-2 no-underline text-white/60 text-[10px] uppercase tracking-[0.2em] font-medium hover:text-white transition-colors duration-300"
                        >
                            Visit Website
                            <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
