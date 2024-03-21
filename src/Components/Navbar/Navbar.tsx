import React, { useState } from 'react';

import styles from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '@/assets/logo-high.png';
import Link from 'next/link';

interface NavbarProps {

}

const Links = [
    { href: '/', label: 'Home' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
];

const Navbar = ({ }: NavbarProps) => {

    const [activeLink, setActiveLink] = useState<number>(-1);

    return (
        <div className={styles.Navbar_container}>
            <Link className={styles.Navbar_title} href="/">
                <Image src={Logo} alt="Logo" />
                Matheo Lang
            </Link>

            <div className={styles.Navbar_links}>
                {Links.map((link, index) => (
                    <Link key={index} href={link.href} className={styles.Navbar_link + " " + (activeLink === index ? styles.Navbar_linkActive:"")} onClick={() => setActiveLink(index)} >
                        {link.label}
                    </Link>
                ))}
            </div>

            <div className={styles.Navbar_empty}></div>

            
        </div>
    );
};

export default Navbar;
