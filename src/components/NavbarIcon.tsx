import Link from 'next/link';
import React from 'react'

interface NavbarIconProps {
    icon: React.ReactNode;
    link: string;
}

const NavbarIcon = ({
    icon,
    link
}: NavbarIconProps) => {
    return (
        <Link
            href={link}
            target='_blank'
            className='w-[50px] h-[50px] flex items-center justify-center p-3 rounded-full transition-all duration-300 text-foreground border border-glassmorphism-border backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] hover:bg-[linear-gradient(145deg,_rgba(255,255,255,0.4)_0%,_rgba(255,255,255,0.1)_100%)] shadow-xl'
        >
            {icon}
        </Link>
    )
}

export default NavbarIcon