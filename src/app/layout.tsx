import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Header } from '@/components/app/header'
import { ThemeProvider } from '@/components/app/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChatFAST',
  description: 'Chat with AI about SDA non-trinitarian beliefs.',
}

interface Props {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(inter.className, 'w-full min-h-dvh')}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
