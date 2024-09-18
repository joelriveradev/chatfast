'use client'

import { useEffect } from 'react'
import { ArrowUp, MoveUpRight, CornerUpRight, X, Check } from 'lucide-react'
import { Message, useChat } from 'ai/react'
import { animateScroll } from 'react-scroll'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ChatMessage } from '@/components/ai/message'
import { cn } from '@/lib/utils'

interface Props {
  history?: Message[]
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
    text: 'You want to explore challenging questions about non-trinitarian beliefs within Adventism in a kind, judgment-free environment, at your own pace.',
  },
  {
    id: 2,
    text: "You're seeking quick explanations of non-trinitarian beliefs without having to search through lengthy theological texts or watching long YouTube videos.",
  },
]

const faqs = [
  {
    id: 0,
    text: 'What is the Father and Son truth?',
  },
  {
    id: 1,
    text: 'Do you believe in the Holy Spirit?',
  },
  {
    id: 3,
    text: 'Do you believe that Jesus is God?',
  },
  {
    id: 4,
    text: 'Was Jesus was created?',
  },
]

export function Chat({ history = [] }: Props) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      initialMessages: history,
    })

  useEffect(() => {
    if (messages.length) {
      animateScroll.scrollToBottom(scrollOptions)
    }
  }, [messages, isLoading])

  return (
    <div className='isolate flex flex-col w-full md:max-w-lg py-12 mx-auto lg:dark:border-neutral-900 min-h-dvh'>
      <div
        aria-hidden='true'
        className='fixed inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80 -z-50'
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-500 to-blue-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
        />
      </div>

      {!messages.length && (
        <div className='w-full antialiased'>
          <section className='p-6 pb-8'>
            <h1 className='mb-3 text-xl'>Hey there, welcome to ChatFAST!</h1>

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
              {features.map(({ id, text }) => {
                return (
                  <li className='flex items-start mt-4' key={id}>
                    <Check className='mr-3 shrink-0 mt-1' size={18} />

                    <p className='text-neutral-600 dark:text-neutral-400'>
                      {text}
                    </p>
                  </li>
                )
              })}
            </ul>
          </section>

          <section className='bg-black/[3%] dark:bg-white/[3%] p-6 rounded-3xl mt-5 border'>
            <h2 className=''>FAQs</h2>

            <ul className='mt-3'>
              {faqs.map(({ id, text }) => {
                return (
                  <li
                    className='group flex items-center justify-between border-b p-2.5 last:border-none hover:rounded-lg hover:cursor-pointer border-dotted hover:bg-black/[3%] dark:hover:bg-white/[3%] transition-all'
                    key={id}
                  >
                    <p className='text-neutral-600 dark:text-neutral-400 group-hover:text-blue-500 transition-colors'>
                      {`${(id + 1).toString().padStart(1)}. ${text}`}
                    </p>

                    <MoveUpRight
                      className='ml-3 shrink-0 mt-1 group-hover:text-blue-500 transition-colors'
                      size={18}
                    />
                  </li>
                )
              })}
            </ul>
          </section>
        </div>
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
        <div className='fixed bottom-0 w-full md:max-w-lg flex items-center mb-5 -translate-x-1/2 left-1/2 px-4'>
          <Input
            className={cn(
              'w-full h-12 px-6 border text-base bg-neutral-50/70 border-neutral-200 backdrop-blur-md rounded-xl placeholder:text-neutral-400 pr-14',
              'dark:bg-white/[3%] dark:border-neutral-800 dark:text-neutral-300 dark:placeholder:text-neutral-500',
              'hover:border-neutral-400'
            )}
            value={input}
            placeholder='Ask me a question!'
            onChange={handleInputChange}
          />

          {isLoading ? (
            <Button
              type='button'
              className='absolute right-8 rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700'
              onClick={stop}
            >
              <X size={15} />
            </Button>
          ) : (
            <Button
              type='submit'
              className={cn(
                'absolute right-8 rounded-full ml-2 w-7 h-7 p-0 shrink-0 bg-stone-700 disabled:bg-stone-300',
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
