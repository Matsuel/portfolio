"use client";

import React, { useState } from 'react';
import MenuIcon from './MenuIcon';
import { AnimatePresence, motion } from 'framer-motion';
import { navbarLinks } from '@/constantes/navbar';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <MenuIcon onClick={toggleMenu} isMenuOpen={isMenuOpen} />
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="fixed w-full min-h-screen h-screen bg-black z-40 top-0 left-0"
                        initial={{ y: "100%" }} // Commence en bas de l'écran
                        animate={{ y: 0 }} // Se déplace vers le haut
                        exit={{ y: "100%" }} // Retourne vers le bas
                        transition={{ duration: 0.5, ease: "easeInOut" }} // Animation fluide
                    >
                        {navbarLinks.map((link) => (
                            <button
                                key={link.name}
                                className="w-full h-20 flex items-center justify-center text-white text-2xl"
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
