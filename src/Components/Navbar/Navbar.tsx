import React, { createRef, useEffect, useState } from 'react';

import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import MenuSvg from '@/assets/menu.svg';
import { LinkType } from '@/types/Navbar';

const Links: LinkType[] = [
    {
        href: '/',
        label: 'Home',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    },
    {
        href: '#skills',
        label: 'Skills',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>
    },
    {
        href: '#projects',
        label: 'Projects',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>
    },
    {
        href: '#work',
        label: 'Work',
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
      

    },
];

const Navbar = () => {

    const [activeLink, setActiveLink] = useState<number>(-1);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const navRef = createRef<HTMLDivElement>();

    if (typeof window !== 'undefined') {
        window.onwheel = (e) => {
            if (e.deltaY > 0) {
                if (navRef.current) {
                    navRef.current.style.top = "-100px";
                }
            } else if (e.deltaY < 0) {
                if (navRef.current) {
                    navRef.current.style.top = "0";
                }
            }
        }
    }

    return (
        <div className={styles.Navbar_container} ref={navRef}>
            <Link className={styles.Navbar_title} href="/">
                <Image src={Logo} alt="Logo" />
                Matheo Lang
            </Link>

            <div className={styles.Navbar_links}>
                {Links.map((link, index) => (
                    <Link key={index} href={link.href} className={styles.Navbar_link + " " + (activeLink === index ? styles.Navbar_linkActive : "")} onClick={() => setActiveLink(index)} >
                        {link.icon}
                        {link.label}
                    </Link>
                ))}
            </div>
            <Image src={MenuSvg} alt="Menu" className={styles.Navbar_menu} onClick={() => setIsModalOpen(!isModalOpen)} />
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} links={Links} activeLink={activeLink} setActiveLink={setActiveLink} />
        </div>
    );
};

export default Navbar;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    links: LinkType[];
    activeLink: number;
    setActiveLink: (index: number) => void;
}

const Modal = ({ 
    isOpen, 
    onClose, 
    links, 
    activeLink, 
    setActiveLink 
}: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div className={styles.Modal_container}>
                    {
                        links.map((link, index) => (
                            <Link key={index} href={link.href} className={styles.Modal_link + " " + (activeLink === index ? styles.Modal_linkActive : "")} onClick={() => { setActiveLink(index); onClose(); }}>
                                {link.icon}
                                {link.label}
                            </Link>
                        ))
                    }
                </div>
            )}

        </>
    );
}