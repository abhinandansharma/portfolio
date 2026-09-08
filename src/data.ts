import type { Art } from './components/Thumb';

export const profile = {
  name: 'Abhinandan Sharma',
  role: 'Founding Principal Engineer',
  company: 'Novyte',
  companyUrl: 'https://novyte.ai',
  location: 'Mumbai, India',
  email: 'abhinandan0659@gmail.com',
  resume: `${process.env.PUBLIC_URL || ''}/resume.pdf`,
  handle: '@notjustadev',
};

export const stats = [
  { value: '6+', label: 'Years shipping' },
  { value: '6', label: 'Teams, all early stage' },
  { value: '4', label: 'Countries worked with' },
  { value: '2', label: 'Platforms from a blank repo' },
];

export const marquee = [
  'Founding engineer', '創業エンジニア', 'Zero to one', 'ゼロからイチへ', 'Platform architecture', 'React', 'FastAPI',
  'PostgreSQL', 'Novyte', 'MASQ', 'Polymerize', 'Truebase', 'Google Summer of Code',
];

export const skills = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'SCSS', 'Redux', 'Three.js', 'Python', 'FastAPI', 'Node.js',
  'PostgreSQL', 'MongoDB', 'GraphQL', 'vLLM', 'RAG', 'Docker', 'AWS', 'Vercel', 'Gatsby', 'Figma', 'Git', 'OpenCV',
];

export interface Role {
  company: string;
  url?: string;
  title: string;
  period: string;
  place: string;
  summary: string;
  bullets: string[];
  stack: string[];
  now?: boolean;
}

export const roles: Role[] = [
  {
    company: 'Novyte',
    url: 'https://novyte.ai',
    title: 'Founding Principal Engineer',
    period: 'Jan 2026 — Present',
    place: 'Mumbai, India',
    now: true,
    summary:
      'First engineering hire at an AI platform for materials discovery. Responsible for the architecture and every technical decision from day zero.',
    bullets: [
      'Leading the architecture and technical foundation of a zero-to-one B2B platform for materials R&D.',
      'Designing the backend on FastAPI and PostgreSQL with security, scalability, and data integrity as first-order constraints.',
      'Defining engineering standards, repository structure, and development workflows for the founding team.',
      'Partnering with the founder on product direction, technical tradeoffs, and long-term platform strategy.',
    ],
    stack: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'System Design'],
  },
  {
    company: 'Independent',
    url: 'https://www.masqbrowser.com',
    title: 'Software Engineer — Platform & Product',
    period: 'Apr 2024 — Dec 2025',
    place: 'Remote',
    summary:
      'Independent product engineering for clients. Two main builds: a patient-records app for doctors with OCR document capture, and platform work for MASQ, a privacy browser with a decentralized multi-hop VPN and independent search.',
    bullets: [
      'Built a patient-records app for doctors: React frontend, API backend with data persistence, and Tesseract OCR that turns scanned prescriptions and reports into structured, searchable records.',
      'Platform and product engineering for MASQ (masqbrowser.com), from scoping to production, owning frontend architecture and backend integrations.',
      'Designed end-to-end systems with React, APIs, and data persistence for real-world clinical and consumer workflows.',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Tesseract OCR', 'REST APIs'],
  },
  {
    company: 'Polymerize',
    url: 'https://polymerize.io',
    title: 'Software Engineer',
    period: 'Jan 2023 — Jan 2024',
    place: 'Singapore',
    summary: 'Materials informatics for chemical and polymer R&D. Core frontend engineer on marketing and growth.',
    bullets: [
      'Revamped polymerize.io and polymerize.jp on Gatsby, cutting load times by 30%.',
      'Led Japanese and German localization, opening the product to Asia and Europe.',
      'Launched feature pages that contributed to a 20% increase in lead generation.',
    ],
    stack: ['Gatsby', 'React', 'i18n', 'SEO', 'Performance'],
  },
  {
    company: 'Truebase',
    url: 'https://truebase.io',
    title: 'Software Engineer',
    period: 'Aug 2021 — Jan 2023',
    place: 'Seattle, USA',
    summary: 'AI-assisted sales prospecting. Full-stack across the SaaS product and marketing surfaces.',
    bullets: [
      'Designed and implemented the frontend architecture for marketing and SaaS surfaces with Next.js and React.',
      'Scaled the SaaS platform on React, MobX, and MongoDB.',
      'Automated CRM workflows, reducing manual data entry by 50%.',
    ],
    stack: ['Next.js', 'React', 'MobX', 'MongoDB'],
  },
  {
    company: 'Localytee',
    title: 'Frontend & UX Engineer',
    period: 'Oct 2020 — Jul 2021',
    place: 'Remote',
    summary: 'Founding frontend engineer building the consumer product from a blank repository.',
    bullets: [
      'Built the frontend with React, Sass, and Redux against a GraphQL API on PostgreSQL.',
      'Designed wireframes and prototypes in Adobe XD before writing the components.',
    ],
    stack: ['React', 'Redux', 'GraphQL', 'PostgreSQL', 'Adobe XD'],
  },
  {
    company: 'EOS Design System · GSoC',
    url: 'https://github.com/EOS-uiux-Solutions/eos-icons',
    title: 'Google Summer of Code Intern & Mentor',
    period: 'May 2019 — Aug 2020',
    place: 'Python Software Foundation',
    summary: 'Open-source contributor turned mentor for one of the largest foundations in the program.',
    bullets: [
      'Shipped major features to the EOS Design System and its icon library.',
      'Built optimized landing pages with Pug, Sass, and Node.js.',
      'Mentored the next intake: code review, project planning, onboarding.',
    ],
    stack: ['Open Source', 'Node.js', 'SCSS', 'Mentorship'],
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    blurb: 'Six years of React, from design systems to production SaaS.',
    skills: [
      { name: 'React', level: 'Expert' },
      { name: 'Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'SCSS', level: 'Expert' },
      { name: 'Redux', level: 'Advanced' },
      { name: 'Three.js', level: 'Proficient' },
    ],
  },
  {
    title: 'Backend & AI',
    blurb: 'The services, data models and model plumbing under the product.',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'FastAPI', level: 'Advanced' },
      { name: 'Node.js', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Advanced' },
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'GraphQL', level: 'Proficient' },
      { name: 'vLLM', level: 'Proficient' },
      { name: 'RAG', level: 'Proficient' },
    ],
  },
  {
    title: 'Tools & Platforms',
    blurb: 'Shipping, hosting and designing it before it is built.',
    skills: [
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'AWS / EC2', level: 'Advanced' },
      { name: 'Vercel', level: 'Advanced' },
      { name: 'Gatsby', level: 'Advanced' },
      { name: 'Figma', level: 'Advanced' },
      { name: 'Docker', level: 'Proficient' },
    ],
  },
];

const asset = (name: string) => `${process.env.PUBLIC_URL || ''}/projects/${name}.jpg`;

export interface Project {
  title: string;
  year: string;
  desc: string;
  tags: string[];
  art: Art;
  red?: boolean;
  /** 1280x720 artwork shown behind the glass, e.g. `${process.env.PUBLIC_URL}/projects/ambiently.jpg` */
  image?: string;
  /** transparent character cut-out standing at the right edge */
  figure?: string;
  demo?: string;
  code?: string;
  post?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Ambiently',
    year: '2025',
    desc: 'A 5 kB ambient sound engine for the web, on npm. Layered loops, synthesised rain, wind and fire, gain-ramp fades and crossfading scenes, with React and Next.js bindings.',
    image: asset('ambiently'),
    art: 'wave',
    tags: ['Web Audio', 'TypeScript', 'React', 'npm'],
    demo: 'https://abhinandansharma.github.io/ambiently/',
    code: 'https://github.com/abhinandansharma/ambiently',
    featured: true,
  },
  {
    title: 'Twitch Ad Blocker',
    year: '2025',
    desc: 'Chrome extension that intercepts Twitch playlist requests and swaps in ad-free stream variants before the player loads them. No purple screens, no skipped segments.',
    image: asset('twitch-ad-blocker'),
    art: 'shield',
    red: true,
    tags: ['Chrome Extension', 'Manifest V3', 'JavaScript'],
    code: 'https://github.com/abhinandansharma/twitch-ad-blocker',
    post: 'https://medium.com/@abhinandan0659/how-i-built-my-first-chrome-extension-a-twitch-ad-blocker-30cbad3c8b44',
    featured: true,
  },
  {
    title: 'Hacker News Reader',
    year: '2025',
    desc: 'A paper-themed Hacker News reader on the Next.js App Router: Top, New, Best, Ask, Show and Jobs, 30 a page with working pagination, statically exported.',
    image: asset('hacker-news-clone'),
    art: 'list',
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    code: 'https://github.com/abhinandansharma/hacker-news-clone',
    demo: 'https://abhinandansharma.github.io/hacker-news-clone/',
  },
  {
    title: 'Reelhouse',
    year: '2021',
    desc: 'A Netflix-style browser on React and the TMDB API: banner, auto-scrolling rows, trailer modals, and a bundled snapshot when the API is unreachable.',
    image: asset('netflix'),
    art: 'posters',
    tags: ['React', 'TMDB API', 'GitHub Pages'],
    demo: 'https://abhinandansharma.github.io/netflix-clone/',
    code: 'https://github.com/abhinandansharma/netflix-clone',
  },
  {
    title: 'Patatap',
    year: '2020',
    desc: 'Press any key from A to Z, or tap the screen, and get a sound and an animated circle. A Patatap study in Paper.js and Howler.js.',
    image: asset('patatap'),
    art: 'circles',
    red: true,
    tags: ['Paper.js', 'Howler.js'],
    demo: 'https://abhinandansharma.github.io/patatap/',
    code: 'https://github.com/abhinandansharma/patatap',
  },
  {
    title: 'TaskMaster Pro',
    year: '2025',
    desc: 'A jQuery todo app taken further than it needed to go: priorities, live search with highlighting, inline editing, progress stats, and tasks that survive a reload.',
    image: asset('taskmaster'),
    art: 'checks',
    tags: ['jQuery', 'HTML', 'CSS'],
    demo: 'https://abhinandansharma.github.io/taskMasterPro/',
    code: 'https://github.com/abhinandansharma/taskMasterPro',
  },
  {
    title: 'RGB Color Game',
    year: '2020',
    desc: 'Color guessing game with three difficulty modes based on RGB values.',
    image: asset('rgb-color-game'),
    art: 'grid',
    tags: ['JavaScript', 'CSS3'],
    demo: 'https://abhinandansharma.github.io/ColorGame/',
    code: 'https://github.com/abhinandansharma/ColorGame',
  },
  {
    title: 'Star Coin',
    year: '2018',
    desc: 'A proof-of-work blockchain in Python with a Flask API: mine blocks, run three peer nodes, and watch consensus overwrite a tampered chain.',
    image: asset('starcoin'),
    art: 'chain',
    tags: ['Python', 'Flask', 'Blockchain'],
    code: 'https://github.com/abhinandansharma/starcoin',
  },
  {
    title: 'Plate Recognition',
    year: '2019',
    desc: 'OpenCV pipeline that finds a car\'s number plate and reads the characters, the recognition half of a red-light violation project with Arduino sensors and a database.',
    image: asset('plate-recognition'),
    art: 'plate',
    red: true,
    tags: ['OpenCV', 'Python', 'IoT'],
    code: 'https://github.com/abhinandansharma/number-plate-recognition',
  },
];

export const novyteTable = [
  { task: 'Trials to 75% optimization', before: 'hundreds', after: '~5' },
  { task: 'Retrosynthesis analysis', before: 'weeks', after: '~90 s' },
  { task: 'Next experiment suggestion', before: 'gut feel', after: '~8 s' },
  { task: 'Campaign plan', before: 'days', after: '~4 min' },
];
