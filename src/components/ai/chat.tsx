'use client'

import { useEffect, useMemo } from 'react'
import { ArrowUp, X, Check } from 'lucide-react'
import { Message, useChat } from 'ai/react'
import { animateScroll } from 'react-scroll'
import { useRouter } from 'next/navigation'
import { ChatInput } from '@/components/ai/input'
import { Button } from '@/components/ui/button'
import { ChatMessage } from '@/components/ai/message'
import { cn, generateUniqueId } from '@/lib/utils'
import { storeMessages } from '@/actions/storeMessages'

interface Props {
  id?: string
  history?: Message[]
  className?: string
}

const scrollOptions = {
  duration: 500,
  smooth: 'easeInOutQuad',
}

const features = [
  {
    id: 0,
    text: 'You want to learn about the Father and Son truth, but prefer not to engage with a real person for whatever reason.',
  },
  {
    id: 1,
    text: 'You want to explore challenging questions about non-trinitarian beliefs within Adventism in a kind, judgment-free environment, at your own pace, on-demand.',
  },
  {
    id: 2,
    text: "You're seeking quick explanations of non-trinitarian beliefs without having to search through lengthy theological texts or watching long YouTube videos.",
  },
]

export function Chat({ id, history = [], className }: Props) {
  const chatID = id || useMemo(() => generateUniqueId(), [])
  const router = useRouter()

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      id: chatID,
      initialMessages: history,
    })

  const syncBeforeNavigateAsync = async () => {
    if (!isLoading) {
      if (messages.length === 2 && !id) {
        await storeMessages(messages)
        router.push(`/chat/${chatID}`)
      }
    }
  }

  useEffect(() => {
    if (messages.length) {
      animateScroll.scrollToBottom(scrollOptions)
      syncBeforeNavigateAsync()
    }
  }, [messages, isLoading])

  return (
    <div
      className={cn(
        'flex flex-col w-full md:max-w-lg py-12 mx-auto lg:dark:border-neutral-900 min-h-dvh',
        className
      )}
    >
      {!messages.length && (
        <>
          <section className='p-6 pb-8'>
            <h1 className='mb-3 text-xl'>Welcome to ChatFAST!</h1>

            <p>
              This is a space for people to learn and chat about the Father and
              Son truth (FAST), with the help of generative AI.
            </p>

            <p className='mt-5'>
              This AI chatbot has been instructed to provide official, verified
              answers from verified sources about what SDA non-trinitarians
              believe, strictly from the Bible and from the Spirit of Prophecy.
            </p>
          </section>

          <section className='bg-black/[3%] dark:bg-white/[3%] p-6 pb-8 rounded-3xl border'>
            <h2 className=''>Who is this for?</h2>

            <ul className='mt-3'>
              {features.map(({ id, text }) => (
                <li className='flex items-start mt-4' key={id}>
                  <Check className='mr-3 shrink-0 mt-1' size={18} />

                  <p className='text-neutral-600 dark:text-neutral-400'>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
      <section className='p-6 pb-8'>
        {messages.map(({ id, role, content, ...props }) => (
          <ChatMessage
            id={id}
            key={id}
            role={role}
            content={content}
            {...props}
            className='mb-5 antialiased'
          />
        ))}
      </section>

      <form onSubmit={handleSubmit}>
        <div className='fixed bottom-0 w-full md:max-w-xl flex items-center mb-5 -translate-x-1/2 left-1/2 md:px-8'>
          <ChatInput input={input} handleInputChange={handleInputChange} />

          {isLoading ? (
            <Button
              type='button'
              className='absolute md:right-14 right-5 rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700'
              onClick={stop}
            >
              <X size={15} />
            </Button>
          ) : (
            <Button
              type='submit'
              className={cn(
                'absolute md:right-14 right-5 rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700 disabled:bg-stone-300',
                'dark:bg-neutral-50 dark:disabled:bg-neutral-600'
              )}
              disabled={!input || isLoading}
            >
              <ArrowUp size={15} />
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
