import React from 'react'

interface NavbarCurrentSectionProps {
    currentSection: string
}

const NavbarCurrentSection = ({
    currentSection
}: NavbarCurrentSectionProps) => {
    return (
        <div className='flex flex-col items-start justify-center rounded-full transition-all duration-300 border border-glassmorphism-border backdrop-blur-glassmorphism bg-[linear-gradient(145deg,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_100%)] shadow-xl'>
            <span className=''>{currentSection}</span>
        </div>
    )
}

export default NavbarCurrentSection