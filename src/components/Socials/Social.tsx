import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SocialProps {
    icon: string
    link: string
}

const Social = ({
    icon,
    link
}: SocialProps) => {
    return (
        <Link key={link} href={link} target='_blank'>
            <Image src={icon} width={24} height={24} alt={link} />
        </Link>
    )
}

export default Social