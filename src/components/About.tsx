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
            As a software engineer with more than two years of experience, I am
            a dedicated and confident professional with a passion for developing
            and meeting the unique needs of each project. My expertise lies in
            web development, covering websites, landing pages, and e-commerce
            solutions. In addition to web development, I have a solid
            understanding of SEO principles, enabling me to optimize websites
            for improved search engine visibility. I am also proficient in web
            scraping using Python and Scrapy, allowing me to efficiently and
            accurately collect data from websites to support your projects. My
            toolset includes HTML, CSS, JavaScript, Bootstrap, React.js, and
            Next.js, which empowers me to create high-quality digital projects.
            Moreover, I excel at translating Figma and Adobe XD designs into
            fully functional, pixel-perfect web pages.
          </p>

          <p className='sm:text-md max-w-2xl 2xl:text-lg'>
            If you're in search of a highly skilled freelance developer who can
            transform your ideas into visually appealing online solutions,
            please don't hesitate to reach out. I'm excited to collaborate on
            your projects and help you achieve your online goals.
          </p>
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
