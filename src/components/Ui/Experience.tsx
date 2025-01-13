import Image from 'next/image'
import React from 'react'

interface ExperienceProps {
    title: string
    role: string
    date: string
    link: string
    image: string
}

const Experience = ({
    title,
    role,
    date,
    link,
    image
}: ExperienceProps) => {
    return (
        <div className='w-4/5 h-auto relative text-text pl-8 flex flex-col gap-2'>
            <div className='w-8 h-8 absolute -top-4 -left-4 bg-white rounded-full'>
                <Image src={image} alt={title} width={100} height={100} />
            </div>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='text-xl text-secondary'>{date}</p>
            <p className='text-xl'>{role}</p>
        </div>
    )
}

export default Experience