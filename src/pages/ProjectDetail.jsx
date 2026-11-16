import React from 'react';
import { Link, useParams } from 'react-router';
import {
    getMissingImageLabel,
    getProjectBySlug,
    getProjectName,
    getProjectNumber,
    projects,
} from '../constants/projects';
import PortfolioLayout from '../components/portfolio/PortfolioLayout';
import ProjectVisual from '../components/portfolio/ProjectVisual';
import StatusBadge from '../components/portfolio/StatusBadge';
import useSeo from '../components/portfolio/useSeo';

const ArrowLeft = ({ className = '' }) => (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" className={className}>
        <path d="M15 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowRight = ({ className = '' }) => (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" className={className}>
        <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowOut = () => (
    <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BackToPortfolio = () => (
    <Link
        to="/portfolio"
        className="group inline-flex items-center gap-3 no-underline text-white/60 hover:text-white text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300"
    >
        <ArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
        All Projects
    </Link>
);

/* One quick-fact cell under the title. Hidden when it has no value. */
const Fact = ({ label, children }) => {
    if (!children) return null;
    return (
        <div>
            <dt className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold mb-3">{label}</dt>
            <dd className="m-0 text-white text-sm leading-relaxed">{children}</dd>
        </div>
    );
};

/* One numbered case-study block. */
const Block = ({ number, title, children }) => (
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-16 py-10 border-t border-white/10">
        <div className="flex items-baseline gap-4">
            <span className="text-[#f4103f] text-[10px] tracking-widest font-bold">{number}</span>
            <h2 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide m-0">{title}</h2>
        </div>
        <div className="text-white/70 text-sm md:text-base font-light leading-relaxed">{children}</div>
    </section>
);

const ChipList = ({ items }) => (
    <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
        {items.map((item) => (
            <li
                key={item}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] text-white/70 uppercase tracking-widest"
            >
                {item}
            </li>
        ))}
    </ul>
);

const LiveLink = ({ project, className = '' }) =>
    project.liveUrl ? (
        <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit the ${getProjectName(project)} website (opens in a new tab)`}
            className={`inline-flex items-center gap-2 text-white hover:text-[#f4103f] transition-colors duration-300 ${className}`}
        >
            Visit Website
            <ArrowOut />
        </a>
    ) : null;

/* Builds the numbered text blocks for a project, skipping anything left empty. */
const getBlocks = (project) => {
    const creative = project.layout === 'creative';
    const blocks = [
        { title: 'Overview', body: project.overview },
        { title: creative ? 'Creative Objective' : 'Client Requirement', body: project.objective },
        { title: 'The Challenge', body: project.challenge },
        { title: "MAHAT's Approach", body: project.approach },
        { title: 'Solution & Deliverables', body: project.solution },
        { title: "MAHAT's Contribution", body: project.contribution },
        ...project.highlights.map((group) => ({
            title: group.title,
            body: group.items.length > 0 ? <ChipList items={group.items} /> : null,
        })),
        {
            title: 'Technology Stack',
            body: project.technologies.length > 0 ? <ChipList items={project.technologies} /> : null,
        },
    ];
    return blocks.filter((block) => Boolean(block.body));
};

const Gallery = ({ project }) => {
    if (project.gallery.length === 0) return null;
    const name = getProjectName(project);

    return (
        <section className="py-10 border-t border-white/10">
            <h2 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide m-0 mb-8">
                {project.layout === 'creative' ? 'Artwork' : 'Project Gallery'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {project.gallery.map((image) => (
                    <figure
                        key={image.src}
                        className={`m-0 rounded-3xl overflow-hidden border border-white/10 bg-white/5 ${
                            image.type === 'mobile' ? 'md:max-w-xs md:justify-self-center' : ''
                        }`}
                    >
                        <img
                            src={image.src}
                            alt={image.alt || `${name} screenshot`}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-auto block"
                        />
                    </figure>
                ))}
            </div>
        </section>
    );
};

const EnquiryAndNext = ({ project, openContact }) => {
    const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

    return (
        <section className="mt-10 relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] p-8 md:p-14">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#f4103f]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" aria-hidden="true"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1140aa]/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" aria-hidden="true"></div>

            <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight leading-tight m-0">
                    Have a project <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f4103f] to-[#1140aa]">in mind?</span>
                </h2>
                <div className="flex flex-wrap items-center gap-6">
                    <button
                        type="button"
                        onClick={openContact}
                        className="bg-linear-to-r from-[#f4103f] to-[#1140aa] text-white tracking-[0.2em] py-4 px-8 border-none rounded font-normal uppercase text-xs cursor-pointer transition-all duration-200 button-wave"
                    >
                        Start a Project
                    </button>
                    {nextProject !== project && (
                        <Link
                            to={`/portfolio/${nextProject.slug}`}
                            className="group inline-flex items-center gap-3 no-underline text-white hover:text-[#f4103f] text-[10px] uppercase tracking-[0.2em] font-medium transition-colors duration-300"
                        >
                            Next: {getProjectName(nextProject)}
                            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

const TitleMeta = ({ project }) => (
    <div className="flex flex-wrap items-center gap-3 mb-5">
        <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
            {getProjectNumber(project)}
        </span>
        <span className="w-6 h-px bg-white/15"></span>
        <span className="text-[#f4103f] text-[10px] uppercase tracking-widest font-medium">
            {project.categoryLabel}
        </span>
        <StatusBadge status={project.status} className="ml-1" />
    </div>
);

const Notice = ({ children }) =>
    children ? (
        <p className="mb-12 md:mb-16 px-5 py-4 rounded-2xl border border-white/10 bg-white/5 text-white/70 text-xs md:text-sm font-light leading-relaxed max-w-3xl">
            {children}
        </p>
    ) : null;

/* Website, product and application projects. */
const DefaultLayout = ({ project, openContact }) => {
    const name = getProjectName(project);
    const blocks = getBlocks(project);

    return (
        <article className="px-[5%] pt-32 md:pt-44 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <BackToPortfolio />

                <header className="mt-10 mb-12 md:mb-16">
                    <TitleMeta project={project} />
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
                        {name}
                    </h1>
                    <p className="text-white/70 text-sm md:text-lg font-light max-w-2xl leading-relaxed">
                        {project.description}
                    </p>
                    {project.liveUrl && (
                        <LiveLink
                            project={project}
                            className="mt-8 py-4 px-6 rounded border border-white/15 no-underline uppercase text-xs tracking-[0.2em] font-normal hover:border-[#f4103f]/60"
                        />
                    )}
                </header>

                {/* 16:10 matches the homepage screenshots, so banners are shown uncropped */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-white/10 bg-white/5 mb-12 md:mb-16">
                    <ProjectVisual project={project} eager />
                </div>

                <Notice>{project.notice}</Notice>

                <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 m-0 mb-12 md:mb-16">
                    <Fact label="Category">{project.categoryLabel}</Fact>
                    <Fact label="Status">{project.status?.label}</Fact>
                    <Fact label="Website">
                        {project.liveUrl ? <LiveLink project={project} className="break-all" /> : null}
                    </Fact>
                </dl>

                <div>
                    {blocks.map((block, index) => (
                        <Block key={block.title} number={String(index + 1).padStart(2, '0')} title={block.title}>
                            {block.body}
                        </Block>
                    ))}
                </div>

                <Gallery project={project} />
                <EnquiryAndNext project={project} openContact={openContact} />
            </div>
        </article>
    );
};

/*
 * Creative / character projects. Leads with the artwork and the creative
 * scope instead of website facts, and never shows a website link.
 */
const CreativeLayout = ({ project, openContact }) => {
    // First word light, the rest in the brand gradient.
    const [firstWord, ...restOfName] = getProjectName(project).split(' ');
    const scope = project.highlights[0];

    return (
        <article className="px-[5%] pt-32 md:pt-44 pb-24 md:pb-32">
            <div className="max-w-7xl mx-auto">
                <BackToPortfolio />

                <header className="mt-10 mb-12 md:mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end">
                    <div>
                        <TitleMeta project={project} />
                        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight m-0">
                            <span className="font-extralight">{firstWord}</span>{' '}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#f4103f] to-[#1140aa]">
                                {restOfName.join(' ')}
                            </span>
                        </h1>
                    </div>
                    <div>
                        <p className="text-white text-[10px] uppercase tracking-[0.3em] font-light mb-4">
                            Creative IP &middot; Storytelling
                        </p>
                        <p className="text-white/70 text-sm md:text-lg font-light leading-relaxed m-0">
                            {project.overview || project.description}
                        </p>
                    </div>
                </header>

                {/* Artwork leads the page */}
                <div className="relative aspect-[16/9] rounded-3xl md:rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 mb-12 md:mb-16">
                    <ProjectVisual project={project} eager />
                </div>

                <Notice>{project.notice}</Notice>

                {/* Creative scope as a numbered grid */}
                {scope && scope.items.length > 0 && (
                    <section className="py-10 border-t border-white/10">
                        <h2 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide m-0 mb-8">
                            {scope.title}
                        </h2>
                        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none m-0 p-0">
                            {scope.items.map((item, index) => (
                                <li
                                    key={item}
                                    className="rounded-3xl border border-white/10 bg-white/5 p-6 min-h-32 flex flex-col justify-between gap-6 hover:border-[#f4103f]/30 transition-colors duration-500"
                                >
                                    <span className="text-[#f4103f] text-[10px] tracking-widest font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-white text-sm font-normal leading-snug">{item}</span>
                                </li>
                            ))}
                        </ol>
                    </section>
                )}

                {project.objective && (
                    <section className="py-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-16">
                        <h2 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide m-0">
                            Creative Objective
                        </h2>
                        <p className="text-white/70 text-sm md:text-base font-light leading-relaxed m-0">
                            {project.objective}
                        </p>
                    </section>
                )}

                {project.contribution && (
                    <section className="py-10 border-t border-white/10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 lg:gap-16">
                        <h2 className="text-white text-lg md:text-xl font-bold uppercase tracking-wide m-0">
                            MAHAT&apos;s Contribution
                        </h2>
                        <p className="text-white/70 text-sm md:text-base font-light leading-relaxed m-0">
                            {project.contribution}
                        </p>
                    </section>
                )}

                {project.gallery.length === 0 && !project.thumbnail && (
                    <p className="py-10 border-t border-white/10 m-0 text-white/40 text-xs font-light">
                        {getMissingImageLabel(project)}: approved character artwork will be shown here.
                    </p>
                )}

                <Gallery project={project} />
                <EnquiryAndNext project={project} openContact={openContact} />
            </div>
        </article>
    );
};

const NotFound = () => {
    useSeo({
        title: 'Project not found | MAHAT Portfolio',
        description: 'This project could not be found in the MAHAT portfolio.',
        path: '/portfolio',
        noindex: true,
    });

    return (
        <PortfolioLayout>
            {() => (
                <section className="px-[5%] pt-40 md:pt-52 pb-32 min-h-[70vh]">
                    <div className="max-w-7xl mx-auto">
                        <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                            Project <span className="service-highlight font-light">not found</span>
                        </h1>
                        <p className="text-white/60 text-sm md:text-base font-light mb-10 max-w-xl leading-relaxed">
                            This project does not exist or may have been moved.
                        </p>
                        <BackToPortfolio />
                    </div>
                </section>
            )}
        </PortfolioLayout>
    );
};

const ProjectPage = ({ project }) => {
    useSeo({
        title: `${getProjectName(project)} | MAHAT Portfolio`,
        description: project.description,
        path: `/portfolio/${project.slug}`,
        noindex: !project.indexable,
    });

    const Layout = project.layout === 'creative' ? CreativeLayout : DefaultLayout;

    return (
        <PortfolioLayout>
            {(openContact) => <Layout project={project} openContact={openContact} />}
        </PortfolioLayout>
    );
};

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProjectBySlug(slug);

    // `key` resets the page state when moving between projects.
    return project ? <ProjectPage key={project.slug} project={project} /> : <NotFound />;
};

export default ProjectDetail;
