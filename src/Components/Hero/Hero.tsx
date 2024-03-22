import React, { useState } from 'react';
import styles from './Hero.module.scss';
import Logo from '@/assets/logo-high.png';
import Image from 'next/image';
import { Emoji } from 'emoji-picker-react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface HeroProps {

}

interface Social {
    href: string;
    icon: any;
    name: string;
}

const Socials: Social[] = [
    {
        href: 'https://github.com/Matsuel/',
        icon: faGithub,
        name: 'Github',
    },
    {
        href: 'https://www.linkedin.com/in/matheo-lang/',
        icon: faLinkedin,
        name: 'Linkedin',
    },
    {
        href: 'mailto:matheolang@ynovcom',
        icon: faAt,
        name: 'Email',
    },
]

const Hero = ({ }: HeroProps) => {

    const [hovered, setHovered] = useState<boolean[]>(new Array(Socials.length).fill(false));
    
    
    const handleHover = (index: number) => {
        const newHovered = [...hovered];
        newHovered[index] = !newHovered[index];
        setHovered(newHovered);
    }

    return (
        <div className={styles.Hero_container}>
            <div className={styles.Hero_content}>
                <div className={styles.Hero_top}>
                    <h1 className={styles.Hero_title}>
                        Matheo Lang
                    </h1>
                    <Emoji unified='1f468-200d-1f4bb' size={70} />
                </div>
                <h2 className={styles.Hero_subtitle}>
                    I am a full stack web and mobile developer based in France. I love back-end development and I'm always looking for new challenges like doing css.
                </h2>
                <div className={styles.Hero_socials}>
                    {Socials.map((social, index) => (
                        <Link key={index} href={social.href} className={styles.Hero_social} target='_blank' onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(index)}>
                            <div className={styles.Hero_social_top}>
                                <FontAwesomeIcon icon={social.icon} className={styles.Hero_social_icon} />
                                <span className={styles.Hero_social_name}>{social.name}</span>
                            </div>
                            <div className={!hovered[index] ? styles.Hero_social_line : styles.Hero_social_line_hovered}></div>
                        </Link>
                    ))}
                </div>

            </div>
            <div className={styles.Hero_image}>
                <Image src={Logo} alt="Logo" />
            </div>

        </div>
    );
};

export default Hero;
