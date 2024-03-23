import React from 'react';
import styles from './Hero.module.scss';
import LogoHigh from '@/assets/logo-high.png';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { Emoji } from 'emoji-picker-react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Achievements from './Achievements/Achievements';
import Title from '../Title/Title';

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
        href: 'mailto:matheolang@ynov.com',
        icon: faAt,
        name: 'Email',
    },
]

const Hero = ({ }: HeroProps) => {

    return (
        <div className={styles.Hero_container}>
            <div className={styles.Hero}>
                <div className={styles.Hero_content}>
                    <div className={styles.Hero_top}>
                        <Title content="Matheo Lang" />
                        <Emoji unified='1f468-200d-1f4bb' size={70} />
                    </div>
                    <h2 className={styles.Hero_subtitle}>
                        I'm a passionate full-stack web and mobile developer based in France. While my expertise primarily lies in back-end development, I'm also open to challenges, including diving into CSS design.
                        Explore my portfolio to discover my work, and let's bring your projects to life together!
                    </h2>
                    <div className={styles.Hero_socials}>
                        {Socials.map((social, index) => (
                            <Link key={index} href={social.href} className={styles.Hero_social} target={social.href.includes('mailto') ? "" : "_blank"}>
                                <div className={styles.Hero_social_top}>
                                    <FontAwesomeIcon icon={social.icon} className={styles.Hero_social_icon} />
                                    <span className={styles.Hero_social_name}>{social.name}</span>
                                </div>
                                <div className={styles.Hero_social_line}></div>
                            </Link>
                        ))}
                    </div>

                </div>
                <div className={styles.Hero_image}>
                    <Image src={Logo} alt="Logo" />
                </div>

            </div>
            <Achievements />
        </div>
    );
};

export default Hero;
