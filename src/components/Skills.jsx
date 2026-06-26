import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Languages',
    icon: '⚙',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript'],
  },
  {
    name: 'Frameworks',
    icon: '◈',
    items: ['Next.js', 'Hono', 'Flask', 'React'],
  },
  {
    name: 'Tools',
    icon: '⛏',
    items: ['Git', 'Docker', 'Convex', 'MapLibre', 'ChromaDB'],
  },
  {
    name: 'Research',
    icon: '◈',
    items: ['OSINT', 'Geoanalysis', 'Bengali History', 'Geopolitics'],
  },
];

const pixelColors = ['#0d4f4f', '#0a3f3f', '#0f5a3a', '#0d3520', '#1a1a0a'];

function PixelItem({ name, index }) {
  return (
    <div className="relative group">
      <div
        className="pixel-border px-3 py-2 bg-dark/80 hover:bg-deepteal/20 transition-all duration-300 cursor-default"
        style={{
          borderColor: 'rgba(0, 255, 136, 0.15)',
        }}
      >
        <span className="font-pixel text-xs md:text-sm text-offwhite/70 group-hover:text-jade transition-colors">
          {name}
        </span>
      </div>
    </div>
  );
}

function CategoryBox({ cat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="font-heading text-xs text-jade">{cat.icon}</span>
        <h4 className="font-pixel text-sm text-amber tracking-wider">{cat.name}</h4>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-6">
        {cat.items.map((item) => (
          <PixelItem key={item} name={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm md:text-base text-jade mb-4 tracking-[0.2em]"
        >
          / INVENTORY
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pixel text-2xl md:text-3xl text-offwhite mb-12"
        >
          Tools of the trade.
        </motion.h3>

        <div className="p-6 md:p-8 border border-jade/10 bg-dark/40">
          {/* RPG-style header */}
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-jade/10">
            <div className="pixel-border p-3">
              <div className="w-8 h-8 bg-gradient-to-br from-jade/20 to-deepteal/30" />
            </div>
            <div>
              <p className="font-pixel text-xs text-jade/50">PLAYER STATS</p>
              <p className="font-pixel text-sm text-offwhite">NaimurMostafiz</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8">
            {categories.map((cat, i) => (
              <CategoryBox key={cat.name} cat={cat} index={i} />
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-jade/10">
            <p className="font-pixel text-[10px] text-offwhite/20 text-center">
              ITEM COUNT: {categories.reduce((s, c) => s + c.items.length, 0)} / ∞
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
