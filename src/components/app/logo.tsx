import { cn } from '@/lib/utils'
import { Zap } from 'lucide-react'

import Link from 'next/link'

interface Props {
  className?: string
}
export function Logo({ className }: Props) {
  return (
    <Link
      href='/'
      className={cn('flex items-center font-medium group', className)}
      prefetch
    >
      ChatFAST{' '}
      <Zap
        className='ml-0.5 group-hover:rotate-180 transition-all group-hover:text-blue-500'
        size={18}
      />
    </Link>
  )
}
