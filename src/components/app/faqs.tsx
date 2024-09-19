import { MoveUpRight } from 'lucide-react'

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

export function Faqs() {
  return (
    <section className='bg-black/[3%] dark:bg-white/[3%] p-6 px-0 rounded-3xl mt-5 border'>
      <h2 className='ml-6'>FAQs</h2>

      <ul className='mt-3'>
        {faqs.map(({ id, text }) => {
          return (
            <li
              className='group flex items-center px-6 justify-between border-b p-2.5 last:border-none hover:cursor-pointer border-dotted hover:bg-black/[3%] dark:hover:bg-white/[3%] transition-all'
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
  )
}
