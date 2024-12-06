import BlurIn from '@/components/hero/BlurIn'
import TextRevealByWord from '@/components/hero/TextReveal'
import React from 'react'
import { aboutParagraph, siteName } from '@/constantes/texts'

const Hero = () => {
    return (
        <section id='home' className='w-[83%] h-auto flex flex-col gap-8'>
            <BlurIn word={siteName} />
            <TextRevealByWord
                text={aboutParagraph}
            />
        </section>
    )
}

export default Hero