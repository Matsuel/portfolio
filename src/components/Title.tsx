import React from 'react'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}


const Title = ({
    children,
    ...props
}: TitleProps) => {
    return (
        <h1 className='text-7xl font-bold text-secondary' {...props}>
            {children}
        </h1>
    )
}

export default Title