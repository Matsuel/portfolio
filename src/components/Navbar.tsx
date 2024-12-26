import React, { useState } from 'react'
import useSection from '@/hooks/useSection';
import { displayIcon } from '@/utils/navbar';
import { NavbarLinks } from '@/contantes/navbar';
import Link from 'next/link';
import useScrollPercentage from '@/hooks/usePercentage';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { section } = useSection();
    const { scrollPercentage } = useScrollPercentage();
    const percentageNumber = parseInt(scrollPercentage, 10);

    return (
        <div className={`fixed top-8 left-[50%] transform -translate-x-1/2 z-50 flex justify-start items-center h-auto flex-col gap-5 pb-4 ${isHovered ? "bg-black rounded-xl w-[500px]" : "w-auto"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='w-auto h-auto flex items-center justify-center gap-4'>
                <div className='w-40 h-12 bg-black rounded-full' />
                <div className='w-10 h-10 bg-black rounded-xl flex items-center justify-center text-text'>
                    {displayIcon(section, 40)}
                </div>
            </div>

            {isHovered &&
                <div className='w-auto flex flex-col items-center justify-center gap-4'>
                    <div className='w-auto flex flex-row items-center justify-center gap-3'>
                        <div className='w-12 h-12 bg-white rounded-lg flex items-center justify-center'>
                            {displayIcon(section, 60)}
                        </div>
                        <span className='text-text font-bold text-3xl uppercase'>
                            {section === 'home' ? 'Matsuel' : section}
                        </span>
                    </div>

                    <div className='flex flex-row items-center justify-center gap-5'>
                        {Object.entries(NavbarLinks).map(([link, href], index) => (
                            <Link key={index} href={href} className={`uppercase font-extrabold hover:text-text ${section === href.slice(1) ? 'text-text' : 'text-[#a3a3a3]'}`}>
                                {link}
                            </Link>
                        ))}
                    </div>

                    <div className='w-auto flex flex-row items-center justify-center gap-10'>
                        <span className='w-5 h-auto text-[#a3a3a3] font-medium'>
                            {scrollPercentage.charAt(0)}:{scrollPercentage.slice(1, 3).padEnd(2, '0')}
                        </span>

                        <div className="w-72 h-1 flex flex-row items-center justify-start bg-[#a3a3a3] rounded-full">
                            <div
                                className="h-1 bg-white rounded-full"
                                style={{
                                    width: `${percentageNumber}%`
                                }}
                            />
                        </div>

                        <span className='w-5 h-auto text-[#a3a3a3] font-medium'>
                            1:00
                        </span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar