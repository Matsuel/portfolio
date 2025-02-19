import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { scrollToSection } from '@/utils/scroll'
import NavbarContext from '@/contexts/NavbarContext'

interface NavbarLinkProps {
    name: string
    sectionId: string
    isEven: boolean
    index: number
}

const NavbarLink = ({
    name,
    sectionId,
    isEven,
    index,
}: NavbarLinkProps) => {

    const { toggleMenu } = useContext(NavbarContext)

    const onClickLink = (sectionId: string) => {
        toggleMenu();
        scrollToSection(sectionId, 700);
    }

    return (
        <motion.button
            key={name}
            className="w-full h-auto flex flex-row items-start justify-center text-text cursor-pointer"
            onClick={() => onClickLink(sectionId)}
            initial={{ x: isEven ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isEven ? "-100%" : "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
        >
            <span
                className="mr-4 mt-3 text-4xl font-semibold leading-none"
            >
                {(index + 1).toString().padStart(2, "0")}
            </span>
            <span className="text-[128px] font-bold uppercase leading-none">
                {name}
            </span>
        </motion.button>
    )
}

export default NavbarLink