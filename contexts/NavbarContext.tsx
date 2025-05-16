"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface NavbarContextType {
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

export const NavbarContext = createContext<NavbarContextType>({
    isMenuOpen: false,
    setIsMenuOpen: () => { },
});

export const NavbarProvider = ({ children }: { children: ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <NavbarContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </NavbarContext.Provider>
    );
};

export const useNavbar = () => useContext(NavbarContext);