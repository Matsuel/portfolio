import React from 'react';

import styles from './Work.module.scss';
import Title from '@/Components/Title/Title';
import { Emoji } from 'emoji-picker-react';
import Link from 'next/link';

interface WorkProps {

}

type WorkType = {
    title: string;
    description: string;
    link: string;
}

const Works : WorkType[] = [
    {
        title: "Portfolio",
        description: "This is my portfolio website create with Next.js and SCSS in order to show my work and my skills",
        link: "https://matsuel.netlify.app"
    },
    {
        title: "ATPE",
        description: "This website was created using Next.Js and SCSS, with the aim of showing the actions of the association through the practice of fencing to denounce the different types of violence in our society",
        link: "https://65eadb704568f566cfc634c2--atpebbbbbbbbb.netlify.app/"
    }
]

const Work = ({ }: WorkProps) => {

    return (
        <section className={styles.Work_container} id="work">
            <div className={styles.Work_top}>
                <Title content="My Work" />
                <Emoji unified="1f3a8" size={70} />
            </div>

            <div className={styles.Works}>
                {Works.map((work, index) => (
                    <div className={styles.Work} key={index}>
                        <h3 className={styles.Work_title}>{work.title}</h3>
                        <p className={styles.Work_description}>{work.description}</p>
                        <Link href={work.link} passHref target='_blank'>
                            View Project
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Work;
