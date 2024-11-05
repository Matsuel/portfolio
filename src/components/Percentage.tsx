import TopArrow from '@/assets/TopArrow';
import useScrollPercentage from '@/hooks/usePercentage';
import React from 'react'

const Percentage = () => {

    const { scrollPercentage } = useScrollPercentage();

    return (
        <div className='fixed w-auto h-auto flex flex-row justify-center items-center gap-2 p-1 bottom-8 z-50 self-end text-text bg-background text-xl font-bold'>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`flex flex-row items-center justify-center border-none outline-none transition-all duration-500 ease-in-out ${scrollPercentage < "010.00" ? "opacity-0": "opacity-100"}`}>
                <TopArrow size={40} />
            </button>
            {scrollPercentage}%
        </div>
    )
}

export default Percentage