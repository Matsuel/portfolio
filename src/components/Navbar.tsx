"use client";

import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import { AnimatePresence, motion } from "framer-motion";
import { navbarLinks } from "@/constantes/navbar";

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
                        className="fixed w-full min-h-screen h-screen bg-background flex flex-col justify-center items-center gap-5 z-40 top-0 left-0"
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {navbarLinks.map((link, index) => (
                            <motion.button
                                key={link.name}
                                className="w-full h-auto flex flex-row items-start justify-center text-text"
                                onClick={toggleMenu}
                            >
                                <span
                                    className="mr-4 mt-3 text-4xl font-semibold leading-none"
                                >
                                    {(index + 1).toString().padStart(2, "0")}
                                </span>
                                <span className="text-[128px] font-bold uppercase leading-none">
                                    {link.name}
                                </span>
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
