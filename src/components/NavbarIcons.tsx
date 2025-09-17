"use client"
import React from 'react';
import { navbarLinksObj } from '../../constants/navbar';
import NavbarLink from './NavbarLink';

interface NavbarIconsProps {
    activeId: string | null;
}

const NavbarIcons = ({
    activeId
}: NavbarIconsProps) => {


    return (
        <div
            className='w-auto h-auto px-1 flex flex-row gap-5'
        >
            {Object.values(navbarLinksObj).map((link) => (
                <NavbarLink
                    key={link.sectionId}
                    sectionId={link.sectionId}
                    name={link.name}
                    icon={link.icon}
                    isActive={activeId === link.sectionId.replace("#", "")}
                />
            ))}

        </div>
    )
}

export default NavbarIcons