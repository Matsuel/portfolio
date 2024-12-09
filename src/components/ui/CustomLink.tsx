import React, { useState } from 'react'

interface CustomLinkProps {
    onClick?: () => void
    text: string
    index: number
    isActive: boolean
    className?: string
    uppercase?: boolean
}

const CustomLink = ({
    onClick,
    text,
    index,
    isActive
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
                className={`h-5 flex flex-row items-center gap-4 pl-10 border-b-[2px] transition-all duration-300 ease-in-out font-black uppercase ${isHover || isActive ? "border-text w-auto" : "border-secondary w-[100px]"}`}
            >
                <span className={`${isHover || isActive ? "text-text" : "text-secondary"} uppercase font-black`}>
                    {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className={`transition-all duration-300 ease-in-out text-text ${isHover || isActive ? 'opacity-100 ml-2' : 'opacity-0 ml-0'}`}>
                    {text}
                </span>
            </button>
        </div >
    )
}

export default CustomLink