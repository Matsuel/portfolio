import { cn } from '@/utils/cn'
import React from 'react'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode
}


const Title = ({
    className,
    children,
    ...props
}: TitleProps) => {
    return (
        <h1 className={cn('xl:text-7xl sm:text-6xl text-4xl font-bold text-secondary', className)} {...props}>
            {children}
        </h1>
    )
}

export default Title