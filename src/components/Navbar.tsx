import React, { useState } from 'react'
import CustomLink from './CustomLink'
import { NavbarLinks } from '@/constantes/navbar'

const Navbar = () => {

    const [isHovered, setIsHovered] = useState<boolean>(false)

    return (
        <div
            className='w-auto h-auto flex flex-row  sticky self-start p-3 gap-4 border-1 border-custom rounded-custom transition-all duration-500 ease-in-out'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CustomLink href='/' text='Matheo lang' className='!text-xl' uppercase />

            <div
                className={`flex flex-row justify-center items-center gap-4 overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100 h-auto w-auto' : 'opacity-0 h-0 w-0'}`}
            >
                {Object.entries(NavbarLinks).map(([key, value]) => (
                    <CustomLink key={key} href={value} text={key} uppercase />
                ))}
            </div>
        </div>
    )
}

export default Navbar