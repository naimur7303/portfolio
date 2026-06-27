import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import PixelMap from './PixelMap';

const TITLES = [
  'Builder.',
  'Chronicler.',
  'CSE @ BRACU.',
  'Bengal & Arakan Watcher.',
];

function useTypewriter(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }

    timeout = setTimeout(
      () => {
        setText(
          isDeleting
            ? current.substring(0, text.length - 1)
            : current.substring(0, text.length + 1)
        );
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}

export default function Hero() {
  const title = useTypewriter(TITLES);

  const scrollTo = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <PixelMap className="opacity-20 md:opacity-30 scale-150" />
      </div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-dark/15 to-dark/60" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-pixel text-jade/50 text-sm md:text-base mb-4 tracking-[0.3em]"
        >
          &gt; CIVILIZATIONAL_ARTIFACT.EXE
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-heading text-2xl md:text-4xl lg:text-5xl text-offwhite leading-relaxed mb-6 tracking-wide"
        >
          NAIMUR
          <br />
          MOSTAFIZ
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-pixel text-xl md:text-2xl lg:text-3xl text-jade mb-3 h-10 cursor-blink"
        >
          {title}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="font-body text-offwhite/60 text-sm md:text-base mb-10 max-w-xl mx-auto"
        >
          CSE Student · Builder of civic tech · Watcher of Bengal and Arakan
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-8 py-3 font-pixel text-sm md:text-base text-dark bg-jade hover:bg-jade-dim transition-colors tracking-wider cursor-pointer"
          >
            [ See My Work ]
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="px-8 py-3 font-pixel text-sm md:text-base text-jade border border-jade/40 hover:bg-jade/10 transition-colors tracking-wider cursor-pointer"
          >
            [ Read My Story ]
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="animate-bounce text-jade/40 font-pixel text-xs">▼ scroll ▼</div>
      </motion.div>
    </section>
  );
}
