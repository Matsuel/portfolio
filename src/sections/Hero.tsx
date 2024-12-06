import BlurIn from '@/components/BlurIn'
import TextRevealByWord from '@/components/TextReveal'
import React from 'react'
import { aboutParagraph, siteName } from '@/constantes/texts'

const Hero = () => {
    return (
        <section id='home' className='w-[83%] h-auto flex flex-col gap-20'>
            <BlurIn word={siteName} />
            <TextRevealByWord
                text={aboutParagraph}
            />
        </section>
    )
}

export default Hero