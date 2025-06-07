"use client"
import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { projets } from '../../constants/projets'
import Card from './card/Card'
import SectionLayout from './SectionLayout'

const Projets = () => {
    const container = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


    return (
        <SectionLayout
            id='projets'
            className='h-auto gap-4'
        >
            <div className='w-full h-auto flex flex-col items-center justify-center gap-4' ref={container}>
                {projets.map((projet, index) => {
                    const targetScale = 1 - ((projets.length - index) * 0.05)
                    return (
                        <Card
                            {...projet}
                            key={projet.name}
                            index={index}
                            range={[index * (1 / projets.length), 1]}
                            targetScale={targetScale}
                            scrollYProgress={scrollYProgress}
                        />
                    )
                })}
            </div>
        </SectionLayout>
    )
}

export default Projets