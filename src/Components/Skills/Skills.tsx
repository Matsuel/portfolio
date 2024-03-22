import React from 'react';

import styles from './Skills.module.scss';
import Title from '../Title/Title';
import Image from 'next/image';
import EmojiPicker, { Emoji } from 'emoji-picker-react';

interface SkillsProps {

}

const Skills = ({ }: SkillsProps) => {

    const images = require.context('../../assets/skills', true);
    const imagesKeys = images.keys();


    return (
        <section id='skills' className={styles.Skills_container}>
            <div className={styles.Skills_top}>
                <Title content="Skills" />
                <Emoji unified='1f6e0-fe0f' size={70} />
            </div>
            <div className={styles.Skills}>
                {imagesKeys.map((key, index) => {
                    return (
                        <div key={index} className={styles.Skills_item}>
                            <Image src={images(key).default} alt={key} />
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Skills;
