import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-dark via-deepteal/10 to-dark">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm md:text-base text-jade mb-4 tracking-[0.2em]"
        >
          / CONNECT
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-offwhite/70 leading-relaxed text-sm md:text-base mb-10 max-w-lg mx-auto"
        >
          If you&apos;re building something worth building, or watching something
          worth watching — find me.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-sm mx-auto"
        >
          {/* Terminal-style input */}
          <div className="border border-jade/20 bg-dark/40 p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-pixel text-xs text-jade/50">&gt; ./reach_out.sh</span>
              <span className="font-pixel text-[10px] text-offwhite/20">_ (async)</span>
            </div>

            <div className="space-y-3">
              <a
                href="https://github.com/naimur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 border border-jade/10 hover:border-jade/30 transition-colors group"
              >
                <span className="font-pixel text-sm text-jade/50 group-hover:text-jade transition-colors">&gt;</span>
                <span className="font-pixel text-sm text-offwhite/60 group-hover:text-offwhite transition-colors">
                  github.com/naimur
                </span>
                <span className="ml-auto font-pixel text-[10px] text-offwhite/20 group-hover:text-jade/40 transition-colors">
                  [external]
                </span>
              </a>

              <a
                href="mailto:hello@naimur.dev"
                className="flex items-center gap-3 px-4 py-3 border border-jade/10 hover:border-jade/30 transition-colors group"
              >
                <span className="font-pixel text-sm text-jade/50 group-hover:text-jade transition-colors">&gt;</span>
                <span className="font-pixel text-sm text-offwhite/60 group-hover:text-offwhite transition-colors">
                  hello@naimur.dev
                </span>
                <span className="ml-auto font-pixel text-[10px] text-offwhite/20 group-hover:text-jade/40 transition-colors">
                  [smtp]
                </span>
              </a>

              <div className="flex items-center gap-3 px-4 py-3 border border-jade/5 cursor-default">
                <span className="font-pixel text-sm text-jade/30">&gt;</span>
                <span className="font-pixel text-sm text-offwhite/40">
                  linkedin.com/in/naimur
                </span>
                <span className="ml-auto font-pixel text-[10px] text-offwhite/15">
                  [unlinked]
                </span>
              </div>

            </div>
          </div>

          <p className="font-pixel text-xs text-offwhite/30">
            _ PGP key available upon request _
          </p>

          <div className="mt-12">
            <p className="font-pixel text-[10px] text-offwhite/10 tracking-[0.3em]">
              BUILT WITH REACT + TAILWIND + FRAMER MOTION
            </p>
            <p className="font-pixel text-[10px] text-offwhite/10 mt-1">
              DEPLOYED FROM DHAKA, BANGLADESH — 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
