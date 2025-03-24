import React from 'react'
import { cn } from '@/utils/cn'
import Title from './SectionTitle'
import Subtitle from './Subtitle'

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string
    subtitle: string
    children?: React.ReactNode
}

const SectionLayout = ({
    className,
    title,
    subtitle,
    children,
    ...props
}: SectionLayoutProps) => {

    return (
        <section {...props} className={cn(`w-full min-h-screen flex flex-col gap-8 items-start p-24 bg-background snap-start`, className)}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
        </section>
    )
}

export default SectionLayout