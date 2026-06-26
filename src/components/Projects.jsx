import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Crime Map Bangladesh (Politikos Map)',
    desc: 'Crowdsourced civic crime reporting platform with geospatial visualization.',
    tags: ['Next.js', 'MapLibre', 'Hono', 'Convex'],
    status: 'Live',
    statusColor: 'text-jade border-jade/40',
    link: 'https://politikos-map.vercel.app',
  },
  {
    name: 'Medha Academy AI Chatbot',
    desc: 'Local RAG chatbot for an intellectual institution. ChromaDB + Gemini Flash + Telegram bot interface.',
    tags: ['ChromaDB', 'Gemini Flash', 'Telegram', 'Python'],
    status: 'In Progress',
    statusColor: 'text-amber border-amber/40',
    link: null,
  },
  {
    name: 'Telos Tree',
    desc: 'Interactive visualization of a civilizational framework — branching purposes, layered meaning.',
    tags: ['React', 'D3.js', 'SVG'],
    status: 'Prototype',
    statusColor: 'text-offwhite/50 border-offwhite/20',
    link: null,
  },
  {
    name: 'LOST LAND Documentary Screening',
    desc: 'Organized institutional screening pipeline for the Venice 2025 Rohingya documentary.',
    tags: ['Event Ops', 'Outreach', 'Bangladesh'],
    status: 'Completed',
    statusColor: 'text-offwhite/50 border-offwhite/20',
    link: null,
  },
  {
    name: 'Pillar 19 / Board Games Community',
    desc: 'BRACU board games community. 190+ members. Regular sessions, tournament organization.',
    tags: ['Community', 'Events', 'BRACU'],
    status: 'Active',
    statusColor: 'text-jade border-jade/40',
    link: null,
  },
  {
    name: 'Git/GitHub Onboarding Workshop',
    desc: 'Taught atomic commits, repository scaffolding, and vibe coding to a small cohort.',
    tags: ['Git', 'GitHub', 'Mentorship'],
    status: 'Completed',
    statusColor: 'text-offwhite/50 border-offwhite/20',
    link: null,
  },
];

const statusBadge = (s, color) => (
  <span className={`font-pixel text-[10px] px-2 py-0.5 border ${color}`}>
    [{s.toUpperCase()}]
  </span>
);

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 geometric-bg">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-heading text-sm md:text-base text-jade mb-4 tracking-[0.2em]"
        >
          / PROJECTS
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-pixel text-2xl md:text-3xl text-offwhite mb-12"
        >
          Things built. Things being built.
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group p-5 bg-dark/60 border border-jade/10 hover:border-jade/30 transition-all duration-300 pixel-border-glow"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <h4 className="font-pixel text-xs md:text-sm text-offwhite leading-relaxed flex-1">
                  {p.name}
                </h4>
                {statusBadge(p.status, p.statusColor)}
              </div>

              <p className="font-body text-offwhite/60 text-xs md:text-sm mb-4 leading-relaxed">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-pixel text-[10px] text-deepteal bg-deepteal/10 px-2 py-0.5 border border-deepteal/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-pixel text-xs text-jade/60 hover:text-jade transition-colors"
                >
                  &gt; visit site _
                </a>
              ) : (
                <span className="font-pixel text-xs text-offwhite/20">
                  &gt; github link pending _
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
