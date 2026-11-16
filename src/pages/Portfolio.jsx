import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { CATEGORIES, projects } from '../constants/projects';
import { WHATSAPP_URL } from '../constants/contact';
import PortfolioLayout from '../components/portfolio/PortfolioLayout';
import CategoryFilter from '../components/portfolio/CategoryFilter';
import ProjectCard from '../components/portfolio/ProjectCard';
import useSeo from '../components/portfolio/useSeo';

const FILTERS = [
    { id: 'all', label: 'All Projects', count: projects.length },
    ...CATEGORIES.map((category) => ({
        ...category,
        count: projects.filter((project) => project.category === category.id).length,
    })),
];

/* The project lifecycle MAHAT takes ownership of, from first idea to launch. */
const LIFECYCLE = [
    'Research',
    'Strategy',
    'UI/UX Design',
    'Visual Design',
    'Development',
    'Integration',
    'Testing',
    'Deployment',
];

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    useSeo({
        title: 'MAHAT Portfolio | AI-Integrated Digital & Creative Studio',
        description:
            "Explore MAHAT's digital and creative projects, from corporate websites and e-commerce platforms to web applications and original character development. Strategy, design and development from concept to completion.",
        path: '/portfolio',
    });

    const visibleProjects =
        activeFilter === 'all'
            ? projects
            : projects.filter((project) => project.category === activeFilter);

    return (
        <PortfolioLayout>
            {(openContact) => (
                <>
                    {/* Hero */}
                    <section className="relative px-[5%] pt-36 md:pt-48 pb-14 md:pb-20 overflow-hidden">
                        <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
                            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-[#f4103f]/10 rounded-full blur-[140px]"></div>
                            <div className="absolute top-[10%] right-[-15%] w-[45%] h-[45%] bg-[#1140aa]/15 rounded-full blur-[120px]"></div>
                        </div>

                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-6 mb-6 opacity-0 animate-fadeInUp">
                                <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                    Portfolio
                                </span>
                                <div className="w-16 h-[0.5px] bg-white/20 relative">
                                    <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                                </div>
                                <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] font-light">
                                    AI-Integrated Digital &amp; Creative Studio
                                </span>
                            </div>

                            <h1
                                className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 opacity-0 animate-fadeInUp"
                                style={{ animationDelay: '100ms' }}
                            >
                                From Concept to Completion. <br className="hidden sm:block" />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f4103f] to-[#1140aa]">
                                    Powered by AI.
                                </span>{' '}
                                <br className="hidden sm:block" />
                                Delivered by MAHAT.
                            </h1>

                            <p
                                className="text-white/70 text-sm md:text-lg font-light max-w-2xl leading-relaxed mb-10 opacity-0 animate-fadeInUp"
                                style={{ animationDelay: '200ms' }}
                            >
                                MAHAT is an AI-integrated digital and creative studio delivering end-to-end digital
                                experiences.
                            </p>

                            <div
                                className="flex flex-wrap items-center gap-4 opacity-0 animate-fadeInUp"
                                style={{ animationDelay: '300ms' }}
                            >
                                <button
                                    type="button"
                                    onClick={openContact}
                                    className="bg-linear-to-r from-[#f4103f] to-[#1140aa] text-white tracking-[0.2em] py-4 px-8 border-none rounded font-normal uppercase text-xs cursor-pointer transition-all duration-200 button-wave"
                                >
                                    Start a Project
                                </button>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 py-4 px-6 rounded border border-white/15 text-white no-underline uppercase text-xs tracking-[0.2em] font-normal hover:border-[#25D366]/60 hover:text-[#25D366] transition-colors duration-300"
                                >
                                    <IoLogoWhatsapp size={16} aria-hidden="true" />
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </section>

                    {/* Lifecycle strip */}
                    <section aria-label="Project lifecycle" className="relative px-[5%] pb-16 md:pb-24">
                        <div className="max-w-7xl mx-auto border-y border-white/10 py-6">
                            <ol className="flex flex-wrap items-center gap-x-4 gap-y-3 list-none m-0 p-0">
                                {LIFECYCLE.map((step, index) => (
                                    <li key={step} className="flex items-center gap-4">
                                        <span className="flex items-baseline gap-2">
                                            <span className="text-[#f4103f] text-[9px] tracking-widest font-bold">
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                            <span className="text-white text-[10px] md:text-xs uppercase tracking-[0.2em] font-normal">
                                                {step}
                                            </span>
                                        </span>
                                        {index < LIFECYCLE.length - 1 && (
                                            <span className="w-4 md:w-6 h-px bg-white/20" aria-hidden="true"></span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </section>

                    {/* Projects */}
                    <section aria-label="Projects" className="relative px-[5%] pb-24 md:pb-32">
                        <div className="max-w-7xl mx-auto">
                            <div className="mb-10 md:mb-14">
                                <CategoryFilter
                                    options={FILTERS}
                                    active={activeFilter}
                                    onChange={setActiveFilter}
                                />
                            </div>

                            {visibleProjects.length > 0 ? (
                                <div
                                    key={activeFilter}
                                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-x-10"
                                >
                                    {visibleProjects.map((project, index) => (
                                        <ProjectCard key={project.slug} project={project} index={index} />
                                    ))}
                                </div>
                            ) : (
                                <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-16 text-center">
                                    <p className="text-white/60 text-sm">
                                        Projects in this category will be added soon.
                                    </p>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Studio positioning */}
                    <section aria-label="About the studio" className="relative px-[5%] pb-24 md:pb-32">
                        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 lg:gap-16 border-t border-white/10 pt-14 md:pt-20">
                            <div>
                                <div className="flex items-center gap-6 mb-6">
                                    <span className="text-white text-sm md:text-base tracking-[0.05em] font-medium">
                                        The Studio
                                    </span>
                                    <div className="w-16 h-[0.5px] bg-white/20 relative">
                                        <span className="absolute right-0 top-[-2px] w-[6px] h-[6px] border-t border-r border-white/20 rotate-45"></span>
                                    </div>
                                </div>
                                <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight leading-tight m-0">
                                    One studio. <br />
                                    Complete execution. <br />
                                    <span className="service-highlight font-light">From A to Z.</span>
                                </h2>
                            </div>

                            <div className="space-y-6 text-white/70 text-sm md:text-base font-light leading-relaxed max-w-3xl">
                                <p className="m-0">
                                    From initial research and strategy to UI/UX design, visual development, website
                                    development, integrations, testing and deployment, MAHAT takes ownership of the
                                    complete project lifecycle.
                                </p>
                                <p className="m-0">
                                    We combine human creativity, design expertise and AI-powered workflows to build
                                    meaningful digital experiences, business websites, e-commerce platforms, web
                                    applications and creative digital projects.
                                </p>
                            </div>
                        </div>
                    </section>
                </>
            )}
        </PortfolioLayout>
    );
};

export default Portfolio;
