import React from 'react'
import { Experience as ExperienceType } from '@/types'
import Image from 'next/image'

const Experience = ({
    title,
    date,
    image,
    role
}: ExperienceType) => {
    return (
        <div className='w-full h-auto flex flex-row items-center gap-3'>
            <div className='w-1/12 h-auto flex justify-start items-center'>
                <Image
                    src={image}
                    alt={title}
                    width={80}
                    height={80}
                />
            </div>

            <div className='w-1/3 h-auto'>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <h4 className='text-lg font-semibold'>{date}</h4>
            </div>

            <div className='w-1/2 h-auto flex flex-col gap-3'>
                <h3 className='text-xl font-bold'>{role}</h3>
            </div>

            {/* Ajouter une description de l'expérience avec ce que j'ai pu faire */}
        </div>
    )
}

export default Experience