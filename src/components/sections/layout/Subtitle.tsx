import React from 'react'

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

const Subtitle = ({
    children,
    ...props
}: SubtitleProps) => {
    return (
        <h2 className='w-[82%] text-[140px] font-extrabold leading-none text-text uppercase mb-32' {...props}>
            {children}
        </h2>
    )
}

export default Subtitle