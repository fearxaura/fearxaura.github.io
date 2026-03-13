import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'
import { Badge } from './ui/Badge'
import { PROJECTS } from '../data/projects'

const FILTERS = ['All', 'Web', 'Bots', 'VPS']

function ProjectCard({ project, index }) {
  const [ref, isVisible] = useIntersection()
  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden group hover:border-white/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Placeholder image area */}
      <div className="h-44 bg-gradient-to-br from-white/5 to-white/10 relative flex items-center justify-center">
        <span className="text-5xl font-black text-white/10 select-none">{project.title[0]}</span>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
          <a href={project.liveUrl} className="p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Live">
            <ExternalLink size={16} />
          </a>
          <a href={project.demoUrl} className="p-2 bg-white/20 text-white border border-white/30 rounded-lg hover:bg-white/30 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Demo">
            <Github size={16} />
          </a>
        </div>
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [ref, isVisible] = useIntersection()

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">My Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Portfolio</h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                filter === f
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white/60 border-white/20 hover:border-white/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
