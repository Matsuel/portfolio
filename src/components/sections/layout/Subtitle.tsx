import React from 'react'

interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}

const Subtitle = ({
    children,
    ...props
}: SubtitleProps) => {
    return (
        <h2 className='sm:w-[82%] w-full 2xl:text-[140px] xl:text-[120px] lg:text-8xl md:text-7xl text-6xl font-extrabold leading-none text-text uppercase 2xl:mb-32 xl:mb-28 lg:mb-24 mb-20' {...props}>
            {children}
        </h2>
    )
}

export default Subtitle