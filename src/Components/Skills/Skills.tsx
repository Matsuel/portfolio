import React from 'react';

import styles from './Skills.module.scss';
import Title from '../Title/Title';

interface SkillsProps {

}

const Skills = ({ }: SkillsProps) => {
    return (
        <section id='skills' className={styles.Skills_container}>
            <Title content="Skills" />
            
        </section>
    );
};

export default Skills;
