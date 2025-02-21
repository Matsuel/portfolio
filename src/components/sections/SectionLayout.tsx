import React from 'react'
import Title from '@/components/Ui/SectionTitle'
import Subtitle from '@/components/Ui/Subtitle'
import { cn } from '@/utils/cn'

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    dark?: boolean
    title: string
    subtitle: string
    children?: React.ReactNode
}

const SectionLayout = ({
    dark = false,
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