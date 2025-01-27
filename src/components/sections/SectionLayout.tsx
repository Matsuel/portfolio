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

    const darkMode = dark ? 'bg-background text-color' : 'bg-backgroundeven text-coloreven'

    return (
        <section {...props} className={cn(`w-full min-h-screen flex flex-col gap-8 items-start pl-24 pt-36 ${darkMode}`, className)}>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {children}
        </section>
    )
}

export default SectionLayout