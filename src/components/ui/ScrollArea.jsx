import { cn } from '../../utils/cn'
export function ScrollArea({ children, className }) {
  return (
    <div className={cn('overflow-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent', className)}>
      {children}
    </div>
  )
}
