'use client'

import { services } from '@/lib/data'
import ProjectCard from './ProjectCard'
import { useSectionInView } from '@/hooks/useSectionInView'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'


function Projects() {
  const { ref } = useSectionInView('My services')
  const refScroll = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ['0 1', '1 1'],
  })
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.01, 2])

  return (
    <section ref={ref}>
      <motion.div
        className='container flex max-w-6xl flex-col gap-12 py-12'
        id='services'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={refScroll}
        style={{
          opacity: opacityProgess,
        }}
      >
        <h2 className='text-3xl font-bold text-sky-400 sm:text-4xl'>
          My services
        </h2>
        <article className='grid place-content-center justify-between gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3'>
          {services.map(({ id, name, image, desc }, index) => (
            <ProjectCard
              key={id}
              name={name}
              image={image}
              index={index}
              desc={desc}
            />
          ))}
        </article>
      </motion.div>
    </section>
  )
}
export default Projects
