import React, { useState } from 'react'

const Navbar = () => {
    const [isHovered, setIsHovered] = useState<boolean>(false);


    return (
        <div className={`fixed top-8 left-[50%] transform -translate-x-1/2 z-50 w-[500px] flex justify-center items-start ${isHovered ? "bg-black rounded-xl h-52" : "h-auto"}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className='w-auto h-auto flex items-center justify-center gap-4'>
                <div className='w-40 h-12 bg-black rounded-full' />
                <div className='w-10 h-10 bg-black rounded-xl flex items-center justify-center' />
            </div>

        </div>
    )
}

export default Navbar