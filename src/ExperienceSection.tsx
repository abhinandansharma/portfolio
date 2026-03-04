import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from './animations';

const ExperienceCard = ({
  title,
  date,
  company,
  description,
  bullets,
  tags,
  index,
}: {
  title: string;
  date: string;
  company: string;
  description: string;
  bullets: string[];
  tags: string[];
  index: number;
}) => (
  <FadeIn delay={index * 0.08} direction="up">
    <div className="rounded-2xl border border-[var(--color-border-card)] hover:border-[var(--color-border-card-hover)] bg-[var(--color-card-bg)] p-7 sm:p-8 transition-colors duration-300 group" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-1 gap-1">
        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{title}</h3>
        <span className="text-sm text-muted whitespace-nowrap mt-0.5">{date}</span>
      </div>
      <p className="text-accent text-sm mb-3">{company}</p>
      <p className="text-secondary text-sm leading-relaxed mb-4">{description}</p>
      <ul className="text-secondary text-sm space-y-2 mb-5">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2.5 leading-relaxed">
            <span className="w-1.5 h-1.5 bg-[var(--color-accent-500)] rounded-full mt-[6px] flex-shrink-0 opacity-60" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-tag-bg)] text-[var(--color-tag-text)] border border-[var(--color-border-subtle)]">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </FadeIn>
);

const ExperienceSection = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    const currentScroll = window.scrollY;
    setShowAllExperiences(!showAllExperiences);
    setTimeout(() => {
      window.scrollTo(0, currentScroll);
    }, 0);
  };

  const mainExperiences = [
    {
      title: 'Founding Principal Engineer',
      date: 'Jan 2026 — Present',
      company: 'Novyte \u2022 Mumbai, India',
      description: 'First engineering hire, responsible for all technical decisions and platform architecture from day zero.',
      bullets: [
        'Leading the architecture and technical foundation of a zero-to-one B2B data management platform',
        'Designing backend systems using FastAPI and MongoDB with a focus on security, scalability, and data integrity',
        'Defining engineering standards, repository structure, and development workflows for the founding team',
        'Partnering with the founder on product direction, technical tradeoffs, and long-term platform strategy',
      ],
      tags: ['FastAPI', 'MongoDB', 'React', 'System Design', 'Architecture'],
    },
    {
      title: 'Software Engineer — Platform & Product',
      date: 'Apr 2024 — Dec 2025',
      company: 'Freelance \u2022 Remote, Australia',
      description: 'End-to-end product development for multiple clients, from initial scoping to production deployment.',
      bullets: [
        'Built and shipped production-grade applications, owning frontend architecture and backend integrations',
        'Designed end-to-end systems using React, APIs, and data persistence for real-world workflows',
      ],
      tags: ['React', 'TypeScript', 'Node.js', 'REST APIs'],
    },
    {
      title: 'Software Engineer',
      date: 'Jan 2023 — Jan 2024',
      company: 'Polymerize \u2022 Singapore',
      description: 'Core frontend engineer on the marketing and growth team, driving performance and international expansion.',
      bullets: [
        'Revamped Polymerize.io & Polymerize.jp (Gatsby), reducing load times by 30%',
        'Spearheaded Japanese & German localization, expanding reach across Asia and Europe',
        'Launched new feature pages contributing to a 20% increase in lead generation',
      ],
      tags: ['Gatsby', 'React', 'i18n', 'SEO', 'Performance'],
    },
    {
      title: 'Software Engineer',
      date: 'Aug 2021 — Jan 2023',
      company: 'Truebase \u2022 Seattle, USA',
      description: 'Full-stack engineer building the core SaaS platform and marketing surfaces for an AI-powered sales tool.',
      bullets: [
        'Designed and implemented frontend architecture for marketing and SaaS surfaces using Next.js and React',
        'Scaled the SaaS platform using React, MobX, and MongoDB',
        'Automated CRM workflows, reducing manual data entry by 50%',
      ],
      tags: ['Next.js', 'React', 'MobX', 'MongoDB', 'CRM'],
    },
  ];

  const extraExperiences = [
    {
      title: 'Google Summer of Code — Intern & Mentor',
      date: 'May 2019 — Aug 2020',
      company: 'EOS Design System \u2022 Python Software Foundation',
      description: 'Open-source contributor turned mentor under one of the largest OSS foundations.',
      bullets: [
        'Contributed major features to the EOS Design System under the Python Software Foundation',
        'Built optimized landing pages with Pug, SCSS, and Node.js',
        'Mentored new GSoC interns — reviewed code, guided project planning, and helped onboard contributors',
      ],
      tags: ['Open Source', 'Node.js', 'SCSS', 'Mentorship'],
    },
    {
      title: 'Frontend & UX Engineer',
      date: 'Oct 2020 — Jul 2021',
      company: 'Localytee',
      description: 'Founding frontend engineer building the consumer-facing product from scratch.',
      bullets: [
        'Built the front-end using React.js, SASS, and Redux for client-side state management',
        'Used GraphQL for API layer and PostgreSQL for the database',
        'Designed wireframes and prototypes using Adobe XD',
      ],
      tags: ['React', 'GraphQL', 'Redux', 'PostgreSQL', 'UX Design'],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-6 sm:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-accent-500), transparent 70%)' }} />
      <div className="absolute bottom-40 -left-20 w-72 h-72 rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, var(--color-cyan-400), transparent 70%)' }} />

      <div className="max-w-5xl mx-auto relative">
        <FadeIn>
          <h2 className="text-4xl font-bold text-primary text-center mb-14">Experience</h2>
        </FadeIn>
        <div className="space-y-5">
          {mainExperiences.map((exp, i) => (
            <ExperienceCard key={exp.company} {...exp} index={i} />
          ))}

          <AnimatePresence>
            {showAllExperiences && extraExperiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ExperienceCard {...exp} index={i + mainExperiences.length} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <button
              onClick={handleToggle}
              className="text-accent text-sm font-medium hover:text-primary transition-colors border-b border-[var(--color-border-subtle)] hover:border-accent pb-0.5"
            >
              {showAllExperiences ? 'Show less' : 'Show more experiences'}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExperienceSection;
