import React from 'react'
import Title from '@/components/sections/layout/SectionTitle'
import Subtitle from '@/components/sections/layout/Subtitle'
import { cn } from '@/utils/cn'

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