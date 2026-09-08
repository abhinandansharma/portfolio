import React from 'react';
import useReveal from './hooks/useReveal';
import useMagnet from './hooks/useMagnet';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Now from './components/Now';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useReveal();
  useMagnet();
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Now />
        <Experience />
        <Skills />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
