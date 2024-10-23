import useHour from '@/hooks/useHour'
import React from 'react'

const Sleep = () => {

    const { hour } = useHour()

    return (
        <h3 className='fixed z-50 text-text text-[200px] font-black top-[50%] left-[50%] transform-gpu -translate-x-1/2 -translate-y-1/2'>
            {hour}
        </h3>
    )
}

export default Sleep