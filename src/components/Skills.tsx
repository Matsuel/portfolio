import { skills } from '@/constantes/skills'
import React from 'react'
import Skill from './Skill'
import Subtitle from './Subtitle'

const Skills = () => {
    return (
        <section id='skills' className='w-[40%] flex flex-col gap-5'>
            <Subtitle>
                Skills
            </Subtitle>

            <div className='w-full flex flex-row flex-wrap gap-2'>
                {skills.map((skill) => (
                    <Skill key={skill} skillName={skill} />
                ))}
            </div>
        </section>
    )
}

export default Skills