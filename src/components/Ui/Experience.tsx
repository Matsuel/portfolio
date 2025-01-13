"use client";
import Arrow from '@/assets/Arrow'
import RightArrow from '@/assets/RightArrow';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface ExperienceProps {
    title: string
    role: string
    date: string
    image: string
    link: string
}

const Experience = ({
    title,
    role,
    date,
    link,
    image
}: ExperienceProps) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link href={link} target='_blank' className='w-full h-auto flex flex-row items-center gap-4' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <Image src={image} alt={title} width={80} height={80} />

            <div className='flex flex-col gap-2'>
                <h4 className='flex flex-row gap-1 text-3xl text-text font-bold'>
                    {title} {isHovered && <RightArrow size={35} />}
                </h4>
                <p className='text-text text-lg'>{role}</p>
            </div>

            <div className='w-auto h-[100%] ml-auto mr-8 flex flex-col'>
                <p className='text-lg text-secondary'>{date}</p>
            </div>
        </Link>
    )
}

export default Experience