import { motion } from 'framer-motion'

import Image from 'next/image'

interface ProjectCardProps {
  name: string
  image: string
  desc : string
  index: number
}
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.17 * index,
    },
  }),
}

function ProjectCard({ index, image, name, desc }: ProjectCardProps) {
  return (
    <motion.article
      className='relative flex  max-w-xl flex-col overflow-hidden rounded-lg bg-quarteary'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className='card-project'>
        <div className='flex gap-1 p-2'>
          <div className=''>
            <span className='center inline-block h-3 w-3 rounded-full bg-red-500'></span>
          </div>
          <div className=''>
            <span className='center inline-block h-3 w-3 rounded-full bg-yellow-500'></span>
          </div>
          <div className=''>
            <span className='box center inline-block h-3 w-3 rounded-full bg-green-500'></span>
          </div>
        </div>

        <div className='card__content'>
          <div className='grid justify-items-center '>
            <div className='align-items-center grid justify-items-center rounded-lg'>
              <Image
                src={image}
                alt={name}
                className=''
                width={110}
                height={110}
              />
            </div>

            <h3 className='break-words p-3 pt-5 text-center text-2xl '>{name}</h3>
            <p className='pt-1 ps-3 pe-3 text-center '>{desc}</p>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
export default ProjectCard
