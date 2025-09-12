"use client"
import React, { useState } from 'react'
import NavbarIcon from './NavbarIcon';
import NavbarLink from './NavbarLink';
import { navbarLinksObj } from '../../constants/navbar';

interface NavbarIconsProps {
    currentSection: {
        icon: React.ReactNode;
        sectionId: string;
    };
    activeId: string | null;
}

const NavbarIcons = ({
    currentSection,
    activeId
}: NavbarIconsProps) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);


    return (
        <div
            className='z-50 w-auto h-auto px-1 rounded-full shadow-2xl flex flex-row gap-2 border border-glassmorphism-border'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered && <NavbarIcon
                icon={currentSection?.icon}
                link={currentSection?.sectionId}
            />}
            {isHovered && Object.values(navbarLinksObj).map((link) => (
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