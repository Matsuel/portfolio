import React, { useRef } from 'react';

import styles from './Projects.module.scss';
import Title from '../../Components/Title/Title';
import { Emoji } from 'emoji-picker-react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronLeft, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '@/Components/Button/Button';
import Chatroom from '@/assets/projects/chatroom.png';
import Portfolio from '@/assets/projects/portfolio.png';
import iMessages from '@/assets/projects/imessages.png';
import Image from 'next/image';
import V3 from '@/assets/projects/v3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Project } from '@/types/Project';

const ProjectsList: Project[] = [
    {
        title: "iMessages",
        description: "iMessages is a web application, clone of iMessage. It is a chat application where users can chat with each other. They can send messages, react to messages with react-emoji-picker and also see the online status of the users. It is built using Next.js (React), Css and Express.js.",
        image: iMessages,
        link: "https://github.com/Matsuel/iMessages",
        public: true
    },
    {
        title: "Portfolio v3",
        description: "Portfolio website to showcase my projects and skills. It is built using React, Css. This is the version 3 of my portfolio, the previous versions are built but not usable beacause of the lack of knowledge and experience.",
        image: V3,
        link: "https://github.com/Matsuel/portfolio-v3",
        public: true
    },
    {
        title: "Projet dev B2",
        description: "This project involved developing a website for rating driving school instructors. Three user paths are available: driving schools can register new students, view reviews. Students can search for a driving school using our search tool, rate their instructor, and respond to questions from future students. We also implemented a pseudo-ranking system.",
        image: "",
        emoji: "1f6e0-fe0f",
        link: "https://github.com/Matsuel/Projet_DevB2",
        public: true
    },
    {
        title: "Portfolio",
        description: "Portfolio website to showcase my projects and skills. It is built using Next.js (React), Css.",
        image: Portfolio,
        link: "https://github.com/Matsuel/Portfolio",
        public: true
    },
    {
        title: "Chatroom",
        description: "Chatrrom CLI application using python. It is a simple chatroom application where multiple users can connect to the server and chat with each other. You can also send images which is converted to ASCII art.",
        image: Chatroom,
        link: "https://github.com/Matsuel/b2-reseau-2023/tree/main/Tp6/Chat",
        public: true
    },
]

const Projects = () => {

    //scroll horizontal quand on voit etirer la section
    const navRef = useRef<HTMLDivElement>(null);

    const handleNav = (direction: string) => {
        if (direction === 'left' && navRef.current) {
            navRef.current.scrollBy({ left: -200, behavior: 'smooth' })
        } else if (direction === 'right' && navRef.current) {
            navRef.current.scrollBy({ left: 200, behavior: 'smooth' })
        }
    }

    return (
        <section id='projects' className={styles.Projects_container}>
            <div className={styles.Projects_top}>
                <Title content="Projects" />
                <Emoji unified="1f680" size={70} />
            </div>

            <div className={styles.Projects_list} ref={navRef}>
                {ProjectsList.map((project, index) => (
                    <div key={project.title} className={styles.Projects_card}>
                        {project.image !== "" ? (
                            <Image src={project.image} alt={project.title} />)
                            : (
                                <div className={styles.Projects_emoji}>
                                    <Emoji unified={project.emoji as string} size={70} />
                                </div>
                            )
                        }
                        <h2 className={styles.Projects_title}>
                            {project.title}
                        </h2>
                        <p className={styles.Projects_description}>
                            {project.description}
                        </p>
                        {project.public &&
                            <div className={styles.Projects_button}>
                                <Button href={project.link} icon={faGithub} name="Github" index={index} />
                            </div>
                        }
                    </div>
                ))}
            </div>

            <div className={styles.Projects_scroll}>
                <FontAwesomeIcon icon={faCircleChevronLeft} width={50} color='black' onClick={() => handleNav('left')} className={styles.Projects_scroll_button} />
                <FontAwesomeIcon icon={faCircleChevronRight} width={50} color='black' onClick={() => handleNav('right')} className={styles.Projects_scroll_button} />
            </div>
        </section>
    );
};

export default Projects;
