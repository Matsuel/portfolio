import React from 'react'
import BlurIn from './BlurIn'
import TextRevealByWord from './TextReveal'

const About = () => {
    return (
        <div className='w-80% h-auto flex flex-col gap-7 justify-center items-center'>
            <BlurIn word="Matheo Lang" />
            <TextRevealByWord
                text="Actuellement etudiant en développement web et alternant chez Informatique CDC, j'entreprends un grand nombre de projets afin d'acquérir un maximum d'expérience dans la création d'un projet web de sa réflexion jusqu'à sa maintenance. Mon objectif est de développer une expertise complète pour répondre au mieux aux exigences de chaque projet."
            />

        </div>
    )
}

export default About