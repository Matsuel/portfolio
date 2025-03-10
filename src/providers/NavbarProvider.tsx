"use client"
import NavbarContext from '@/contexts/NavbarContext';
import { ProviderProps } from '@/types';
import React, { useState } from 'react'


const NavbarProvider = ({
    children
}: ProviderProps) => {

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