import { useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Bangladesh from './components/Bangladesh';
import ArakanWatch from './components/ArakanWatch';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <div className="fixed top-0 left-0 w-[3px] h-full z-[9999] pointer-events-none">
      <div
        className="w-full origin-top bg-gradient-to-b from-jade via-amber to-jade/20"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

function Navbar() {
  const links = [
    { href: '#about', label: 'Journey' },
    { href: '#bangladesh', label: 'Bengal' },
    { href: '#arakan', label: 'Arakan' },
    { href: '#projects', label: 'Work' },
    { href: '#skills', label: 'Stack' },
    { href: '#contact', label: 'Connect' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-dark/80 backdrop-blur-sm border-b border-jade/5">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="font-pixel text-sm text-jade/70 hover:text-jade transition-colors"
        >
          &lt;NM/&gt;
        </a>
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-pixel text-xs text-offwhite/40 hover:text-jade transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  useEffect(() => {
    document.title = 'Naimur Mostafiz — Builder, Chronicler, Watcher';
  }, []);

  return (
    <div className="scanlines">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Bangladesh />
        <ArakanWatch />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
