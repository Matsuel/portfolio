import React from 'react'

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

const Subtitle = ({
    children,
    ...props
}: SubtitleProps) => {
    return (
        <h2 className='w-4/5 text-[160px] text-center font-extrabold leading-none text-text uppercase' {...props}>
            {children}
        </h2>
    )
}

export default Subtitle