"use client"
import NavbarContext from '@/contexts/NavbarContext';
import React, { useState } from 'react'


const NavbarProvider = ({ children }: { children: React.ReactNode }) => {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <NavbarContext.Provider value={{ isMenuOpen, toggleMenu }}>
            {children}
        </NavbarContext.Provider>
    )
}

export default NavbarProvider