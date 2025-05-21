import { cn } from '@/utils/cn';
import React from 'react'

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

const SectionLayout = ({
    children,
    className,
    ...props
}: SectionLayoutProps) => {
    return (
        <section className={cn("w-full h-screen flex flex-col items-center", className)} {...props}>
            {children}
        </section>
    )
}

export default SectionLayout