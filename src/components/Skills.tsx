import { skills } from '@/constantes/skills'
import React from 'react'
import Skill from './Skill'
import SectionTitle from './SectionTitle'

const Skills = () => {
    
    return (
        <section id='skills' className='w-[83%] flex flex-col gap-8'>
            <SectionTitle>
                Skills
            </SectionTitle>

            <div className='w-full flex flex-row flex-wrap gap-2'>
                {skills.map((skill) => (
                    <Skill key={skill} skillName={skill} />
                ))}
            </div>
        </section>
    )
}

export default Skills