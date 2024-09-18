import { Zap } from 'lucide-react'
import Link from 'next/link'

export function Logo() {
  return (
    <Link href='/' className='flex items-center font-medium group' prefetch>
      ChatFAST{' '}
      <Zap
        className='ml-0.5 text-blue-500 group-hover:text-white group-hover:rotate-180 transition-all'
        size={18}
      />
    </Link>
  )
}
