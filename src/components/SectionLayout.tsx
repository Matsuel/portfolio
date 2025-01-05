import React from 'react'
import Title from './Title'
import Subtitle from './Subtitle'

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle: string
    children: React.ReactNode
}

const SectionLayout = ({
    title,
    subtitle,
    children,
    ...props
}: SectionLayoutProps) => {
    return (
        <section {...props} className='w-full flex flex-col gap-8 items-center'>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
        </section>
    )
}

export default SectionLayout