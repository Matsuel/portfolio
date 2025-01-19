import React from 'react'
import Title from '@/components/Ui/SectionTitle'
import Subtitle from '@/components/Ui/Subtitle'
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
        <section {...props} className={cn('w-full flex flex-col gap-8 items-center', className)}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
        </section>
    )
}

export default SectionLayout