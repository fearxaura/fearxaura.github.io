import { cn } from '../../utils/cn'
import { forwardRef } from 'react'

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={cn(
        'w-full bg-[#1a1a1a] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40',
        'focus:outline-none focus:border-white/60 transition-colors',
        className
      )}
      {...props}
    />
  )
})
