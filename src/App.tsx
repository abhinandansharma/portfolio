import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import ExperienceSection from './ExperienceSection';
import HaloEffect from './HaloEffect';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedText, TiltCard, AnimatedBar, CursorGlow, MagneticButton } from './animations';
import { FaReact, FaSass, FaGithub, FaPython, FaNodeJs, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaMediumM, FaCodepen } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiGraphql, SiPostgresql, SiMongodb, SiFastapi, SiRedux, SiTailwindcss, SiGatsby } from 'react-icons/si';
import ThemeToggle from './ThemeToggle';

const GitHubIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
  </svg>
);

const PlayIcon = () => (
  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

const linkClasses = "inline-flex items-center px-3 py-2 bg-link-bg hover:bg-link-bg-hover text-link-text hover:text-primary text-sm rounded-lg transition-all duration-300 border border-[var(--color-link-border)] hover:border-[var(--color-link-border-hover)]";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--color-bg-gradient-from)] to-[var(--color-bg-gradient-to)]">
      <CursorGlow />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed top-0 w-full bg-[var(--color-bg-nav)] backdrop-blur-md z-50 border-b border-nav"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-primary font-bold text-xl">Abhinandan Sharma</div>
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-secondary hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent-400)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative min-h-[90vh] flex items-center">
        <HaloEffect />
        <div className="max-w-7xl mx-auto text-center w-full relative z-10">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
              <AnimatedText text="Abhinandan Sharma" />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-accent mb-8"
            >
              Founding Principal Engineer | Platform Architecture & Data-Driven Systems
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-secondary max-w-3xl mx-auto"
            >
              Building scalable B2B platforms from zero to one. Strong frontend foundation in React and Next.js,
              now leading architecture across backend systems, FastAPI, and PostgreSQL.
              Experienced in defining technical foundations and engineering standards for founding teams.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <MagneticButton>
              <a
                href="#contact"
                className="bg-btn-primary hover:bg-btn-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_var(--color-shadow-btn)] inline-block"
              >
                Get in Touch
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="/portfolio/resume.pdf"
                target='_blank'
                rel="noopener noreferrer"
                className="border border-accent text-accent hover:bg-btn-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_var(--color-shadow-btn-light)] inline-block"
              >
                View Resume
              </a>
            </MagneticButton>
          </motion.div>

        </div>
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-[var(--color-border-scroll-indicator)] flex items-start justify-center p-2"
          >
            <motion.div className="w-1 h-2 bg-[var(--color-accent-400)] rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-surface-60)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary text-center mb-16">About Me</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-6">Who I Am</h3>
                <p className="text-secondary text-lg leading-relaxed mb-6">
                  I'm Abhinandan Sharma — a Founding Principal Engineer with a strong frontend background,
                  now focused on platform architecture and data-driven systems. I've gone from building pixel-perfect
                  React interfaces to defining the technical foundation of zero-to-one B2B platforms.
                </p>
                <p className="text-secondary text-lg leading-relaxed">
                  I thrive at the intersection of product and engineering — partnering with founders on technical
                  tradeoffs, setting up engineering standards, and shipping scalable systems using FastAPI, PostgreSQL,
                  and modern frontend stacks. Also a Google Summer of Code alumnus and mentor under the Python Software Foundation.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-8 rounded-2xl border border-card">
                <h4 className="text-xl font-semibold text-primary mb-4">Quick Facts</h4>
                <StaggerContainer className="space-y-3 text-secondary" staggerDelay={0.08}>
                  {[
                    'Principal Engineer (Leading architecture at a B2B startup)',
                    'Zero-to-One Builder (Defining tech foundations from scratch)',
                    'Full-Stack (React, Next.js, FastAPI, PostgreSQL, MongoDB)',
                    'GSoC Intern & Mentor (Python Software Foundation)',
                    '5+ Years Shipping Production Software',
                    'BTech in Computer Science (SMVDU, 3.5 GPA)',
                  ].map((fact, i) => (
                    <StaggerItem key={i}>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-[var(--color-accent-400)] rounded-full mr-3 flex-shrink-0"></span>
                        {fact}
                      </li>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-surface-60)]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary text-center mb-16">Skills & Technologies</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {/* Frontend */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-8 rounded-2xl border border-card h-full">
                <h3 className="text-2xl font-semibold text-primary mb-6">Frontend</h3>
                <div className="space-y-3">
                  {[
                    { icon: <FaReact className="text-cyan-400" />, name: 'React', width: '95%' },
                    { icon: <SiNextdotjs className="text-primary" />, name: 'Next.js', width: '90%' },
                    { icon: <SiTypescript className="text-blue-400" />, name: 'TypeScript', width: '90%' },
                    { icon: <SiRedux className="text-[var(--color-accent-400)]" />, name: 'Redux', width: '85%' },
                    { icon: <FaSass className="text-pink-400" />, name: 'SCSS', width: '90%' },
                    { icon: <SiTailwindcss className="text-cyan-300" />, name: 'Tailwind CSS', width: '90%' },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-2">{skill.icon} {skill.name}</span>
                      <div className="w-24 bg-bar-track rounded-full h-2">
                        <AnimatedBar width={skill.width} />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Backend */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-8 rounded-2xl border border-card h-full">
                <h3 className="text-2xl font-semibold text-primary mb-6">Backend</h3>
                <div className="space-y-3">
                  {[
                    { icon: <SiFastapi className="text-green-400" />, name: 'FastAPI', width: '85%' },
                    { icon: <FaPython className="text-yellow-300" />, name: 'Python', width: '85%' },
                    { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js', width: '85%' },
                    { icon: <SiGraphql className="text-pink-500" />, name: 'GraphQL', width: '80%' },
                    { icon: <SiPostgresql className="text-blue-300" />, name: 'PostgreSQL', width: '80%' },
                    { icon: <SiMongodb className="text-green-400" />, name: 'MongoDB', width: '80%' },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-2">{skill.icon} {skill.name}</span>
                      <div className="w-24 bg-bar-track rounded-full h-2">
                        <AnimatedBar width={skill.width} />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Tools */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-8 rounded-2xl border border-card h-full">
                <h3 className="text-2xl font-semibold text-primary mb-6">Tools & Platforms</h3>
                <div className="space-y-3">
                  {[
                    { icon: <FaGithub className="text-secondary" />, name: 'Git / GitHub', width: '95%' },
                    { icon: <SiGatsby className="text-[var(--color-accent-400)]" />, name: 'Gatsby', width: '85%' },
                  ].map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-secondary flex items-center gap-2">{skill.icon} {skill.name}</span>
                      <div className="w-24 bg-bar-track rounded-full h-2">
                        <AnimatedBar width={skill.width} />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary text-center mb-16">Featured Projects</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>

            {/* Patatap */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-6 rounded-2xl border border-card hover:border-card-hover transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src="https://github.com/user-attachments/assets/3891a115-2316-4ae6-8a11-fbea3a1892ad"
                    alt="Patatap Clone Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-card"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">Patatap</h3>
                  <p className="text-accent text-sm">2020</p>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Interactive sound and animation app using PaperJS and HowlerJS. Press any key A-Z to play unique sounds with random circle animations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">PaperJS</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">HowlerJS</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">JavaScript</span>
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <a href="https://codepen.io/abhinandansharma/full/abNmPoJ" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <PlayIcon /> Live Demo
                  </a>
                  <a href="https://github.com/abhinandansharma/patatap" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* RGB Color Game */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-6 rounded-2xl border border-card hover:border-card-hover transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src="https://github.com/user-attachments/assets/cfec28b0-7e63-419d-92bb-f157e7630838"
                    alt="RGB Color Game Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-card"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">RGB Color Game</h3>
                  <p className="text-accent text-sm">2020</p>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Interactive color guessing game with three difficulty modes. Players guess colors based on RGB values from 3, 6, or 9 color options.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">CSS3</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">HTML5</span>
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <a href="https://codepen.io/abhinandansharma/full/VweErOz" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <PlayIcon /> Live Demo
                  </a>
                  <a href="https://github.com/abhinandansharma/ColorGame" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* TaskMaster Pro */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-6 rounded-2xl border border-card hover:border-card-hover transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src="https://github.com/user-attachments/assets/a9b452db-5145-48a8-95f0-65ec965d8504"
                    alt="TaskMaster Pro Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-card"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">TaskMaster Pro</h3>
                  <p className="text-accent text-sm">2020</p>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Task management application with filtering, search, and dark mode support. Emphasized clean state management and reusable UI patterns.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">jQuery</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">CSS3</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">HTML5</span>
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <a href="https://task-master-pro-zeta.vercel.app/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <PlayIcon /> Live Demo
                  </a>
                  <a href="https://github.com/abhinandansharma/taskMasterPro" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Netflix Clone */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-6 rounded-2xl border border-card hover:border-card-hover transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src="https://user-images.githubusercontent.com/35263182/126314477-936b6acd-84d2-4c6b-b45a-c2678fd934b5.png"
                    alt="Netflix Clone Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-card"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">Netflix Clone</h3>
                  <p className="text-accent text-sm">2021</p>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Netflix-style web application built with React and the TMDB API. Focused on component composition, API-driven rendering, and responsive UI structure.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">React</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">JavaScript</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">CSS</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">Vercel</span>
                </div>
                <div className="flex flex-row justify-between gap-4">
                  <a href="https://netflix-clone-ten-woad.vercel.app/" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <PlayIcon /> Live Demo
                  </a>
                  <a href="https://github.com/abhinandansharma/netflix-clone" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                    <GitHubIcon /> GitHub
                  </a>
                </div>
              </TiltCard>
            </StaggerItem>

            {/* Star Coin */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-6 rounded-2xl border border-card hover:border-card-hover transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src="https://github.com/user-attachments/assets/5fcef9f9-f0a3-483d-a2b2-7dd0b844bfd5"
                    alt="Star Coin Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-card"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">Star Coin</h3>
                  <p className="text-accent text-sm">2018</p>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Proof of Work based cryptocurrency implementation using Flask and Python. A fun educational project exploring blockchain concepts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">Flask</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">Blockchain</span>
                </div>
                <a href="https://github.com/abhinandansharma/starcoin" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                  <GitHubIcon /> View on GitHub
                </a>
              </TiltCard>
            </StaggerItem>

            {/* Number Plate Recognition */}
            <StaggerItem>
              <TiltCard className="bg-gradient-to-br from-[var(--color-card-from)] to-[var(--color-card-to)] p-6 rounded-2xl border border-card hover:border-card-hover transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src="https://user-images.githubusercontent.com/35263182/98663114-ad8ce980-236e-11eb-98cc-e57ae1f07d94.PNG"
                    alt="Number Plate Recognition Preview"
                    className="w-full h-32 object-cover rounded-lg mb-4 border border-card"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <h3 className="text-xl font-semibold text-primary mb-2">Number Plate Recognition</h3>
                  <p className="text-accent text-sm">2019</p>
                </div>
                <p className="text-secondary text-sm mb-4">
                  Red light crossing detector using OpenCV and IoT sensors. Built a system to recognize number plates for traffic monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">OpenCV</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">Python</span>
                  <span className="px-2 py-1 bg-tag-bg text-tag-text text-xs rounded">IoT</span>
                </div>
                <a href="https://github.com/abhinandansharma/number-plate-recognition" target="_blank" rel="noopener noreferrer" className={linkClasses}>
                  <GitHubIcon /> View on GitHub
                </a>
              </TiltCard>
            </StaggerItem>

          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pb-20 pt-10 px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-primary mb-16">Get In Touch</h2>
            <div className="bg-[var(--color-bg-surface-60)] p-8 rounded-2xl border border-nav">
              <p className="text-secondary text-lg mb-8">
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <a
                    href="mailto:abhinandan0659@gmail.com"
                    className="bg-btn-primary hover:bg-btn-primary-hover text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_var(--color-shadow-btn)] inline-block"
                  >
                    Send Email
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="https://www.linkedin.com/in/-abhinandan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-accent text-accent hover:bg-btn-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_var(--color-shadow-btn-light)] inline-block"
                  >
                    LinkedIn
                  </a>
                </MagneticButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-[var(--color-bg-footer)] border-t border-nav">
        <div className="max-w-7xl mx-auto justify-between flex flex-col sm:flex-row items-center gap-8">
          <p className="text-muted">
            &copy; 2026 Abhinandan Sharma. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex items-center justify-center gap-6 flex-col sm:flex-row">
            <iframe src="https://github.com/sponsors/abhinandansharma/button" title="Sponsor abhinandansharma"
                    height="32" width="114" className="border-0 rounded-md">
            </iframe>
            <div className="flex items-center justify-center gap-8">
              {[
                { href: 'https://github.com/abhinandansharma', icon: <FaGithub className="w-6 h-6" />, label: 'GitHub' },
                { href: 'https://x.com/notjustadev', icon: <FaTwitter className="w-6 h-6" />, label: 'Twitter' },
                { href: 'https://codepen.io/abhinandansharma', icon: <FaCodepen className="w-6 h-6" />, label: 'CodePen' },
                { href: 'https://www.linkedin.com/in/-abhinandan/', icon: <FaLinkedinIn className="w-6 h-6" />, label: 'LinkedIn' },
                { href: 'https://t.me/abhinandan0659', icon: <FaTelegramPlane className="w-6 h-6" />, label: 'Telegram' },
                { href: 'https://instagram.com/_abhinandansharma', icon: <FaInstagram className="w-6 h-6" />, label: 'Instagram' },
                { href: 'https://medium.com/@abhinandan0659', icon: <FaMediumM className="w-6 h-6" />, label: 'Medium' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-social hover:text-social-hover transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
