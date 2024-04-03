import React, { useEffect, useState } from 'react';

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

type Work = {
    name: string;
    full_name: string;
    description: string;
    homepage: string;
    language: string;
}

const Work = () => {

    const [Works, setWorks] = useState<Work[]>([]);

    const { data, error } = useSWR('https://api.github.com/users/Matsuel/repos', fetcher);
    useEffect(() => {
        if (data && !error) {
            const worksWithHomepage: Work[] = data.filter((repo: any) => repo.homepage !== null);
            setWorks(worksWithHomepage);
        }
    }, [data, error]);

    return (
        <section className={styles.Work_container} id="work">
            <div className={styles.Work_topContainer}>
                <Title content="My Online Works" />
                <Emoji unified="1f3a8" size={70} />
            </div>

            <div className={styles.Works}>
                {Works.map((work, index) => (
                    <Link className={styles.Work} key={work.full_name} href={work.homepage} passHref target='_blank'>
                        <div className={styles.Work_top}>
                            <h3 className={styles.Work_name}>
                                {work.name.charAt(0).toUpperCase() + work.name.slice(1)}
                            </h3>
                            <h4 className={styles.Work_fullname}>
                                ({work.full_name})
                            </h4>
                        </div>

                        <p className={styles.Work_description}>
                            {work.description}
                        </p>
                        <div className={styles.Work_technologies}>
                            <span className={styles.Work_technologie}>
                                #{work.language}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default Work;
