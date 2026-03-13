import { MessageCircle, Github, Linkedin, Heart } from 'lucide-react'

const SOCIALS = [
  { icon: MessageCircle, label: 'Telegram', href: 'https://t.me/fearxaura' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/fearxaura' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-black tracking-tight select-none">
          🅕︎🅔︎🅐︎🅡︎🅛︎🅔︎🅢︎🅢︎ <span className="text-lg">|🔥🍁⚡</span>
        </div>
        <div className="flex items-center gap-4">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
        <p className="text-white/30 text-sm flex items-center gap-1">
          © {year} FEARLESS. Made with <Heart size={12} className="text-white/60 fill-white/60" />
        </p>
      </div>
    </footer>
  )
}
