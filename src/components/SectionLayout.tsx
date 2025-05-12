import { cn } from '@/utils/cn';
import React from 'react'

interface SectionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const SectionLayout = ({
    children,
    className,
    ...props
}: SectionLayoutProps) => {
    return (
        <div className={cn("w-full h-screen flex items-start", className)} {...props}>
            {children}
        </div>
    )
}

export default SectionLayout