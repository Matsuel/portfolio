import React from 'react'

interface SubtitleProps {
    children: React.ReactNode
}

const Subtitle = ({
    children
}: SubtitleProps) => {
    return (
        <h2 className='text-text text-5xl font-bold'>
            {children}
        </h2>
    )
}

export default Subtitle