import React, { useState } from 'react'

interface ExperienceCardProps {
  title: string
  date: string
  charge: string
  description: React.ReactNode
  moreText?: React.ReactNode
  hasMoreText?: boolean
  index: number
}

function ExperienceCard({
  title,
  date,
  charge,
  description,
  hasMoreText,
  moreText,
}: ExperienceCardProps) {
  const [moreTextBtn, setMoreTextBtn] = useState(false)
  return (
    <>
      <div className='flex flex-col items-center gap-3'>
        <div className='mt-2.5 rounded-full bg-white p-1' />
        <div className='h-full w-0 border border-white' />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold text-sky-400 sm:text-2xl'>{title}</h2>

        <span className='font-bold text-sky-400 sm:text-xl '>{charge}</span>
        <span className='text-sm font-semibold text-sky-300'>{date}</span>
        <div className='max-w-2xl sm:text-lg'>
          {description}
          {moreTextBtn && moreText}
          {hasMoreText && (
            <span
              className='cursor-pointer text-sky-300 hover:text-sky-400'
              onClick={() => setMoreTextBtn(!moreTextBtn)}
            >
              {moreTextBtn ? ' Read less.' : ' Read more...'}
            </span>
          )}
        </div>
      </div>
    </>
  )
}
export default ExperienceCard
