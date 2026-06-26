import { motion } from 'framer-motion';

const paragraphs = [
  {
    title: '01. FORMATION — THE WALLS THAT MADE ME',
    text: 'Six years within the limestone walls of Barishal Cadet College, Shariatullah House. Not a school — a forge. Dawn formations, cold floors, the weight of discipline worn like a second skin. Cadet college does not teach you information; it calcifies your spine. In the brotherhood of boys who became men under the same sun, I learned asabiyyah — the social cohesion that Ibn Khaldun wrote about. That solidarity is the substrate of everything I build.',
  },
  {
    title: '02. ALONE IN THE MEGACITY',
    text: 'Then Dhaka. The largest, loudest, most chaotic classroom on earth. Alone, without the walls, without the structure. Building in isolation — code at 2AM, civic experiments, the slow craft of becoming useful. Isolation is a strange teacher. It either hollows you out or forces you to build your own scaffolding. I chose the latter.',
  },
  {
    title: '03. THE DUAL PURSUIT',
    text: 'Outward: civic tech, open source, community organizing. Crime maps, chatbots, board game nights, workshops. Building tools that serve life. Inward: the long reading, the intellectual tradition, spiritual formation. I have come to believe that a man must build both — the city outside and the citadel within. Neither is complete without the other.',
  },
  {
    title: '04. FORMATION COMMUNITIES',
    text: 'Medha Academy taught me how to think in the Bengali intellectual tradition. These are not just groups — they are the infrastructure of a generation learning to build again. I am what I am because of the people who chose to build alongside me.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-4 geometric-bg">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm md:text-base text-jade mb-4 tracking-[0.2em]"
        >
          / THE JOURNEY
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pixel text-2xl md:text-3xl text-offwhite mb-12"
        >
          From the walls of Barishal to the streets of Dhaka.
        </motion.h3>

        <div className="space-y-10">
          {paragraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <h4 className="font-pixel text-sm text-amber mb-2 tracking-wider">
                {p.title}
              </h4>
              <p className="font-body text-offwhite/80 leading-relaxed text-sm md:text-base">
                {p.text}
              </p>
              {i < paragraphs.length - 1 && (
                <div className="mt-6 h-px bg-gradient-to-r from-jade/20 via-deepteal/40 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-6 border border-jade/20 bg-dark/50"
        >
          <div className="font-pixel text-xs text-jade/50 mb-2">
            &gt; terminal — quote
          </div>
          <p className="font-pixel text-lg md:text-xl text-amber leading-relaxed">
            &ldquo;The map is not the territory. But you still need a map.&rdquo;
          </p>
          <div className="mt-2 font-pixel text-xs text-jade/40">
            _ // Korzybski, adapted // _
          </div>
        </motion.div>
      </div>
    </section>
  );
}
