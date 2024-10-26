import { cn } from '@/utils/cn'
import Link from 'next/link'
import React from 'react'

interface CustomLinkProps {
    href: string
    text: string
    className?: string
    uppercase?: boolean
}

const CustomLink = ({
    href,
    text,
    className,
    uppercase = false
}: CustomLinkProps) => {
    return (
        <Link href={href}>
            <h1 className={cn(`text-text text-base font-black ${uppercase && 'uppercase'}`, className)}>
                {text}
            </h1>
        </Link >
    )
}

export default CustomLink