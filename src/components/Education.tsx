import { jobs } from '@/constantes/jobs'
import { schools } from '@/constantes/school'
import React from 'react'
import ExperienceItem from './ExperienceItem'
import SectionTitle from './SectionTitle'
import Subtitle from './Subtitle'

const Education = () => {
  return (
    <section id='education' className='w-[83%] h-auto flex flex-col gap-20'>
      <SectionTitle>Expériences</SectionTitle>
      <div className='w-full h-auto flex flex-row gap-5'>

        <div className='w-[48%] h-auto flex flex-col gap-8'>
          <Subtitle>Métiers</Subtitle>

          {jobs.map((job) => (
            <ExperienceItem
              title={job.title}
              role={job.role}
              date={job.date}
              image={job.image}
              link={job.link}
              key={job.title}
            />
          ))}
        </div>

        <div className='w-[48%] h-auto flex flex-col gap-8'>
          <Subtitle>Etudes</Subtitle>

          {schools.map((school) => (
            <ExperienceItem
              title={school.title}
              role={school.role}
              date={school.date}
              image={school.image}
              link={school.link}
              key={school.title}
            />
          ))}
        </div>
      </div>

    </section>
  )
}

export default Education