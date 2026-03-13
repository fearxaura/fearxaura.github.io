import { motion } from 'framer-motion'
import { Globe, Bot, Server, Zap } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'
import { Card } from './ui/Card'
import { SERVICES } from '../utils/constants'

const ICON_MAP = { Globe, Bot, Server, Zap }

export default function Services() {
  const [ref, isVisible] = useIntersection()

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">What I Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card hover className="h-full flex flex-col gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    {Icon && <Icon size={22} className="text-white" />}
                  </div>
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">{service.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
