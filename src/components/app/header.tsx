import { Logo } from '@/components/app/logo'
import { ThemeToggle } from '@/components/app/theme-toggle'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Header() {
  return (
    <header
      className={cn(
        'w-full flex items-center justify-between fixed z-20 top-0 left-0 h-12 px-6 bg-white/5 backdrop-blur-lg',
        'dark:bg-transparent'
      )}
    >
      <Logo />

      <div className='flex items-center gap-4'>
        <nav className='mr-4'>
          <Link
            href='/about'
            prefetch
            className='text-xs hover:underline hover:underline-offset-4 hover:text-blue-500'
          >
            About
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  )
}
