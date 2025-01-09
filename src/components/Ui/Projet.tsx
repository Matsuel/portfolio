import Image from 'next/image';
import React from 'react'
import Button from './Button';
import CustomLink from './CustomLink';

interface ProjetProps {
    title: string;
    description: string;
    link: string;
    github: string;
    technologies: string[];
    icon: string;
}

const Projet = ({
    title,
    description,
    link,
    github,
    technologies,
    icon
}: ProjetProps) => {
    return (
        <div className='w-[40%] h-auto flex flex-col gap-4 text-text border border-border rounded-xl p-5'>

            <div className='w-auto flex flex-row gap-2 items-center justify-start'>
                <Image src={icon} width={40} height={40} alt={title} className='w-10 h-auto' />

                <h3 className='text-3xl font-bold'>
                    {title}
                </h3>
            </div>

            <p className='text-lg'>
                {description}
            </p>

            <div className='flex flex-row gap-4'>
                <CustomLink href={github} variant='secondary'>
                    Github
                </CustomLink>
                <CustomLink href={link} variant='primary'>
                    Version en ligne
                </CustomLink>
            </div>

        </div>
    )
}

export default Projet