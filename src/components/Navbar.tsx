import React, { useState } from 'react'
import useSection from '@/hooks/useSection';
import User from '@/assets/User';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const { section } = useSection();


    return (
        <div className={`fixed top-8 left-[50%] transform -translate-x-1/2 z-50 w-[500px] flex justify-center items-start h-auto ${isHovered ? "bg-black rounded-xl" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='w-auto h-auto flex items-center justify-center gap-4'>
                <div className='w-40 h-12 bg-black rounded-full' />
                <div className='w-10 h-10 bg-black rounded-xl flex items-center justify-center text-text'>
                    <User size={40} />
                </div>
            </div>

        </div>
    )
}

export default Navbar