import React from 'react'
import { useNavbar } from '../../../contexts/NavbarContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

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

    const { isMenuOpen, setIsMenuOpen } = useNavbar();

    const router = useRouter();

    const handleRedirect = (sectionId: string) => {
        setIsMenuOpen(false);
        setTimeout(() => {
            router.push(`/${sectionId}`);
        }, 1000);
    };


    return (
        <AnimatePresence>
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -80 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: 0.5 + index * 0.05,
                            duration: 0.7,
                            type: "spring",
                            stiffness: 60,
                            damping: 12,
                        },
                    }}
                    exit={{
                        opacity: 0,
                        y: -80,
                        transition: {
                            delay: index * 0.05,
                            type: "spring",
                            duration: 0.7
                        },
                    }}
                >
                    <button
                        className="w-full flex flex-col items-start p-4 2xl:text-9xl text-8xl font-bold uppercase text-secondary border-r border-l border-black hover:border-white hover:text-white cursor-pointer leading-none transition-all duration-300 ease-in-out"
                        onClick={() => handleRedirect(link.sectionId)}
                    >
                        {link.name}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavbarLink