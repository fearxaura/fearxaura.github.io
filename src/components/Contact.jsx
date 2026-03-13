import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Send, MessageCircle, Github, Linkedin } from 'lucide-react'
import { useIntersection } from '../hooks/useIntersection'
import { Button } from './ui/Button'
import { Input } from './ui/Input'
import { Card } from './ui/Card'
import { useState } from 'react'

export default function Contact() {
  const [ref, isVisible] = useIntersection()
  const [sent, setSent] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm()

  const onSubmit = (data) => {
    console.log('Form data:', data)
    setSent(true)
    reset()
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-white/40 text-sm uppercase tracking-widest font-semibold">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3">Contact</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card>
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              {sent && (
                <div className="mb-4 p-3 bg-white/10 border border-white/20 rounded-lg text-white/80 text-sm">
                  ✅ Message sent! I&apos;ll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-red-400/80 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {errors.email && <p className="text-red-400/80 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && <p className="text-red-400/80 text-xs mt-1">{errors.subject.message}</p>}
                </div>
                <div>
                  <textarea
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-[#1a1a1a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 transition-colors resize-none"
                    {...register('message', { required: 'Message is required' })}
                  />
                  {errors.message && <p className="text-red-400/80 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <Button type="submit" size="md" className="w-full gap-2">
                  <Send size={16} />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Right side - calendar/social */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <Card>
              <h3 className="text-xl font-bold text-white mb-4">Schedule a Call</h3>
              <p className="text-white/50 text-sm mb-4">Book a free 30-minute consultation to discuss your project.</p>
              <div className="aspect-video rounded-xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                <p className="text-white/30 text-sm">Calendly iframe would go here</p>
              </div>
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-white mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {[
                  { icon: MessageCircle, label: 'Telegram', href: 'https://t.me/fearxaura' },
                  { icon: Github, label: 'GitHub', href: 'https://github.com/fearxaura' },
                  { icon: Linkedin, label: 'LinkedIn', href: '#' },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-white/70 hover:text-white hover:border-white/50 transition-all text-sm"
                  >
                    <Icon size={16} />
                    {label}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
