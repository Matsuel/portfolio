import { cn } from '@/utils/cn';
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface CustomLinkProps extends LinkProps {
    variant?: 'primary' | 'secondary' | 'white';
    children: React.ReactNode;
    className?: string;
}

const CustomLink = ({
    variant = 'primary',
    children,
    className,
    ...props
}: CustomLinkProps) => {

    const variants = {
        primary: "bg-[#0077ED] text-white",
        secondary: "bg-transparent text-[#0077ED] hover:bg-[#0077ED] hover:text-white",
        white: "bg-white text-color-invert"
    }

    return (
        <Link target='_blank' {...props} className={cn(`w-auto h-auto px-5 py-2 border border-[#0077ED] rounded-full text-lg ${variants[variant]}`, className)}>
            {children}
        </Link>
    )
}

export default CustomLink