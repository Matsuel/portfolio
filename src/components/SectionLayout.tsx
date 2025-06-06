import { cn } from '@/utils/cn';
import React from 'react'

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
    title?: string;
}

const SectionLayout = ({
    children,
    className,
    title,
    ...props
}: SectionLayoutProps) => {
    return (
        <section className={cn("w-full h-screen flex flex-col items-center px-[5%]", className)} {...props}>
            <h2 className="xl:text-7xl sm:text-6xl text-4xl font-bold self-start mt-7">
                {title}
            </h2>
            {children}
        </section>
    )
}

export default SectionLayout