import React from 'react';
import styles from './Hero.module.scss';
import Logo from '@/assets/logo.png';
import Image from 'next/image';
import { Emoji } from 'emoji-picker-react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import Achievements from './Achievements/Achievements';
import Title from '../../Components/Title/Title';
import Button from '@/Components/Button/Button';
import { Social } from '@/types/Hero';

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

const Hero = () => {

    return (
        <section id='hero' className={styles.Hero_container}>
            <div className={styles.Hero}>
                <div className={styles.Hero_content}>
                    <div className={styles.Hero_top}>
                        <Title content="Matheo Lang" />
                        <Emoji unified='1f468-200d-1f4bb' size={70} />
                    </div>
                    <h2 className={styles.Hero_subtitle}>
                        I&apos;m a passionate full-stack web and mobile developer based in France. While my expertise primarily lies in back-end development, I&apos;m also open to challenges, including diving into CSS design.
                        Explore my portfolio to discover my work, and let&apos;s bring your projects to life together!
                    </h2>
                    <div className={styles.Hero_socials}>
                        {Socials.map((social, index) => (
                            <Button key={social.name} href={social.href} icon={social.icon} name={social.name} index={index} />
                        ))}
                    </div>

                </div>
                <div className={styles.Hero_image}>
                    <Image src={Logo} alt="Logo" />
                </div>

            </div>
            <Achievements />
        </section>
    );
};

export default Hero;
