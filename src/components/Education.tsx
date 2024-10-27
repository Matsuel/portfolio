import { jobs } from '@/constantes/jobs'
import { schools } from '@/constantes/school'
import React from 'react'
import SectionTitle from './SectionTitle'
import Experience from './Experience'

const Education = () => {

  const experiences = [
    {
      title: "Professionnelles",
      items: jobs
    },
    {
      title: "Etudes",
      items: schools
    }
  ]

  return (
    <section id='education' className='w-[83%] h-auto flex flex-col gap-20'>
      <SectionTitle>Expériences</SectionTitle>
      <div className='w-full h-auto flex flex-row gap-5'>
        {experiences.map((experience) => (
          <Experience items={experience.items} title={experience.title} key={experience.title} />
        ))}
      </div>
    </section>
  )
}

export default Education