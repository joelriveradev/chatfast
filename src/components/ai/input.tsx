import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

interface ChatInputProps {
  input?: string
  handleInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function ChatInput({ input, handleInputChange }: ChatInputProps) {
  return (
    <Input
      className={cn(
        'w-full h-12 px-6 border text-base bg-neutral-50/70 border-neutral-200 backdrop-blur-md rounded-xl placeholder:text-neutral-400 pr-14',
        'dark:bg-white/10 dark:border-neutral-600 dark:text-neutral-300 dark:placeholder:text-neutral-400',
        'hover:border-neutral-400'
      )}
      value={input}
      placeholder='Ask me a question!'
      onChange={handleInputChange}
    />
  )
}
