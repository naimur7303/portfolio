import { motion } from 'framer-motion';

export default function ArakanWatch() {
  return (
    <section id="arakan" className="relative py-20 md:py-28 px-4 bg-gradient-to-b from-dark via-red-dark to-dark overflow-hidden">
      {/* Subtle geometric pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #cc3300 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          {/* Vigil candle flame */}
          <div className="inline-block">
            <svg width="24" height="32" viewBox="0 0 24 32" className="mx-auto flicker">
              <ellipse cx="12" cy="24" rx="6" ry="2" fill="rgba(204, 51, 0, 0.1)" />
              <rect x="10" y="24" width="4" height="8" fill="rgba(204, 51, 0, 0.2)" rx="1" />
              <ellipse cx="12" cy="18" rx="3" ry="8" fill="rgba(255, 179, 0, 0.15)" />
              <ellipse cx="12" cy="16" rx="1.5" ry="4" fill="rgba(255, 179, 0, 0.3)" />
            </svg>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-sm md:text-base text-red-ember mb-4 tracking-[0.2em]"
        >
          / ARAKAN WATCH
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-pixel text-xl md:text-2xl text-amber/70 mb-6"
        >
          A vigil, not a performance.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <p className="font-body text-offwhite/60 leading-relaxed text-sm md:text-base max-w-lg mx-auto">
            Arakan is Bengal&rsquo;s eastern civilizational face. A land of shared
            history, overlapping bloodlines, and a wound that will not close. The
            Rohingya are a witness-people — their survival is a testament to what
            happens when the world looks away.
          </p>

          <p className="font-body text-offwhite/50 leading-relaxed text-sm max-w-md mx-auto">
            This watch is small, steady, and long. It does not perform outrage.
            It pays attention. Because attention, held over years, is a form of
            fidelity.
          </p>

          <div className="mt-8 p-4 border border-red-ember/10 max-w-sm mx-auto">
            <p className="font-pixel text-xs text-amber/40 mb-3">
              _ resources _
            </p>
            <div className="space-y-2">
              <a
                href="#"
                className="block font-pixel text-sm text-offwhite/50 hover:text-red-ember transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                &gt; Arakan Rohingya Union (placeholder)
              </a>
              <a
                href="#"
                className="block font-pixel text-sm text-offwhite/50 hover:text-red-ember transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                &gt; LOST LAND — Venice 2025 (placeholder)
              </a>
              <a
                href="#"
                className="block font-pixel text-sm text-offwhite/50 hover:text-red-ember transition-colors"
                onClick={(e) => e.preventDefault()}
              >
                &gt; OSINT: Arakan Situation Report (placeholder)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
