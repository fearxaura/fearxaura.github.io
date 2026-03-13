import { cn } from '../../utils/cn'
export function Separator({ className }) {
  return <div className={cn('h-px bg-white/10 w-full', className)} />
}
