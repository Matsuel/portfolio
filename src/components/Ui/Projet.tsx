import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import Git from '@/assets/Git';

interface ProjetProps {
    index: number;
    active: number;
    title: string;
    description: string;
    github: string;
    link: string;
    icon: string;
    projectsLength: number;
}

const Projet = ({
    index,
    active,
    title,
    description,
    github,
    link,
    icon,
    projectsLength
}: ProjetProps) => {

    const isActive = index === active;
    const isNext = (index === (active + 1) % projectsLength);

    return (
        <motion.div
            key={title}
            className="absolute flex flex-col items-start justify-start gap-6 rounded-lg bg-tertiary p-8"
            initial={{ opacity: 0, scale: 0.8, x: "100%" }}
            animate={{
                zIndex: isActive ? 2 : 1,
                opacity: isActive || isNext ? 1 : 0,
                x: isActive ? "0%" : isNext ? "120%" : "-100%",
                scale: isActive ? 1 : 0.85,
                width: isActive ? "35%" : "30%",
                height: isActive ? "90%" : "80%",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className='w-auto h-auto flex flex-row items-center gap-4'>
                <Link href={link} target='_blank' className='w-10 h-10 flex items-center justify-center rounded-full'>
                    <Image src={icon} alt={title} width={40} height={40} />
                </Link>
                <Link href={github} target='_blank'>
                    <Git size={30} />
                </Link>
            </div>
            <h4 className="text-2xl font-medium text-coloreven">{title}</h4>
            <p className="text-lg font-normal text-coloreven">{description}</p>
        </motion.div>
    )
}

export default Projet