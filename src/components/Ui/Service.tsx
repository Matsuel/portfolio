import Arrow from '@/assets/Arrow'
import Image from 'next/image'
import React from 'react'

interface ServiceProps {
    title: string
    description: string
    expanded?: boolean
}

const Service = ({
    title,
    description,
    expanded = false
}: ServiceProps) => {

    const expandedClass = expanded ? 'w-[49%]' : 'w-[32%]'

    return (
        <div className={`${expandedClass} h-96 relative bg-[#F7F7F7] text-black p-8 rounded-xl flex flex-col gap-6`}>
            <h4 className='text-3xl font-semibold'>{title}</h4>

            <p className='text-xl text-[#505A63]'>
                {description}
            </p>

            <button className='absolute bottom-8 right-8 cursor-pointer rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                <Arrow size={40} />
            </button>
        </div>
    )
}

export default Service