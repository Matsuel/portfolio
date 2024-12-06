import useHour from '@/hooks/useHour'
import useOpacity from '@/hooks/useOpacity'
import React from 'react'

const Sleep = () => {

    const { hour } = useHour()
    const { isVisible } = useOpacity()

    return (
        <h3 className={`fixed z-50 text-text text-[250px] font-black top-[50%] left-[50%] transform-gpu -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {hour}
        </h3>
    )
}

export default Sleep