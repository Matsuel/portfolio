"use client"
import Minus from '@/assets/Minus'
import Plus from '@/assets/Plus'
import { Experience } from '@/types'
import React, { useState } from 'react'

interface AccordionProps {
    title: string
    data: Experience[]
}

const Accordion = ({
    title,
    data
}: AccordionProps) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-[62.5%] h-auto flex flex-col gap-3'>
            <div className={`w-full h-auto flex flex-row justify-between items-center pb-3 ${isOpen ? "" : "border-b border-white"}}`}>
                <h4 className='text-4xl font-extrabold'>{title}</h4>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {!isOpen ? <Plus size={50} /> : <Minus size={50} />}
                </button>
            </div>
        </div>
    )
}

export default Accordion