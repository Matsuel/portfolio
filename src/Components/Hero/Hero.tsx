import React from 'react';
import styles from './Hero.module.scss';
import Logo from '@/assets/logo-high.png';
import Image from 'next/image';

interface HeroProps {

}

const Hero = ({ }: HeroProps) => {
    return (
        <div className={styles.Hero_container}>
            <div className={styles.Hero_content}>
                <h1 className={styles.Hero_title}>Matheo Lang</h1>
                <h2 className={styles.Hero_subtitle}>I am a full stack web and mobile developer based in France. I love back-end development and I'm always looking for new challenges like doing css.</h2>
            </div>
            <div className={styles.Hero_image}>
                <Image src={Logo} alt="Logo" />
            </div>

        </div>
    );
};

export default Hero;
