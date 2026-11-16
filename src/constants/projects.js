/*
 * MAHAT portfolio — central project data.
 *
 * Everything shown on /portfolio and /portfolio/<slug> comes from this file.
 * To add or update a project, edit this file only; the layout picks it up.
 *
 * ── Fields ───────────────────────────────────────────────────────────────
 *   slug           URL: /portfolio/<slug>
 *   name           Project name
 *   category       Filter id — one of the CATEGORIES ids below (one per project)
 *   categoryLabel  Category text shown on the card and detail page
 *   status         One of the STATUS entries below
 *   layout         'default' (website / product projects) or 'creative'
 *   description    One or two sentences for the card and page intro
 *   overview, objective, challenge, approach, solution, contribution
 *                  Case-study text. Any field left null is hidden on the page,
 *                  so nothing has to be filled with guesses.
 *   highlights     Lists shown as chips: [{ title, items: [] }]
 *   technologies   Only list what has been confirmed. Empty = section hidden.
 *   thumbnailPosition  Optional. Which part of the image stays in view if it is cropped
 *                  (CSS object-position, e.g. '70% 50%'). Defaults to the top of the image.
 *   badgeSide      Optional. 'left' moves the status badge to the top-left of the card image.
 *   liveUrl        Public website, or null. No link is shown when null.
 *   indexable      false = search engines are told not to index the detail page.
 *                  Set to true once the content and screenshots are approved,
 *                  and add the URL to public/sitemap.xml at the same time.
 *   notice         Optional short note shown near the top of the detail page
 *
 * ── Images ───────────────────────────────────────────────────────────────
 * Put optimised WebP files in public/projects/<assetFolder>/ and reference
 * them by path. Suggested names:
 *
 *   thumbnail.webp      card image, 4:3, about 1200px wide
 *   desktop-home.webp   desktop homepage
 *   inner-01.webp       inner page or important section
 *   mobile-01.webp      mobile screenshot
 *   feature-01.webp     special feature
 *
 *   thumbnail: '/projects/annamz/thumbnail.webp',
 *   gallery: [
 *     { src: '/projects/annamz/desktop-home.webp', alt: 'Annamz homepage', type: 'desktop' },
 *     { src: '/projects/annamz/mobile-01.webp', alt: 'Annamz on mobile', type: 'mobile' },
 *   ],
 *
 * While `thumbnail` is null the page shows a branded temporary block labelled
 * "Screenshot to be added" (or "Artwork to be added" for creative projects).
 */

export const CATEGORIES = [
    { id: 'corporate', label: 'Corporate Websites' },
    { id: 'business', label: 'Business Websites' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'webapp', label: 'Web Applications' },
    { id: 'creative', label: 'Creative Development' },
];

/* `tone` only controls the colour of the status dot. */
export const STATUS = {
    live: { label: 'Live', tone: 'live' },
    completed: { label: 'Completed', tone: 'neutral' },
    comingSoon: { label: 'Coming Soon', tone: 'accent' },
    confidential: { label: 'Confidential', tone: 'neutral' },
    inDevelopment: { label: 'In Development', tone: 'accent' },
};

export const PLACEHOLDER_LABEL = 'Content to be added';

const projectList = [
    {
        // Features below were checked against the live site on 2026-11-11.
        slug: 'rubglue',
        name: 'Rubglue',
        category: 'business',
        categoryLabel: 'Business / Product Website',
        status: STATUS.live,
        layout: 'default',
        description:
            'A multilingual product website for Rubglue, showcasing its rubber coating and rain protection products.',
        overview:
            'A multilingual product website for Rubglue, showcasing its rubber coating and rain protection products in English and Malayalam.',
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'End-to-end project delivery.',
        highlights: [
            {
                title: 'Key Features',
                items: [
                    'English and Malayalam language support',
                    'Product gallery',
                    'Responsive product presentation',
                    'Video section',
                    'Product enquiry',
                ],
            },
            {
                title: 'Products Presented',
                items: ['Rain Guard Compound', 'Rubber Coat – Black', 'Rubber Coat – White'],
            },
        ],
        technologies: [],
        assetFolder: 'rubglue',
        thumbnail: '/projects/rubglue/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://www.rubglue.com/',
        indexable: false,
    },
    {
        // Site structure was checked against the live site on 2026-11-11.
        slug: 'sovar-tech',
        name: 'SOVAR TECH',
        category: 'corporate',
        categoryLabel: 'Corporate Website',
        status: STATUS.live,
        layout: 'default',
        description:
            "A corporate website presenting the company's technology, products, applications, research and development, and services.",
        overview:
            "A corporate website presenting the company's technology, products, applications, research and development, and services.",
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'End-to-end project delivery.',
        highlights: [
            {
                title: 'Site Structure',
                items: ['Home', 'About Us', 'Technology', 'Products', 'Applications', 'R&D', 'Services', 'Contact'],
            },
            {
                title: 'Key Features',
                items: ['Enquiry form with email integration'],
            },
        ],
        technologies: [],
        assetFolder: 'sovartech',
        thumbnail: '/projects/sovartech/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://www.sovartech.com/',
        indexable: false,
    },
    {
        // Features below were checked against the live site on 2026-11-10.
        slug: 'annamz',
        name: 'Annamz',
        category: 'ecommerce',
        categoryLabel: 'Business / E-commerce',
        status: STATUS.live,
        layout: 'default',
        description: 'A digital presence for two business divisions under one brand: bakery and clothing.',
        overview:
            'A digital presence for two business divisions under one brand. A shared entry page leads visitors to either the clothing collection or the patisserie.',
        objective:
            'Give each division its own space online under the Annamz name: a landing page for the bakery and a multi-page website for the clothing line.',
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'End-to-end project delivery.',
        highlights: [
            {
                title: 'Key Features',
                items: [
                    'Brand entry page linking both divisions',
                    'Multi-page clothing website with collections and category pages',
                    'Single-page patisserie site with a categorised product menu',
                    'Custom order and product enquiries',
                    'WhatsApp contact',
                ],
            },
        ],
        technologies: [],
        assetFolder: 'annamz',
        thumbnail: '/projects/annamz/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://annamz.com/',
        indexable: false,
    },
    {
        // Features below were checked against the live site on 2026-11-10.
        slug: 'dr-soumya-dental-clinic',
        name: 'Dr. Soumya Dental Clinic',
        category: 'healthcare',
        categoryLabel: 'Healthcare Website',
        status: STATUS.live,
        layout: 'default',
        description: 'A professional digital presence for a dental clinic.',
        overview:
            'A professional digital presence for a dental clinic, presenting its services, team and patient information across a multi-page website.',
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'End-to-end project delivery.',
        highlights: [
            {
                title: 'Site Structure',
                items: ['Home', 'About', 'Services', 'Before & After Gallery', 'Blog', 'Contact', 'Appointment'],
            },
            {
                title: 'Key Features',
                items: [
                    'Detailed dental services listing',
                    'Appointment and enquiry request form',
                    'Frequently asked questions',
                    'WhatsApp chat and click-to-call',
                    'Location and opening hours',
                ],
            },
        ],
        technologies: [],
        assetFolder: 'dr-soumya',
        thumbnail: '/projects/dr-soumya/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://www.drsoumyasdentalclinic.com/',
        indexable: false,
    },
    {
        // Features below were checked against the live site on 2026-11-10.
        slug: 'alpha-sense-marine-solutions',
        name: 'Alpha Sense Marine Solutions',
        category: 'corporate',
        categoryLabel: 'Corporate Website',
        status: STATUS.live,
        layout: 'default',
        description: 'A corporate digital presence for a marine solutions company.',
        overview:
            "A corporate digital presence for a marine solutions company, presenting its marine spares and technical services by product category.",
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'End-to-end project delivery.',
        highlights: [
            {
                title: 'Site Structure',
                items: ['Home', 'About Us', 'Products & Services', 'Supported Brands', 'Contact'],
            },
            {
                title: 'Key Features',
                items: [
                    'Six product and service category pages',
                    'Supported brands page',
                    'Quote and enquiry requests',
                    'WhatsApp support link',
                ],
            },
        ],
        technologies: [],
        assetFolder: 'alpha-sense',
        thumbnail: '/projects/alpha-sense/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://alphasense.in/',
        indexable: false,
    },
    {
        // Unreleased product: keep details to what is already public.
        slug: 'sylmap',
        name: 'Sylmap',
        category: 'webapp',
        categoryLabel: 'Digital Platform / Web Application',
        status: STATUS.comingSoon,
        layout: 'default',
        description: 'An upcoming digital platform being developed by MAHAT.',
        overview:
            'An upcoming digital platform being developed by MAHAT. More details will be shared at launch.',
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'End-to-end product development, currently in progress.',
        highlights: [],
        technologies: [],
        assetFolder: 'sylmap',
        thumbnail: '/projects/sylmap/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://www.sylmap.com/',
        indexable: false,
        notice: 'Coming soon. This project is still in development.',
    },
    {
        // Creative IP: use only approved artwork and established character designs.
        slug: 'bella-alias-piplu',
        name: 'Bella alias Piplu',
        category: 'creative',
        categoryLabel: 'Creative Development / Character Design',
        status: STATUS.inDevelopment,
        layout: 'creative',
        actionLabel: 'Explore Project',
        description: 'An original character-driven creative development project.',
        overview:
            'An original character-driven creative development project: a creative IP built around character design and storytelling.',
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: 'Creative direction and character development.',
        highlights: [
            {
                title: 'Areas of Development',
                items: [
                    'Character design',
                    'Character reference sheets',
                    'Expressions and poses',
                    'Character relationships',
                    'Character universe and visual development',
                    'Storytelling and creative direction',
                    'Supporting characters and scenes',
                ],
            },
        ],
        technologies: [],
        assetFolder: 'bella-alias-piplu',
        thumbnail: '/projects/bella-alias-piplu/thumbnail.webp',
        // The artwork is 16:9; this keeps the title lettering on the right in view on 16:10 cards.
        thumbnailPosition: '70% 50%',
        // Status badge on the left so it does not cover the lettering.
        badgeSide: 'left',
        gallery: [],
        liveUrl: null, // not applicable
        indexable: false,
    },
    {
        // Site features were checked against the live site on 2026-11-10.
        slug: 'tupstore',
        name: 'Tupperware – Tupstore',
        category: 'ecommerce',
        categoryLabel: 'E-commerce / Product Website',
        status: STATUS.live,
        layout: 'default',
        description: 'An e-commerce experience showcasing Tupperware products.',
        overview:
            'An online product experience showcasing Tupperware products, with category browsing, featured offers and direct product enquiries.',
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: null, // scope to be confirmed
        highlights: [
            {
                title: 'Project Work',
                items: [
                    'Product presentation',
                    'Product reel interface',
                    'Product cards and product links',
                    'Responsive product navigation',
                    'Reel modal interface refinements',
                    'Product carousel interactions',
                ],
            },
            {
                title: 'Site Features',
                items: [
                    'Product catalogue with search and category filters',
                    'Shop-by-category navigation',
                    'Promotions and featured highlights',
                    'Enquiry list and WhatsApp enquiries',
                ],
            },
        ],
        technologies: [],
        assetFolder: 'tupstore',
        thumbnail: '/projects/tupstore/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://www.tupstore.in/',
        indexable: false,
    },
    {
        // Features below were checked against the live site on 2026-11-11.
        slug: 'coral-dental-care',
        name: 'Coral Dental Care',
        category: 'healthcare',
        categoryLabel: 'Healthcare Website',
        status: STATUS.live,
        layout: 'default',
        description:
            'A multi-page website for a dental clinic in Kerala, presenting its services, treatment gallery and appointment options.',
        overview:
            'A multi-page website for a dental clinic in Kerala. It introduces the clinic and its chief dental surgeon, presents the treatments on offer and gives patients direct ways to get in touch.',
        objective: null,
        challenge: null,
        approach: null,
        solution: null,
        contribution: null, // to be confirmed
        highlights: [
            {
                title: 'Site Structure',
                items: ['Home', 'About', 'Services', 'Gallery', 'Contact'],
            },
            {
                title: 'Key Features',
                items: [
                    'Dental services overview',
                    'Treatment results gallery',
                    'Patient reviews',
                    'Frequently asked questions',
                    'Appointment and consultation buttons',
                    'WhatsApp chat and click-to-call',
                ],
            },
        ],
        technologies: [],
        assetFolder: 'coral-dental-care',
        thumbnail: '/projects/coral-dental-care/thumbnail.webp',
        gallery: [],
        liveUrl: 'https://coraldentalcareclinics.com/',
        indexable: false,
    },
];

/* The order projects appear in on the portfolio page, in filters and in "Next" links. */
const DISPLAY_ORDER = [
    'sylmap',
    'bella-alias-piplu',
    'tupstore',
    'rubglue',
    'sovar-tech',
    'annamz',
    'dr-soumya-dental-clinic',
    'alpha-sense-marine-solutions',
    'coral-dental-care',
];

export const projects = DISPLAY_ORDER.map((slug) => projectList.find((project) => project.slug === slug));

export const getCategoryLabel = (id) =>
    CATEGORIES.find((category) => category.id === id)?.label ?? '';

export const getProjectBySlug = (slug) =>
    projects.find((project) => project.slug === slug) ?? null;

export const getProjectNumber = (project) =>
    String(projects.indexOf(project) + 1).padStart(2, '0');

export const getProjectName = (project) =>
    project.name || `Project ${getProjectNumber(project)}`;

/* Text for the temporary block shown while a project has no image yet. */
export const getMissingImageLabel = (project) =>
    project.layout === 'creative' ? 'Artwork to be added' : 'Screenshot to be added';
