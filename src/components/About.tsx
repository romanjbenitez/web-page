'use client'

import Image from 'next/image'
import Experience from './Experience'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useSectionInView } from '@/hooks/useSectionInView'
import { useRef } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

function About() {
  const { ref } = useSectionInView('About me')
  const { setActiveSection, setTimeOfLastClick } = useActiveSection()

  const refScroll = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ['0 1', '1 1'],
  })
  const opacityProgessAbout = useTransform(scrollYProgress, [0, 1], [0.9, 1])
  const opacityProgessExp = useTransform(scrollYProgress, [0, 1], [0, 1.5])

  return (
    <motion.section
      className='container mt-12 flex max-w-6xl flex-col gap-12'
      id='about'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className='flex flex-col-reverse justify-between lg:flex-row'
        ref={refScroll}
        style={{
          opacity: opacityProgessAbout,
        }}
      >
        <div className='flex h-full flex-col justify-between gap-6 lg:items-start'>
          <h2 className='pt-4 text-3xl font-bold text-sky-400 sm:text-4xl'>
            About Me
          </h2>
          <p className='sm:text-md max-w-2xl 2xl:text-lg'>
            My name is Roman Benitez, I am a Full Stack Developer with
            experience in web application development. I am passionate about
            learning new technologies and applying my knowledge to help others
            achieve their goals. Currently, I am in my second year of a
            university degree in artificial intelligence at the Universidad
            Nacional de Rosario - Facultad de Ciencias Exactas, Ingeniería y
            Agrimensura - Argentina (UNR) and I am committed to keep myself
            updated in my field. I am a professional committed to quality and
            excellence in everything I do. I enjoy working in a team and have
            effective communication and collaboration skills. I am looking for
            opportunities to be part of an IT team in a company where I can
            develop professionally and contribute my skills.
          </p>

          <p className='sm:text-md max-w-2xl 2xl:text-lg'>
            My technology stack includes:
          </p>
          <div className='items-beetween flex'>
            <ul className='mr-9 list-none'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS/SCSS</li>
              <li>Tailwind</li>
              <li>Bootstrap</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>NextJS</li>
            </ul>
            <ul className='list-none'>
              <li>JAVA 1.8</li>
              <li>Spring Boot</li>
              <li>Databases (SQL and NoSQL)</li>
              <li>Python</li>
              <li>Git</li>
              <li>Figma</li>
              <li>SEO</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <div className='flex items-center gap-6'>
            {/* <a
              href='#'
              className='to group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-sky-600 bg-gradient-to-tr from-sky-500 px-6 py-3 font-medium transition-all duration-200 active:scale-95'
            >
              <span className='absolute right-0 top-0 inline-block h-4 w-4 rounded bg-sky-800 transition-all duration-[375ms] ease-in-out group-hover:-mr-4 group-hover:-mt-4'>
                <span className='absolute right-0 top-0 h-5 w-5 -translate-y-1/2 translate-x-1/2 rotate-45 bg-white' />
              </span>
              <span className='absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-gradient-to-tr from-sky-600 to-sky-400 transition-all duration-300 ease-in-out group-hover:mb-12 group-hover:translate-x-0' />
              <span className='relative w-full whitespace-nowrap text-left font-semibold tracking-widest transition-colors duration-150 ease-in-out'>
                See CV
              </span>
            </a> */}
            <a
              href='#contact'
              className='to group relative inline-flex items-center justify-start overflow-hidden rounded-xl bg-pink-600 bg-gradient-to-tr from-pink-500 px-6 py-3 font-medium transition-all duration-200 active:scale-95'
              onClick={() => {
                setActiveSection('Contact')
                setTimeOfLastClick(Date.now())
              }}
            >
              <span className='absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-400 transition-all duration-300 ease-in-out group-hover:mb-12 group-hover:translate-x-0' />
              <span className='relative w-full whitespace-nowrap text-left font-semibold tracking-widest transition-colors duration-150 ease-in-out'>
                Contact Me
              </span>
            </a>
          </div>
        </div>
        <picture className='h-100 mx-auto mb-12 flex items-center lg:mx-0 lg:mb-0'>
          <Image
            src={'/images/Perfil.png'}
            alt='Roman-Benitez-Profile-Pic'
            className='w-50 lg:w-75 h-auto '
            width={400}
            height={450}
          />
        </picture>
      </motion.div>
      <motion.div
        ref={refScroll}
        style={{
          opacity: opacityProgessExp,
        }}
      >
        <Experience />
      </motion.div>
    </motion.section>
  )
}
export default About
