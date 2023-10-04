import ExperienceCard from './ExperienceCard'
function Experience() {
  const infoExperience = [
    {
      index: 1,
      title: 'Full Stack Software Developer',
      date: 'Sep-2021 / Present',
      charge: 'Factor-it',
      description: (
        <p>
          As a full-stack developer at Factor IT, I specialized in transforming
          Figma designs into functional applications. I leveraged a range of
          technologies, including HTML, CSS, JavaScript, React.js, Bootstrap,
          and Material UI for the front-end.
        </p>
      ),
      hasMoreText: true,
      moreText: (
        <p>
          On the back-end, I utilized Python with FastAPI and Java with Spring
          Boot to create robust and efficient services. My focus was on meeting
          project deadlines and ensuring optimal application performance. I had
          the opportunity to work with multiple clients across various sectors,
          including insurance and financial systems.
        </p>
      ),
    },
    {
      index: 2,
      title: 'Front-end Software Developer',
      date: 'Feb-2021 / June-2022',
      charge: 'Ernst & Young LLP (EY)',
      description: (
        <p className='flex flex-col gap-1'>
          As a front-end developer at Ey, I have worked with multiple clients,
          applying agile methodologies to achieve efficient results. Using
          technologies such as HTML, CSS, JavaScript, and frameworks like
          React.js, I have crafted appealing user interfaces
        </p>
      ),
      moreText: <p className='text-violet-100'></p>,
      hasMoreText: false,
    },
  ] as const

  return (
    <section className='flex flex-col'>
      <article className='relative my-8 grid grid-cols-[10px_1fr] gap-4'>
        {infoExperience.map(
          (
            { title, date, description, charge, hasMoreText, moreText },
            index,
          ) => (
            <ExperienceCard
              key={index}
              title={title}
              date={date}
              description={description}
              charge={charge}
              hasMoreText={hasMoreText}
              moreText={moreText}
              index={index}
            />
          ),
        )}
      </article>
    </section>
  )
}
export default Experience
