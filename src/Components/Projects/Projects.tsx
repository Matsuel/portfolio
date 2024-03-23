import React from 'react';

import styles from './Projects.module.scss';
import Title from '../Title/Title';
import { Emoji } from 'emoji-picker-react';

interface ProjectsProps {

}

const Projects = ({ }: ProjectsProps) => {
    return (
        <div className={styles.Projects_container}>
            <div className={styles.Projects_top}>
                <Title content="Projects" />
                <Emoji unified="1f680" size={70} />
            </div>
            
        </div>
    );
};

export default Projects;
