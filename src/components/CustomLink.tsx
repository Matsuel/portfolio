import React, { useState } from 'react'

interface CustomLinkProps {
    onClick?: () => void
    text: string
    index: number
    className?: string
    uppercase?: boolean
}

const CustomLink = ({
    onClick,
    text,
    index,
}: CustomLinkProps) => {

    const [isHover, setIsHover] = useState<boolean>(false)

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <button
                onClick={onClick}
                className="w-[100px] flex flex-row items-center gap-4 pl-10 border-b-[2px] border-[#a3a3a3] hover:border-white hover:w-auto transition-all duration-300 ease-in-out font-black uppercase"
            >
                <span className={`${isHover ? "text-text" : "text-[#a3a3a3]"} uppercase font-black`}>
                    {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className={`transition-all duration-300 ease-in-out text-text ${isHover ? 'opacity-100 ml-2' : 'opacity-0 ml-0'}`}>
                    {text}
                </span>
            </button>
        </div >
    )
}

export default CustomLink