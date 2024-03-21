import ExperienceCard from './ExperienceCard'
function Experience() {
  const infoExperience = [
    {
      index: 1,
      title: 'Full Stack Software Developer',
      date: 'April-2023 / Current',
      charge: 'Factor-it',
      description: (
        <p>
          As a developer at Factor IT, I've worked on projects both on the
          server-side and client-side. On the backend, I've utilized Java 1.7
          and 1.8 alongside Spring Boot. On the frontend, I've employed modern
          technologies such as React, SASS, Redux, Material UI, and Bootstrap to
          craft dynamic and appealing user interfaces, ensuring consistent state
          in our applications and effective style management.
        </p>
      ),
      hasMoreText: true,
      moreText: (
        <p>
          Also, I've actively collaborated with essential tools like Figma for
          UI design and JIRA for project management.
        </p>
      ),
    },
    {
      index: 2,
      title: 'Full Stack Software Developer',
      date: 'Feb-2022 / April-2023',
      charge: 'Ernst & Young LLP (EY)',
      description: (
        <p className='flex flex-col gap-1'>
          As a Full Stack developer at EY, I developed custom applications using
          React.js for the front-end and Node.js and Spring Boot for the
          back-end. This was my first experience in the industry, and I learned
          a great deal about both front-end and back-end development during this
          time. I collaborated with design teams to transform requirements into
          high-quality functional applications. I encountered exciting technical
          challenges, gaining valuable experience in project development and
          effective communication with multidisciplinary teams.
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
