import React from 'react';
import './App.css';
import ExperienceSection from './ExperienceSection';
import HaloEffect from './HaloEffect';
import { FaReact, FaSass, FaGithub, FaAndroid, FaApple, FaFigma, FaTwitter, FaLinkedinIn, FaInstagram, FaTelegramPlane, FaMediumM, FaCodepen } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiAdobexd, SiGraphql, SiFirebase } from 'react-icons/si';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl">Abhinandan Sharma</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <HaloEffect />
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Abhinandan Sharma
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-8">
              Senior Software Engineer | Turning Complex Medical Workflows into Simple Digital Tools
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Experienced in UI/UX designing and Front-end coding. I have a good interest in problem-solving. 
              I'm always ready to take on a new challenge and to learn cutting-edge technologies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="/portfolio/resume.pdf"
              target='_blank'
              rel="noopener noreferrer" 
              className="border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Who I Am</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm Abhinandan Sharma. I build web interfaces that are as functional as they are beautiful. 
                With 4 years of experience in front-end development, I specialize in React, JavaScript, 
                and turning complex problems into simple, user-friendly solutions.
                Also an open-source contributor and have mentored developers through programs like Google Summer of Code.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, I'm usually lost in a side project or trying to figure out how black holes work. I thrive on challenges, 
                whether it's debugging a stubborn error or learning a new framework in a weekend.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h4 className="text-xl font-semibold text-white mb-4">Quick Facts</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Front-End Expert (4+ yrs mastering React, JS, CSS, HTML)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Full-Stack Capable (Built MERN Netflix clone)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Open-Source (EOS Design System contributor)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  GSoC Mentor & Alum (Mentored 2020, interned 2019)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Astronomy Buff (Passionate about space and tech)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  BTech in Computer Science (Graduated in 2021)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Front-end Development</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaReact className="text-cyan-400" /> React.js</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><SiNextdotjs className="text-white" /> Next.js</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><SiTypescript className="text-blue-400" /> TypeScript</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaSass className="text-pink-400" /> Sass/SCSS</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Mobile Development</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaReact className="text-cyan-400" /> React Native</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaApple className="text-gray-200" /> iOS Development</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaAndroid className="text-green-400" /> Android SDK</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaFigma className="text-pink-400" /> Mobile UI/UX</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-8 rounded-2xl border border-purple-500/30">
              <h3 className="text-2xl font-semibold text-white mb-6">Other Technologies & Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><SiAdobexd className="text-pink-400" /> Adobe XD</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><SiGraphql className="text-pink-500" /> GraphQL</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><SiFirebase className="text-yellow-400" /> Firebase</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2"><FaGithub className="text-gray-300" /> Git/GitHub</span>
                  <div className="w-24 bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Patatap */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-4">
                <img 
                  src="https://github.com/user-attachments/assets/3891a115-2316-4ae6-8a11-fbea3a1892ad"
                  alt="Patatap Clone Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-purple-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">Patatap</h3>
                <p className="text-purple-300 text-sm">2020</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Interactive sound and animation app using PaperJS and HowlerJS. Press any key A-Z to play unique sounds with random circle animations.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">PaperJS</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">HowlerJS</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">JavaScript</span>
              </div>
                            <div className="flex flex-row justify-between gap-4">
                <a 
                  href="https://codepen.io/abhinandansharma/full/abNmPoJ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Live Demo
                </a>
                <a 
                  href="https://github.com/abhinandansharma/patatap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* RGB Color Game */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-4">
                <img 
                  src="https://github.com/user-attachments/assets/cfec28b0-7e63-419d-92bb-f157e7630838" 
                  alt="RGB Color Game Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-purple-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">RGB Color Game</h3>
                <p className="text-purple-300 text-sm">2020</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Interactive color guessing game with three difficulty modes. Players guess colors based on RGB values from 3, 6, or 9 color options.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">CSS3</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">HTML5</span>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <a 
                  href="https://codepen.io/abhinandansharma/full/VweErOz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Live Demo
                </a>
                <a 
                  href="https://github.com/abhinandansharma/ColorGame" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* TaskMaster Pro */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-4">
                <img 
                  src="https://github.com/user-attachments/assets/7b577324-8f7c-4d18-8a35-b1c465875571" 
                  alt="TaskMaster Pro Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-purple-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">TaskMaster Pro</h3>
                <p className="text-purple-300 text-sm">2020</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                A modern, feature-rich task management application built with jQuery, featuring dark mode, search, priorities, and real-time statistics.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">jQuery</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">CSS3</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">HTML5</span>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <a 
                  href="https://task-master-pro-zeta.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Live Demo
                </a>
                <a 
                  href="https://github.com/abhinandansharma/taskMasterPro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Netflix Clone */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-4">
                <img 
                  src="https://user-images.githubusercontent.com/35263182/126314477-936b6acd-84d2-4c6b-b45a-c2678fd934b5.png" 
                  alt="Netflix Clone Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-purple-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">Netflix Clone</h3>
                <p className="text-purple-300 text-sm">2021</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                A full-featured Netflix clone built with React. Features include movie browsing, responsive design, and custom API integration. Deployed on Vercel.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">React</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">JavaScript</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">CSS</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">Vercel</span>
              </div>
              <div className="flex flex-row justify-between gap-4">
                <a 
                  href="https://netflix-clone-ten-woad.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16.5v-9l6 4.5-6 4.5z"/>
                  </svg>
                  Live Demo
                </a>
                <a 
                  href="https://github.com/abhinandansharma/netflix-clone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </a>
              </div>
            </div>

            {/* Star Coin */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-4">
                <img 
                  src="https://github.com/user-attachments/assets/5fcef9f9-f0a3-483d-a2b2-7dd0b844bfd5" 
                  alt="Star Coin Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-purple-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">Star Coin</h3>
                <p className="text-purple-300 text-sm">2018</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Proof of Work based cryptocurrency implementation using Flask and Python. A fun educational project exploring blockchain concepts.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">Flask</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">Blockchain</span>
              </div>
              <a 
                href="https://github.com/abhinandansharma/starcoin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>

            {/* Number Plate Recognition */}
            <div className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 p-6 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="mb-4">
                <img 
                  src="https://user-images.githubusercontent.com/35263182/98663114-ad8ce980-236e-11eb-98cc-e57ae1f07d94.PNG" 
                  alt="Number Plate Recognition Preview"
                  className="w-full h-32 object-cover rounded-lg mb-4 border border-purple-500/30"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <h3 className="text-xl font-semibold text-white mb-2">Number Plate Recognition</h3>
                <p className="text-purple-300 text-sm">2019</p>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Red light crossing detector using OpenCV and IoT sensors. Built a system to recognize number plates for traffic monitoring.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">OpenCV</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">Python</span>
                <span className="px-2 py-1 bg-purple-600/30 text-purple-300 text-xs rounded">IoT</span>
              </div>
              <a 
                href="https://github.com/abhinandansharma/number-plate-recognition" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-purple-600/20 hover:bg-purple-600/40 text-purple-300 hover:text-white text-sm rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/60"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
                View on GitHub
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="pb-20 pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-16">Get In Touch</h2>
          <div className="bg-black/20 p-8 rounded-2xl border border-white/10">
            <p className="text-gray-300 text-lg mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:abhinandan0659@gmail.com" 
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Email
              </a>
              <a 
                href="https://www.linkedin.com/in/-abhinandan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto justify-between flex flex-col sm:flex-row items-center gap-8">
          <p className="text-gray-400">
            © 2025 Abhinandan Sharma. Built with React, TypeScript, and Tailwind CSS.
          </p>
          <div className="flex items-center justify-center gap-8">
              <a
                href="https://twitter.com/notjustadev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://codepen.io/abhinandansharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="CodePen"
              >
                <FaCodepen className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/-abhinandan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="w-6 h-6" />
              </a>
              <a
                href="https://t.me/abhinandan0659"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Telegram"
              >
                <FaTelegramPlane className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/_abhinandansharma"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://medium.com/@abhinandan0659"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
                aria-label="Medium"
              >
                <FaMediumM className="w-6 h-6" />
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
