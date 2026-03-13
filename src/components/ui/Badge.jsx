import { cn } from '../../utils/cn'

export function Badge({ children, className }) {
  return (
    <span className={cn('inline-block px-3 py-1 text-xs font-medium bg-white/10 text-white/80 rounded-full border border-white/20', className)}>
      {children}
    </span>
  )
}
