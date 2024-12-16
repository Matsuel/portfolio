import BlurIn from '@/components/hero/BlurIn'
import React from 'react'
import { aboutParagraph, siteName } from '@/constantes/texts'
import Paragraph from '../hero/AnimatedScrollText'

const Hero = () => {
    return (
        <section id='home' className='w-[83%] h-auto flex flex-col gap-8'>
            <BlurIn word={siteName} />
            <Paragraph paragraph={aboutParagraph} />
        </section>
    )
}

export default Hero