import React from 'react'
import { navbarLinks } from '../../constants/navbar'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='fixed top-8 left-1/2 transform -translate-x-1/2 z-50 w-[84%] h-auto p-3 rounded-xl border border-glassmorphism-border backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] shadow-xl'>
            <div className='flex flex-row items-center justify-between w-full h-full font-semibold'>
                {navbarLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.sectionId}
                    >
                        {link.name}
                    </Link>
                ))}

            </div>

        </nav>
    )
}

export default Navbar