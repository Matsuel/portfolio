import React from 'react';

import styles from './Work.module.scss';
import Title from '@/Components/Title/Title';
import { Emoji } from 'emoji-picker-react';
import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
        },
    }).then((response) => response.json());
}

type WorkType = {
    title: string;
    description: string;
    link: string;
}

const Works: WorkType[] = [
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

const Work = () => {

    // const {data, error} =useSWR('https://api.github.com/users/Matsuel/repos', fetcher);
    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>
    // console.log(data.filter((repo: any) => repo.homepage !== null));

    return (
        <section className={styles.Work_container} id="work">
            <div className={styles.Work_topContainer}>
                <Title content="My Work" />
                <Emoji unified="1f3a8" size={70} />
            </div>

            <div className={styles.Works}>
                {Works.map((work, index) => (
                    <div className={styles.Work} key={index}>
                        <div className={styles.Work_top}>
                            <div className={styles.Work_names}>
                                <h3 className={styles.Work_name}>
                                    {work.title}
                                </h3>
                                <h4 className={styles.Work_fullname}>
                                    @Matsuel
                                </h4>
                            </div>
                            <div className={styles.Work_status}>
                                Online
                            </div>
                        </div>

                        <p className={styles.Work_description}>
                            {work.description}
                        </p>
                        <div className={styles.Work_technologies}>
                            <span className={styles.Work_technologie}>#Next.js</span>
                            <span className={styles.Work_technologie}>#SCSS</span>
                        </div>

                        <Link href={work.link} passHref target='_blank' className={styles.Work_link}>
                            View Project <Emoji unified="1f310" size={20} />
                        </Link>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Work;
