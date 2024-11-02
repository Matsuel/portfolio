import React from 'react'
import SectionTitle from './SectionTitle'
import { projects } from '@/constantes/Projects'
import Project from './Project'

const Projects = () => {
  return (
    <section id='projects' className='w-[83%] h-auto flex flex-col gap-20'>
      <SectionTitle>
        Projets
      </SectionTitle>

      <div className='w-full h-auto flex flex-row flex-wrap justify-around gap-10'>

        {projects.map((project) => (
          <Project
            title={project.title}
            description={project.description}
            link={project.link}
            github={project.github}
            technologies={project.technologies}
            image={project.image}
            noPreview={project.noPreview}
            key={project.title}
          />
        ))}

      </div>
    </section>
  )
}

export default Projects