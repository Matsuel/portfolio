import Arrow from '@/assets/Arrow'
import { useTranslations } from 'next-intl'
import React from 'react'

interface ServiceProps {
    index: number
    expanded?: boolean
}

const Service = ({
    index,
    expanded = false
}: ServiceProps) => {

    const t = useTranslations('Services.items')

    const expandedClass = expanded ? 'w-[49%]' : 'w-[32%]'

    return (
        <div className={`${expandedClass} h-96 relative bg-tertiary text-black p-8 rounded-xl flex flex-col gap-6`}>
            <h4 className='text-3xl font-semibold'>
                {t(`${index}.title`)}
            </h4>

            <p className='text-xl text-[#505A63]'>
                {t(`${index}.description`)}
            </p>

            <button className='absolute bottom-8 right-8 cursor-pointer rounded-full hover:bg-black hover:text-white transition-all duration-300'>
                <Arrow size={40} />
            </button>
        </div>
    )
}

export default Service