import React from 'react'
import Arrow from '@/components/icons/Arrow';

interface SteperButtonProps {
    onClick?: () => void
}

const SteperButton = ({
    onClick
}: SteperButtonProps) => {
    return (
        <button className="w-auto h-auto flex flex-col items-center justify-center gap-2 cursor-pointer absolute bottom-10 z-10" onClick={onClick}>
            <Arrow size={40} color='#000000' />
            <span className="text-sm text-gray-500">
                Passer
            </span>
        </button>
    )
}

export default SteperButton