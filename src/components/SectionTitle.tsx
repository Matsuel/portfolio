import React from 'react'

interface SectionTitleProps {
    children?: React.ReactNode
}

const SectionTitle = ({
    children
}: SectionTitleProps) => {
    return (
        <h3 className='text-8xl text-text font-bold'>
            {children}
        </h3>
    )
}

export default SectionTitle