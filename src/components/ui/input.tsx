import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md bg-transparent px-3 py-1 text-sm shadow-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground transition-all',
          'focus-visible:ring-neutral-700 focus-visible:ring-offset-4 focus-visible:outline-none focus-visible:ring-2',
          'dark:focus-visible:ring-neutral-400 dark:focus-visible:ring-offset-black',
          'disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
