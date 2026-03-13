import { cn } from '../../utils/cn'

export function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'bg-[#1a1a1a] border border-white/10 rounded-2xl p-6',
        hover && 'transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(255,255,255,0.1)] hover:border-white/30',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
