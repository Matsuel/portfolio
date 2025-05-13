import React, { useMemo } from 'react'
import SectionLayout from './SectionLayout'
import BlurIn from './BlurIn'

const Loading = () => {

    const word = 'Bonjour et bienvenue'

    const delays = useMemo(
        () =>
            word.split('').map(() =>
                Math.random() * 1.5 // 1.2s max de délai, ajuste si besoin
            ),
        [word]
    )

    return (
        <SectionLayout
            className='justify-center bg-white'
        >
            <div>
                {word.split('').map((word, index) => (
                    <BlurIn
                        key={index}
                        word={word}
                        delay={delays[index]}
                        className='text-black'
                    />
                ))}
            </div>
        </SectionLayout>
    )
}

export default Loading