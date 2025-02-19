import Image from 'next/image'
import React from 'react'

interface LangProps {
    flagSrc: string
    lang: string
}

const Lang = ({
    flagSrc,
    lang
}: LangProps) => {
    return (
        <button className='w-6 h-6 rounded-full bg-transparent flex justify-center items-center cursor-pointer duration-300 transition-all hover:bg-white'>
            <Image
                src={flagSrc}
                alt={lang}
                width={20}
                height={20}
            />
        </button>
    )
}

export default Lang