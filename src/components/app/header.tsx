import { Logo } from '@/components/app/logo'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from '@/components/ui/sheet'

export function Header() {
  return (
    <header
      className={cn(
        'w-full flex items-center justify-between fixed z-50 top-0 left-0 h-12 px-6 bg-white/5 backdrop-blur-lg',
        'dark:bg-transparent'
      )}
    >
      <Logo className='hidden lg:flex' />

      <Sheet>
        <SheetTrigger className='lg:hidden'>
          <Menu size={24} />
        </SheetTrigger>

        <SheetContent side='left' className='w-full bg-white dark:bg-black'>
          <SheetHeader>
            <Logo className='inline-flex' />
          </SheetHeader>

          <SheetFooter className='absolute bottom-0 left-0 w-full h-16'></SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  )
}
