"use client"
import { projets } from '../../constants/projets'
import Card from './card/Card'
import SectionLayout from './SectionLayout'

const Projets = () => {

    return (
        <SectionLayout
            id='projets'
            className='grid grid-cols-1 lg:grid-cols-3 gap-3'
        >
                {projets.map((projet) => {
                    return (
                        <Card
                            {...projet}
                            key={projet.name}
                        />
                    )
                })}
        </SectionLayout>
    )
}

export default Projets