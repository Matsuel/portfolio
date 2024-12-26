import React, { useState } from 'react'
import useSection from '@/hooks/useSection';
import { displayIcon } from '@/utils/navbar';
import { NavbarLinks } from '@/contantes/navbar';
import Link from 'next/link';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { section } = useSection();


    return (
        <div className={`fixed top-8 left-[50%] transform -translate-x-1/2 z-50 flex justify-start items-center h-auto flex-col gap-5 pb-4 ${isHovered ? "bg-black rounded-xl w-[500px]" : "w-auto"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='w-auto h-auto flex items-center justify-center gap-4'>
                <div className='w-40 h-12 bg-black rounded-full' />
                <div className='w-10 h-10 bg-black rounded-xl flex items-center justify-center text-text'>
                    {displayIcon(section, 40)}
                </div>
            </div>

            {isHovered &&
                <div className='flex flex-col items-center justify-center gap-4'>
                    <div className='flex flex-row items-center justify-center gap-5'>
                        {Object.entries(NavbarLinks).map(([link, href], index) => (
                            <Link key={index} href={href} className='text-text uppercase font-extrabold'>
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar