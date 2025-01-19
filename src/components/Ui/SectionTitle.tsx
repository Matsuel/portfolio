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
        <h1 className={cn('text-7xl font-bold text-secondary', className)} {...props}>
            {children}
        </h1>
    )
}

export default Title