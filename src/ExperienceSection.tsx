import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem } from './animations';

const ExperienceCard = ({
  title,
  date,
  company,
  bullets,
  index,
}: {
  title: string;
  date: string;
  company: string;
  bullets: string[];
  index: number;
}) => (
  <FadeIn delay={index * 0.1} direction={index % 2 === 0 ? 'left' : 'right'}>
    <div className="bg-[var(--color-bg-surface-60)] p-8 rounded-2xl border border-subtle hover:border-card transition-all duration-500 group">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
        <h3 className="text-2xl font-semibold text-primary group-hover:text-accent transition-colors">{title}</h3>
        <span className="text-accent text-lg">{date}</span>
      </div>
      <p className="text-secondary mb-4">{company}</p>
      <ul className="text-secondary space-y-2">
        {bullets.map((bullet, i) => (
          <li key={i}>&bull; {bullet}</li>
        ))}
      </ul>
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
      date: 'January 2026 - Present',
      company: 'Novyte \u2022 Mumbai, India',
      bullets: [
        'Leading the architecture and technical foundation of a zero-to-one B2B data management platform',
        'Designing backend systems using FastAPI and PostgreSQL with a focus on security, scalability, and data integrity',
        'Defining engineering standards, repository structure, and development workflows for the founding team',
        'Partnering with the founder on product direction, technical tradeoffs, and long-term platform strategy',
      ],
    },
    {
      title: 'Software Engineer \u2014 Platform & Product',
      date: 'April 2024 - December 2025',
      company: 'Freelance \u2022 remote, Australia',
      bullets: [
        'Built and shipped production-grade applications, owning frontend architecture and backend integrations',
        'Designed end-to-end systems using React, APIs, and data persistence for real-world workflows',
      ],
    },
    {
      title: 'Software Engineer',
      date: 'January 2023 - January 2024',
      company: 'Polymerize \u2022 Singapore',
      bullets: [
        'Revamped Polymerize.io & Polymerize.jp (Gatsby), reducing load times by 30%',
        'Spearheaded Japanese & German localization, expanding reach across Asia and Europe',
        'Launched new feature pages contributing to a 20% increase in lead generation',
      ],
    },
    {
      title: 'Software Engineer',
      date: 'August 2021 - January 2023',
      company: 'Truebase \u2022 Seattle, USA',
      bullets: [
        'Designed and implemented frontend architecture for marketing and SaaS surfaces using Next.js and React',
        'Scaled the SaaS platform using React, MobX, and MongoDB',
        'Automated CRM workflows, reducing manual data entry by 50%',
      ],
    },
  ];

  const extraExperiences = [
    {
      title: 'Google Summer of Code \u2014 Intern & Mentor',
      date: 'May 2019 - August 2020',
      company: 'EOS Design System \u2022 Python Software Foundation',
      bullets: [
        'Contributed major features to the EOS Design System under the Python Software Foundation',
        'Built optimized landing pages with Pug, SCSS, and Node.js, improving performance and maintainability',
        'Mentored new GSoC interns \u2014 reviewed code, guided project planning, and helped onboard contributors',
      ],
    },
    {
      title: 'Frontend & UX Engineer',
      date: 'October 2020 - July 2021',
      company: 'Localytee',
      bullets: [
        'Built the front-end using React.js, SASS, and Redux for client-side state management',
        'Used GraphQL for API layer and PostgreSQL for the database',
        'Designed wireframes and prototypes for web and mobile applications using Adobe XD',
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl font-bold text-primary text-center mb-16">Experience</h2>
        </FadeIn>
        <div className="space-y-12">
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
          <div className="text-center mt-12">
            <button
              onClick={handleToggle}
              className="bg-btn-primary hover:bg-btn-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_var(--color-shadow-btn)]"
            >
              {showAllExperiences ? 'Show Less' : 'Show More Experiences'}
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ExperienceSection;
