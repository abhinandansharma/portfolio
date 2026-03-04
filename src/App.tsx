import React from 'react';
import './App.css';
import { motion } from 'framer-motion';
import ExperienceSection from './ExperienceSection';
import HaloEffect from './HaloEffect';
import { FadeIn, StaggerContainer, StaggerItem, AnimatedText, TiltCard, AnimatedBar, CursorGlow, MagneticButton } from './animations';
import { FaGithub, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaMediumM, FaCodepen, FaHeart } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const GitHubIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const linkClasses = "inline-flex items-center px-3 py-1.5 text-sm rounded-lg transition-all duration-300 text-secondary hover:text-primary border border-[var(--color-border-card)] hover:border-[var(--color-border-card-hover)] bg-gradient-to-b from-white/[0.06] to-transparent hover:from-white/[0.1]";

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <CursorGlow />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed top-0 w-full z-50 border-b border-[var(--color-border-subtle)]"
        style={{ background: 'var(--color-bg-nav)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#" className="gradient-text font-bold text-lg tracking-tight">abhinandan.</a>
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted hover:text-primary text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 sm:px-8 relative min-h-[100vh] flex items-center">
        <HaloEffect />
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border-card)] bg-[var(--color-accent-500-06)] mb-8"
            >
              <span className="text-accent text-sm font-medium">Founding Principal Engineer</span>
            </motion.div>

            <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] font-extrabold tracking-tight mb-6 leading-[1.05]">
              <AnimatedText text="Abhinandan" className="gradient-text block" />
              <AnimatedText text="Sharma." className="text-primary block" delay={0.4} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-secondary text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
            >
              Building scalable B2B platforms from zero to one.
              <span className="text-muted"> React, FastAPI, MongoDB.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <MagneticButton>
                <a
                  href="#contact"
                  className="btn-primary text-white px-8 py-3.5 rounded-xl font-semibold text-base inline-flex items-center justify-center border border-white/10"
                  style={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.8) 0%, rgba(109,40,217,0.9) 50%, rgba(91,33,182,0.95) 100%)' }}
                >
                  Get in Touch
                </a>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="/portfolio/resume.pdf"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="btn-secondary text-primary px-8 py-3.5 rounded-xl font-semibold text-base inline-flex items-center justify-center border border-[var(--color-border-card)]"
                  style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)' }}
                >
                  View Resume
                </a>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg className="w-5 h-5 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary text-center mb-14">About</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-5">
                <p className="text-secondary text-lg leading-relaxed">
                  I'm a Founding Principal Engineer with a strong frontend background,
                  now focused on platform architecture and data-driven systems. I've gone from building pixel-perfect
                  React interfaces to defining the technical foundation of zero-to-one B2B platforms.
                </p>
                <p className="text-secondary text-lg leading-relaxed">
                  I thrive at the intersection of product and engineering — partnering with founders on technical
                  tradeoffs, setting up engineering standards, and shipping scalable systems using FastAPI, MongoDB,
                  and modern frontend stacks.
                </p>
                <p className="text-muted">
                  Google Summer of Code alumnus and mentor under the Python Software Foundation.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-2xl border border-[var(--color-border-card)] bg-[var(--color-card-bg)] p-6" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                <StaggerContainer className="space-y-0" staggerDelay={0.06}>
                  {[
                    { label: 'Role', value: 'Principal Engineer' },
                    { label: 'Focus', value: 'Zero-to-One Platforms' },
                    { label: 'Stack', value: 'React, Next.js, FastAPI, MongoDB' },
                    { label: 'OSS', value: 'GSoC Intern & Mentor' },
                    { label: 'Experience', value: '5+ Years Production' },
                    { label: 'Education', value: 'BTech CS, 3.5 GPA' },
                  ].map((fact, i) => (
                    <StaggerItem key={fact.label}>
                      <div className={`flex items-center justify-between py-3 ${i < 5 ? 'border-b border-[var(--color-border-subtle)]' : ''}`}>
                        <span className="text-muted text-sm">{fact.label}</span>
                        <span className="text-primary text-sm font-medium">{fact.value}</span>
                      </div>
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
      <section id="skills" className="py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary text-center mb-14">Skills</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {[
              {
                title: 'Frontend',
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
                skills: [
                  { name: 'Python', level: 'Advanced' },
                  { name: 'FastAPI', level: 'Advanced' },
                  { name: 'Node.js', level: 'Advanced' },
                  { name: 'MongoDB', level: 'Proficient' },
                  { name: 'GraphQL', level: 'Proficient' },
                  { name: 'vLLM', level: 'Proficient' },
                  { name: 'RAG', level: 'Proficient' },
                ],
              },
              {
                title: 'Tools & Platforms',
                skills: [
                  { name: 'Git / GitHub', level: 'Expert' },
                  { name: 'AWS / EC2', level: 'Advanced' },
                  { name: 'Vercel', level: 'Advanced' },
                  { name: 'Gatsby', level: 'Advanced' },
                  { name: 'Docker', level: 'Proficient' },
                  { name: 'Figma', level: 'Advanced' },
                ],
              },
            ].map((category) => (
              <StaggerItem key={category.title}>
                <div className="rounded-2xl border border-[var(--color-border-card)] hover:border-[var(--color-border-card-hover)] bg-[var(--color-card-bg)] p-7 h-full transition-colors duration-300" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                  <h3 className="text-lg font-bold text-primary mb-6">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-3 py-1.5 text-sm rounded-lg border transition-colors duration-300 ${
                          skill.level === 'Expert'
                            ? 'bg-[var(--color-accent-500-20)] text-accent border-[var(--color-border-card-hover)]'
                            : skill.level === 'Advanced'
                            ? 'bg-[var(--color-accent-500-06)] text-secondary border-[var(--color-border-card)]'
                            : 'bg-transparent text-muted border-[var(--color-border-subtle)]'
                        }`}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl font-bold text-primary text-center mb-14">Projects</h2>
          </FadeIn>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.08}>
            {[
              {
                title: 'Patatap',
                year: '2020',
                desc: 'Interactive sound and animation app. Press A-Z to play unique sounds with circle animations.',
                tags: ['PaperJS', 'HowlerJS', 'JavaScript'],
                img: 'https://github.com/user-attachments/assets/3891a115-2316-4ae6-8a11-fbea3a1892ad',
                demo: 'https://codepen.io/abhinandansharma/full/abNmPoJ',
                code: 'https://github.com/abhinandansharma/patatap',
              },
              {
                title: 'RGB Color Game',
                year: '2020',
                desc: 'Color guessing game with three difficulty modes based on RGB values.',
                tags: ['JavaScript', 'CSS3', 'HTML5'],
                img: 'https://github.com/user-attachments/assets/cfec28b0-7e63-419d-92bb-f157e7630838',
                demo: 'https://codepen.io/abhinandansharma/full/VweErOz',
                code: 'https://github.com/abhinandansharma/ColorGame',
              },
              {
                title: 'TaskMaster Pro',
                year: '2020',
                desc: 'Task management app with filtering, search, and dark mode support.',
                tags: ['jQuery', 'CSS3', 'HTML5'],
                img: 'https://github.com/user-attachments/assets/a9b452db-5145-48a8-95f0-65ec965d8504',
                demo: 'https://task-master-pro-zeta.vercel.app/',
                code: 'https://github.com/abhinandansharma/taskMasterPro',
              },
              {
                title: 'Netflix Clone',
                year: '2021',
                desc: 'Netflix-style app built with React and TMDB API. Component composition and responsive UI.',
                tags: ['React', 'JavaScript', 'CSS', 'Vercel'],
                img: 'https://user-images.githubusercontent.com/35263182/126314477-936b6acd-84d2-4c6b-b45a-c2678fd934b5.png',
                demo: 'https://netflix-clone-ten-woad.vercel.app/',
                code: 'https://github.com/abhinandansharma/netflix-clone',
              },
              {
                title: 'Star Coin',
                year: '2018',
                desc: 'Proof of Work cryptocurrency implementation exploring blockchain concepts.',
                tags: ['Python', 'Flask', 'Blockchain'],
                img: 'https://github.com/user-attachments/assets/5fcef9f9-f0a3-483d-a2b2-7dd0b844bfd5',
                code: 'https://github.com/abhinandansharma/starcoin',
              },
              {
                title: 'Plate Recognition',
                year: '2019',
                desc: 'Red light crossing detector using OpenCV and IoT sensors for traffic monitoring.',
                tags: ['OpenCV', 'Python', 'IoT'],
                img: 'https://user-images.githubusercontent.com/35263182/98663114-ad8ce980-236e-11eb-98cc-e57ae1f07d94.PNG',
                code: 'https://github.com/abhinandansharma/number-plate-recognition',
              },
            ].map((project) => (
              <StaggerItem key={project.title}>
                <TiltCard className="rounded-2xl border border-[var(--color-border-card)] hover:border-[var(--color-border-card-hover)] bg-[var(--color-card-bg)] overflow-hidden h-full flex flex-col transition-colors duration-300" style={{ backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                  <div className="relative m-3 mb-0 rounded-xl overflow-hidden">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-44 object-cover"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card-bg)] to-transparent opacity-40" />
                  </div>
                  <div className="p-5 pt-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-base font-bold text-primary">{project.title}</h3>
                      <span className="text-muted text-sm">{project.year}</span>
                    </div>
                    <p className="text-muted text-sm mb-4 flex-1 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-[var(--color-accent-500-06)] text-accent text-xs rounded-md border border-[var(--color-border-subtle)]">{tag}</span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                          <LinkIcon /> Demo
                        </a>
                      )}
                      <a href={project.code} target="_blank" rel="noopener noreferrer" className={linkClasses}>
                        <GitHubIcon /> Code
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 sm:px-8">
        <FadeIn>
          <div className="max-w-xl mx-auto text-center">
              <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">Contact</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Let's work together</h2>
              <p className="text-secondary text-lg mb-3 max-w-md mx-auto leading-relaxed">
                Have a project in mind or want to discuss an opportunity? I'd love to hear from you.
              </p>
              <p className="text-muted text-sm mb-10">abhinandan0659@gmail.com</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MagneticButton>
                  <a
                    href="mailto:abhinandan0659@gmail.com"
                    className="btn-primary text-white px-8 py-3.5 rounded-xl font-semibold text-base inline-flex items-center justify-center border border-white/10"
                    style={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.8) 0%, rgba(109,40,217,0.9) 50%, rgba(91,33,182,0.95) 100%)' }}
                  >
                    Send Email
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a
                    href="https://www.linkedin.com/in/-abhinandan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-primary px-8 py-3.5 rounded-xl font-semibold text-base inline-flex items-center justify-center border border-[var(--color-border-card)]"
                    style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)' }}
                  >
                    LinkedIn
                  </a>
                </MagneticButton>
              </div>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 sm:px-8 border-t border-[var(--color-border-subtle)]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted text-sm">&copy; 2026 Abhinandan Sharma</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sponsors/abhinandansharma"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg border border-[var(--color-border-subtle)] hover:border-[var(--color-border-card-hover)] text-muted hover:text-accent transition-all duration-300"
            >
              <FaHeart className="w-3.5 h-3.5 text-pink-500" />
              Sponsor
            </a>
            <div className="flex items-center gap-5">
              {[
                { href: 'https://github.com/abhinandansharma', icon: <FaGithub className="w-5 h-5" />, label: 'GitHub' },
                { href: 'https://x.com/notjustadev', icon: <FaTwitter className="w-5 h-5" />, label: 'Twitter' },
                { href: 'https://codepen.io/abhinandansharma', icon: <FaCodepen className="w-5 h-5" />, label: 'CodePen' },
                { href: 'https://www.linkedin.com/in/-abhinandan/', icon: <FaLinkedinIn className="w-5 h-5" />, label: 'LinkedIn' },
                { href: 'https://t.me/abhinandan0659', icon: <FaTelegramPlane className="w-5 h-5" />, label: 'Telegram' },
                { href: 'https://instagram.com/_abhinandansharma', icon: <FaInstagram className="w-5 h-5" />, label: 'Instagram' },
                { href: 'https://medium.com/@abhinandan0659', icon: <FaMediumM className="w-5 h-5" />, label: 'Medium' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent transition-colors duration-300"
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
