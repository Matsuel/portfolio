"use client";

import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navbarLinks } from "@/constantes/navbar";
import NavbarLink from "./NavbarLink";
import NavbarContext from "@/contexts/NavbarContext";

const Navbar = () => {

    const { isMenuOpen } = useContext(NavbarContext);

    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    className="fixed w-full min-h-screen h-screen bg-background flex flex-col justify-center items-center gap-5 z-40 top-0 left-0"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%", transition: { duration: 0.5, delay: 0.5 } }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {navbarLinks.map((link, index) => (
                        <NavbarLink
                            key={link.name}
                            name={link.name}
                            sectionId={link.sectionId}
                            isEven={index % 2 === 0}
                            index={index}
                        />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Navbar;
