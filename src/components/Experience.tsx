import React from 'react'
import ExperienceItem from './ExperienceItem'
import Subtitle from './Subtitle'
import { StaticImageData } from 'next/image'

interface ExperienceItemProps {
    title: string
    items: {
        title: string
        role: string
        date: string
        image: StaticImageData
        link: string
    }[]
}

const Experience = ({
    title,
    items
}: ExperienceItemProps) => {
    return (
        <div className='w-[48%] h-auto flex flex-col gap-8'>
            <Subtitle>{title}</Subtitle>

            {items.map((item) => (
                <ExperienceItem
                    title={item.title}
                    role={item.role}
                    date={item.date}
                    image={item.image}
                    link={item.link}
                    key={item.title}
                />
            ))}
        </div>
    )
}

export default Experience