import Arrow from '@/assets/Arrow'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface ExperienceItemProps {
    title: string
    role: string
    date: string
    image: StaticImageData
    link: string
}

const ExperienceItem = ({
    title,
    role,
    date,
    link,
    image
}: ExperienceItemProps) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link href={link} target='_blank' className='w-full h-auto flex flex-row items-center gap-4' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Image src={image} alt={title} width={70} />

            <div className='flex flex-col gap-2'>
                <h4 className='flex flex-row gap-1 text-xl text-text font-bold'>
                    {title} {isHovered && <Arrow size={28} />}
                </h4>
                <p className='text-text text-base'>{role}</p>
            </div>

            <div className='w-auto h-[100%] ml-auto mr-8 flex flex-col'>
                <p className='text-text text-lg text-[#a3a3a3]'>{date}</p>
            </div>
        </Link>
    )
}

export default ExperienceItem