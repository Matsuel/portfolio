"use client"
import Minus from '@/assets/Minus'
import Plus from '@/assets/Plus'
import { Experience as ExperienceType } from '@/types'
import React, { useState } from 'react'
import Experience from './Experience'

interface AccordionProps {
    title: string
    data: ExperienceType[]
    active?: boolean
}

const Accordion = ({
    title,
    data,
    active = false
}: AccordionProps) => {

    const [isOpen, setIsOpen] = useState(active)

    return (
        <div className='w-[70%] h-auto flex flex-col gap-3'>
            <div className={`w-full h-auto flex flex-row justify-between items-center pb-3 ${isOpen ? "" : "border-b border-white"}}`}>
                <h4 className='text-4xl font-extrabold'>{title}</h4>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <Plus size={50} /> : <Minus size={50} />}
                </button>
            </div>
            {isOpen && (
                <div className='w-full h-auto flex flex-col gap-10'>
                    {data.map((experience, index) => (
                        <Experience
                            key={index}
                            title={experience.title}
                            date={experience.date}
                            image={experience.image}
                            link={experience.link}
                            role={experience.role}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Accordion