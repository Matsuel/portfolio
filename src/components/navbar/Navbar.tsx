"use client";
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavbar } from '../../../contexts/NavbarContext';
import { navbarLinks } from '../../../constants/navbar';
import NavbarLink from './NavbarLink';

const Navbar = () => {

    const { isMenuOpen } = useNavbar()

    const expandVariants = {
        closed: {
            width: 0,
            height: 0,
            borderRadius: '999px',
            top: 4 * 5,
            right: 4 * 5,
            opacity: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.7 }
        },
        open: {
            width: '100vw',
            height: '100vh',
            borderRadius: '0px',
            top: 0,
            right: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] }
        }
    }

    return (
        <AnimatePresence mode="wait">
            {isMenuOpen && (
                <motion.div
                    key="navbar"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={expandVariants}
                    className="fixed bg-black z-10"
                >
                    <div className="flex flex-col">
                        {navbarLinks.map((link, index) => (
                            <NavbarLink
                                key={link.sectionId}
                                link={link}
                                index={index}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Navbar