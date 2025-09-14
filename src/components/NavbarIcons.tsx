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
            className='w-auto h-auto px-1 rounded-full shadow-2xl flex flex-row gap-2 border border-glassmorphism-border'
            style={{
                background: 'rgba(136, 136, 136, 0.25)',
                backdropFilter: 'blur(2.5px)',
            }}
        >
            {/* {!isHovered && <NavbarIcon
                icon={currentSection?.icon}
                link={currentSection?.sectionId}
            />} */}
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