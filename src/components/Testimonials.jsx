import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'
import { TESTIMONIALS } from '../data/testimonials'

function TestimonialCard({ t }) {
  return (
    <div className="min-w-[320px] max-w-[320px] bg-[#1a1a1a] border border-white/10 rounded-2xl p-6 mx-3 flex-shrink-0">
      <div className="flex gap-1 mb-4">
        {Array(t.rating).fill(0).map((_, i) => (
          <Star key={i} size={14} className="text-white fill-white" />
        ))}
      </div>
      <p className="text-white/70 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold text-sm">
          {t.avatar}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-white/40 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [ref, isVisible] = useIntersection()
  const trackRef = useRef(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let animId
    let offset = 0
    const speed = 0.4

    const animate = () => {
      offset += speed
      const total = track.scrollWidth / 2
      if (offset >= total) offset = 0
      track.style.transform = `translateX(-${offset}px)`
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)

    const pause = () => cancelAnimationFrame(animId)
    const resume = () => { animId = requestAnimationFrame(animate) }
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      cancelAnimationFrame(animId)
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">Client Feedback</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Testimonials</h2>
        </motion.div>
      </div>
      <div className="relative">
        <div ref={trackRef} className="flex will-change-transform">
          {doubled.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>
    </section>
  )
}
