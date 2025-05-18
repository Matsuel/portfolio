import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useNavbar } from '../../../contexts/NavbarContext';

interface NavbarLinkProps {
    link: {
        name: string;
        sectionId: string;
    };
    index: number;
}


const NavbarLink = ({
    link,
    index
}: NavbarLinkProps) => {

    const { setIsMenuOpen } = useNavbar()

    return (
        <Link
            href={`#${link.sectionId}`}
            className="flex flex-row justify-center p-4 hover:bg-white/20 rounded-lg 2xl:text-9xl text-8xl font-bold uppercase text-white leading-none"
            onClick={() => setIsMenuOpen(false)}
        >
                {link.name}
        </Link>
    )
}

export default NavbarLink