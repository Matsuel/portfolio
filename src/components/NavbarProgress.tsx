import React from 'react'
import { navbarLinks } from '../../constants/navbar';

interface NavbarProgressProps {
    progress: number;
    activeId: string;
}

const NavbarProgress = ({
    progress,
    activeId
}: NavbarProgressProps) => {

    const Icon = navbarLinks.find(link => link.sectionId.replace("#", "") === activeId)?.icon;

    return (
        <div className='w-auto h-auto flex flex-col items-start justify-center gap-1'>

            <div className='flex flex-row gap-2 items-center'>
                <div className='h-7 w-7 text-[#F92C47] bg-[#f8e3e4] rounded-lg flex items-center justify-center'>
                    {Icon && <Icon size={16} />}
                </div>
                <span className='font-medium text-sm text-[#262626]'>
                    {navbarLinks.find(link => link.sectionId.replace("#", "") === activeId)?.name}
                </span>
            </div>

            <div className='w-28 h-[2px] bg-[#ddd] rounded-full overflow-hidden'>
                <div
                    className='h-full bg-[#262626] ease-in-out'
                    style={{ width: `${progress}%` }}
                />
            </div>

        </div>
    )
}

export default NavbarProgress