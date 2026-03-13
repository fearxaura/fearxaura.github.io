import { motion } from 'framer-motion'
import { useIntersection } from '../hooks/useIntersection'
import { SKILLS } from '../utils/constants'

function SkillBar({ name, level, index }) {
  const [ref, isVisible] = useIntersection()
  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-white/80 font-medium">{name}</span>
        <span className="text-white/50">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className="h-full bg-white rounded-full"
        />
      </div>
    </div>
  )
}

export default function About() {
  const [ref, isVisible] = useIntersection()

  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">Who I Am</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-white/70 text-lg leading-relaxed">
              I&apos;m a passionate full-stack developer with 3+ years of experience building everything from sleek landing pages to complex bot ecosystems and cloud infrastructure.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              My expertise spans the entire development stack — from crafting pixel-perfect UIs to architecting scalable backend systems and automating deployments.
            </p>
            <div className="border-l-2 border-white/30 pl-6 mt-8">
              <p className="text-white/60 text-base italic">
                &ldquo;कर्म करो, फल की चिंता मत करो।&rdquo;
              </p>
              <p className="text-white/30 text-sm mt-2">— Bhagavad Gita</p>
            </div>
            <div className="flex gap-8 pt-4">
              {[['50+', 'Projects'], ['3+', 'Years Exp'], ['100%', 'Satisfaction']].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-black text-white">{num}</div>
                  <div className="text-white/40 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-white mb-6">Skills Matrix</h3>
            {SKILLS.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
