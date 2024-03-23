import React, { useState } from 'react';

import styles from './Projects.module.scss';
import Title from '../../Components/Title/Title';
import { Emoji } from 'emoji-picker-react';
import Link from 'next/link';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@/Components/Button/Button';

interface ProjectsProps {

}

interface ProjectProps {
    title: string;
    description: string;
    image: string;
    link: string;
    public: boolean;
}

const ProjectsList: ProjectProps[] = [
    {
        title: "Chatroom",
        description: "Chatrrom CLI application using python. It is a simple chatroom application where multiple users can connect to the server and chat with each other. You can also send images which is converted to ASCII art.",
        image: "",
        link: "https://github.com/Matsuel/b2-reseau-2023/tree/main/Tp6/Chat",
        public: true
    },
    {
        title: "WhatsappHappen",
        description: "WhatsappHappen is a web application, clone of Whatsapp. It is a chat application where users can chat with each other. They can send messages, images, videos and documents, react to messages with react-emoji-picker and also see the online status of the users. It is built using Next.js (React), Css and Express.js.",
        image: "",
        link: "https://github.com/Matsuel/WhatsappHappen",
        public: false
    },
    {
        title: "Portfolio v3",
        description: "Portfolio website to showcase my projects and skills. It is built using React, Css. This is the version 3 of my portfolio, the previous versions are built but not usable beacause of the lack of knowledge and experience.",
        image: "",
        link: "https://github.com/Matsuel/portfolio-v3",
        public: true
    },
    {
        title: "Portfolio",
        description: "Portfolio website to showcase my projects and skills. It is built using Next.js (React), Css",
        image: "",
        link: "https://github.com/Matsuel/Portfolio",
        public: true
    },
    {
        title: "Projet dev B2",
        description: "This project consisted of developing a website allowing you to rate your driving school instructors, 3 user paths are available, driving schools can register new students, consult reviews. Students can search for a driving school via our search tool, they can also rate their instructor, and just like people looking for a driving school, they can receive and answer questions from future students. We also developed a pseudo-ranking system.",
        image: "",
        link: "https://github.com/Matsuel/Projet_DevB2",
        public: true
    }

]

const Projects = ({ }: ProjectsProps) => {

    const [showImages, setShowImages] = useState<boolean[]>(new Array(ProjectsList.length).fill(false));

    const showImage = (index: number) => {
        const newShowImages = [...showImages];
        newShowImages[index] = true;
        setShowImages(newShowImages);
    }

    return (
        <section id='projects' className={styles.Projects_container}>
            <div className={styles.Projects_top}>
                <Title content="Projects" />
                <Emoji unified="1f680" size={70} />
            </div>

            <div className={styles.Projects_list}>
                {ProjectsList.map((project, index) => (
                    <div key={index} className={styles.Projects_card} onClick={() => showImage(index)}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        {project.public &&
                            <Button href={project.link} icon={faGithub} name="Github" index={index} />
                        }
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
