import React, { useState, useRef } from 'react';

const ExperienceSection = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleToggle = () => {
    // Store current scroll position
    const currentScroll = window.scrollY;
    
    setShowAllExperiences(!showAllExperiences);
    
    // Restore scroll position after state update
    setTimeout(() => {
      window.scrollTo(0, currentScroll);
    }, 0);
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>
        <div className="space-y-12">
          {/* Freelance */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Freelance Software Engineer</h3>
              <span className="text-purple-300 text-lg">April 2024 - Present</span>
            </div>
            <p className="text-gray-300 mb-4">Australia</p>
            <p className="text-gray-300 leading-relaxed">
              I work with doctors to design and build custom apps that make it easier to record, manage, and access patient data. 
              My goal is to streamline their workflow, improve accuracy, and save time, so they can focus more on patient care 
              and less on paperwork.
            </p>
          </div>

          {/* Polymerize */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <span className="text-purple-300 text-lg">January 2023 - January 2024</span>
            </div>
            <p className="text-gray-300 mb-4">Polymerize • Singapore</p>
            <p className="text-gray-300 mb-4">
              Use our proprietary machine learning algorithms and APIs to predict experiment results and material properties, 
              and manage all your data in one place.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Enhanced the Gatsby website by implementing improvements and introducing new pages</li>
              <li>• Orchestrated the translation of the Polymerize Labs platform into Japanese and German</li>
              <li>• Streamlined deployment process on Firebase with automated GitHub PR merge actions</li>
              <li>• Developed intricate data dashboards and tables for user data visualization</li>
              <li>• Improved search functionality with advanced algorithms and optimization</li>
            </ul>
          </div>

          {/* Truebase */}
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-2xl font-semibold text-white">Software Engineer</h3>
              <span className="text-purple-300 text-lg">August 2021 - January 2023</span>
            </div>
            <p className="text-gray-300 mb-4">Truebase • Seattle, Washington</p>
            <p className="text-gray-300 mb-4">
              The FASTEST way to find valuable leads with verified contacts and personalization points to Start More Conversations and close more deals.
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Implemented designs to create and host the website at truebase.io using Next.js, SCSS, React Select</li>
              <li>• Integrated Pipedrive API for seamless data migration</li>
              <li>• Wrote end-to-end tests for front-end testing</li>
              <li>• Created optimized aggregates for MongoDB database operations</li>
            </ul>
          </div>

          {/* Hidden experiences */}
          {showAllExperiences && (
            <>
              {/* Localytee */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Frontend & UX Engineer</h3>
                  <span className="text-purple-300 text-lg">January 2021 - July 2021</span>
                </div>
                <p className="text-gray-300 mb-4">Localytee</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Built the front-end using React.js, SASS, react-strap and used Redux for client-side rendering</li>
                  <li>• Used GraphQL for API and PostgreSQL for the database</li>
                  <li>• Used Adobe XD for designing wireframes plus prototyping the web pages and mobile application from scratch</li>
                </ul>
              </div>

              {/* Localytee Intern */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Software Engineering Intern</h3>
                  <span className="text-purple-300 text-lg">October 2020 - December 2020</span>
                </div>
                <p className="text-gray-300 mb-4">Localytee</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Designed wireframes, mockups, prototypes for the mobile and web app on Adobe XD</li>
                  <li>• Implementation of the web app in React</li>
                  <li>• Implementation of the Android app in React Native</li>
                  <li>• Fixed backend issues, database issues and worked with GraphQL API</li>
                </ul>
              </div>

              {/* EOS Design System */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Open Source Developer</h3>
                  <span className="text-purple-300 text-lg">February 2019 - November 2022</span>
                </div>
                <p className="text-gray-300 mb-4">EOS Design System</p>
                <p className="text-gray-300 mb-4">
                  Worked as a Front-end developer in this open-source organisation. Check out my work on EOS icons website - https://eos-icons.com/
                </p>
              </div>

              {/* Google Summer of Code Mentor */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Mentor</h3>
                  <span className="text-purple-300 text-lg">February 2020 - September 2020</span>
                </div>
                <p className="text-gray-300 mb-4">Google Summer of Code • Python Software Foundation</p>
                <p className="text-gray-300 mb-4">PSF sub-org: EOS Design system</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Helped new contributors understand the workflow</li>
                  <li>• Guided selected developers to plan and get along with their respected projects</li>
                  <li>• Reviewed code and suggested good code practices</li>
                </ul>
              </div>

              {/* Google Summer of Code Intern */}
              <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-white">Google Summer of Code Intern</h3>
                  <span className="text-purple-300 text-lg">May 2019 - September 2019</span>
                </div>
                <p className="text-gray-300 mb-4">Google Summer of Code • Python Software Foundation</p>
                <p className="text-gray-300 mb-4">PSF sub-org: EOS Design system</p>
                <ul className="text-gray-300 space-y-2">
                  <li>• Designed wireframes, high definition mockups and fully functional prototypes on Adobe XD, Illustrator</li>
                  <li>• Implemented these designs using technologies like - pug, SCSS, Bootstrap4, JQuery, gulp, node</li>
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
            {showAllExperiences ? 'Show Less' : 'Show 5 More Experiences'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 