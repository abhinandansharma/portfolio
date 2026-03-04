import React, { useState, useRef } from 'react';

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

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>
        <div className="space-y-12">
          {/* Novyte */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Founding Principal Engineer</h3>
              <span className="text-purple-300 text-lg">January 2026 - Present</span>
            </div>
            <p className="text-gray-300 mb-4">Novyte &bull; Mumbai, India</p>
            <ul className="text-gray-300 space-y-2">
              <li>&bull; Leading the architecture and technical foundation of a zero-to-one B2B data management platform</li>
              <li>&bull; Designing backend systems using FastAPI and PostgreSQL with a focus on security, scalability, and data integrity</li>
              <li>&bull; Defining engineering standards, repository structure, and development workflows for the founding team</li>
              <li>&bull; Partnering with the founder on product direction, technical tradeoffs, and long-term platform strategy</li>
            </ul>
          </div>

          {/* Freelance */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer — Platform & Product</h3>
              <span className="text-purple-300 text-lg">April 2024 - December 2025</span>
            </div>
            <p className="text-gray-300 mb-4">Freelance &bull; remote, Australia</p>
            <ul className="text-gray-300 space-y-2">
              <li>&bull; Built and shipped production-grade applications, owning frontend architecture and backend integrations</li>
              <li>&bull; Designed end-to-end systems using React, APIs, and data persistence for real-world workflows</li>
            </ul>
          </div>

          {/* Polymerize */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <span className="text-purple-300 text-lg">January 2023 - January 2024</span>
            </div>
            <p className="text-gray-300 mb-4">Polymerize &bull; Singapore</p>
            <ul className="text-gray-300 space-y-2">
              <li>&bull; Revamped Polymerize.io & Polymerize.jp (Gatsby), reducing load times by 30%</li>
              <li>&bull; Spearheaded Japanese & German localization, expanding reach across Asia and Europe</li>
              <li>&bull; Launched new feature pages contributing to a 20% increase in lead generation</li>
            </ul>
          </div>

          {/* Truebase */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <span className="text-purple-300 text-lg">August 2021 - January 2023</span>
            </div>
            <p className="text-gray-300 mb-4">Truebase &bull; Seattle, USA</p>
            <ul className="text-gray-300 space-y-2">
              <li>&bull; Designed and implemented frontend architecture for marketing and SaaS surfaces using Next.js and React</li>
              <li>&bull; Scaled the SaaS platform using React, MobX, and MongoDB</li>
              <li>&bull; Automated CRM workflows, reducing manual data entry by 50%</li>
            </ul>
          </div>

          {/* Hidden experiences */}
          {showAllExperiences && (
            <>
              {/* EOS Design System / GSoC */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Google Summer of Code — Intern & Mentor</h3>
                  <span className="text-purple-300 text-lg">May 2019 - August 2020</span>
                </div>
                <p className="text-gray-300 mb-4">EOS Design System &bull; Python Software Foundation</p>
                <ul className="text-gray-300 space-y-2">
                  <li>&bull; Contributed major features to the EOS Design System under the Python Software Foundation</li>
                  <li>&bull; Built optimized landing pages with Pug, SCSS, and Node.js, improving performance and maintainability</li>
                  <li>&bull; Mentored new GSoC interns — reviewed code, guided project planning, and helped onboard contributors</li>
                </ul>
              </div>

              {/* Localytee */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Frontend & UX Engineer</h3>
                  <span className="text-purple-300 text-lg">October 2020 - July 2021</span>
                </div>
                <p className="text-gray-300 mb-4">Localytee</p>
                <ul className="text-gray-300 space-y-2">
                  <li>&bull; Built the front-end using React.js, SASS, and Redux for client-side state management</li>
                  <li>&bull; Used GraphQL for API layer and PostgreSQL for the database</li>
                  <li>&bull; Designed wireframes and prototypes for web and mobile applications using Adobe XD</li>
                </ul>
              </div>
            </>
          )}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-12">
          <button
            onClick={handleToggle}
            className="bg-purple-700 hover:bg-purple-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            {showAllExperiences ? 'Show Less' : 'Show More Experiences'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
