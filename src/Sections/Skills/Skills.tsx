import React, { useState } from 'react';

import styles from './Skills.module.scss';
import Title from '../../Components/Title/Title';
import Image from 'next/image';
import { Emoji } from 'emoji-picker-react';

const Skills = () => {

    const images = require.context('../../assets/skills', true);
    const imagesKeys = images.keys();

    const [isMooseDown, setIsMooseDown] = useState<boolean[]>(new Array(imagesKeys.length).fill(false));

    const handleMouseDown = (index: number) => {
        const newMouseDown = [...isMooseDown];
        newMouseDown[index] = !newMouseDown[index]
        setIsMooseDown(newMouseDown);
    }

    const handleMouseLeave = (index: number) => {
        const newMouseDown = [...isMooseDown];
        newMouseDown[index] = false;
        setIsMooseDown(newMouseDown);
    }


    return (
        <section id='skills' className={styles.Skills_container}>
            <div className={styles.Skills_top}>
                <Title content="Skills" />
                <Emoji unified='1f6e0-fe0f' size={70} />
            </div>
            <div className={styles.Skills}>
                {imagesKeys.map((key, index) => {
                    return (
                        <div
                            key={key}
                            className={styles.Skills_item + " " + (isMooseDown[index] ? styles.Skills_item_active : '')}
                            onMouseDown={() => handleMouseDown(index)}
                            onMouseUp={() => handleMouseDown(index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            role='button'
                            tabIndex={0}
                        >
                            <Image src={images(key).default} alt={key} />
                        </div>
                    );
                })}
            </div>

        </section>
    );
};

export default Skills;
