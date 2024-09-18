'use client'

import { useCallback } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  return (
    <Button
      type='button'
      className={cn(
        'w-8 h-8 flex items-center justify-center rounded-full bg-transparent border shadow-none text-black hover:bg-neutral-100',
        'dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
      )}
      onClick={toggleTheme}
    >
      {theme === 'light' ? (
        <Moon size={15} className='text-black dark:text-white shrink-0' />
      ) : (
        <Sun size={15} className='text-black dark:text-white shrink-0' />
      )}
    </Button>
  )
}
