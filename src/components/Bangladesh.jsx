import { motion } from 'framer-motion';

const RIVER_COLS = 60;
const RIVER_ROWS = 40;

function DeltaSilhouette() {
  const cells = [];
  for (let y = 0; y < RIVER_ROWS; y++) {
    for (let x = 0; x < RIVER_COLS; x++) {
      const isLand = y < 30 && x > 5 && x < 50;
      const isDelta = y >= 30 && y < 36 && x > 8 && x < 48;
      const riverY = 30 + Math.sin(x * 0.3) * 2;
      const isRiver = Math.abs(y - riverY) < 1 && x > 10 && x < 48;
      const isCoast = (y === 29 || y === 30) && x > 10 && x < 48;
      const fill = isRiver
        ? 'rgba(0, 255, 136, 0.15)'
        : isDelta
          ? 'rgba(13, 79, 79, 0.3)'
          : isLand || isCoast
            ? 'rgba(0, 255, 136, 0.06)'
            : 'transparent';
      if (fill !== 'transparent') {
        cells.push(
          <rect
            key={`${x}-${y}`}
            x={x}
            y={y}
            width={1}
            height={1}
            fill={fill}
          />
        );
      }
    }
  }
  return (
    <svg
      viewBox={`0 0 ${RIVER_COLS} ${RIVER_ROWS}`}
      className="w-full max-w-md mx-auto h-auto opacity-60"
      style={{ imageRendering: 'pixelated' }}
    >
      {cells}
      {/* Bay of Bengal label */}
      <text x={5} y={38} fill="rgba(0,255,136,0.2)" fontSize="2" fontFamily="VT323">
        BAY OF BENGAL
      </text>
    </svg>
  );
}

export default function Bangladesh() {
  return (
    <section id="bangladesh" className="relative py-24 md:py-32 px-4 bg-gradient-to-b from-deepteal/20 to-dark">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #00ff88 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm md:text-base text-jade mb-4 tracking-[0.2em]"
        >
          / BANGLADESH
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pixel text-2xl md:text-3xl text-offwhite mb-8"
        >
          The delta is not a backdrop. It is the subject.
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="font-body text-offwhite/80 leading-relaxed text-sm md:text-base">
              The Bengal delta is one of history&rsquo;s great civilizational crossroads.
              At the confluence of the Ganges, Brahmaputra, and Meghna, this land has
              been a site of encounter for millennia — Buddhist, Hindu, Mughal,
              British, and now, the unfinished project of Bangladesh.
            </p>
            <p className="font-body text-offwhite/80 leading-relaxed text-sm md:text-base">
              July 2024 proved that the Bengali capacity for dignity and sacrifice
              is not a relic. A generation rose, bled, and toppled an autocracy. That
              uprising is not the end of a story — it is the first chapter of what
              comes next.
            </p>
            <p className="font-body text-amber/70 leading-relaxed text-sm md:text-base font-medium">
              To be Bengali in 2026 is to carry the weight of that history and the
              responsibility of building what comes after. Not with nostalgia. With
              the steady hands of those who know what they are building and why.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <DeltaSilhouette />
            <p className="font-pixel text-xs text-jade/30 text-center mt-2">
              _ river delta schematic _
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
