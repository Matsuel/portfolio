import React from 'react'
import SectionLayout from '@/components/sections/SectionLayout'
import { projects } from '@/constantes/projects'
import Projet from '../Ui/Projet'

const Projets = () => {
    return (
        <SectionLayout title="Projets" subtitle='realisations techniques' id='projets'>
            <div className='w-full h-auto flex flex-row flex-wrap justify-evenly gap-12 mt-12'>
                {projects.map((project, index) => (
                    <Projet
                        key={index}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        github={project.github}
                        technologies={project.technologies}
                        icon={project.icon}
                    />
                ))}
            </div>
        </SectionLayout>
    )
}

export default Projets